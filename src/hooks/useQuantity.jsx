import { useState } from "react";

const useQuantity = (initQuantity = 1) => {

    const [quantity, setQuantity] = useState(initQuantity);

    const increment = () => setQuantity(quantity + 1);

    const decrement = () => {
        if(quantity > 1) setQuantity(quantity - 1);
    }

    const writeQuantity = (e) => {
        const newQuantity = e.target.value;
        if (/^\d*$/.test(String(newQuantity))) setQuantity(newQuantity);
    }

    return ([
        quantity,
        increment,
        decrement,
        writeQuantity
    ]);
}

export default useQuantity;