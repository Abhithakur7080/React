//GETTING STYLE
import styles from "./Home.module.css"

//GETTING LOADER
import Loader from '../Loader/Loader'

//GETTING USER CONTEXT TO USE
import { useUserContext } from "../../userContext"

//GETTING HOOKS
import { useState, useEffect } from "react"

//GETTING NAVLINK TO ROUTE THE PAGES
import { NavLink } from "react-router-dom"

// GETTING TOAST
import { toast } from 'react-toastify';

const Home = () => {
    const { userCart, setUserCart, authenticate } = useUserContext();
    //FILTER
    //filter search
    const [priceFilter, setPriceFilter] = useState(1000);
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);

    //price filter
    const handlePriceFilter = (e) => {
        setPriceFilter(Number(e.target.value));
    };

    //category filter
    const handleCategoryFilter = (e) => {
        const category = e.target.value;
        if (selectedCategories.includes(category)) {
            // Deselect category if it's already selected
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            // Select category if it's not already selected
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    //search query
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    };
    //using fakestore API to render fake items in page
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
                setLoading(false);
            });
    }, []);
    //SETTING LOADER
    if (loading) {
        return (
            <Loader />
        )
    }
    //filtered products
    const filteredProducts = products.filter((product) => {
        const matchSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchPrice = product.price <= priceFilter;

        const matchCategory = selectedCategories.length === 0 || selectedCategories.some((category) => product.category.toLowerCase() === category.toLowerCase());

        return matchCategory && matchSearch && matchPrice;
    })

    //add to cart
    const addToCart = (id) => {
        let alreadyInCart = userCart.find((product) => product.id === id);
        let newCartProduct = products.find((product) => product.id === id);

        if (alreadyInCart) {
            setUserCart(
                userCart.map((item) =>
                    item.id === id ? { ...item, count: item.count + 1 } : item
                )
            )
            toast.success("Item Added to Cart");
        }
        else {
            newCartProduct.count = 1;
            setUserCart([...userCart, newCartProduct]);
            toast.success("Item Added to Cart");
        }
    }

    //set selected catagory
    const isCategorySelected = (category) => {
        return selectedCategories.includes(category);
      };
    return (
        <>
            <div className={styles.container}>
                <aside className={styles.filterContainer}>
                    <h2>Filter</h2>
                    <form>
                        <label htmlFor="price" className={styles.pricel}>Price: {priceFilter}</label>
                        <input type="range" name="price" min="1" max="1000" step="20" value={priceFilter} className={styles.pricei} onChange={handlePriceFilter} />
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
                                {authenticate?
                                <button className={styles.btn} onClick={() => addToCart(item.id)}>Add to Cart</button>
                                :
                                <NavLink to='/login' className={styles.btn} >Add to Cart</NavLink>
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