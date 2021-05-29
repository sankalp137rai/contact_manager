import {
	ListItem,
	ListItemAvatar,
	Avatar,
	Typography,
	makeStyles,
} from "@material-ui/core";
import axios from "axios";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import { Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
	contactList: {
		border: "5px solid rgb(255,174,66, 0.8)",
		minWidth: "600px",
		margin: "20px 10px 0px",
	},
	details: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "spaceAround",
		margin: "0 20px 0 30px",
	},
	name: {
		margin: "5px",
		fontSize: "20px",
		fontStretch: "ultra-expanded",
		fontWeight: "bold",
	},
	otherDetails: {
		fontSize: "15px",
		fontStretch: "ultra-expanded",
	},
	avatar: {
		// padding: "7px",
	},
}));

const ContactCard = (props) => {
	const history = useHistory();
	const classes = useStyles();
	// console.log(props);
	const { _id, name, phoneNo, email } = props.contact;
	return (
		<Box className={classes.contactList}>
			<ListItem>
				<ListItemAvatar className={classes.avatar}>
					<Avatar alt={name} />
				</ListItemAvatar>
				<Box className={classes.details}>
					<Typography className={classes.name}>{name}</Typography>
					<Typography
						className={classes.otherDetails}
					>{`E-mail: ${email}`}</Typography>
					<Typography
						className={classes.otherDetails}
					>{`Phone no: ${phoneNo}`}</Typography>
				</Box>
				<Box
					style={{
						display: "flex",
						alignSelf: "flex-end",
						alignItems: "center",
						justifyContent: "center",
						margin: "0 0 0 50px",
					}}
				>
					<EditRoundedIcon
						style={{
							color: "green",
							fontSize: "30",
							cursor: "pointer",
							margin: "7px",
						}}
						onClick={() => {
							console.log("Update");
							console.log(_id);
							history.push({
								pathname: "/updateContact",
								state: { id: _id },
							});
						}}
					/>
					<DeleteRoundedIcon
						style={{ color: "red", fontSize: "35", cursor: "pointer", margin: "7px" }}
						onClick={() => {
							console.log("Deleted");
							console.log(_id);
							axios
								.delete(`http://localhost:5000/contactList/delete`, {
									data: { id: _id },
									param: { id: _id },
								})
								.then((respoanse) => {
									console.log(respoanse);
									// CustomizedSnackbars();
									// CustomizedSnackbars.handleClick();
									history.push("/contactList/delete");
									history.push("/contactList");
								})
								.catch((err) => {
									console.log(err);
								});
						}}
					/>
				</Box>
			</ListItem>
		</Box>
	);
};

export default ContactCard;