import "./style.css";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
        <Navbar />
        <div className="login__container">
            <form className="login__form">
                <h2 className="login__title">LOG IN</h2>
                <div className="login__input-group">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="login__input"
                        name="username"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="login__input"
                        name="password"
                    />
                </div>
                <input 
                    type="button" 
                    value="LOG IN"
                    className="login__button"
                />
                <p className="login__text">
                    Don't have an account? <Link to="/REGISTER" className="login__link">CREATE ACCOUNT</Link>
                </p>
                <p className="login__text">
                    Don't remember your password? <span className="login__link">RESET PASSWORD</span>
                </p>
            </form>
        </div>
        <Footer />
    </>
  )
}

export default Login