from django.shortcuts import render
from django.views import View
from django.http.response import JsonResponse 
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from .models import Productos

import json
# Create your views here.

class ProductosView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=None):
        if id and id > 0:
            productos = list(Productos.objects.filter(id=id).values())
            if len(productos) > 0:
                producto = productos[0]
                datos = {'message': 'Success', 'producto': producto}
            else:
                datos = {'message': 'Producto no encontrado'}
            return JsonResponse(datos)
        else:
            productos = list(Productos.objects.values())
            if len(productos) > 0:
                datos = {'message': 'Success', 'productos': productos}
            else:
                datos = {'message': 'Productos no encontrados'}

            return JsonResponse(datos)

    def post(self, request):
        jd = json.loads(request.body)
        Productos.objects.create(
            nombre=jd['nombre'],
            descripcion=jd['descripcion'],
            precio=jd['precio'],
            cantidad_disponible=jd['cantidad_disponible']
        )
        datos = {'message': 'Success'}
        return JsonResponse(datos)

    def put(self, request, id=None):

        jd = json.loads(request.body)
        productos = list(Productos.objects.values())
        if len(productos) > 0:
            producto = Productos.objects.get(id=id)
            producto.nombre = jd['nombre']
            producto.descripcion = jd['descripcion']
            producto.precio = jd['precio']
            producto.cantidad_disponible = jd['cantidad_disponible']
            producto.save()
            datos = {'message': 'Success'}
        else:
            datos = {'message': 'Error al actualizar el producto'}
        return JsonResponse(datos)

    def delete(self, request, id=None):
        productos = list(Productos.objects.filter(id=id).values())
        if len(productos) > 0:
            Productos.objects.filter(id=id).delete()
            datos = {'message': 'Success'}
        else:
            datos = {'message': 'Error al eliminar el producto NO EXISTE'}
        return JsonResponse(datos)