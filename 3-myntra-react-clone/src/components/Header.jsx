import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {

  const bag = useSelector(store => store.bag);

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="ecom_home"
              src="../images/EcomCart.png"
              alt="EcomCart"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <IoIosSearch />
          </span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoPersonOutline />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <IoIosHeartEmpty />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag" >
            <HiOutlineShoppingBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
