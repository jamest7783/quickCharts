import { Link } from 'react-router-dom'

const View = (    ) => {

 

    return (
        <div>
            <h1>viewing single Post (post) full-screen</h1>
            <h4>comment</h4>
            <Link to='/library'>back to Library </Link>
            <Link to='/create'>back to Create </Link>
            <Link to='/'>back to Home</Link>
        </div>
    )
}

export default View