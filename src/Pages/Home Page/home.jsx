import React from "react";
import HomeBody from "./homebody";
import Sidenav from "../../components/Navigation bars component/side-navigation-bar";

export default function Home(){
    return(
        <div className="bckgnd h-screen lg:h-screen lg:flex" >
        <Sidenav />
        <HomeBody />
        </div>
    )
}