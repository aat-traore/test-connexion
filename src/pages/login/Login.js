import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";



const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
{/* const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };  */}
   const navigate= useNavigate
  const handleSubmit = async (e) => {
    e.preventDefault();
	

    try {
	
      const response = await axios.post(
        "http://localhost:9000/api/login",
		{	
           	 email: email,
            password: password
        }
        
      );
	  
      console.log(response.data);
		navigate('/');
    } catch (error) {
      console.error("Connexion failed:", error);
    }
  };

  return (
    <>
      <div className="container container_register">
	<div className="screen_register">
		<div className="screen__content">
			<form className="register" onSubmit={handleSubmit}>
				
                
                
                <div className="register__field">
					<i className="login__icon fas fa-user"></i>
					<input type="email"
					className="register__input" 
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="register__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password"
					className="register__input"
					 placeholder="Password" 
					 value={password}
					 onChange={(e) => setPassword(e.target.value)}
					 />
				</div>
				
				<button className="button register__submit">
					<span className="button__text"> Connexion</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
	</div>
    </>
  );
};

export default Login;
