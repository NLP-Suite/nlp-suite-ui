function coreNlpGenAnnotateCheckbox() {
    var coreNlpGenAnnotateCheckbox = document.getElementById("CoreNLP_gender_annotator_var");
    var annotatorDictCheckbox = document.getElementById("annotator_dictionary_var");
    var processNameUSCheckbox = document.getElementById("plot_var");

    if(coreNlpGenAnnotateCheckbox.checked) {
        annotatorDictCheckbox.disabled = true;
        processNameUSCheckbox.disabled = true;
    } else {
        annotatorDictCheckbox.disabled = false;
        processNameUSCheckbox.disabled = false;
    }
} 

function annotateGenderCheckbox() {
    var coreNlpGenAnnotateCheckbox = document.getElementById("CoreNLP_gender_annotator_var");
    var annotatorDictCheckbox = document.getElementById("annotator_dictionary_var");
    var processNameUSCheckbox = document.getElementById("plot_var");
    var selectDicFile = document.getElementById("select-dic-file");
    var selectCsvFile = document.getElementById("select-csv-file");
    var byUsStateDropdown = document.getElementById("year_state_var");
    var enterNameTextbox = document.getElementById("firstName_entry_var");


    if(annotatorDictCheckbox.checked) {
        processNameUSCheckbox.disabled = true;
        coreNlpGenAnnotateCheckbox.disabled = true;
        byUsStateDropdown.disabled = true;
        enterNameTextbox.disabled = true;
        selectDicFile.disabled = false;
        selectCsvFile.disabled = false;
    } else {
        coreNlpGenAnnotateCheckbox.disabled = false;
        processNameUSCheckbox.disabled = false;
        byUsStateDropdown.disabled = false;
        enterNameTextbox.disabled = false;
        selectDicFile.disabled = true;
        selectCsvFile.disabled = true;
    }
} 

function processNamesUsCheckbox() {
    var coreNlpGenAnnotateCheckbox = document.getElementById("CoreNLP_gender_annotator_var");
    var annotatorDictCheckbox = document.getElementById("annotator_dictionary_var");
    var processNameUSCheckbox = document.getElementById("plot_var");
    var byUsStateDropdown = document.getElementById("year_state_var");
    var enterNameTextbox = document.getElementById("firstName_entry_var");

    if(processNameUSCheckbox.checked) {
        coreNlpGenAnnotateCheckbox.disabled = true;
        annotatorDictCheckbox.disabled = true;
        byUsStateDropdown.disabled = false;
        enterNameTextbox.disabled = false;
    } else {
        coreNlpGenAnnotateCheckbox.disabled = false;
        annotatorDictCheckbox.disabled = false;
        byUsStateDropdown.disabled = true;
        enterNameTextbox.disabled = true;
    }
} 

document.getElementById("CoreNLP_gender_annotator_var").addEventListener("change", coreNlpGenAnnotateCheckbox);
document.getElementById("annotator_dictionary_var").addEventListener("change", annotateGenderCheckbox);
document.getElementById("plot_var").addEventListener("change", processNamesUsCheckbox);