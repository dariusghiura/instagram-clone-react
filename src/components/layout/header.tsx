import React from 'react'
import Logo from "../../assets/images/logo.png"
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="" />
            <div className="header-search">
                <SearchIcon htmlColor="gray"/>
                <input type="text" placeholder="Search" />
            </div>
            <div className="header-icons">
                <HomeIcon/>
            </div>
        </header>
    )
}
