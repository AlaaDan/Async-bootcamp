function research(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(console.log( "Research a traget group: 4s"))
        }, 4000);
    });
};

function sketch(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(console.log("Sktech a design on paper: 2s"))
        }, 2000);
    });
};

function figma(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(console.log("Make the sketch pixel perfect mockup In Figma / XD - 3s"))
        }, 3000);
    });
};

function code(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(console.log("Coding: 3s"))
        }, 3000);
    });
};

function stackOverFlow(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(console.log("Stackoverflow:a fel - 1s"))
        }, 1000);
    });
};

function test(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(console.log("Test a product: 2s"))
        }, 2000);
    });
};

function done(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(console.log("Celebrate successful project - 1s"))
        }, 1000);
    });
};


// research()
//     .then(sketch)
//     .then(figma)
//     .then(code)
//     .then(stackOverFlow)
//     .then(test)
//     .then(done)

async function theWebProjectAsync(){
    await research()
    await sketch()
    await figma()
    await code()
    await stackOverFlow()
    await test()
    await done()
};

theWebProjectAsync()