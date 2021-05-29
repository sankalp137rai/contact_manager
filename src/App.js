import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddContacts from "./components/AddContacts";
import ContactList from "./components/ContactList";
import UpdateContact from "./components/UpdateContact";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	// const [contacts, setContacts] = useState([]);
	// const handleInput = (contact) => {
	// 	setContacts([...contacts, contact]);
	// };
	// console.log(contacts);

	return (
		<Router>
			<div
				style={{
					height: "100vh",
					position: "relative",
					background: "rgb(255,174,66, 0.01)",
				}}>
				<Header />
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/contactList" exact>
					<ContactList />
				</Route>
				<Route path="/addContacts" exact>
					<AddContacts />
				</Route>
				<Route path="/updateContact" exact>
					<UpdateContact />
				</Route>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
