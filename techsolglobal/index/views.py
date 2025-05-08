from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index/index.html')

def mission(request):
    return render(request, 'index/mission.html')

def vision(request):
    return render(request, 'index/vision.html')

def values(request):
    return render(request, 'index/values.html')