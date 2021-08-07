import json

from channels.generic.websocket import WebsocketConsumer

from asgiref.sync import async_to_async

from api.models import Note


class NoteConsumer(WebsocketConsumer):

    def connect(self):
        pass

    def disconnect(self, reason):
        pass

    def receive(self,text_data):
        pass