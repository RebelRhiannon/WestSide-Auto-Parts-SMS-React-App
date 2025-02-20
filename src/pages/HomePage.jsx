function HomePage() {

    return (
		<>
        <div className="home-page">
        <h2>Welcome to Westside Auto Parts Sales Management System</h2>
            <p>Access customer records, orders, manage inventory, and approve shipments all in one place!</p>
		<br />
        <table>
            <thead>
                <th>Daily Sales</th>
                <th>Monthly Sales</th>
                <th>Yearly Sales</th>
            </thead>
            <tbody>
                <tr>
                    <td>$2,564</td>
                    <td>$13,564</td>
                    <td>$143,564</td>
                </tr>
            </tbody>
        </table>
        </div>
    	</>
	);
}

export default HomePage;