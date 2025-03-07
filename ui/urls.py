"""
URL configuration for nlp-suite-ui project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home', views.home, name='home'),
    path('install', views.install, name='install'),
    path('contact', views.contact, name='contact'),
    path('status', views.status, name="status"),
    path('sentiment_analysis', views.sentiment_analysis, name='sentiment_analysis'),
    path('SVO', views.SVO, name='SVO'),
    path('shape_of_stories', views.shape_of_stories, name='shape_of_stories'),
    path('style_analysis', views.style_analysis, name='style_analysis'),
    path('topic_modeling', views.topic_modeling, name='topic_modeling'),
    path('NGrams_CoOccurrences', views.NGrams_CoOccurrences, name='NGrams_CoOccurrences'),
    path('CoNLL_table_analyzer_main', views.coNLL_table_analyzer_main, name='CoNLL_table_analyzer_main'),
    path('parsers_annotators', views.parsers_annotators, name='parsers_annotators'),
    path('wordclouds', views.wordclouds, name='wordclouds'),
    path('word2vec', views.word2vec, name='word2vec'),
    path('wordnet', views.wordnet, name='wordnet'),
    path('filesearchword', views.filesearchword, name='filesearchword'),
    path('visual1', views.visual1, name='visual1'),
    path('visual2', views.visual2, name='visual2'),
    path('gis', views.gis, name='gis'),
    path('gender_analysis', views.genderanalysis, name='gender_analysis'),
    path('NER', views.NER, name="NER"),
    path('sunburst_charts', views.sunburst_charts, name="sunburst_charts"),
    path('sankey_flowchart', views.sankey_flowchart, name="sankey_flowchart"),
    path('boxplot', views.boxplot, name="boxplot"),
    path('colormap_chart', views.colormap_chart, name="colormap_chart"),
    path('excel_plotly_charts', views.excel_plotly_chars, name="excel_plotly_charts")

]

