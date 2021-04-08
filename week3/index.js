const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
       
        pokemon(data.objects[0].pokemon)
    }
}



function pokemon(arr){
    for( var i = 0; i < arr.length;i++){
        console.log(arr[i].name)
        var h1 = document.createElement('h1')
        h1.innerHTML = arr[i].name
        document.body.appendChild(h1)
    }
    
}
