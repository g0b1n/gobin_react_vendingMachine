import React from "react"
import { Link } from "react-router-dom"

import "./MachineItems.css"
import VendingMachine from "./VendingMachine"

function Juice() {
    return (
        <div>
            <h2>Juice</h2>
            <div>
                <img
                    src="https://i5.walmartimages.com/seo/Great-Value-No-Added-Sweeteners-100-Apple-Juice-64-Fl-Oz_a943f6cd-7088-40f1-b5a5-7a7654c768e9.ac1a8fc04b6e39f4b5b214c88ba16fa9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                    alt="Great Value Apple Juice 64fl. oz"
                />
                <p>Great Value Apple Juice 64fl. oz</p>
            </div>
            <div>
                <img
                    src="https://i5.walmartimages.com/seo/Great-Value-100-Vegetable-Juice-64-fl-oz_e65dcf0f-4860-4a35-99e3-a527cae995cd.247b5b295887c15c4f4a9bb07e64b914.jpeg"
                    alt="Great Value Vegetable Juice 64fl. oz"
                />
                <p>Great Value Vegetable Juice 64fl. oz</p>
            </div>
            <div>
                <img
                    src="https://i5.walmartimages.com/seo/Great-Value-Grape-100-Juice-96-fl-oz_eee57c37-e1fa-4cce-a007-8f1877ad2bf9.24a160c5ffe02c234b265f7dbc079985.jpeg"
                    alt="Great Value Grape Juice 64fl. oz"
                />
                <p>Great Value Grape Juice 64fl. oz</p>
            </div>
            <Link to="/" element={<VendingMachine />} className="vendingMachine-link">Back To Vending Machine </Link>
        </div>
    )
}

export default Juice;