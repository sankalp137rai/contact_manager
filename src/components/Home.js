import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

let useStyles = makeStyles(() => ({
	buttons: {
		margin: "20px",
		height: "50px",
		fontSize: "30px",
		padding: "7px 25px",
		background: "rgb(255,174,66, 0.1)",
		border: "5px solid rgb(255,174,66, 0.8)",
		borderRadius: "10px",
		fontFamily: "'Squada One', cursive",
		cursor: "pointer",
	},
}));

function Home() {
	let history = useHistory();
	const classes = useStyles();
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignContent: "center",
				alignItems: "center",
				height: "80vh",
			}}
		>
			<div>
				<button
					className={classes.buttons}
					onClick={() => {
						history.push("/addContacts");
					}}
				>
					ADD Contacts
				</button>
				<button
					className={classes.buttons}
					onClick={() => {
						history.push("/contactList");
					}}
				>
					Contact List
				</button>
			</div>
		</div>
	);
}

export default Home;
