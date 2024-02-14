export const calculateTotal = (cart) => {
    const total = cart.reduce((acc, product) => {
        return acc + product.price;
    }, 0);

    return Number(total.toFixed(2));
};

export function consolidateCart(cart) {
    const consolidatedCart = [];
    const productMap = new Map();

    
    cart.forEach(product => {
        if (productMap.has(product.id)) {
            productMap.get(product.id).quantity += 1; 
        } else {
            productMap.set(product.id, { ...product, quantity: 1 });
        }
    });

    productMap.forEach(value => {
        consolidatedCart.push(value);
    });

    return consolidatedCart;
}
