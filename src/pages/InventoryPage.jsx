import { Link } from 'react-router-dom';

function InventoryPage() {
    // Sample inventory data (This would be fetched from your backend)
    const inventoryData = [
        { inventory_line_id: 1, product_id: 1, warehouse: "Warehouse A", quantity: 100 },
        { inventory_line_id: 2, product_id: 1, warehouse: "Warehouse B", quantity: 50 },
        { inventory_line_id: 3, product_id: 2, warehouse: "Warehouse A", quantity: 500 },
        { inventory_line_id: 4, product_id: 3, warehouse: "Warehouse B", quantity: 100 }
    ];

    return (
        <>
            <div className="inventory-page">
                <form>
                    <table className="inventory-search-table">
                        <tbody>
                            <tr>
                                <td colSpan="2"><h2>Search for a Product</h2></td>
                            </tr>
                            <tr>
                                <td><label>Product ID:</label></td>
                                <td><input type="text" placeholder="Enter Product ID" /></td>
                                <td><button className="app-nav">Find a Product</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>

                <br />
                <hr />
                <h2>Inventory</h2>

                <form>
                    <table className="inventory-table">
                        <tbody>
                            <tr>
                                <td><button className="float-left">Show All Inventory</button></td>
                                <td>
                                    <Link to="/create_product">
                                        <button className="float-right" type="button">Create a Product</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>

                <p>Click on the Product ID to see the item details.</p>

                <table className="inventory-table">
                    <thead>
                        <tr>
                            <th>Inventory Line ID</th>
                            <th>Product ID</th>
                            <th>Warehouse</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData.map((item) => (
                            <tr key={item.inventory_line_id}>
                                <td>{item.inventory_line_id}</td>
                                <td><Link to={`/product_details/${item.product_id}`}>{item.product_id}</Link></td>
                                <td>{item.warehouse}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <br />
            </div>
        </>
    );
}

export default InventoryPage;

