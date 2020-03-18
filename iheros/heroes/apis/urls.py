from rest_framework import routers

from .views import HeroViewSet

router = routers.DefaultRouter()
router.register('heroes', HeroViewSet, 'heroes')

urlpatterns = router.urls