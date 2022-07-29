import React from "react";
import HomeBody from "./homebody";
import Sidenav from "./sidenav";

export default function Home(){
    return(
        <div className="bckgnd  h-screen lg:flex" >
        <Sidenav />
        <HomeBody />
        </div>
    )
}