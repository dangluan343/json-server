const { faker } = require('@faker-js/faker');
const fs = require('fs');
const randomEmail = faker.address.city();	// Kassandra.Haley@erich.biz
const randomCard = faker.animal.type(); // random contact card containing many properties


const randomCategoryList = (n) => {
    if( n <= 0 ) return [];
    const categoryList = [];

    for(let i = 0; i < n; i += 1)
    {
        const category = {
            id: faker.datatype.uuid(), 
            name: faker.commerce.department(), 
        
        };

        categoryList.push(category);
    }
    return categoryList;
}

const randomProductList = (categoryList, numOfPro) => {
    const productList = [];
    for( category of categoryList ){
        for(let i = 0; i < numOfPro; i++) {
            const product = {
                id: faker.datatype.uuid(), 
                category: category.name, 
                price: faker.finance.account()
            }
            productList.push(product)
        }
    }

    return productList;
}

const categoryList = randomCategoryList(4);
const productList = randomProductList(categoryList, 4);

( () => {
    const db = {
        categories: categoryList, 
        products: productList,
        profile: {
            name: "luan",
        },
    };
    fs.writeFile('db.json', JSON.stringify(db), () => {console.log("thanh cong");})

}
)()