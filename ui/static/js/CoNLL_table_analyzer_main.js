function guiCheckBox() {
    var guiCheckBox = document.getElementById("guis_avail");

    var guiOptions = document.getElementById("gui-options"); 
    var functionWordCheckBox = document.getElementById("clause_noun_verb_function");
    var wordnetCheckBox = document.getElementById("wordnet-classification-noun-verb"); 
    var searchWordCheckBox = document.getElementById("search_token_word_checkbox");
    var repfinderCheckBox = document.getElementById("repetition_finder"); 
    var sentComputeTabCheckBox = document.getElementById("compute_sentence_table"); 
    
    if(guiCheckBox.checked) {
        guiOptions.disabled = false;
        functionWordCheckBox.disabled = true;
        wordnetCheckBox.disabled = true;
        searchWordCheckBox.disabled = true;
        repfinderCheckBox.disabled = true;
        sentComputeTabCheckBox.disabled = true;
    } else {
        guiOptions.disabled = true;
        functionWordCheckBox.disabled = false;
        wordnetCheckBox.disabled = false;
        searchWordCheckBox.disabled = false;
        repfinderCheckBox.disabled = false;
        sentComputeTabCheckBox.disabled = false;
    }
}

function functionWordCheckBox() {
    var functionWordCheckBox = document.getElementById("clause_noun_verb_function");
    
    var functionWordOptions = document.getElementById("clause_noun_verb_function_options");
    var guiCheckBox = document.getElementById("guis_avail");
    var wordnetCheckBox = document.getElementById("wordnet-classification-noun-verb"); 
    var searchWordCheckBox = document.getElementById("search_token_word_checkbox");
    var repfinderCheckBox = document.getElementById("repetition_finder"); 
    var sentComputeTabCheckBox = document.getElementById("compute_sentence_table"); 

    if(functionWordCheckBox.checked) {
        functionWordOptions.disabled = false;
        guiCheckBox.disabled = true;
        wordnetCheckBox.disabled = true;
        searchWordCheckBox.disabled = true;
        repfinderCheckBox.disabled = true;
        sentComputeTabCheckBox.disabled = true;
    } else {
        functionWordOptions.disabled = true;
        guiCheckBox.disabled = false;
        wordnetCheckBox.disabled = false;
        searchWordCheckBox.disabled = false;
        repfinderCheckBox.disabled = false;
        sentComputeTabCheckBox.disabled = false;
    } 
} 

function wordnetCheckBox() {
    var wordnetCheckBox = document.getElementById("wordnet-classification-noun-verb"); 

    var guiCheckBox = document.getElementById("guis_avail");
    var functionWordCheckBox = document.getElementById("clause_noun_verb_function");
    var searchWordCheckBox = document.getElementById("search_token_word_checkbox");
    var repfinderCheckBox = document.getElementById("repetition_finder"); 
    var sentComputeTabCheckBox = document.getElementById("compute_sentence_table"); 

    if(wordnetCheckBox.checked) {
        guiCheckBox.disabled = true;
        functionWordCheckBox.disabled = true;
        searchWordCheckBox.disabled = true;
        repfinderCheckBox.disabled = true;
        sentComputeTabCheckBox.disabled = true;
    } else {
        guiCheckBox.disabled = false;
        functionWordCheckBox.disabled = false;
        searchWordCheckBox.disabled = false;
        repfinderCheckBox.disabled = false;
        sentComputeTabCheckBox.disabled = false;
    }
}

