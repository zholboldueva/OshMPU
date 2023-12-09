# university_app/admin.py
from django.contrib import admin
from .models import Page, Student, Professor, Administration, Department, Faculty, News

admin.site.register(Page)
admin.site.register(Student)
admin.site.register(Professor)
admin.site.register(Administration)
admin.site.register(Department)
admin.site.register(Faculty)
admin.site.register(News)
