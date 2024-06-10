from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from .transbank_config import get_webpay_transaction
from django.views.decorators.csrf import csrf_exempt
import mercadopago
from django.conf import settings


def home(request):
    return render(request, 'home.html')
def card_token(request):
    return render(request, 'card_token.html')
#TransBank
def create_transaction(request):
    if request.method == "POST":
        buy_order = "orden1234"
        session_id = "session1234"
        amount = 10000  # Monto de la transacción
        return_url = request.build_absolute_uri('/commit/')

        tx = get_webpay_transaction()
        response = tx.create(buy_order, session_id, amount, return_url)

        return render(request, 'redirect_to_webpay.html', {
            'url': response['url'],
            'token': response['token']
        })
    return render(request, 'create_transaction.html')
@csrf_exempt
def commit_transaction(request):
    if request.method == 'POST':
        token = request.POST.get('token_ws')
        tx = get_webpay_transaction()
        response = tx.commit(token)

        if response['status'] == 'AUTHORIZED':
            context = {
                'status': response['status'],
                'amount': response['amount'],
                'buy_order': response['buy_order'],
                'authorization_code': response['authorization_code']
            }
            print(context)
            return render(request, 'payment_success.html', context)
        else:
            context = {
                'status': response['status'],
                'error_message': 'There was an error processing your payment.'
            }
            print(context)
            return render(request, 'payment_error.html', context)
    return render(request, 'payment_error.html', {'error_message': 'Invalid request method.'})

#MercadoPago
def process_payment(request):
    if request.method == 'POST':
        # Obtiene el token de tarjeta del cuerpo de la solicitud JSON
        card_token = request.POST.get('card_token')

        # Verifica si el token de tarjeta se proporcionó correctamente
        if card_token:
            # Continúa con el proceso de pago utilizando el token de tarjeta
            # Aquí debes implementar la lógica para procesar el pago con el token de tarjeta
            return JsonResponse({"message": "Payment processed successfully"})
        else:
            return JsonResponse({"error": "Card Token not found"}, status=400)
    else:
        return JsonResponse({"error": "Method not allowed"}, status=405)
def checkout(request):
    sdk = mercadopago.SDK(access_token=settings.MERCADOPAGO_ACCESS_TOKEN)

    # Datos del pago
    payment_data = {
        "transaction_amount": 100,
        "token": "CARD_TOKEN",
        "description": "Descripción del pago",
        "payment_method_id": 'visa',
        "installments": 1,
        "payer": {
            "email": 'correo_ejemplo@test.com'
        }
    }

    # Crea el pago
    result = sdk.payment().create(payment_data)
    payment = result["response"]

    # Procesa la respuesta del pago
    # Aquí puedes realizar acciones según el resultado del pago

    return HttpResponse("Pago procesado correctamente")
def pago_exitoso(request):
    # Lógica para pago exitoso
    return render(request, 'pago_exitoso.html')
def pago_cancelado(request):
    # Lógica para pago cancelado
    return render(request, 'pago_cancelado.html')
def pago_pendiente(request):
    # Lógica para pago pendiente
    return render(request, 'pago_pendiente.html')
