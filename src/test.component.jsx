import { useEffect } from "react";
import axios from "axios";

export default function TestComponent() {
    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const { data: cart } = await axios.get(
                window.Shopify.routes.root + "cart.js"
            );
            console.log(cart);
        } catch (error) {
            console.log(error);
        }
    };

    const addProduct = async () => {
        try {
            const formData = {
                items: [
                    {
                        id: 40521773023317,
                        quantity: 1,
                        properties: {
                            _added_from: "VTO",
                        },
                    },
                ],
            };

            const response = await axios.post(window.Shopify.routes.root + 'cart/add.js', formData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            test
            <button onClick={addProduct}>Add</button>
        </div>
    );
}
