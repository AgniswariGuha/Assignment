from django.shortcuts import render, redirect
from .models import Employee, Skill
from .forms import EmployeeForm, SkillForm

def employee_list(request):
    employees = Employee.objects.all()
    return render(request, 'employee_list.html', {'employees': employees})

def add_employee(request):
    if request.method == 'POST':
        form = EmployeeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('employee_list')
    else:
        form = EmployeeForm()
    return render(request, 'add_employee.html', {'form': form})

# Similar views for editing and deleting employees and skills

def search_employees(request):
    skills = request.GET.getlist('skills')
    employees = Employee.objects.filter(skills__name__in=skills).distinct().annotate(num_skills=models.Count('skills')).order_by('-num_skills')
    return render(request, 'search_results.html', {'employees': employees})
