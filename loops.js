//loops

var names = [
    'Alex',
    'John',
    'Jane',
    'Doe'
]

//for i
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// forEach
names.forEach(function (name) {
    console.log(name);
});

// for of
for (var name of names) {
    console.log(name);
}