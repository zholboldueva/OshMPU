from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets
from rest_framework.generics import  RetrieveUpdateDestroyAPIView
from django.http import JsonResponse
from .models import News, Page,Faculty, Department, Administration, Professor, Student
from .serializers import PageSerializer, NewsSerializer, FacultySerializer,DepartmentSerializer, AdministrationSerializer,ProfessorSerializer,StudentSerializer

class StudentList(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentDetail(RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class ProfessorList(viewsets.ModelViewSet):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class ProfessorDetail(RetrieveUpdateDestroyAPIView):
    queryset = Professor.objects.all()
    serializer_class = ProfessorSerializer

class AdministrationList(viewsets.ModelViewSet):
    queryset = Administration.objects.all()
    serializer_class = AdministrationSerializer

class AdministrationDetail(RetrieveUpdateDestroyAPIView):
    queryset = Administration.objects.all()
    serializer_class = AdministrationSerializer

class DepartmentList(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentDetail(RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class FacultyList(viewsets.ModelViewSet):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyDetail(RetrieveUpdateDestroyAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class PageList(viewsets.ModelViewSet):
    queryset = Page.objects.all()
    serializer_class = PageSerializer

class PageDetail(RetrieveUpdateDestroyAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializer

class NewsList(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class NewsDetail(RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class FacultyList(viewsets.ModelViewSet):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyDetail(RetrieveUpdateDestroyAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
"""
def student_list(request):
    students = Student.objects.all()
    return render(request, 'student_list.html', {'students': students})

def student_detail(request, pk):
    student = get_object_or_404(Student, pk=pk)
    return render(request, 'student_detail.html', {'student': student})

def professor_list(request):
    professors = Professor.objects.all()
    return render(request, 'professor_list.html', {'professors': professors})

def professor_detail(request, pk):
    professor = get_object_or_404(Professor, pk=pk)
    return render(request, 'professor_detail.html', {'professor': professor})

def administration_list(request):
    administrations = Administration.objects.all()
    return render(request, 'administration_list.html', {'administrations': administrations})

def administration_detail(request, pk):
    administration = get_object_or_404(Administration, pk=pk)
    return render(request, 'administration_detail.html', {'administration': administration})

def department_list(request):
    departments = Department.objects.all()
    return render(request, 'department_list.html', {'departments': departments})

def department_detail(request, pk):
    department = get_object_or_404(Department, pk=pk)
    return render(request, 'department_detail.html', {'department': department})

def faculty_list(request):
    faculties = Faculty.objects.all()
    return render(request, 'faculty_list.html', {'faculties': faculties})

def faculty_detail(request, pk):
    faculty = get_object_or_404(Faculty, pk=pk)
    return render(request, 'faculty_detail.html', {'faculty': faculty})

def news_list(request):
    news_items = News.objects.all()
    return render(request, 'news_list.html', {'news_items': news_items})

def news_detail(request, pk):
    news_item = get_object_or_404(News, pk=pk)
    return render(request, 'news_detail.html', {'news_item': news_item})

def page_list(request):
    pages = Page.objects.all()
    return render(request, 'page_list.html', {'pages': pages})

def page_detail(request, pk):
    page = get_object_or_404(Page, pk=pk)
    return render(request, 'page_detail.html', {'page': page})
    """



