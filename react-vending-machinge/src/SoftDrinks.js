import React from "react"
import { Link } from "react-router-dom"

import "./MachineItems.css"
import VendingMachine from "./VendingMachine";

function SoftDrinks() {
    return (
        <div>
            <h2>Soft Drinks</h2>
            <div className="img">
                <img
                    src="https://cdn3.didevelop.com/public/cdn/533_d547f6847b684fd5e23d33db378a2a6f.jpg"
                    alt="Red CocaCola Can 355ml"
                />
                <p>Red CocaCola Can 355ml</p>
            </div>

            <div className="img">
                <img
                    src="https://i5.walmartimages.com/seo/Pepsi-Soda-12oz-cans-Pack-of-48_69f93370-7023-4bfb-a0fc-e5cc931e49b6_1.7d37e56bd03cee7eee8a41395de92e30.jpeg"
                    alt="Blue Pepsi Can 355ml"
                />
                <p>Blue Pepsi Can 355ml</p>
            </div>

            <div className="img">
                <img
                    src="https://lostanitos.com/cdn/shop/products/208178_p_1024x1024.jpg?v=1600996294"
                    alt="Orange Fanta Can 355ml"
                />
                <p>Orange Fanta Can 355ml</p>
            </div>
            <Link to="/" element={<VendingMachine />} className="vendingMachine-link">Back To Vending Machine </Link>
        </div>
    )
}

export default SoftDrinks;