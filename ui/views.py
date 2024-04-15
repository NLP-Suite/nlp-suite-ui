import os

import requests
from django.contrib import messages
from django.http import (
    HttpRequest,
    HttpResponse,
    HttpResponseBadRequest,
    HttpResponseRedirect,
)
from django.shortcuts import render
from django.template import loader

AGENT_SERVER_URL = os.getenv("AGENT_SERVER_URL", "http://172.16.0.11:3000")


def index(_: HttpRequest):
    template = loader.get_template("../templates/index.html")
    return HttpResponse(template.render())


def home(_: HttpRequest):
    template = loader.get_template("../templates/home.html")
    return HttpResponse(template.render())


def install(_: HttpRequest):
    template = loader.get_template("../templates/install.html")
    return HttpResponse(template.render())


def contact(_: HttpRequest):
    template = loader.get_template("../templates/contact.html")
    return HttpResponse(template.render())


def status(_: HttpRequest):
    template = loader.get_template("../templates/status.html")
    return HttpResponse(template.render())


def sentiment_analysis(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/sentiment_analysis",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, "sentiment_analysis.html")


def set_up(_: HttpRequest):
    template = loader.get_template("../templates/set_up.html")
    return HttpResponse(template.render())


def all_options_gui(_: HttpRequest):
    template = loader.get_template("../templates/all_options_gui.html")
    return HttpResponse(template.render())


def SOV(_: HttpRequest):
    template = loader.get_template("../templates/SOV.html")
    return HttpResponse(template.render())


def shape_of_stories(_: HttpRequest):
    template = loader.get_template("../templates/shape_of_stories.html")
    return HttpResponse(template.render())


def style_analysis(_: HttpRequest):
    template = loader.get_template("../templates/style_analysis.html")
    return HttpResponse(template.render())


def topic_modeling(_: HttpRequest):
    template = loader.get_template("../templates/topic_modeling.html")
    return HttpResponse(template.render())


def nGram_CoOccurrences(_: HttpRequest):
    template = loader.get_template("../templates/N-Grams_CoOccurrences.html")
    return HttpResponse(template.render())


def parsers_annotator(_: HttpRequest):
    template = loader.get_template("../templates/parsers_annotator.html")
    return HttpResponse(template.render())

def wordclouds(_: HttpRequest):
    template = loader.get_template("../templates/wordclouds.html")
    return HttpResponse(template.render())
