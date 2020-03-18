from heroes.models import Heroi
from .serializers import HeroiSerializer
from rest_framework import viewsets

class HeroViewSet(viewsets.ModelViewSet):
    queryset = Heroi.objects.all()
    serializer_class = HeroiSerializer