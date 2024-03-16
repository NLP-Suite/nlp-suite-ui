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

def g_n4(_: HttpRequest):
    template = loader.get_template('../templates/g_n4.html')
    return HttpResponse(template.render())

def g_n5(_: HttpRequest):
    template = loader.get_template('../templates/g_n5.html')
    return HttpResponse(template.render())

def g_n6(_: HttpRequest):
    template = loader.get_template('../templates/g_n6.html')
    return HttpResponse(template.render())

def g_n7(_: HttpRequest):
    template = loader.get_template('../templates/g_n7.html')
    return HttpResponse(template.render())

def g_n8(_: HttpRequest):
    template = loader.get_template('../templates/g_n8.html')
    return HttpResponse(template.render())

def g_n9(_: HttpRequest):
    template = loader.get_template('../templates/g_n9.html')
    return HttpResponse(template.render())

def g_n10(_: HttpRequest):
    template = loader.get_template('../templates/g_n10.html')
    return HttpResponse(template.render())

def g_n11(_: HttpRequest):
    template = loader.get_template('../templates/g_n11.html')
    return HttpResponse(template.render())

def g_n12(_: HttpRequest):
    template = loader.get_template('../templates/g_n12.html')
    return HttpResponse(template.render())

def set_up(_: HttpRequest):
    template = loader.get_template('../templates/set_up.html')
    return HttpResponse(template.render())

def all_options_gui(_: HttpRequest):
    template = loader.get_template('../templates/all_options_gui.html')
    return HttpResponse(template.render())