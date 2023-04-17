import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
// ! Alrighty so in this below, I am creating a variable anchorLinks inside this variable I iterate over the array links ie. home, about, projects and somehow pass the parameter/ prop link (double check that) then in my <a> tag I have a key and a href. 
// ! I create a key per part in the list/array that I have ----------- have morgan clarify
  const anchorLinks = links.map((link)=> (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  // ! above the code is now dynamic and destructured (if I understand that correctly) links.map refers to the object. then we are assigning that value to the <a> tag where it says link
    return <nav>{anchorLinks}</nav>
  // return <nav>
  //   <a href="#home">home</a>
  //   <a href="#about">about</a>
  //   <a href="#projects">projects</a>
  // </nav>;
}

export default NavBar;
