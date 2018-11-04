var personOriginal = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

var personOriginal2 = {
    "name": "John Abraham",
    "age": "24",
    "userame": "Abraham73",
    "phone": "12131415"
}

// 1. Objects without nesting :
/* 1.1. Simple cloning */

function simpleCloning(obj) {
    var clone = {};
    for (var key in personOriginal2) {
        clone[key] = personOriginal2[key];
    }
    return clone;
}
var personCopy1 = simpleCloning(personOriginal2);
personOriginal2.name = "Kit Junior";
console.log(personCopy1.name); // "John Abraham" - true!
console.log(personOriginal2.name);

/* 1.2. Object.assign () */

function objectAssing(obj) {
    return Object.assign({}, obj);
}

var personCopy2 = objectAssing(personOriginal2);
personOriginal2.name = "Barry Alen";
console.log(personCopy2.name); // "Kit Junior" - true!

// 2. Objects whith nesting:
/* 2.1. Modified 1.1 */

function deepCopy1(obj) {
    var clone1 = {};
    for (var key in obj) {
        if (typeof (obj[key]) == "object" && obj[key] != null) {
            clone1[key] = deepCopy1(obj[key]);
        }
        else
            clone1[key] = obj[key];
    }
    return clone1;
}

var personCopy1 = deepCopy1(personOriginal);
personOriginal.address.geo.lng = "92.12134";

console.log(personCopy1.address.geo.lng); // "81.1496" - true!


/* 2.2. Simple objects (JSON.parse) */

var copy = JSON.parse(JSON.stringify(personOriginal));
personOriginal.address.geo.lat = "-47.3159";
console.log(copy.address.geo.lat); // "-37.3159" - true 
// не работает с функциями и методами, вложенными в объект



