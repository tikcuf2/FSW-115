var Dragonballz = [
    "Goku",
    "Trucks",
    "Vegta",
    "Gohan",
 ]
 
 var DragonballzList = document.getElementById("Dragonballz")
 
 for (var i = 0; i < Dragonballz.length; i++) {
     DragonballzList.innerHTML += "<li>" + Dragonballz[i] + "<ul>"
 }