import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Search = (  ) => {

    const navigate = useNavigate()
    const routeChange = (  ) => {
        let path = '/library'
        navigate( path )
        //will have to bring input with route change
    }

    return (
        <div>
            <form>
                <button onClick={ routeChange }>onSubmit link to Library with search input</button>
                <input placeholder='search by data or axis'>
                
                </input>
            </form>

        </div>
    )
}

export default Search
