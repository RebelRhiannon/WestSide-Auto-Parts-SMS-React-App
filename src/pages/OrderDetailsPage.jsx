import { Link } from 'react-router-dom';

function OrderDetailsPage() {

    return (
        <>
            <div className="customer-page">
                <h2>Order Details for Order ID 1</h2>
                <p>Click on the Product ID to see the item details.</p>
                <table>
                    <thead>
                    <th>Product ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td><Link to="/product_details">1</Link></td>
                        <td>Goodyear Tire</td>
                        <td>$149.99</td>
                        <td>4</td>
                        <td>$599.96</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Magnaflow Catalytic Converter</td>
                        <td>$1299.99</td>
                        <td>1</td>
                        <td>$1299.99</td>
                    </tr>
                    </tbody>
                </table>
                <h2 className="float-right">Order Total: $1899.95</h2>
                <br />
                <br />
                <h2>Remove Order from System and Inventory:</h2>
                <p>WARNING: This will permanently delete the order from the system and remove all order detail records.</p>
                <button>DELETE</button>
            </div>
        </>
	);
}

export default OrderDetailsPage;