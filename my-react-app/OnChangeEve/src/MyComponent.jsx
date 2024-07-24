import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('Delivery')

    const handleNameChange = (event) =>{
        setName(event.target.value);
    }

    const handleQuantityChange = (event) =>{
        setQuantity(event.target.value);
    }

    const handleCommentChanges = (event) =>{
        setComment(event.target.value);
    }

    const handlePaymentChages = (event) =>{
        setPayment(event.target.value);
    }

    const handleShippingChanges = (event) =>{
        setShipping(event.target.value);
    }



    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChanges} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChages}>
                <option value="">Select an option</option>
                <option value="Gpay">Gpay</option>
                <option value="Paytm">Paytm</option>
                <option value="PhonePay">PhonePay</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChanges}></input>
                Pick Up
            </label>
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"}  onChange={handleShippingChanges}></input>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent