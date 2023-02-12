import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}
const Write = (props: Props) => {
    return (
        <div className="pt-12">
            <form action="" className=" relative">
                <button className="absolute top-5 right-12 p-2 text-white bg-teal-700 rounded-lg cursor-pointer">
                    Publish
                </button>
                <div className="ml-36 flex items-center">
                    <label htmlFor="fileInput">
                        <FontAwesomeIcon
                            className=" w-6 h-6 rounded-full border border-black flex items-center justify-center cursor-pointer"
                            icon={faPlus}
                        />
                    </label>
                    <input type="file" id="fileInput" className="hidden" />
                    <input
                        type="text"
                        placeholder="Title"
                        autoFocus={true}
                        className="text-3xl border-none p-5 w-5/6 focus:outline-none"
                    />
                </div>
                <div className="ml-36 flex items-center">
                    <textarea
                        placeholder="Write your story ..."
                        className="text-3xl border-none p-5 w-5/6 focus:outline-none"
                    ></textarea>
                </div>
            </form>
        </div>
    )
}
export default Write
