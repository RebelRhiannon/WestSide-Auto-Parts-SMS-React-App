function CreateCustomerPage() {

    return (
        <>
            <div className="customer-page">
                <h2>Customer Information</h2>
                <form>
                    <table className="customer-table">
                        <tbody>
                        <tr className="customer-table">
                            <td className="customer-table"><label>First Name:</label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter First Name"/></td>
                            <td className="customer-table"><label>Last Name:</label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter Last Name"/></td>
                            <td className="customer-table"><label className="rightEntry">Email:  </label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter Email"/></td>
                        </tr>
                        <tr className="customer-table">
                            <td className="customer-table"><label>Address:</label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter Address"/></td>
                            <td className="customer-table"><label>Phone:</label></td>
                            <td className="customer-table"><input type="text" placeholder="Enter Phone #"/></td>
                            <td className="customer-table"></td>
                            <td className="customer-table"><button>Create</button></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                <br />
            </div>
        </>
    );
}

export default CreateCustomerPage;