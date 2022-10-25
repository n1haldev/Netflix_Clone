import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };
  const navigateToForgotPassword = () => {
    navigate("/forgot");
  };
  return (
    <div id="parent_login">
      <div id="login">
        <form>
          <h3 className="title">Sign In</h3>
            <input
              type="text"
              name="username"
              required
              autoFocus
              autoComplete="off"
              placeholder="Email"
            />
            <p className="invalid_username">Invalid Email</p>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
            />
            <p className="forgot_password" onClick={navigateToForgotPassword}>
              Forgot Password ?
            </p>
            <p className="invalid_password">Invalid Password</p>
          <div className="button_container">
            <button className="sign_in_button">Sign In</button>
            <p className="no_account">Don't have an account ?</p>
            <button className="sign_up_button" onClick={navigateToSignUp}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function login () {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
};
