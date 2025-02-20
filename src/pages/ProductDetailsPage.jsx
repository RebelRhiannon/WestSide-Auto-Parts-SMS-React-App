function ProductDetailsPage() {

    return (
        <>
            <div className="customer-page">
                <h2>Product Details for Product ID 1</h2>
                <table className="customer-search-table">
                    <tbody>
                    <tr className="customer-search-table">
                        <td className="customer-search-table"><h3>Name:</h3></td>
                        <td className="customer-search-table"><h3>Goodyear Tire</h3></td>
                        <td className="customer-search-table"><h3>MSRP:</h3></td>
                        <td className="customer-search-table"><h3>$149.99</h3></td>
                        <td className="customer-search-table"><h3>Wholesale Cost:</h3></td>
                        <td className="customer-search-table"><h3>$89.99</h3></td>
                    </tr>
                    <tr className="customer-search-table">
                        <td className="customer-search-table"><h3>Description:</h3></td>
                        <td className="customer-search-table">Single P225 70R16 Goodyear tire</td>
                        <td className="customer-search-table"></td>
                        <td className="customer-search-table"></td>
                        <td className="customer-search-table"></td>
                        <td className="customer-search-table"></td>
                    </tr>
                    </tbody>
                </table>
                <hr />
                <h2>Inventory Locations</h2>
                <table className="customer-search-table">
                    <tbody>
                    <tr className="customer-search-table">
                        <td className="customer-search-table"><h3>Warehouse AW4:</h3> 100 units</td>
                    </tr>
                    </tbody>
                </table>
                <h2>Remove Product from System and Inventory:</h2>
                <p>WARNING: This will permanently delete the product from the system and remove all inventory records.</p>
                <button>DELETE</button>
            </div>
        </>
	);
}

export default ProductDetailsPage;