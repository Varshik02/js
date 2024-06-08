// Immedietly Invoked Function Expression (IIFE)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`Db connected two ${name}`);
})('varshik')


