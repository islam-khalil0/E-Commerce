import React, { useState } from "react";
import "./Login.css";
import video from "../../videos/BgVideo.mp4";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../Redux/contants/ProductActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const dispatch = useDispatch();
  const Users = useSelector((state) => state.UsersReducer.users);
 

  const findUser =Users.find(
    (user) => user.email === Email && user.pass === Password
  );
  const history = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();

    if (findUser) {
      dispatch(
        logIn({
          email: Email,
          pass: Password,
        })
      );
      notifySuccess();
      history("/");
    } else {
      notifyError();
    }
  };

  const notifySuccess = () =>
    toast.success("Successful You can login now", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error("No user has this information", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="baseDivSignUp">
      <video autoPlay muted loop={true} width="100%" className="BgVideo">
        <source src={video} type="video/mp4" />
      </video>
      <form className="form" onSubmit={(e) => handleLogIn(e)}>
        <p className="titleLogin">Login </p>
        <label>
          <input
            required
            type="email"
            className="input"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            type="password"
            className="input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>
        <button className="submit">
          <p>LogIn</p>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
