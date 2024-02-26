from django.http import HttpRequest, HttpResponse
from django.template import loader


def index(_: HttpRequest):
    template = loader.get_template('../templates/index.html')
    return HttpResponse(template.render())
