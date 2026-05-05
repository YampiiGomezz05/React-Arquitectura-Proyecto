import  laptop  from '@/assets/products/card-laptop.png';
import  monitor from '@/assets/products/card-monitor.png';
import  mouse  from '@/assets/products/card-mouse.png';
import  teclado  from '@/assets/products/card-teclado.png';

export const products = [
    {
        id: 1,
        title: "Laptop Gamer",
        price: 4300000,
        description: "Laptop alto rendimiento para desarrollo y diseño web",
        image: laptop,
        category: "perifericos"
    },

    {
        id: 2,
        title: "Monitor de 27\"",
        price: 1000000,
        description: "Monitor ideal para programación y diseño",
        image: monitor,
        category: "perifericos"
    },

    {
        id: 3,
        title: "Mouse",
        price: 45000,
        description: "Mouse ergonómico",
        image: mouse,
        category: "perifericos"
    },

    {
        id: 4,
        title: "Teclado Gamer",
        price: 430000,
        description: "Teclado mecánico con retroiluminación led",
        image: teclado,
        category: "perifericos"
    }
]