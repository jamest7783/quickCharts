import { Link } from 'react-router-dom'
import Form from './Form'

const Create = () => {

    return (
        <div>
            <Form /> 
            <h1>ChartPad</h1>
            <Link to='/view'>View</Link>
        </div>
    )

}

export default Create