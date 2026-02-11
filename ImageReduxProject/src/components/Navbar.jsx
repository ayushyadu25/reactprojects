import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center text-center p-5 bg-blue-900 text-2xl">
            <h2 className="font-medium text-2xl">Media Search</h2>
            <div className="flex gap-5 text-xl items-center">
                <Link className="bg-blue-100 text-black active:scale-95 px-4 py-2 rounded" to='/'>Search</Link>
                <Link className="bg-blue-100 text-black active:scale-95 px-4 py-2 rounded" to='./collection'  >Collection</Link>
            </div>
        </div>
    )
}

export default Navbar