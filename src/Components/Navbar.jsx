import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { useState } from 'react';

const Navbar = ({ setData, cart }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const filterbyCategory = (category) => {
        const element = items.filter((product) => product.category === category);
        setData(element);
    };

    const filterbyPrice = (event) => {
        const selectedPrice = parseInt(event.target.value, 10);

        if (!isNaN(selectedPrice)) {
            const element = items.filter((product) => product.price <= selectedPrice);
            setData(element);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if searchTerm is not empty before navigating
        if (searchTerm.trim() !== "") {
            navigate(`/search/${searchTerm}`);
        }
    };

    return (
        <>
            <header>
                <div className="nav-bar flex h-24 w-full sticky top-0 justify-between items-center px-20">
                    <div className="brand">
                        <Link to="/">
                            <img src="/src/assets/logo.png" alt="" />
                        </Link>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="searchbar flex h-3/6 w-6/12 bg-red-500 border border-gray-500 overflow-hidden rounded-lg"
                    >
                        <div className='flex h-full w-full'>
                            <input
                                className='w-11/12 p-2'
                                type="text"
                                placeholder="Search Product here"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <h4 className="yoursearch h-full flex items-center">
                                <FontAwesomeIcon icon={faSearch} onClick={handleSubmit} />
                            </h4>
                        </div>
                    </form>

                    <div className="cart flex items-center">
                        <Link to='/cart'>
                            Cart <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
                            <p className='showitem'>{cart.length}</p>
                        </Link>
                    </div>
                </div>
            </header>

            {location.pathname === '/' && (
                <div className="navbar flex justify-between align-middle text-center items-center h-12 w-full px-20">
                    <div className="flex items-center">
                        <label htmlFor="filter" className="mr-2">
                            Filter
                        </label>
                        <select id="filter" className="border border-gray-500 p-1 rounded-md" onChange={filterbyPrice}>
                            <option value="">Filter by</option>
                            <option className='p-10' value="29000">Under 29000</option>
                            <option className='p-10' value="49000">Under 49000</option>
                            <option className='p-10' value="69999">Under 69999</option>
                            <option className='p-10' value="89999">Under 89999</option>
                        </select>
                    </div>

                    <div className='cursor-pointer font-sans font-bold ' onClick={() => setData(items)}>No Filter</div>
                    <div className='cursor-pointer font-sans font-bold ' onClick={() => filterbyCategory('mobiles')}>Mobile</div>
                    <div className='cursor-pointer font-sans font-bold ' onClick={() => filterbyCategory('laptops')}>Laptop</div>
                    <div className='cursor-pointer font-sans font-bold ' onClick={() => filterbyCategory('tablets')}>Tablet</div>
                </div>
            )}
        </>
    );
};

export default Navbar;
