import Sidebar from 'components/Sidebar/Sidebar'
import SinglePost from 'components/SinglePost/SinglePost'

type Props = {}
const Single = (props: Props) => {
    return (
        <div className="flex">
            <SinglePost />
            <Sidebar />
        </div>
    )
}
export default Single
