import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBank,
    faCoffee,
    faVideoSlash,
} from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
type Props = {}
function Sidebar({}: Props) {
    return (
        <div className="flex flex-col items-center w-3/12 m-5 pb-7 bg-neutral-100 rounded-lg">
            <div className="flex flex-col items-center">
                <span className="m-3 p-1 w-3/4 border-t border-b border-solid border-slate-500 text-xs font-semibold text-center">
                    ABOUT ME
                </span>
                <img
                    className="mt-4"
                    src="https://images.pexels.com/photos/6324369/pexels-photo-6324369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="aboutMe"
                />
                <p className="p-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita recusandae ratione cupiditate sequi assumenda
                    laudantium ipsum suscipit libero, rem cumque vel officia
                    consequatur similique odit. Numquam consequatur similique
                    odit molestias?
                </p>
            </div>
            <div className="flex flex-col items-center">
                <span className="m-3 p-1 w-3/4 border-t border-b border-solid border-slate-500 text-xs font-semibold text-center">
                    CATEGORIES
                </span>
                <ul className="mb-7 text-center">
                    <li className="w-1/2 mt-4 cursor-pointer inline-block">
                        Life
                    </li>
                    <li className="w-1/2 mt-4 cursor-pointer inline-block">
                        Music
                    </li>
                    <li className="w-1/2 mt-4 cursor-pointer inline-block">
                        Style
                    </li>
                    <li className="w-1/2 mt-4 cursor-pointer inline-block">
                        Sport
                    </li>
                    <li className="w-1/2 mt-4 cursor-pointer inline-block">
                        Tech
                    </li>
                    <li className="w-1/2 mt-4 cursor-pointer inline-block">
                        Cinema
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-center">
                <span className="m-3 p-1 w-3/4 border-t border-b border-solid border-slate-500 text-xs font-semibold text-center">
                    FOLLOW US
                </span>
                <div className="mt-4 w-64 flex items-center justify-center">
                    <FontAwesomeIcon
                        className="text-lg ml-3 cursor-pointer text-zinc-800"
                        icon={faCoffee}
                    />
                    <FontAwesomeIcon
                        className="text-lg ml-3 cursor-pointer text-zinc-800"
                        icon={faVideoSlash}
                    />
                    <FontAwesomeIcon
                        className="text-lg ml-3 cursor-pointer text-zinc-800"
                        icon={faAddressBook}
                    />
                    <FontAwesomeIcon
                        className="text-lg ml-3 cursor-pointer text-zinc-800"
                        icon={faBank}
                    />
                </div>
            </div>
        </div>
    )
}
export default Sidebar
