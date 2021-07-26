import './login.scss';
import {useContext, useEffect, useRef} from "react";
import {loginCall} from "../../core/apiCalls";
import {AuthContext} from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core";

export default function Login() {
  const { isFetching, dispatch } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({
      email: email.current.value,
      password: password.current.value,
    }, dispatch);
  }

  useEffect(() => {
    console.log(isFetching)
  })

  return (
    <div className="login d-flex align-items-center justify-content-center">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="login__left col mb-5">
          <div className="login__logo d-flex flex-column  align-items-center justify-content-center">
            <img
                alt="logo"
              src="https://img.icons8.com/plasticine/50/000000/dinosaur.png"
              className="login__logo-img"
            />
            <span className="login__logo-text">Dinosaur</span>
          </div>
          <div className="login__desc text-black-50 text-center">
            Connect with friends and the world around you on Dinosaur.
          </div>
        </div>
        <div className="login__right col-4">
          <form className="login__box p-4 d-flex flex-column justify-content-between align-items-center" onSubmit={handleClick}>
            <input ref={email} required type="email" className="form-control" placeholder="Email" />
            <input ref={password} required
              type="password"
                   minLength="3"
              className="form-control"
              placeholder="Password"
            />
            <button disabled={isFetching} className="btn btn-primary w-100">{ isFetching ? <CircularProgress color="inherit" size="20px"/> : "Log In"}</button>
            <span className="login__forgot text-black-50">
              Forgot Password?
            </span>
            <button className="btn btn-success">{ isFetching ? <CircularProgress color="inherit" size="20px"/> : "Create a New Account"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
