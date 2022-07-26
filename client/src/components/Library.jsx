import Search from "./Search"
import Projects from "./Projects"
import { Link } from 'react-router-dom'

const Library = ( props ) => {

    console.log( "In LIBRARY=",props.charts )
    return (
        <div>
            <Search/>
            <Projects/>
            <Link to='/'>back to Home</Link>
        </div>
    )
}

export default Library