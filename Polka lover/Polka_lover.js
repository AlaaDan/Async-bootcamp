function letsDance(danceStyle){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(danceStyle === "polka"){
                resolve("yes, polka is my thing")
            }else{
                reject("sour diss")
            }
        }, 2000);
    });
}

letsDance("polka")
    .then(response => console.log(response))
    .catch(diss => console.log(diss))