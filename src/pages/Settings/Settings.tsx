import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sidebar from 'components/Sidebar/Sidebar'
import './Settings.css'

type Props = {}
const Settings = (props: Props) => {
    return (
        <div className="flex">
            <div className="w-9/12 p-5">
                <div className="flex items-center justify-between">
                    <span className="text-3xl mb-5 text-rose-400">
                        Update Your Account
                    </span>
                    <span className="text-red-600 text-xs cursor-pointer">
                        Delete Your Account
                    </span>
                </div>
                <form action="" className="settingsForm flex flex-col">
                    <label htmlFor="">Profile Picture</label>
                    <div className="flex items-center my-3">
                        <img
                            className=" w-16 h-16 rounded-2xl object-cover"
                            src="https://w7.pngwing.com/pngs/234/927/png-transparent-user-computer-icons-login-google-account-others-miscellaneous-blue-head-thumbnail.png"
                            alt="picture"
                        />
                        <label htmlFor="fileInput">
                            <FontAwesomeIcon
                                className=" w-6 h-6 rounded-full text-rose-400 border border-black flex items-center justify-center cursor-pointer ml-3"
                                icon={faUserCircle}
                            />
                        </label>
                        <input type="file" id="fileInput" className="hidden" />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Olena" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="olena@gmail.com" />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className=" w-36 self-center border-none rounded-xl text-white bg-teal-700 p-2 mt-5 cursor-pointer">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
export default Settings
