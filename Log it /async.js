function pen(msg){
    console.log(msg);
    console.log("Still waiting");
};

function succe(msg){
    console.log(msg);
    console.log("I have received it ");
};

function fail(msg){
    console.log(msg);
    console.log("I couldn't recieve it  ");
};

const  promis1 = new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        resolve("Pendding");
    }, 2000);
});

const  promis2 = new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        resolve("Success");
    }, 3000);
});

const  promis3 = new Promise((resolve, rejected)=>{
    setTimeout(()=>{
        rejected("Rejected");
    }, 4000);
});


// promis1.then(pen);
// promis2.then(succe);
// promis3.catch(fail);