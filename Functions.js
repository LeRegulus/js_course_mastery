//Functions

// function getBrand(brand) {
//     return {
//         brand: brand,
//         website: `www${brand}.com`
//     };
// }

//Arrow functions

const  getBrand = brand => ({
        brand: brand,
        website: `www${brand.toLowerCase()}.com`
});

const  add = () => 1+2;

const google = getBrand('google');
console.log(add());
console.log(google);
