import { Link } from 'react-router-dom'

const Nav = (  ) => {

    return (
        <div>
            <nav>
                <Link to='/profile'> make user</Link>
                <Link to='/create'>got data?</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}

export default Nav