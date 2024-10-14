import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from './Layout';
import './Home.css'; // Assuming you're using a CSS file for styling

import Footer from './Footer';

const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const [ProductList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [sortOption, setSortOption] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false); // State to toggle visibility

  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const signedInStatus = localStorage.getItem('isSignedIn');
    setIsSignedIn(signedInStatus === 'true');
  }, []);




  useEffect(() => {
    async function getDetails() {
      const url = 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const data = await response.json();
      setProductList(data);
      setFilteredProducts(data);
    }
    getDetails();
  }, []);

  useEffect(() => {
    async function getCategories() {
      const url = 'https://fakestoreapi.com/products/categories';
      const response = await fetch(url);
      const data = await response.json();
      setCategories(data);
    }
    getCategories();
  }, []);

  const getSearchProductsList = () => {
    const filteredProductsList = ProductList.filter((eachItem) =>
      eachItem.description.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredProducts(filteredProductsList);
    setSearchItem("");
    setCurrentPage(1);
  };

  const handleSort = (event) => {
    const sortValue = event.target.value;
    setSortOption(sortValue);

    let sortedList = [...filteredProducts];

    if (sortValue === "priceAsc") {
      sortedList.sort((a, b) => a.price - b.price);
    } else if (sortValue === "priceDesc") {
      sortedList.sort((a, b) => b.price - a.price);
    } else if (sortValue === "nameAsc") {
      sortedList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === "nameDesc") {
      sortedList.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(sortedList);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "") {
      setFilteredProducts(ProductList);
    } else {
      const filteredProductsList = ProductList.filter(
        (eachItem) => eachItem.category === category
      );
      setFilteredProducts(filteredProductsList);
    }
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (

    <div>
      {isSignedIn ? (
        <>
           <div>
            <Layout/>
            
           
      {/* Filters and Sorting section above the container */}
      <div className="filters-sort-container">
        <button onClick={() => setShowFilters(!showFilters)} className="toggle-filters-button">
          {showFilters ? '< Hide Filters' : 'Show Filters >'}
        </button>
        
        <div className="sort-container">
          <label htmlFor="sort">Recommended</label>
          <select id="sort" value={sortOption} onChange={handleSort}>
            <option value="">Recommended</option>
            <option value="priceAsc">Price LOW TO HIGH</option>
            <option value="priceDesc">Price HIGH TO LOW</option>
            <option value="nameAsc">Name (A-Z)</option>
            <option value="nameDesc">Name (Z-A)</option>
          </select>
        </div>
      </div>

      <div className="home-container">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          {showFilters && (
            <>
              {/* Search bar */}
              <div className="search-bar">
                <input
                  value={searchItem}
                  onChange={(event) => setSearchItem(event.target.value)}
                  placeholder="Search products..."
                  className="search-input"
                />
                <button onClick={getSearchProductsList} className="search-button">
                  Search
                </button>
              </div>

              {/* Filter by category using buttons */}
              <div className="category-buttons">
                <button
                  onClick={() => handleCategoryChange("")}
                  className={`category-button ${selectedCategory === "" ? "active" : ""}`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`category-button ${selectedCategory === category ? "active" : ""}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right Content */}
        <div className="right-content">
          {/* Display products */}
          <div className="product-list">
            {currentProducts.map((eachItem) => (
              <div key={eachItem.id} className="product-card">
                <img src={eachItem.image} alt={eachItem.title} className="product-image" />
                <h2 className="product-category">{eachItem.category}</h2>
                <p className="product-description">{eachItem.title}</p>
                <p className="product-price">${eachItem.price}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
          
        </>
      ) : (
        <div className="sign-in-prompt">
  <h2>Please Sign In to View Content</h2>
  <button className="go-signin-button" onClick={() => navigate('/signin')}>
    Go to Sign In
  </button>
</div>

      )}
    </div>


   
  );
};

export default Home;
