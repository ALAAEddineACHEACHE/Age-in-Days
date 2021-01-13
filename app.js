function AgeindaysYears(){
    var Birth = prompt("Honey,would be nice to give me your BirthYear !");
    var ageindayss = (2021-Birth)*365;
    var ageinYears = (2021-Birth);
    var h1 = document.createElement('h1');
var textanswer = document.createTextNode("You are " + ageindayss+ " days old meaning you're "+ ageinYears + " years old");
h1.setAttribute('id','ageindayss');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);
}
AgeindaysYears();
function reset(){
    document.getElementById("ageindayss").remove();
}




