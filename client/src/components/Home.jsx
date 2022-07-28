import Nav from './Nav'
import Search from './Search'

const Home = ( { search, setSearch} ) => {

    return (
        <div className='home'>
            <div className='start'>
                <h1 id='quickChart'>quickChart</h1>
                <Search search={ search } setSearch={ setSearch } />
                <Nav />
            </div>
        </div>
    )
}

export default Home 