from django.db import models

class Page(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()

class News(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    date_published = models.DateTimeField(auto_now_add=True)

class Faculty(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

class Department(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    
    

class Administration(models.Model):
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    contact_email = models.EmailField(default='')
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

class Professor(models.Model):
    name = models.CharField(max_length=255)
    bio = models.TextField()
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

class Student(models.Model):
    name = models.CharField(max_length=255)
    roll_number = models.CharField(max_length=20, unique=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    # Add other student-related fields as needed


 