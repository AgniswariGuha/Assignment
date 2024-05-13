from django import forms
from .models import Employee, Skill

class EmployeeForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = ['name', 'skills']

class SkillForm(forms.ModelForm):
    class Meta:
        model = Skill
        fields = ['name']
