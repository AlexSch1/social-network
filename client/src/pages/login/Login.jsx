import './login.scss';
export default function Login() {
    return (
        <div className="login d-flex align-items-center justify-content-center">
            <div className="container d-flex align-items-center justify-content-center">
                <div className="login__left col mb-5">
                    <div className="login__logo d-flex flex-column  align-items-center justify-content-center">
                        <img src="https://img.icons8.com/plasticine/50/000000/dinosaur.png" className="login__logo-img"/>
                        <span className="login__logo-text">
                            Dinosaur
                        </span>
                    </div>
                    <div className="login__desc text-black-50 text-center">
                        Connect with friends and the world around you on Dinosaur.
                    </div>
                </div>
                <div className="login__right col-4">
                    <div className="login__box p-4 d-flex flex-column justify-content-between align-items-center">
                        <input type="text" className="form-control" placeholder="Email"/>
                        <input type="text" className="form-control" placeholder="Password"/>
                        <button className="btn btn-primary w-100">Log In</button>
                        <span className="login__forgot text-black-50">Forgot Password?</span>
                        <button className="btn btn-success">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

