import { Link } from 'react-router-dom';

function OrdersPage() {

    return (
        <>
            <div className="customer-page">
                <form>
                    <table className="customer-search-table">
                        <tbody>
                        <tr>
                            <td className="customer-search-table" colSpan="2"><h2>Search for an Order</h2></td>
                        </tr>
                        <tr>
                            <td className="customer-search-table"><label>Order ID:</label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter Order ID"/></td>
                            <td className="customer-search-table"></td>
                            <td className="customer-search-table"><button className="app-nav">Find an Order</button></td>
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
                            <td className="customer-table"><button className="float-left">Show All Orders</button></td>
                            <td className="customer-table">
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <p>Click on the Order ID to see the order details.</p>
                <table>
                    <thead>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Sales Rep</th>
                    <th>Date</th>
                    <th>Total</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td><Link to="/order_details">1</Link></td>
                        <td>Jane Smith</td>
                        <td>Mark Robinson</td>
                        <td>05-06-2024</td>
                        <td>$1899.95</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>John Robertson</td>
                        <td>N/A</td>
                        <td>06-07-2024</td>
                        <td>$1299.99</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mary Jackson</td>
                        <td>Sally Davis</td>
                        <td>01-07-2025</td>
                        <td>$3699.99</td>
                    </tr>
                    </tbody>
                </table>
                <br />
            </div>
        </>
    );
}

export default OrdersPage;