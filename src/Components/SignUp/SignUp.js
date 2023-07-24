import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import video from "../../videos/BgVideo.mp4";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../Redux/contants/ProductActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const Users = useSelector((state) => state.UsersReducer.users);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      signUp({
        id: Date.now().toString(),
        firstName: Firstname,
        lastName: Lastname,
        email: Email,
        pass: Password,
        confirmPass: ConfirmPassword,
      })
    );

    if (Users) {
      notify();
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const notify = () =>
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

  return (
    <div className="baseDivSignUp">
      <video autoPlay muted loop={true} width="100%" className="BgVideo">
        <source src={video} type="video/mp4" />
      </video>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <p className="titleSignUp">Sign Up</p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              required
              type="text"
              className="input"
              value={Firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required
              type="text"
              className="input"
              value={Lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <span>Lastname</span>
          </label>
        </div>

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
        <label>
          <input
            required
            type="password"
            className="input"
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ?
          <NavLink to="/logIn">
            <a href="#">LogIn</a>
          </NavLink>{" "}
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
