from django.urls import path
from .views import ProductosView

urlpatterns = [
    path('productos/', ProductosView.as_view(), name='obtener_productos'),
    path('productos/<int:id>', ProductosView.as_view(), name='obtener_producto_por_id'),
]