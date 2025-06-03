import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const { currency = '$', delivery_fee = 0, cartItems = {}, products = [] } = useContext(ShopContext) || {};

    // Savat summasini hisoblash
    const getCartAmount = () => {
        let total = 0;
        for (const itemId in cartItems) {
            const product = products.find(p => p._id === itemId);
            if (!product) continue;
            
            for (const size in cartItems[itemId]) {
                const quantity = cartItems[itemId][size];
                if (quantity > 0) {
                    total += product.price * quantity;
                }
            }
        }
        return total;
    };

    const subtotal = getCartAmount();
    const total = subtotal > 0 ? subtotal + delivery_fee : 0;

    return (
        <div className='w-full'>
            <div className="text-2xl">
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency} {subtotal.toFixed(2)}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shopping Fee</p>
                    <p>{currency} {delivery_fee.toFixed(2)}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Total</p>
                    <b>{currency} {total.toFixed(2)}</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal