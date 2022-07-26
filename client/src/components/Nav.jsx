import { Link } from 'react-router-dom'

const Nav = (  ) => {

    return (
        <div>
            <nav>
                {/* <Search/> */}<h4>[Search Component, has link to projects within]</h4>
                <Link to='/create'>got data?</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}

export default Nav