from django.urls import path

from .views import NoteListCreateView,NoteUpdateDeleteView

urlpatterns=[
    path('',NoteListCreateView.as_view() ),
    path('<int:pk>/',NoteUpdateDeleteView.as_view() ),
]