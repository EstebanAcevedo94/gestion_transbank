from transbank.webpay.webpay_plus.transaction import Transaction, WebpayOptions
from transbank.common.integration_type import IntegrationType

from gestion_transbank.config import *

def get_webpay_transaction():
    return Transaction(WebpayOptions(
        commerce_code=TBK_API_KEY_ID,
        api_key=TBK_API_KEY_SECRET,
        integration_type=IntegrationType.TEST
    ))