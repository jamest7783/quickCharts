import { Link } from 'react-router-dom'
import Form from './Form'
import Plot from './Plot'

const Create = () => {

    return (
        <div>
            <Form /> 
            <Plot />
            <Link to='/view'>View Plot Full-Screen</Link>
            <Link to='/'>back to Home</Link>
        </div>
    )

}

export default Create