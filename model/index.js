let cats = [
//this is our hypothetical database
    {
        id: 283848,
        name: 'charlie the cat',
        age: 2,
        breed: 'tabby',
        temp: 'lies down a lot'
    },
    {
        id: 867494,
        name: 'chairmen meow',
        age: 5,
        breed: 'ragdoll',
        temp: 'aggressive'
    }
]

let id = 5000

function getCat(id) {
    /*
    let cat = cats.filter(cat => cat.id === id)[0]
    
    //the [0] returns an OBJ becuase without the [0] it returns an array that has an obj inside
    */
    
    let cat = cats.find(cat => cat.id === id)
    //gives you the single obj so that you don't have to do [0] like the one above
    return cat
}

function getAllCats() {
    return cats
}

function createCat(data) {
    let cat = {
        id: id++,
        name: data.name,
        age: data.age,
        breed: data.breed,
        temp: data.temp
    }
    cats.push(cat)
    return cat
}

module.exports = {
    getCat, getAllCats, createCat
}