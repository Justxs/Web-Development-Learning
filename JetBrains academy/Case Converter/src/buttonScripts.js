function toUpper(){
    let text = document.querySelector("textarea").value;
    text = text.toUpperCase();
    document.querySelector("textarea").value=text;
}
function toLower(){
    let text = document.querySelector("textarea").value;
    text = text.toLowerCase();
    document.querySelector("textarea").value=text;
}
function toProper(){
    let textArr = document.querySelector("textarea").value.split(" ");
    let text = [];
    for (let i=0; i<textArr.length;i++){
        text[i] = textArr[i].charAt(0).toUpperCase() + textArr[i].substr(1).toLowerCase();
    }
    text = text.join(" ")
    document.querySelector("textarea").value=text;
}
function toSentence(){
    let textArr = document.querySelector("textarea").value.split(".");
    let text = [];
    for (let i=0; i<textArr.length;i++){
        if (textArr[i].charAt(0)!==" "){
            text[i] = textArr[i].charAt(0).toUpperCase() + textArr[i].substr(1).toLowerCase();
        }
        else {
            text[i] = textArr[i].charAt(0) + textArr[i].charAt(1).toUpperCase() + textArr[i].substr(2).toLowerCase();
        }
    }
    text = text.join(".")
    document.querySelector("textarea").value=text;
}
function toDownload(){
    let text = document.querySelector("textarea").value;
    let element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}