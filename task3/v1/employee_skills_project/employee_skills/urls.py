from django.urls import path
from . import views

urlpatterns = [
    path('', views.employee_list, name='employee_list'),
    path('add_employee/', views.add_employee, name='add_employee'),
    # Define URL patterns for editing, deleting employees and skills
    path('search/', views.search_employees, name='search_employees'),
]
