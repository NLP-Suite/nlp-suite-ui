import requests

from django.http import HttpRequest, HttpResponse, HttpResponseRedirect, HttpResponseBadRequest
from django.template import loader
from django.shortcuts import render
from django.contrib import messages

def index(_: HttpRequest):
    template = loader.get_template('../templates/index.html')
    return HttpResponse(template.render())

def home(_: HttpRequest):
    template = loader.get_template('../templates/home.html')
    return HttpResponse(template.render())

def install(_: HttpRequest):
    template = loader.get_template('../templates/install.html')
    return HttpResponse(template.render())

def contact(_: HttpRequest):
    template = loader.get_template('../templates/contact.html')
    return HttpResponse(template.render())

def status(_: HttpRequest):
    template = loader.get_template('../templates/status.html')
    return HttpResponse(template.render())

def sentiment_analysis(request: HttpRequest):
    if request.method == "POST":
        response = requests.post("http://localhost:3000/sentiment_analysis", data=request.body, headers=request.headers)
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, 'sentiment_analysis.html')

def set_up(_: HttpRequest):
    template = loader.get_template('../templates/set_up.html')
    return HttpResponse(template.render())

def all_options_gui(_: HttpRequest):
    template = loader.get_template('../templates/all_options_gui.html')
    return HttpResponse(template.render())

def SOV(_: HttpRequest):
    template = loader.get_template('../templates/SOV.html')
    return HttpResponse(template.render())