from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='Inicio'),
    path('create/', create_transaction, name='create_transaction'),
    path('commit/', commit_transaction, name='commit_transaction'),
    path('card_token/', card_token, name='card_token'),
]