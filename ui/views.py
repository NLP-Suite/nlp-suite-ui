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
from django.http import FileResponse, Http404

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

def style_analysis(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/style_analysis",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, "style_analysis.html")

def topic_modeling(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/topic_modeling",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, "topic_modeling.html")

def nGram_CoOccurrences(_: HttpRequest):
    template = loader.get_template("../templates/N-Grams_CoOccurrences.html")
    return HttpResponse(template.render())

def coNLL_table_analyzer_main(_: HttpRequest):
    template = loader.get_template("../templates/CoNLL_table_analyzer_main.html")
    return HttpResponse(template.render())

def parsers_annotators(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/parsers_annotators",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, "parsers_annotators.html")

def wordclouds(_: HttpRequest):
    template = loader.get_template("../templates/wordclouds.html")
    return HttpResponse(template.render())

def word2vec(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/word2vec",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, "word2vec.html")

def wordnet(_: HttpRequest): 
    template = loader.get_template("../templates/wordnet.html")
    return HttpResponse(template.render())

def filesearchword(_: HttpRequest):
    template = loader.get_template("../templates/filesearchword.html")
    return HttpResponse(template.render())

def visual1(_: HttpRequest):
    template = loader.get_template("../templates/visual1.html")
    return HttpResponse(template.render())

def visual2(_: HttpRequest):
    template = loader.get_template("../templates/visual2.html")
    return HttpResponse(template.render())

def gis(_: HttpRequest):
    template = loader.get_template("../templates/gis.html")
    return HttpResponse(template.render())

def genderanalysis(_: HttpRequest): 
    template = loader.get_template("../templates/gender_analysis.html")
    return HttpResponse(template.render())

def NER(_: HttpRequest):
    template = loader.get_template("../templates/NER.html")
    return HttpResponse(template.render())

def sunburst_charts(_: HttpRequest):
    template = loader.get_template("../templates/sunburst_charts.html")
    return HttpResponse(template.render())
