// Promise. we can use it if we have no dependenies in promises.

const customers = new Promise((resolve, reject) => {
    return Promise.resolve().then(() => {
        let i = 0;
        while (i < 1_000_000_000) i++
        resolve([
            {name: 'Jamila', id:1},
            {name: 'Bob', id:2}
        ])
    })
});

const addresses = new Promise((resolve, reject) => {
    return Promise.resolve().then(() => {
        let i = 0;
        while (i < 1_000_000_000) i++
        resolve([
            {customerId: 1, address:"London"},
            {customerId: 2, address:"Nez York"},
        ])
    })
});

//wit
const fetchData1 = () => {
    Promise.all([customers, addresses]).then(values =>{
        const [c, a] = values
        console.log(c);
        console.log(a);
    }).catch(err => {
        console.log(err);
    })
    
}

const fetchData2 = async () => {
    try {
        const values = await Promise.all([customers, addresses]);
        const[c, a] = values;
        console.log(c);
        console.log(a);
    } catch (error) {
        console.log(error);
    }
    
}


// fetchData1();
fetchData2();