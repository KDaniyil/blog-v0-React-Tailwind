import './Header.css'
type Props = {}
const Header = (props: Props) => {
    return (
        <div className="mt-16">
            <div className="headerTitles flex flex-col items-center">
                <span className="absolute top-52 text-xl">Travel</span>
                <span className="absolute top-56 text-8xl">Blog</span>
            </div>
            <img
                className="w-full h-96 mt-20 object-cover"
                src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="home page"
            />
        </div>
    )
}
export default Header
