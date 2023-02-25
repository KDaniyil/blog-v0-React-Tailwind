import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
type Props = {}
const SinglePost = (props: Props) => {
    return (
        <div className="flex w-9/12">
            <div className="p-5 pr-0">
                <img
                    className="w-full h-80 rounded-md object-cover"
                    src="https://images.pexels.com/photos/14025846/pexels-photo-14025846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="post"
                />
                <h1 className="text-center text-3xl m-2">
                    Lorem ipsum, dolor sit amet consectetur
                    <div className="float-right">
                        <FontAwesomeIcon
                            className="text-lg ml-3 cursor-pointer text-teal-800"
                            icon={faEdit}
                        />
                        <FontAwesomeIcon
                            className="text-lg ml-3 cursor-pointer text-red-800"
                            icon={faTrashAlt}
                        />
                    </div>
                </h1>
                <div className="mb-5 flex justify-between text-base text-amber-500">
                    <span className="singlePostAuthor">
                        Author: <b>Olena</b>
                    </span>
                    <span className="singlePostDate">1 hours ago</span>
                </div>
                <p className="text-slate-600 text-lg first-letter:ml-5 first-letter:text-3xl first-letter:font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                    eius nesciunt incidunt maxime laudantium, aliquid corporis
                    rem officia adipisci quibusdam exercitationem. Sit, animi
                    recusandae sint quaerat explicabo maxime tempore
                    consequuntur. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. In eius nesciunt incidunt maxime
                    laudantium, aliquid corporis rem officia adipisci quibusdam
                    exercitationem. Sit, animi recusandae sint quaerat explicabo
                    maxime tempore consequuntur. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. In eius nesciunt incidunt
                    maxime laudantium, aliquid corporis rem officia adipisci
                    quibusdam exercitationem. Sit, animi recusandae sint quaerat
                    explicabo maxime tempore consequuntur.
                </p>
            </div>
        </div>
    )
}
export default SinglePost
