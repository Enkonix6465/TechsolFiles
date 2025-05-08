from django.shortcuts import render

# Create your views here.
def industries(request):
    return render(request, 'industries/Industries.html')

def aero(request):
    return render(request, 'industries/aerospace.html')

def auto(request):
    return render(request, 'industries/automotive.html')

def bank(request):
    return render(request, 'industries/banking.html')

def education(request):
    return render(request, 'industries/education.html')

def health(request):
    return render(request, 'industries/healthcare.html')

def manufact(request):
    return render(request, 'industries/manufacturing.html')

def retail(request):
    return render(request, 'industries/retail.html')

def tele(request):
    return render(request, 'industries/telecom.html')