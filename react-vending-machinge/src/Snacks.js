import React from "react"
import { Link } from "react-router-dom"

import "./MachineItems.css"
import VendingMachine from "./VendingMachine";

function Snacks() {
    return (
        <div>
            <h2>Snacks</h2>
            <div>
                <img
                    src="https://m.media-amazon.com/images/I/81tUUe3pIgS.jpg"
                    alt="Yellow Classic Lays 8oz"
                />
                <p>Yellow Classic Lays 8oz</p>
            </div>
            <div>
                <img
                    src="https://m.media-amazon.com/images/I/81jwERLsCSL._AC_UF1000,1000_QL80_.jpg"
                    alt="Red Cheetos 8oz"
                />
                <p>Red Cheetos 8oz</p>
            </div>
            <div>
                <img
                    src="https://m.media-amazon.com/images/I/812tZPyk0fL.jpg"
                    alt="Blue Doritos 8oz"
                />
                <p>Blue Doritos 8oz</p>
            </div>
            <Link to="/" element={<VendingMachine />} className="vendingMachine-link">Back To Vending Machine </Link>
        </div>
    )
}

export default Snacks;