import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
	areaField: {
		display: "flex",
		flexDirection: "column",
	},
	label: {
		fontWeight: "bold",
		marginTop: "10px",
	},
	inputText: {
		margin: "10px 0px",
		minWidth: "50ch",
	},
	button: {
		fontWeight: "bold",
		padding: "7px 20px",
	},
});

function AddContacts() {
	const classes = useStyles();
	let [name, setName] = useState("");
	let [phoneNo, setPhoneNo] = useState("");
	let [email, setEmail] = useState("");
	let history = useHistory();

	function submitForm() {
		const contactDetails = {
			name: name,
			phoneNo: phoneNo,
			email: email,
		};
		axios
			.post("http://localhost:5000/addContacts", contactDetails)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		setName("");
		setPhoneNo("");
		setEmail("");
		history.push("/contactList");
	}

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h1
				style={{
					margin: "50px 0",
					borderBottom: "5px solid rgb(255,174,66, 0.8)",
					fontFamily: "'Squada One', cursive",
				}}
			>
				Add your Contacts Here
			</h1>
			<form noValidate autoComplete="off" style={{ minWidth: "30%" }}>
				<Box className={classes.areaField}>
					<Box className={classes.label}>Name :</Box>
					<TextField
						className={classes.inputText}
						value={name}
						onChange={(event) => setName(event.target.value)}
						variant="outlined"
					/>
				</Box>
				<Box className={classes.areaField}>
					<Box className={classes.label}>Phone no :</Box>
					<TextField
						className={classes.inputText}
						variant="outlined"
						value={phoneNo}
						onChange={(event) => setPhoneNo(event.target.value)}
					/>
				</Box>
				<Box className={classes.areaField}>
					<Box className={classes.label}>E-mail :</Box>
					<TextField
						className={classes.inputText}
						variant="outlined"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</Box>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={submitForm}
				>
					Add Contact
				</Button>
			</form>
			<div style={{ margin: "50px 0" }}>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					style={{}}
					onClick={() => {
						history.push("/contactList");
					}}
				>
					Contact List
				</Button>
			</div>
		</div>
	);
}

export default AddContacts;
