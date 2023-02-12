import { Link } from 'react-router-dom'
import './Login.css'
type Props = {}
const Login = (props: Props) => {
    return (
        <div className="login flex flex-col justify-center items-center">
            <span className="text-5xl"></span>
            <form action="" className="loginForm mt-5 flex flex-col">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email" />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password" />
                <button className="mt-5 cursor-pointer bg-pink-400 border-none text-white rounded-xl p-3">
                    Login
                </button>
            </form>
            <button className="absolute top-14 right-5 bg-teal-700 cursor-pointer border-none p-3 rounded-xl text-white">
                <Link to={'/register'}>Register</Link>
            </button>
        </div>
    )
}
export default Login
