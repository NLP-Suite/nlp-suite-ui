var removeStopwords = document.getElementById("removeStopwords");
    var lemmatize = document.getElementById("lemmatize");
    var visualizationOptionDimension = document.getElementById("visualizationOptionDimension");
    var visualizationOptionVector = document.getElementById("visualizationOptionVector");
    var wordSenseInduction = document.getElementById("wordSenseInduction");
    var selectDictionaryFile = document.getElementById("selectDictionaryFile");
    var keywordInput = document.getElementById("keywordInput");
    var range4 = document.getElementById("range4");
    var range6 = document.getElementById("range6");
    var ngrams = document.getElementById("ngrams");
    var range20 = document.getElementById("range20");
    var wordEmbeddingsBERT = document.getElementById("wordEmbeddingsBERT");
    var word2VecGensim = document.getElementById("word2VecGensim");
    var trainingModelArchitecture = document.getElementById("trainingModelArchitecture");
    var vectorSize = document.getElementById("vectorSize");
    var windowSize = document.getElementById("windowSize");
    var minCount = document.getElementById("minCount");
    var computeWordDistances = document.getElementById("computeWordDistances");
    var topWords = document.getElementById("topWords");
    var keywords = document.getElementById("keywords");

    wordSenseInduction.addEventListener('change',function() {
        wordEmbeddingsBERT.disabled = this.checked;
        word2VecGensim.disabled = this.checked;
        trainingModelArchitecture.disabled = this.checked;
        vectorSize.disabled = this.checked;
        windowSize.disabled = this.checked;
        minCount.disabled = this.checked;
        
        if(this.checked){
            wordEmbeddingsBERT.checked = false;
            word2VecGensim.checked = false;
            
            
        }
    });

    wordEmbeddingsBERT.addEventListener('change',function() {
        wordSenseInduction.disabled = this.checked;
        word2VecGensim.disabled = this.checked;
        trainingModelArchitecture.disabled = this.checked;
        vectorSize.disabled = this.checked;
        windowSize.disabled = this.checked;
        minCount.disabled = this.checked;
        
        if(this.checked){
            wordSenseInduction.checked = false;
            word2VecGensim.checked = false;
            
            
        }
    });

    word2VecGensim.addEventListener('change',function() {
        wordEmbeddingsBERT.disabled = this.checked;
        wordSenseInduction.disabled = this.checked;
        
        
        if(this.checked){
            wordEmbeddingsBERT.checked = false;
            wordSenseInduction.checked = false;
            
            
        }
    });

    visualizationOptionVector.addEventListener('change',function() {
        if(this.value == "Do not plot word vectors"){
            visualizationOptionDimension.value = "noVisuals";
            visualizationOptionDimension.disabled = true;            
        } else {
            visualizationOptionDimension.value = "2D";
            visualizationOptionDimension.disabled = false;
        }
    });