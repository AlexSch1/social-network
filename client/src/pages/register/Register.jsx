import "./register.scss";

export default function Register() {
  return (
    <div className="register d-flex align-items-center justify-content-center">
      <div className="container d-flex   align-items-center justify-content-center">
        <div className="register__left col mb-5">
          <div className="register__logo d-flex flex-column  align-items-center justify-content-center">
            <img
              src="https://img.icons8.com/plasticine/50/000000/dinosaur.png"
              className="register__logo-img"
            />
            <span className="register__logo-text">Dinosaur</span>
          </div>
          <div className="register__desc text-black-50 text-center">
            Connect with friends and the world around you on Dinosaur.
          </div>
        </div>
        <div className="register__right col-6">
          <div className="register__box p-5 d-flex flex-column justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
            <input type="text" className="form-control" placeholder="Email" />
            <input
              type="text"
              className="form-control"
              placeholder="Password"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Password Again"
            />
            <button className="btn btn-primary w-100">Sing Up</button>
            <button className="btn btn-success">Login into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
