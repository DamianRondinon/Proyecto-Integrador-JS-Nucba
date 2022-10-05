const productsData = [
    {
      id: 1,
      name: 'Ajo',
      price: 1000,
      category: 'futbol',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 2,
      name: 'Ajo',
      price: 1000,
      category: 'futbol',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 3,
      name: 'Ajo',
      price: 1000,
      category: 'futbol',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 4,
      name: 'Ajo',
      price: 1000,
      category: 'musica',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 5,
      name: 'Ajo',
      price: 1000,
      category: 'musica',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 6,
      name: 'Ajo',
      price: 1000,
      category: 'musica',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 7,
      name: 'Ajo',
      price: 1000,
      category: 'peliculas',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 8,
      name: 'Ajo',
      price: 1000,
      category: 'peliculas',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 9,
      name: 'Ajo',
      price: 1000,
      category: 'peliculas',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 10,
      name: 'Ajo',
      price: 1000,
      category: 'autos',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 11,
      name: 'Ajo',
      price: 1000,
      category: 'autos',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 12,
      name: 'Ajo',
      price: 1000,
      category: 'autos',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 13,
      name: 'Ajo',
      price: 1000,
      category: 'politicos',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 14,
      name: 'Ajo',
      price: 1000,
      category: 'politicos',
      cardImg: './assets/img/products/ajo.jpg',
    },
    {
      id: 15,
      name: 'Ajo',
      price: 2000,
      category: 'politicos',
      cardImg: './assets/img/products/ajo.jpg',
    },
  ];

  function splitProducts(size) {

    let chunk = [];
    for (let i = 0; i < productsData.length; i += size)
    chunk.push(productsData.slice(i, i + size));

    return chunk;
}

const allProducts = {
    productList: splitProducts(6),
    next: 1,
    limit: splitProducts(6).length,
};

