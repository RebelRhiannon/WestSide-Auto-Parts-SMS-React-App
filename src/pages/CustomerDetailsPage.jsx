import { Link } from 'react-router-dom';

function CustomerDetailsPage() {

    return (
		<>
        <div className="customer-page">
        <h2>Customer Information</h2>
            <form>
            <table className="customer-table">
                <tbody>
                    <tr className="customer-table">
                        <td className="customer-table"><label>First Name:</label></td>
                        <td className="customer-table"><input type="text" value="Jane"/></td>
                        <td className="customer-table"><label>Last Name</label></td>
                        <td className="customer-table"><input type="text" value="Smith"/></td>
                        <td className="customer-table"><label className="rightEntry">Email:  </label></td>
                        <td className="customer-table"><input type="text" value="jane@gmail.com"/></td>
                    </tr>
                    <tr className="customer-table">
                        <td className="customer-table"><label>Address:</label></td>
                        <td className="customer-table"><input type="text" value="443 Main St Los Angeles CA 94534"/></td>
                        <td className="customer-table"><label>Phone:</label></td>
                        <td className="customer-table"><input type="text" value="310-225-5878"/></td>
                        <td className="customer-table"></td>
                        <td className="customer-table"><button>UPDATE</button></td>
                    </tr>
                </tbody>
            </table>
            </form>
		<br />
            <hr></hr>
            <h2>Orders</h2>
            <p>Click on the Order ID to see the order details.</p>
            <table>
                <thead>
                    <th>Order ID</th>
                    <th>Sales Rep</th>
                    <th>Date</th>
                    <th>Total</th>
                </thead>
                <tbody>
                <tr>
                    <td><Link to="/order_details">1</Link></td>
                    <td>Mark Robinson</td>
                    <td>05-06-2024</td>
                    <td>$1899.95</td>
                </tr>
                </tbody>
            </table>
            <br />
            <h2>Remove Customer from System:</h2>
            <p>WARNING: This will permanently delete the customer from the system and remove all related order and order detail records.</p>
            <button>DELETE</button>
        </div>
    	</>
	);
}

export default CustomerDetailsPage;