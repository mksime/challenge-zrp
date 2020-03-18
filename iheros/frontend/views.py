from django.shortcuts import render

from django.views.generic.detail import DetailView
from heroes.models import Heroi

# Create your views here.
def index(request):
    return render(request, 'frontend/index.html')

class HeroDetailView(DetailView):
    model = Heroi
    template_name = 'frontend/index.html'