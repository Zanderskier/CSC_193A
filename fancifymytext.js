window.onload = function() {
    
    //select button
    var biggerButton = document.getElementById("biggerButton");
    

    //add listener
    biggerButton.addEventListener("click", function() {
        //display message
        var textArea = document.getElementById("textInput");
        textArea.style.fontSize = "24pt";
    });
    
};

function setStyle(){
    var textArea = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancy");
    
    if(fancyRadio.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
    
};

function uppercaseText(){
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    text = textArea.value.toUpperCase();

    var stentences = text.split(".");

    for(var i = 0; i < stentences.length; i++) {
        var stentence = stentences[i].trim();
        var words = stentence.split(" ");

        if(words.length > 0){
            var lastWord = words.length - 1;
            words[lastWord] += "-Moo";
        }

        stentences[i] = words.join(" ");

    }

    textArea.value = stentences.join(".") + ".";
    

}
