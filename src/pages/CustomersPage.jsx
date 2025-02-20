import { Link } from 'react-router-dom';

function CustomersPage() {

    return (
		<>
        <div className="customer-page">
            <form>
            <table className="customer-search-table">
                <tbody>
                    <tr>
                        <td className="customer-search-table" colSpan="2"><h2>Search for a Customer</h2></td>
                    </tr>
                    <tr>
                        <td className="customer-search-table"><label>Customer ID:</label></td>
                        <td className="customer-table"><input type="text"  /></td>
                        <td className="customer-search-table"></td>
                        <td className="customer-search-table"><button className="app-nav">Find a Customer</button></td>
                    </tr>
                </tbody>
            </table>
            </form><br />
            <hr></hr>
            <h2>Customers</h2>
            <form>
                <table className="customer-table">
                    <tbody>
                    <tr>
                        <td className="customer-table"><button className="float-left">Show All Customers</button></td>
                        <td className="customer-table">
                            <Link to="/create_customer">
                                <button className="float-right">Create a Customer</button>
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
            <p>Click on a Customer ID to see the customer's details.</p>
            <table>
                <thead>
                    <th>Customer ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </thead>
                <tbody>
                <tr>
                    <td><Link to="/account">1</Link></td>
                    <td>jane@gmail.com</td>
                    <td>Jane</td>
                    <td>Smith</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>john@gmail.com</td>
                    <td>John</td>
                    <td>Robertson</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>mary@hotmail.com</td>
                    <td>Mary</td>
                    <td>Jackson</td>
                </tr>
                </tbody>
            </table>
            <br />
        </div>
    	</>
    );
}

export default CustomersPage;