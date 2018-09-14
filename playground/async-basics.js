//Callback function ==> a function that gets passed as an 
//argument to another function, and is executed after some
//event happens

console.log('Starting app..'); 

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);


setTimeout(() => {
    console.log('Second set timeout works'); 
}, 0); 

console.log('Finishing up'); 
