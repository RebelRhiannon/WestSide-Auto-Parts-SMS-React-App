import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import CustomerDetailsPage from './pages/CustomerDetailsPage.jsx';
import CustomersPage from './pages/CustomersPage.jsx';
import OrderDetailsPage from './pages/OrderDetailsPage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import CreateProductPage from './pages/CreateProductPage.jsx';
import CreateCustomerPage from './pages/CreateCustomerPage.jsx';
import InventoryPage from './pages/InventoryPage.jsx';
import HomePage from './pages/HomePage';
import logo from './assets/logo.png';

function App() {

    return (
      	<div className="app">
		  <header>
			  <br />
	      </header>
			<img src={logo} className="logo" alt="logo" />
        	<Router>
				<Navigation />
          		<Routes>
            		<Route path="/" element={<HomePage />}></Route>
            		<Route path="/account" element={<CustomerDetailsPage />}></Route>
            		<Route path="/customers" element={<CustomersPage />}></Route>
					<Route path="/create_customer" element={<CreateCustomerPage />}></Route>
					<Route path="/create_product" element={<CreateProductPage />}></Route>
					<Route path="/inventory" element={<InventoryPage />}></Route>
					<Route path="/product_details" element={<ProductDetailsPage />}></Route>
					<Route path="/order_details" element={<OrderDetailsPage />}></Route>
					<Route path="/orders" element={<OrdersPage />}></Route>
          		</Routes>
        	</Router>
      	  <footer>
	         <p>© 2025 Trevor Gililland and Alyshia Rhiannon</p>
	      </footer>
	    </div>
  );
}

export default App;