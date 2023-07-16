import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 ">
      <Link to={"/"}>
        <img
          style={{ maxWidth: "150px" }}
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
          alt=""
        />
      </Link>
    </header>
  );
};

export default Header;
