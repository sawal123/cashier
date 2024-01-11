// Produk Menu Minuman
document.addEventListener('alpine:init', () => {
    Alpine.data('produkMinuman', () => ({

        items: [{
                id: 1,
                name: 'Kopi Susu',
                price: 10000,
                images: 'Rectangle 9 (1).png'
            },
            {
                id: 2,
                name: 'Sanger',
                price: 10000,
                images: 'Rectangle 9 (2).png'
            },
            {
                id: 3,
                name: 'Mochacino',
                price: 12000,
                images: 'Rectangle 9 (2).png'
            },
            {
                id: 4,
                name: 'Cappucino',
                price: 14000,
                images: 'Rectangle 9 (2).png'
            },
            {
                id: 5,
                name: 'Cappucino',
                price: 14000,
                images: 'Rectangle 9 (2).png'
            },
            {
                id: 6,
                name: 'Cappucino',
                price: 14000,
                images: 'Rectangle 9 (2).png'
            },

        ],


    }));
    // tambah ke keranjang
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);
            // jika belum ada / cart masih kosong
            if (!cartItem) {
                this.items.push({
                    ...newItem,
                    quantity: 1,
                    total: newItem.price
                });
                this.quantity++;
                this.total += newItem.price;
            } else {
                // jika sudah ada, update jumlah
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    } else {
                        // jika barang sudah ada, tambah quantity dan total
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })

            }

        }
    });
});


// Akhir Produk Menu Minuman

// Produk Menu Makanan
document.addEventListener('alpine:init', () => {
    Alpine.data('produkMakanan', () => ({

        items: [{
                id: 1,
                name: 'Nasi Goreng',
                price: 10000,
                images: 'nasi-goreng.png'
            },
            {
                id: 2,
                name: 'Ayam Penyet',
                price: 10000,
                images: 'ayam penyet.png'
            },
            {
                id: 3,
                name: 'Mie Bangladesh',
                price: 15000,
                images: 'ayam penyet.png'
            },
            {
                id: 4,
                name: 'Burger',
                price: 20000,
                images: 'nasi-goreng.png'
            },
            {
                id: 5,
                name: 'Mie Aceh',
                price: 16000,
                images: 'ayam penyet.png'
            },
            {
                id: 6,
                name: 'Ifu Mie',
                price: 17000,
                images: 'nasi-goreng.png'
            },

        ],

    }));
    // Alpine.store('cart', {
    //     items: [],
    //     total: 0,
    //     quantity: 0,
    //     add(newItem) {
    //         this.items.push(newItem);
    //         this.quantity++;
    //         this.total += newItem.price;
    //         console.log(this.total);
    //     }
    // });
});


// Akhir Produk Menu Makanan

// Konversi Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,

    }).format(number);
}
// Konversi Rupiah