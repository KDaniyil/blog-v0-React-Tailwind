import Header from 'components/Header/Header'
import Posts from 'components/Posts/Posts'
import Sidebar from 'components/Sidebar/Sidebar'

type Props = {}
const Home = (props: Props) => {
    return (
        <>
            <Header />
            <div className="home flex">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}
export default Home
