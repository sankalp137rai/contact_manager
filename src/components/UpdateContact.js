import React, { useState, useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
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

function UpdateContact(props) {
	const classes = useStyles();
	let [name, setName] = useState("");
	let [phoneNo, setPhoneNo] = useState("");
	let [email, setEmail] = useState("");
	let history = useHistory();
	const location = useLocation();

	useEffect(() => {
		console.log("id: " + location.state.id);
		async function getContact() {
			let response = await axios.get(
				"https://git.heroku.com/fierce-shore-54445.git/updateContact/getContact",
				{
					params: {
						id: location.state.id,
					},
				}
			);
			console.log(response);
			setName(response.data.name);
			setPhoneNo(response.data.phoneNo);
			setEmail(response.data.email);
		}
		getContact();
	});

	function submitForm() {
		const contactDetails = {
			_id: location.state.id,
			name: name,
			phoneNo: phoneNo,
			email: email,
		};

		axios
			.put("https://git.heroku.com/fierce-shore-54445.git/updateContact/update", contactDetails)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

		// props.handleInput(contactDetails);
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
				height: "80vh",
			}}
		>
			<h1
				style={{
					margin: "50px 0",
					borderBottom: "5px solid rgb(255,174,66, 0.8)",
					fontFamily: "'Squada One', cursive",
				}}
			>
				Update Your Contact
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
					Update Contact
				</Button>
			</form>
		</div>
	);
}

export default UpdateContact;
