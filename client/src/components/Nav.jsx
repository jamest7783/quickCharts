import { Link } from 'react-router-dom'

const Nav = (  ) => {

    return (
        <div>
            <nav>
                {/* <Search/> */}<h4>Search</h4>
                <Link to='/'>got data?</Link>
                <Link to='/'>About</Link>

            </nav>
        </div>
    )
}

export default Nav