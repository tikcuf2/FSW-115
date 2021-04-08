// resolve -.then()
// reject - .catch()
// thenable 


function flipCoin (){
    return new Promise((resolve, reject) =>{
        const randomNum = Math.floor(Math.random() * 2)

        if(randomNum === 0){
            resolve ("heads")
        }
        else if(randomNum === 1){
            reject('Tails')
        }
 

    })

}
//flipCoin()
   // .then(response => console.log("resloved:" + response))
   // .catch(error => console.log("rejected: " + error))

   function getData(){
        return new Promise (resolve => {
            setTimeout (() => resolve( 'hello world'), 2000)
        })

   }

   getData()
   .then(response => console.log( 'I have resolved' + response ))
   .catch(error => console.log('I errored'))



   //bikin butt arm leggs, neck nipple hair 