const productos = [
    {
        id: 1,
        img: "../src/img/ryzen-7-5700g.webp",
        nombre: "Ryzen 7 5700g",
        descripcion: "Procesador AMD Ryzen 7 de la serie 5000 con gráficos integrados.",
        marca: "AMD",
        tipo: "Procesador",
        precio: 170000,
        stock: 5
    },
    {
        id: 2,
        img: "../src/img/ryzen-3-3200g.webp",
        nombre: "Ryzen 3 3200g",
        descripcion: "Procesador AMD Ryzen 3 de la serie 3000 con gráficos integrados.",
        marca: "AMD",
        tipo: "Procesador",
        precio: 92000,
        stock: 5
    },
    {
        id: 3,
        img: "../src/img/core-i7-11700.webp",
        nombre: "Core I7 11700",
        descripcion: "Procesador Intel Core i7 de 11ª generación para computadoras de escritorio.",
        marca: "Intel",
        tipo: "Procesador",
        precio: 291000,
        stock: 5
    },
    {
        id: 4,
        img: "../src/img/b550m-ds3h.webp",
        nombre: "B550M DS3H",
        descripcion: "Placa base micro ATX con chipset B550 para procesadores AMD Ryzen.",
        marca: "Gigabyte",
        tipo: "Motherboard",
        precio: 92000,
        stock: 5
    },
    {
        id: 5,
        img: "../src/img/a520m-k-v2.webp",
        nombre: "A520M K V2",
        descripcion: "Placa base micro ATX con chipset A520 para procesadores AMD Ryzen.",
        marca: "Gigabyte",
        tipo: "Motherboard",
        precio: 60590,
        stock: 5
    },
    {
        id: 6,
        img: "../src/img/8gb-3200mhz.webp",
        nombre: "8GB 3200Mhz DDR4",
        descripcion: "Módulo de memoria DDR4 de 8GB con velocidad de 3200MHz de Kingston.",
        marca: "Kingston",
        tipo: "Memoria",
        precio: 15590,
        stock: 5
    },
    {
        id: 7,
        img: "../src/img/8gb-2666mhz.webp",
        nombre: "8GB 2666Mhz DDR4",
        descripcion: "Módulo de memoria DDR4 de 8GB con velocidad de 2666MHz de Crucial.",
        marca: "Crucial",
        tipo: "Memoria",
        precio: 15590,
        stock: 5
    }
]

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getProductoPorID = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoPorID = productos.filter(producto => producto.id == id)
            resolve(productoPorID)
        }, 1000)
    })
}

export const getProductosPorTipo = (tipo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productosPorTipo = productos.filter(producto => producto.tipo === tipo)
            resolve(productosPorTipo)
        }, 1000)
    })
}