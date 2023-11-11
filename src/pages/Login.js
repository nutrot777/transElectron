import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"; // Import Navigate
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = async () => {
		// const result = (await axios.post("backend-login-endpoint-goes-here", { email, password })).data;
		//localStorage.setItem("token", result.token);
		//this is modelling token recieved from server
		localStorage.setItem("token", "123456");

		// token is gotten from the server after user login
		// and token recieved
		if (localStorage.getItem("token")) {
			//token might have a different name in session/local storage
			//navigate to dashboard if true
			navigate("/");
		}
	};

	const handleInputChange = (name, value) => {
		setCredentials((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};
	const togglePasswordVisibility = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	return (
		<div style={styles.container}>
			<h1>Login</h1>
			<form style={styles.form}>
				<label>
					Email:
					<input
						type="text"
						name="email"
						value={credentials.email}
						onChange={(e) => handleInputChange(e.target.name, e.target.value)}
						style={styles.input}
					/>
				</label>
				<label>
					Password:
					<div style={{ position: "relative" }}>
						<input
							type={showPassword ? "text" : "password"}
							value={credentials.password}
							name="password"
							onChange={(e) => handleInputChange(e.target.name, e.target.value)}
							style={styles.input}
						/>
						{showPassword ? (
							<FaEyeSlash style={styles.eyeIcon} onClick={togglePasswordVisibility} />
						) : (
							<FaEye style={styles.eyeIcon} onClick={togglePasswordVisibility} />
						)}
					</div>
				</label>
				<button type="button" onClick={handleLogin} style={styles.button}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		backgroundColor: "#f4f4f4",
	},
	form: {
		width: "300px",
		padding: "20px",
		backgroundColor: "#fff",
		borderRadius: "8px",
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
		boxSizing: "border-box",
	},
	input: {
		width: "100%",
		marginBottom: "15px",
		padding: "10px",
		borderRadius: "4px",
		border: "1px solid #ccc",
		boxSizing: "border-box",
	},
	eyeIcon: {
		position: "absolute",
		right: "10px",
		top: "50%",
		transform: "translateY(-50%)",
		cursor: "pointer",
	},
	button: {
		width: "100%",
		padding: "10px",
		backgroundColor: "#4CAF50",
		color: "#fff",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer",
	},
};
