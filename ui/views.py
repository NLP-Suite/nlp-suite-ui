from django.http import HttpRequest, HttpResponse
from django.template import loader


def index(_: HttpRequest):
    template = loader.get_template('../templates/index.html')
    return HttpResponse(template.render())


def contact(_: HttpRequest):
    template = loader.get_template('../templates/contact.html')
    return HttpResponse(template.render())

def home(_: HttpRequest):
    template = loader.get_template('../templates/home.html')
    return HttpResponse(template.render())

def install(_: HttpRequest):
    template = loader.get_template('../templates/install.html')
    return HttpResponse(template.render())

def g_n1(_: HttpRequest):
    template = loader.get_template('../templates/g_n1.html')
    return HttpResponse(template.render())

def g_n2(_: HttpRequest):
    template = loader.get_template('../templates/g_n2.html')
    return HttpResponse(template.render())

def g_n3(_: HttpRequest):
    template = loader.get_template('../templates/g_n3.html')
    return HttpResponse(template.render())