from django.urls import path
from .views import index, HeroDetailView

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', HeroDetailView.as_view()),
    path('delete/<int:pk>', HeroDetailView.as_view()),
]