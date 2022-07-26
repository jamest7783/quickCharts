import Nav from './Nav'
import Search from './Search'

const Home = ( props ) => {

    console.log( "In HOME=",props.charts )

    return (
        <div>
            <h2>quickChart</h2>
            <Search/>
            <Nav />
        </div>
    )
}

export default Home 