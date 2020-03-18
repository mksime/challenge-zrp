from django.db import models

# Create your models here.
class Heroi(models.Model):
    nome = models.CharField(max_length=255)
    classe = models.CharField(max_length=1)
    alocado = models.BooleanField(default=False)

    def __str__(self):
        return self.nome