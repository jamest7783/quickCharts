import Search from "./Search"
import Projects from "./Projects"
import { Link } from 'react-router-dom'
import Post from './Post'

const Library = ({ search, setSearch, charts }) => {

    console.log( charts.barCharts )



    return (
        <div>
            <Link to='/'>back to Home</Link>
            <Search search={search} setSearch={setSearch}/>
            
            <h3>{search}</h3>
            <Projects/>
            { charts.barCharts.map((chart)=> (
                <Post chart={chart} />
            ))}

        </div>
    )
}

export default Library