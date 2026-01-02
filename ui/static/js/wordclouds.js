function toggleForService(){
    var worldCloudService = document.getElementById("wordcloud_service");
    var numberOfWords = document.getElementById("maxNumberOfWords");
    var imagePrepare = document.getElementById("prepareImage");
    var imageSelectPNG = document.getElementById("usePNGFile");
    var inputImage = document.getElementById("PNGinput");
    var imageContour = document.getElementById("imageContour");
    var horizontalButton = document.getElementById("horizontal");

    //gonna loop through this cause theres so many
    var listofElements = ['stopwords', 'lemmas', 'punctuation', 'lowercase_checkbox', 'collocation', 'differentColorsByPOS'];
    for(var i = 0; i < listofElements.length; i++){
        var id = listofElements[i];
        var checkbox = document.getElementById(id);
        if(worldCloudService.value !== "Python WordCloud"){
            checkbox.disabled = true;
        }
        else{
            checkbox.disabled = false;
        }
    }
    
    if(worldCloudService.value !== "Python WordCloud"){
        numberOfWords.disabled = true;
        imagePrepare.disabled = true;
        imageSelectPNG.disabled = true;
        inputImage.disabled = true;
        imageContour.disabled = true;
        horizontalButton.disabled = true;
    }
    else{
        numberOfWords.disabled = false;
        imagePrepare.disabled = false;
        imageSelectPNG.disabled = false;
        inputImage.disabled = false;
        imageContour.disabled = false;
        horizontalButton.disabled = false;
    }
}
document.getElementById("wordcloud_service").addEventListener("change", toggleForService);
toggleForService();