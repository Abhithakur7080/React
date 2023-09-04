import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react'

const ErrorPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => navigate('/'), 3000);
    }, []);
    return(
        <>
            <h1>Oops!!! Something Went Wrong</h1>
        </>
    )
}
export default ErrorPage;