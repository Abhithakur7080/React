import {Link} from 'react-router-dom';
import { ITEMS } from '../data/itemsData';
const Items = () => {
    return (
        <>
        <main>
            <h1>ITEMS PAGE</h1>
        </main>
        {/* <ul>
            <Link to='/items/item-1'>
                <li>Items-1</li>
            </Link>
            <Link to='/items/item-2'>
                <li>Items-2</li>
            </Link>
            <Link to='/items/item-3'>
                <li>Items-3</li>
            </Link>
        </ul> */}
        <ul>
            {
                ITEMS.map((item) => (
                    <Link to={`/items/${item.id}`}>
                        <li>{item.id}</li>
                    </Link>
                ))
            }
        </ul>
        </>
    )
}
export default Items;