import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // const [allProduct, setAllProduct] = useState([]);

    // const contextValue = { allProduct, setAllProduct };

    const contextValue = {all_product}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};    

export default ShopContextProvider;
