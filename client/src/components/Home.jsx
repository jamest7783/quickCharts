import Nav from './Nav'
import Search from './Search'
import { useNavigate } from 'react-router-dom'

const Home = ( { search, setSearch} ) => {

    const navigate = useNavigate()
    const routeChange = (  ) => {
        let path = '/library'
        navigate( path )
    }
    return (
        <div>
            <h2>quickChart</h2>
            <button onClick={ routeChange }>O</button>
            <Search search={ search } setSearch={ setSearch } />
            <Nav />
        </div>
    )
}

export default Home 