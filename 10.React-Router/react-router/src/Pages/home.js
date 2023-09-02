import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <main>
            <h1>HOME PAGE</h1>
            <Link to="/about">About</Link><br/>
            <Link to="/items">Items</Link>
        </main>
    )
}
export default Home;