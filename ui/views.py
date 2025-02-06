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


def SVO(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/SVO",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, "SVO.html")


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

def NGrams_CoOccurrences(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/NGrams_CoOccurrences",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, 'NGrams_CoOccurrences.html')

def coNLL_table_analyzer_main(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/CoNLL_table_analyzer_main",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, 'CoNLL_table_analyzer_main.html')

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

def wordclouds(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/wordclouds",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, "wordclouds.html")

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

def sunburst_charts(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/sunburst_charts",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, "sunburst_charts.html")

def sankey_flowchart(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/sankey_flowchart",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, "sankey_flowchart.html")

def boxplot(_: HttpRequest):
    template = loader.get_template("../templates/boxplot.html")
    return HttpResponse(template.render())

def colormap_chart(request: HttpRequest):
    if request.method == "POST":
        response = requests.post(
            f"{AGENT_SERVER_URL}/colormap_chart",
            data=request.body,
            headers=request.headers,
        )
        if response.ok:
            return HttpResponseRedirect("/status")
        else:
            messages.add_message(request, messages.ERROR, response.content.decode())
    return render(request, "colormap_chart.html")

def excel_plotly_chars(_: HttpRequest):
    template = loader.get_template("../templates/excel_plotly_charts.html")
    return HttpResponse(template.render())