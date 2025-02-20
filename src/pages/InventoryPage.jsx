import { Link } from 'react-router-dom';

function InventoryPage() {

    return (
        <>
            <div className="customer-page">
                <form>
                    <table className="customer-search-table">
                        <tbody>
                        <tr>
                            <td className="customer-search-table" colSpan="2"><h2>Search for a Product</h2></td>
                        </tr>
                        <tr>
                            <td className="customer-search-table"><label>Product ID:</label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter Product ID"/></td>
                            <td className="customer-search-table"></td>
                            <td className="customer-search-table"><button className="app-nav">Find a Product</button></td>
                        </tr>
                        </tbody>
                    </table>
                </form><br />
                <hr></hr>
                <h2>Orders</h2>
                <form>
                    <table className="customer-table">
                        <tbody>
                        <tr>
                            <td className="customer-table"><button className="float-left">Show All Products</button></td>
                            <td className="customer-table">
                                <Link to="/create_product">
                                <button className="float-right">Create a Product</button>
                            </Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <p>Click on the Product ID to see the item details.</p>
                <table>
                    <thead>
                    <th>Product ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Total Quantity</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td><Link to="/product_details">1</Link></td>
                        <td>Goodyear Tire</td>
                        <td>Single P225 70R16 Goodyear tire</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Magnaflow Catalytic Converter</td>
                        <td>Magnaflow catalytic converter for Toyota Camry vehicles</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Brembo Brake Caliper Set</td>
                        <td>Two front Red Brembo brake calipers for Porsche 911 vehicles</td>
                        <td>100</td>
                    </tr>
                    </tbody>
                </table>
                <br />
            </div>
        </>
    );
}

export default InventoryPage;