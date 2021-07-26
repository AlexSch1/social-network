import { useRef } from "react";
import axios from "axios";
import {useHistory} from "react-router";
import './register.scss';
import {Link} from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity(`Passwords don't match.`);
      return;
    }

    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      await axios.post("/auth/register", user);
      history.push("/login");
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <div className="register d-flex align-items-center justify-content-center">
      <div className="container d-flex   align-items-center justify-content-center">
        <div className="register__left col mb-5">
          <div className="register__logo d-flex flex-column  align-items-center justify-content-center">
            <img
              src="https://img.icons8.com/plasticine/50/000000/dinosaur.png"
              className="register__logo-img"
              alt="logo"
            />
            <span className="register__logo-text">Dinosaur</span>
          </div>
          <div className="register__desc text-black-50 text-center">
            Connect with friends and the world around you on Dinosaur.
          </div>
        </div>
        <div className="register__right col-6">
          <form onSubmit={handleSubmit} className="register__box p-5 d-flex flex-column justify-content-between align-items-center">
            <input
              type="text"
              required
              className="form-control"
              placeholder="Username"
              ref={username}
            />
            <input
                type="email"
                required
                className="form-control"
                placeholder="Email"
                ref={email}
            />
            <input
              type="password"
              required
              className="form-control"
              placeholder="Password"
              minLength="3"
              ref={password}
            />
            <input
              type="password"
              required
              minLength="3"
              ref={passwordAgain}
              className="form-control"
              placeholder="Password Again"
            />
            <button type="submit" className="btn btn-primary w-100">Sing Up</button>
            <button type="button" className="btn btn-success">
              <Link to="/login">Login into Account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
