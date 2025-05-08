from django.shortcuts import render,redirect
from .models import Job, Application

# Create your views here.
def career(request):
    jobs = Job.objects.all()
    return render(request, 'careers/Careers.html', {'jobs': jobs})

def apply(request):
    if request.method == 'POST':
        fullname = request.POST.get('fullname')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        role = request.POST.get('role')
        resume_link = request.POST.get('resume')
        linkedin_link = request.POST.get('linkedin')

        Application.objects.create(
            fullname=fullname,
            email=email,
            phone=phone,
            role=role,
            resume_link=resume_link,
            linkedin_link=linkedin_link,
        )
        return render(request, 'careers/apply', {'success': True})
    role = request.GET.get('role', '')
    return render(request, 'careers/apply.html', {'role': role})
