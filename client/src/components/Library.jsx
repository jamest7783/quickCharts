import Search from "./Search"
import Projects from "./Projects"
import { Link } from 'react-router-dom'

const Library = (  ) => {


    return (
        <div>
            <Search/>
            <Projects/>
            <Link to='/'>back to Home</Link>
        </div>
    )
}

export default Library