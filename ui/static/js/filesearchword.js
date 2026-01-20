function listofitems() {
  var optionsSelect = document.getElementById("search_options");
  var pickedSelect = document.getElementById("optionss");
  var plusbutton = document.getElementsByName("search-options-+")[0];
  var resetbutton = document.getElementsByName("search-options-reset")[0];
  var minusbutton = document.getElementsByName("search-options-show")[0];

  if (optionsSelect && pickedSelect && plusbutton && resetbutton && minusbutton) {
    plusbutton.onclick = function () {
      var temp = optionsSelect.options[optionsSelect.selectedIndex];
      var opt = document.createElement("option");
      opt.value = temp.value;
      opt.text = temp.text;
      pickedSelect.add(opt);
    };

    minusbutton.onclick = function () {
      if (pickedSelect.selectedIndex >= 0) {
        pickedSelect.remove(pickedSelect.selectedIndex);
      }
    };

    resetbutton.onclick = function () {
      pickedSelect.length = 0;
    };
  }
}

listofitems();


var availableGUIs = document.getElementById("availableGUIs");
    var searchCorpusByDictionary = document.getElementById("searchCorpusByDictionary");
    var searchCorpusByWords = document.getElementById("searchCorpusByWords");
    var searchOptionSelected = document.getElementById("searchOptions");
    var userInput = document.getElementById("userInput");
    var minusK = document.getElementById("minusK");
    var plusK = document.getElementById("plusK");
    var fileName = document.getElementById("fileName");
    var selectDictionaryFile = document.getElementById("selectDictionaryFile");
    var extractKSentences = document.getElementById("extractKSentences");
    var coOccurringCommas = document.getElementById("coOccurringCommas");
    var subDirectory = document.getElementById("subDirectory");

    availableGUIs.addEventListener('change',function() {
        searchCorpusByDictionary.disabled = this.checked;
        searchCorpusByWords.disabled = this.checked;
        if(!this.checked){
            searchCorpusByDictionary.checked = false;
            searchCorpusByWords.checked = false;
        }
    });

    searchCorpusByDictionary.addEventListener('change',function() {
        availableGUIs.disabled = this.checked;
        searchCorpusByWords.disabled = this.checked;
        selectDictionaryFile.disabled = !this.checked;
        fileName.disabled = !this.checked;
        if(!this.checked){
            availableGUIs.checked = false;
            searchCorpusByWords.checked = false;
        }
    });

    searchCorpusByWords.addEventListener('change',function() {
        availableGUIs.disabled = this.checked;
        searchCorpusByDictionary.disabled = this.checked;
        userInput.disabled = !this.checked;
        extractKSentences.disabled = !this.checked;
        coOccurringCommas.disabled = !this.checked;
        subDirectory.disabled = !this.checked;
        if(!this.checked){
            availableGUIs.checked = false;
            searchCorpusByDictionary.checked = false;
            extractKSentences.checked = false;
            coOccurringCommas.checked = false;
            subDirectory.checked = false;
        }
        if(searchCorpusByWords.checked && searchOptionSelected.value == "searchSentence"){
            plusK.disabled = false;
            minusK.disabled = false;
        } else {
            plusK.disabled = true;
            minusK.disabled = true;
        }
        if(searchCorpusByWords.checked && searchOptionSelected.value == "searchDocument"){
            extractKSentences.disabled = true;
            extractKSentences.checked = false;
        }
    });

    searchOptionSelected.addEventListener('change',function() {
        if(searchCorpusByWords.checked && searchOptionSelected.value == "searchSentence"){
            plusK.disabled = false;
            minusK.disabled = false;
        } else {
            plusK.disabled = true;
            minusK.disabled = true;
        }
        if(searchCorpusByWords.checked && searchOptionSelected.value == "searchDocument"){
            extractKSentences.disabled = true;
            extractKSentences.checked = false;
        }
    });





