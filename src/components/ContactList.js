import { useHistory } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import axios from "axios";

function ContactList(props) {
	let [userContactList, setUserContactList] = useState([]);
	let history = useHistory();

	useEffect(() => {
		let gettingContactList = async () => {
			let response = await axios.get("https://git.heroku.com/fierce-shore-54445.git/contactList");
			// console.log(response);
			setUserContactList(response.data);
		};

		gettingContactList();
	}, []);

	const randerContactList = userContactList.map((contact, idx) => {
		return <ContactCard contact={contact} key={idx} />;
	});

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				minHeight: "80%",
			}}
		>
			<h1
				style={{
					margin: "50px 0",
					borderBottom: "5px solid rgb(255,174,66, 0.8)",
					fontFamily: "'Squada One', cursive",
				}}
			>
				Your Previously added Contacts
			</h1>
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "100%",
				}}
			>
				{randerContactList}
			</Box>
			<Button
				variant="contained"
				color="primary"
				style={{ minWidth: "30%", display: "flex", margin: "50px 0" }}
				onClick={() => {
					history.push("/addContacts");
				}}
			>
				ADD Contacts
			</Button>
		</div>
	);
}

export default ContactList;