function searchWordCheckBox() {
    var searchWordCheckBox = document.getElementById("search_token_word_checkbox");

    var searchWordText = document.getElementById("search-token-word-text");
    var guiCheckBox = document.getElementById("guis_avail");
    var conllSearchField = document.getElementById("conll_search_field");
    var wordnetCheckBox = document.getElementById("wordnet-classification-noun-verb"); 
    var functionWordCheckBox = document.getElementById("clause_noun_verb_function");
    var repfinderCheckBox = document.getElementById("repetition_finder"); 
    var sentComputeTabCheckBox = document.getElementById("compute_sentence_table"); 
    var postagOptions = document.getElementById("postag");
    var deprelOptions = document.getElementById("deprel");
    var postagBOptions = document.getElementById("postag_b");
    var deprelBOptions = document.getElementById("deprel_b");

    if(searchWordCheckBox.checked) { 
        searchWordText.disabled = false;
        conllSearchField.disabled = false;
        guiCheckBox.disabled = true;
        functionWordCheckBox.disabled = true;
        wordnetCheckBox.disabled = true;
        repfinderCheckBox.disabled = true;
        sentComputeTabCheckBox.disabled = true;
        postagOptions.disabled = false;
        deprelOptions.disabled =  false;
        postagBOptions.disabled = false;
        deprelBOptions.disabled = false;
    } else {
        searchWordText.disabled = true;
        conllSearchField.disabled = true;
        postagOptions.disabled = true;
        deprelOptions.disabled =  true;
        postagBOptions.disabled = true;
        deprelBOptions.disabled = true;
        guiCheckBox.disabled = false;
        functionWordCheckBox.disabled = false;
        wordnetCheckBox.disabled = false;
        repfinderCheckBox.disabled = false;
        sentComputeTabCheckBox.disabled = false;
    }
} 

function beginEndKSentenceCheckBox() {
    var repfinderCheckBox = document.getElementById("repetition_finder"); 
    var beginKsentencesNum = document.getElementById("begin-k-sentences");
    var endKsentencesNum = document.getElementById("end-k-sentences");

    var guiCheckBox = document.getElementById("guis_avail");
    var functionWordCheckBox = document.getElementById("clause_noun_verb_function");
    var wordnetCheckBox = document.getElementById("wordnet-classification-noun-verb"); 
    var searchWordCheckBox = document.getElementById("search_token_word_checkbox");
    var sentComputeTabCheckBox = document.getElementById("compute_sentence_table"); 

    if(repfinderCheckBox.checked) {
        beginKsentencesNum.disabled = false;
        endKsentencesNum.disabled = false;

        guiCheckBox.disabled = true;
        functionWordCheckBox.disabled = true;
        wordnetCheckBox.disabled = true;
        searchWordCheckBox.disabled = true;
        sentComputeTabCheckBox.disabled = true;
    } else {
        beginKsentencesNum.disabled = true;
        endKsentencesNum.disabled = true;

        guiCheckBox.disabled = false;
        functionWordCheckBox.disabled = false;
        wordnetCheckBox.disabled = false;
        searchWordCheckBox.disabled = false;
        sentComputeTabCheckBox.disabled = false;
    }
} 

function sentComputeTabCheckBox() {
    var sentComputeTabCheckBox = document.getElementById("compute_sentence_table");
    
    var guiCheckBox = document.getElementById("guis_avail");
    var repfinderCheckBox = document.getElementById("repetition_finder"); 
    var functionWordCheckBox = document.getElementById("clause_noun_verb_function");
    var wordnetCheckBox = document.getElementById("wordnet-classification-noun-verb"); 
    var searchWordCheckBox = document.getElementById("search_token_word_checkbox");
    var repfinderCheckBox = document.getElementById("repetition_finder"); 
    var sentComputeTabCheckBox = document.getElementById("compute_sentence_table"); 
    
    if(sentComputeTabCheckBox.checked) {
        guiCheckBox.disabled = true;
        repfinderCheckBox.disabled = true;
        functionWordCheckBox.disabled = true;
        wordnetCheckBox.disabled = true;
        searchWordCheckBox.disabled = true;
    } else {
        guiCheckBox.disabled = false;
        repfinderCheckBox.disabled = false;
        functionWordCheckBox.disabled = false;
        wordnetCheckBox.disabled = false;
        searchWordCheckBox.disabled = false;
    }

}

document.getElementById("guis_avail").addEventListener("change", guiCheckBox);
document.getElementById("clause_noun_verb_function").addEventListener("change", functionWordCheckBox);
document.getElementById("wordnet-classification-noun-verb").addEventListener("change", wordnetCheckBox);
document.getElementById("search_token_word_checkbox").addEventListener("change", searchWordCheckBox);
document.getElementById("repetition_finder").addEventListener("change", beginEndKSentenceCheckBox);
document.getElementById("compute_sentence_table").addEventListener("change", sentComputeTabCheckBox);
