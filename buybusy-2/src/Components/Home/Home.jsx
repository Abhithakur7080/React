//GETTING STYLE
import styles from "./Home.module.css"

//GETTING LOADER
import Loader from '../Loader/Loader'

//GETTING HOOKS
import { useEffect } from "react"

//GETTING REACT-REDUX COMPONENTS
import { useDispatch, useSelector } from "react-redux"

//GETTING All ACTIONS AND STATE FROM PRODUCT REDUCER
import {
    fetchStart,
    setSearchQuery,
    setPricefilter,
    setSelectedCatagories,
    setFilteredProducts,
    getItems,
    productSelector
} from "../../redux/reducers/productReducer";

//GETING ACTIONS AND SELECTOR FROM CART REDUCER
import { cartSelector, addToCart} from "../../redux/reducers/cartReducer"

//GETING ACTIONS AND SELECTOR FROM AUTH REDUCER
import { authSelector, deserializeUser } from "../../redux/reducers/authReducer"

//GETTING REACT-ROUTER COMPONENTS
import { NavLink } from "react-router-dom"

const Home = () => {

    //initialise dispatch to use in actions
    const dispatch = useDispatch();

    //getting all states from selectors
    const {
        products,
        isLoading,
        filteredProducts,
        pricefilter,
        selectedCatagories
    } = useSelector(productSelector);

    //setting for user
    const { currentUser } = useSelector(authSelector);
    const User = deserializeUser(currentUser);
    //getting state from selector
    const { carts } = useSelector(cartSelector)

    //using fakestore API to render fake items in page
    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchStart());
            await dispatch(getItems());
            dispatch(setFilteredProducts());
        }
        fetchData();
    }, [dispatch]);

    //SETTING LOADER
    if (isLoading) {
        return (
            <Loader />
        )
    }

    //function for view items according to price
    const handlePriceFilter = (e) => {
        const priceValue = Number(e.target.value);
        dispatch(setPricefilter(priceValue));
        dispatch(setFilteredProducts())
    }

    //function for view items according to catagory of items
    const handleCategoryFilter = (e) => {
        const category = e.target.value;
        const updatedCategories = selectedCatagories.includes(category)
            ? selectedCatagories.filter((c) => c !== category)
            : [...selectedCatagories, category];
        dispatch(setSelectedCatagories(updatedCategories));
        dispatch(setFilteredProducts());
    };

    //set selected catagory
    const isCategorySelected = (category) => {
        return selectedCatagories.includes(category);
    };
    //function for view items according to search query
    const handleSearchQuery = (e) => {
        dispatch(setSearchQuery(e.target.value));
        dispatch(setFilteredProducts());
    };
    return (
        <>
            <div className={styles.container}>
                <aside className={styles.filterContainer}>
                    <h2>Filter</h2>
                    <form>
                        <label htmlFor="price" className={styles.pricel}>Price: {pricefilter}</label>
                        <input type="range" name="price" min="1" max="1000" step="20" value={pricefilter} className={styles.pricei} onChange={handlePriceFilter} />
                        <h2>Category</h2>
                        <div className={styles.catagoryContainer}>
                            <div className={styles.catagory}>
                                <input
                                    type="checkbox"
                                    id="mensFashion"
                                    value="Men's Clothing"
                                    onChange={handleCategoryFilter}
                                    checked={isCategorySelected("Men's Clothing")}
                                />
                                <label htmlFor="mensFashion">Men's Clothing</label>
                            </div>
                            <div className={styles.catagory}>
                                <input
                                    type="checkbox"
                                    id="womensFashion"
                                    value="Women's Clothing"
                                    onChange={handleCategoryFilter}
                                    checked={isCategorySelected("Women's Clothing")}
                                />
                                <label htmlFor="womensFashion">Women's Clothing</label>
                            </div>
                            <div className={styles.catagory}>
                                <input type="checkbox"
                                    id="jewelery"
                                    value="jewelery"
                                    onChange={handleCategoryFilter}
                                    checked={isCategorySelected("jewelery")}
                                />
                                <label htmlFor="jewelery">Jewelery</label>
                            </div>
                            <div className={styles.catagory}>
                                <input
                                    type="checkbox"
                                    id="electronics"
                                    value="Electronics"
                                    onChange={handleCategoryFilter}
                                    checked={isCategorySelected("Electronics")}
                                />
                                <label htmlFor="electronics">Electronics</label>
                            </div>
                        </div>
                    </form>
                </aside>
                <form className={styles.searchContainer}>
                    <input
                        type="search"
                        placeholder="search your item here..."
                        onChange={handleSearchQuery}
                    />
                </form>
                <div className={styles.productContainerGrid}>
                    {filteredProducts.map((item) => (
                        <div className={styles.productContainer} key={item.id}>
                            <div className={styles.productImageContainer}>
                                <img src={item.image} alt="bag" />
                            </div>
                            <div className={styles.productDetailContainer}>
                                <div className={styles.name}>
                                    <p>
                                        {item.title}
                                    </p>
                                </div>
                                <div className={styles.price}>
                                    <p>
                                        &#x20B9; {item.price}
                                    </p>
                                </div>
                                {User ?
                                    <button onClick={() => dispatch(addToCart({products, carts, id: item.id, user: currentUser}))} className={styles.btn}>Add to Cart</button>
                                    :
                                    <NavLink to="/login" className={styles.btn}>Add to Cart</NavLink>
                                }


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Home;
