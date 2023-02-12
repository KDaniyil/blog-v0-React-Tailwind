type Props = {}
const Post = (props: Props) => {
    return (
        <div className="mx-6 mb-10 w-96">
            <img
                className="w-full h-72 object-cover rounded-lg"
                src="https://images.pexels.com/photos/14025846/pexels-photo-14025846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="post"
            />
            <div className="flex flex-col items-center">
                <div>
                    <span className="text-sm text-orange-400 mt-4 mr-3 cursor-pointer">
                        Music
                    </span>
                    <span className="text-sm text-orange-400 mt-4 mr-3 cursor-pointer">
                        Life
                    </span>
                </div>
                <span className="text-2xl font-bold mt-4 cursor-pointer">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <hr />
                <span className="text-sm italic text-zinc-500 mt-4">
                    1 hour ago
                </span>
                <p className="postDesc text-sm text-zinc-500 mt-4 overflow-hidden text-ellipsis line-clamp-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio corrupti quis tempora voluptas? Error dicta sit
                    cupiditate! Quis tempore similique eum laborum. Eius modi
                    sapiente debitis nihil facilis praesentium esse. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Veniam minus
                    sapiente praesentium vitae est, inventore recusandae rerum
                    cupiditate quo excepturi eligendi error reprehenderit
                    doloremque veritatis corrupti quae, adipisci omnis
                    provident! Dicta eum aspernatur iste commodi natus aperiam
                    quasi optio qui numquam ea quae ad, beatae quisquam non
                    illum culpa in sapiente cumque. Rem unde quod alias iusto
                    quasi, aspernatur doloribus! Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Voluptatum, laboriosam
                    expedita impedit nulla facilis omnis veritatis aliquid
                    velit, ullam, cum nostrum! Perspiciatis maxime debitis totam
                    quos accusamus quidem quod reprehenderit?
                </p>
            </div>
        </div>
    )
}
export default Post
