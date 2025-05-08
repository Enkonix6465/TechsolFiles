from django.shortcuts import render

# Create your views here.
def services(request):
    return render(request, 'services/services.html')

def appdev(request):
    return render(request, 'services/Application_Development.html')

def cloud(request):
    return render(request, 'services/Cloud.html')

def cogop(request):
    return render(request, 'services/Cognitive_Operations.html')

def data(request):
    return render(request, 'services/Data_Analytics.html')

def itadvise(request):
    return render(request, 'services/IT_Advisory.html')

def net(request):
    return render(request, 'services/Network_Solutions.html')

def soft(request):
    return render(request, 'services/Software_Training.html')
