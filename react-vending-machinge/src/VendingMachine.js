import React from "react";
import { Link } from "react-router-dom"
import "./VendingMachine.css"

import Snacks from "./Snacks";
import SoftDrinks from "./SoftDrinks";
import Juice from "./Juice";

const VendingMachine = () => {
    return (
        <div className="VendingMachine">
            <Link to="/snacks" className="VendingMachine-snacks">Snacks</Link>
            <Link to="/soft-drinks" className="VendingMachine-soft-drinks">Soft Drinks</Link>
            <Link to="/juice" className="VendingMachine-juice">Juice</Link>
        </div>
    )
}

export default VendingMachine;