const lang = ["HTML", "CSS", "Javascript"];
const fruits = ["apple", "watermelon", "mango"];


function footerCreator(listOfElements, nameOfTheElementToAtach) {
    let and = "and ";
    let comma = ", ";
    let space = " ";
    const footerExp = document.getElementById(nameOfTheElementToAtach);
    let sentence = "";
    for (i = 0; i < listOfElements.length; i++) {
        if (i == listOfElements.length - 1)
            sentence += and + listOfElements[i];
        else if (i == listOfElements.length - 2)
            sentence += listOfElements[i] + space;
        else
            sentence += listOfElements[i] + comma;
    }

    footerExp.innerHTML = sentence;
}

footerCreator(lang, "footerExp");