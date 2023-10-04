const productos = [
    {
        id: 1,
        img: "./tienda/src/img/ryzen-7-5700g.webp",
        nombre: "Ryzen 7 5700g",
        marca: "AMD",
        tipo: "Procesador",
        precio: 170000
    },
    {
        id: 2,
        img: "./tienda/src/img/ryzen-3-3200g.webp",
        nombre: "Ryzen 3 3200g",
        marca: "AMD",
        tipo: "Procesador",
        precio: 92000
    },
    {
        id: 3,
        img: "./tienda/src/img/core-i7-11700.webp",
        nombre: "Core I7 11700",
        marca: "Intel",
        tipo: "Procesador",
        precio: 291000
    },
    {
        id: 4,
        img: "./tienda/src/img/b550m-ds3h.webp",
        nombre: "B550M DS3H",
        marca: "Gigabyte",
        tipo: "Motherboard",
        precio: 92000
    },
    {
        id: 5,
        img: "./tienda/src/img/a520m-k-v2.webp",
        nombre: "A520M K V2",
        marca: "Gigabyte",
        tipo: "Motherboard",
        precio: 60590
    },
    {
        id: 6,
        img: "./tienda/src/img/8gb-3200mhz.webp",
        nombre: "8GB 3200Mhz DDR4",
        marca: "Kingston",
        tipo: "Memoria",
        precio: 15590
    },
    {
        id: 7,
        img: "./tienda/src/img/8gb-2666mhz.webp",
        nombre: "8GB 2666Mhz DDR4",
        marca: "Crucial",
        tipo: "Memoria",
        precio: 15590
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}