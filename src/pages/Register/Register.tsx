import { Link } from 'react-router-dom'
import './Register.css'
type Props = {}
const Register = (props: Props) => {
    return (
        <div className="register flex flex-col justify-center items-center">
            <span className="text-5xl"></span>
            <form action="" className="registerForm mt-5 flex flex-col">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter your username" />
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email" />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password" />
                <button className="mt-5 cursor-pointer bg-teal-700 border-none text-white rounded-xl p-3">
                    Register
                </button>
            </form>
            <button className="absolute top-14 right-5 bg-pink-400 cursor-pointer border-none p-3 rounded-xl text-white">
                <Link to={'/login'}>Login</Link>
            </button>
        </div>
    )
}
export default Register
