// import { Logo, Modals, Search1, SearchBar } from '../../components';
import React from "react";
import Modals from "../Modals/Modals";
// import { Logo, Search1 } from "../../components";
import Logo from "../Logo/Logo";
import Search1 from "../SearchBar/Search1";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = ({ data }) => {
  return (
    <>
      <nav className="navbar">
        {/* <Link to="/">
          <Logo />
        </Link> */}
        <Logo />
        {/* <SearchBar data={data} className="searchbar" /> */}
        <Search1
          data={data}
          className="searchbar"
          search={"Search a song of your choice"}
        />
        <Modals title={"Give Feedback"} />
      </nav>
      {/* <SearchBar className="searchbar-moblie" /> */}
      {/* <Search1 data={data} className="searchbar-moblie" /> */}
    </>
  );
};

export default NavBar;
