const div = document.querySelector('div');

const phones = [
    {
        brand: 'Samsung',
        img: "./assets/note 20.webp",
        model: 'Note 20',
        ram: 12,
        rom: 256,
        camera: '20 megapixel',
        price: 139999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a 53.jpeg",
        model: 'A53',
        ram: 8,
        rom: 128,
        camera: '20 megapixel',
        price: 156999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a04.jpg",
        model: 'A04',
        ram: 12,
        rom: 512,
        camera: '20 megapixel',
        price: 122999,
    },
    {
        brand: 'Samsung',
        img: "./assets/a24.jpg",
        model: 'A24',
        ram: 4,
        rom: 64,
        camera: '20 megapixel',
        price: 111999,
    },
    {
        brand: 'Samsung',
        img: "./assets/s22.webp",
        model: 'S22',
        ram: 12,
        rom: 256,
        camera: '20 megapixel',
        price: 138999,
    },
    {
        brand: 'Samsung',
        img: "./assets/s 23.jpg",
        model: 'S23 ultra',
        ram: 8,
        rom: 128,
        camera: '20 megapixel',
        price: 145999,
    },
    {
        brand: 'Samsung',
        img: "./assets/note 10.jpeg",
        model: 'Note 10',
        ram: 4,
        rom: 64,
        camera: '20 megapixel',
        price: 121999,
    },
    {
        brand: 'Samsung',
        img: "./assets/f13.webp",
        model: 'F13',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 189999,
    },

]

for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `<div class="div">
    <h2 class="brand"> ${phones[i].brand}</h2>
    <img class="img" src="${phones[i].img}"> 
    <h3 class="model">Model: ${phones[i].model}</h3>
    <h3 class="ram">Ram: ${phones[i].ram}</h3>
    <h3 class="rom">Rom: ${phones[i].rom}</h3>
    <h3 class="camera">Camera: ${phones[i].camera}</h3>
    <h3 class="price">Price: ${phones[i].price} </h3>
    <button class="cart">Add to cart</button>
    </div>`

}
