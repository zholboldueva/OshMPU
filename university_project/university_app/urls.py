# university_app/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PageList, PageDetail, NewsList, NewsDetail, FacultyList, FacultyDetail, DepartmentDetail, DepartmentList,AdministrationDetail, AdministrationList,ProfessorDetail, ProfessorList, StudentDetail, StudentList

router = DefaultRouter()
router.register(r'pages', PageList, basename='page')
router.register(r'news', NewsList, basename='news')
router.register(r'faculty', FacultyList, basename='faculty')
router.register(r'departments', DepartmentList, basename='department')
router.register(r'administration', AdministrationList, basename='administration')
router.register(r'professors', ProfessorList, basename='professor')
router.register(r'students', StudentList, basename='student')
urlpatterns = [
    path('', include(router.urls)),
    path('pages/<int:pk>/', PageDetail.as_view(), name='page-detail'),
    path('news/<int:pk>/', NewsDetail.as_view(), name='news-detail'),
    path('faculty/<int:pk>/', FacultyDetail.as_view(), name='faculty-detail'),
    path('departments/<int:pk>/', DepartmentDetail.as_view(), name='department-detail'),
    path('administration/<int:pk>/', AdministrationDetail.as_view(), name='administration-detail'),
    path('professors/<int:pk>/', ProfessorDetail.as_view(), name='professor-detail'),
    path('students/<int:pk>/', StudentDetail.as_view(), name='student-detail'),
    
    # Add more URL patterns as needed
]
