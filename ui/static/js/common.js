function listofitems(){

    var optionsSelect = document.getElementById("ngrams_options_menu_var");
    var pickedSelect = document.getElementById("options");
    var plusbutton = document.getElementsByName("options-+")[0];
    var resetbutton = document.getElementsByName("options-reset")[0];
    var minusbutton = document.getElementsByName("options-show")[0];

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

listofitems()
