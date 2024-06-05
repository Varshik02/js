const accountId = 123456
let accountEmail = "prajapativarshik@gmail.com"
var accountPassword ="12345"
accountCity = "surat"
let accountState;

// accountId = 2 // not Allowed
accountEmail = "abc@gmail.com"
accountPassword = "145698"
accountCity = "Ahmedabad"


console.log(accountId);


/*
Prefered not to use var because of issues in blockScope and functionalScope
 */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);