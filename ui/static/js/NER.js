function nerToggle(){
    var packagesOption = document.getElementById("ner_algorithm"); 
    var tagsOption = document.getElementById("ner_tags");
    var buttonSel = document.getElementById("button_id");
    var resetID = document.getElementById("reset_id");
    if(packagesOption.value === "Stanford CoreNLP"){
        tagsOption.disabled = false;
        buttonSel.disabled = false;
        resetID.disabled = false;
    }
    else{
        tagsOption.disabled = true;
        buttonSel.disabled = true;
        resetID.disabled = true;
    }
}
document.getElementById("ner_algorithm").addEventListener("change", nerToggle);
nerToggle();