from rest_framework import serializers
from heroes.models import Heroi

class HeroiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Heroi
        fields = ('id', 'nome', 'classe', 'alocado')