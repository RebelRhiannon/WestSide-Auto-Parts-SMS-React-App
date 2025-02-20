function CreateProductPage() {

    return (
        <>
            <div className="customer-page">
                <h2>Product Information</h2>
                <form>
                    <table className="customer-table">
                        <tbody>
                        <tr className="customer-search-table">
                            <td className="customer-search-table"><label>Name:</label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter Product Name"/></td>
                            <td className="customer-search-table"><label>MSRP:</label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter MSRP"/></td>
                            <td className="customer-table"></td>
                        </tr>
                        <tr className="customer-table"><td className="customer-table"><p> </p></td></tr>
                        <tr className="customer-table">
                            <td className="customer-search-table"><label>Description:</label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter Description"/></td>
                            <td className="customer-search-table"><label>Wholesale Cost:</label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter Wholesale Cost"/></td>
                            <td className="customer-table"></td>
                        </tr>
                        </tbody>
                    </table>
                    <br />
                    <br />
                    <button className="float-right">Create</button>
                </form>
                <br />
            </div>
        </>
    );
}

export default CreateProductPage;