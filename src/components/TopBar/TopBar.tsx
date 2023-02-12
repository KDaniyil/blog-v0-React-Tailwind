import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faB,
    faBank,
    faCheckSquare,
    faCoffee,
    faDatabase,
    faHouseLaptop,
    faS,
    faSearch,
    faVideoSlash,
    faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
library.add(
    faB,
    faS,
    faHouseLaptop,
    faCheckSquare,
    faCoffee,
    faDatabase,
    faWindowMaximize
)

type Props = {
    user: boolean
}
function TopBar({ user }: Props) {
    return (
        <div className="w-full h-12 bg-white sticky z-50 top-0 flex items-center">
            <div className="flex w-3/12 items-center justify-center">
                <FontAwesomeIcon
                    className="text-xl mr-2.5 cursor-pointer text-zinc-800"
                    icon={faCoffee}
                />
                <FontAwesomeIcon
                    className="text-xl mr-2.5 cursor-pointer text-zinc-800"
                    icon={faVideoSlash}
                />
                <FontAwesomeIcon
                    className="text-xl mr-2.5 cursor-pointer text-zinc-800"
                    icon={faAddressBook}
                />
                <FontAwesomeIcon
                    className="text-xl mr-2.5 cursor-pointer text-zinc-800"
                    icon={faBank}
                />
            </div>
            <div className="flex w-6/12 justify-center">
                <ul className="flex ">
                    <li className="mr-2.5 text-lg font-light cursor-pointer">
                        <Link to={'/'}>HOME</Link>
                    </li>
                    <li className="mr-2.5 text-lg font-light cursor-pointer">
                        <Link to={'/post'}>POST</Link>
                    </li>
                    <li className="mr-2.5 text-lg font-light cursor-pointer">
                        <Link to={'/'}>CONTACT</Link>
                    </li>
                    <li className="mr-2.5 text-lg font-light cursor-pointer">
                        <Link to={'/write'}>WRITE</Link>
                    </li>
                    <li className="mr-2.5 text-lg font-light cursor-pointer">
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className="flex w-3/12 items-center justify-center">
                {user ? (
                    <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://w7.pngwing.com/pngs/234/927/png-transparent-user-computer-icons-login-google-account-others-miscellaneous-blue-head-thumbnail.png"
                        alt="image"
                    />
                ) : (
                    <>
                        <li className="mr-2.5 text-lg font-light cursor-pointer list-none">
                            <Link to={'/login'}>LOGIN</Link>
                        </li>
                        <li className="mr-2.5 text-lg font-light cursor-pointer list-none">
                            <Link to={'/register'}>REGISTER</Link>
                        </li>
                    </>
                )}
                <FontAwesomeIcon
                    className="text-xl mr-2.5 cursor-pointer text-zinc-800 ml-3"
                    icon={faSearch}
                />
            </div>
        </div>
    )
}
export default TopBar
