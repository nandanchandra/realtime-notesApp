from django.urls import path

from api.consumers import NoteConsumer


websocket_urlpatterns =[
    path('ws/notes',NoteConsumer.as_asgi()),
]