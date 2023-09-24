import REACT from "react";
import "./home.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../images/profile.jpg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidenav/sidebar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import heart from "../images/heart.png";
import post from "../images/post.png";
import explore from "../images/explore.png";
import email from "../images/email.png";
import IconMenu from "./iconmenu";
import Header from "./header";
import { useSelector } from 'react-redux';
function Home() {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <div className="home">
        <input
          className="home_search_bar"
          type="search"
          placeholder="Search"
        ></input>
        <h1>Potato</h1>
        <img src={profile}></img>
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.imageUrl} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
    <Sidebar/>
      
    </>
  );
}
export default Home;
