import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { FaOpencart} from 'react-icons/fa';

const Navbar = ({ setData, cart }) => {
  const Location = useLocation()

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <header className='sticky-top'>
      <div className="nav-bar">
        <Link to={"/"} className="brand">E-Cart</Link>
        <form onSubmit={handleSubmit} className="search-bar">
          <input 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            type="text" 
            placeholder='Search Products' 
          />
          <Link to="/admin" style={{marginLeft:'50px'}} className="admin-link bg-danger mx-5">Admin</Link>
        </form>
        <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary position-relative">
            <FaOpencart style={{fontSize:'1.5rem'}}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length} {/* Make sure cart is defined and passed correctly */}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
      {
        location.pathname =='/' &&(
          <div className="nav-bar-wrapper"> {/* Fixed typo here */}
          <div className="items">Filter by {"->"}</div>
          <div onClick={() => setData(items)} className="items">No Filter</div>
          <div onClick={() => filterByCategory('mobiles')} className="items">Mobiles</div>
          <div onClick={() => filterByCategory('laptops')} className="items">Laptops</div>
          <div onClick={() => filterByCategory('tablets')} className="items">Tablets</div>
          <div onClick={() => filterByPrice(50000)} className="items">{">="}50k</div>
          <div onClick={() => filterByPrice(80000)} className="items">{">="}80k</div>
          <div onClick={() => filterByPrice(120000)} className="items">{">="}120k</div>
          <div onClick={() => filterByPrice(160000)} className="items">{">="}160k</div>
        </div>
        )
      }
     
    </header>
  );
};

export default Navbar;
