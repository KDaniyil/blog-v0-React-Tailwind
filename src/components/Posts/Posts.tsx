import Post from 'components/Post/Post'

type Props = {}
const Posts = (props: Props) => {
    return (
        <div className="posts flex flex-wrap w-9/12 m-5">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
export default Posts
