from .models import Product
from .serializers import ProductSerializer

from django.http import Http404

from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django_filters import rest_framework as filters


class NumberInFilter(filters.BaseInFilter, filters.NumberFilter):
    pass


class ProductFilter(filters.FilterSet):
    id_in = NumberInFilter(
        field_name='id', lookup_expr='in')

    class Meta:
        model = Product
        fields = ['id_in']


class ProductList(generics.ListCreateAPIView):
    """
    View all products.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = ProductFilter


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Returns a single Product and allows updates and deletion of a Product.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'
