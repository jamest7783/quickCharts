import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = (  ) => {

    let navigate = useNavigate() 

    let route=(path)=>{
        navigate(path)
    }

    return (
        <div>
            <nav>
                <button className='home-link' onClick={(e)=>route('/profile')}>got data?</button>
                <button className='home-link' onClick={(e)=>route('/about')}>about</button>
            </nav>
        </div>
    )
}

export default Nav