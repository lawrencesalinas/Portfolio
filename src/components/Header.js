import React from "react";
import "./Header.css";
import { Anchor } from "antd";
const { Link } = Anchor;

const Header = () => {
  return (
    <Anchor>
      <div className="header">
        <header>
          <nav>
            <ul>
              <li>
                <Link href="#home" title="Home" />
              </li>
              <li>
                <Link href="#projects" title="Projects" />
              </li>
              <li>
                <Link href="#about" title="About" />
              </li>
              <li>
                <Link href="#contact" title="Contact" />
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </Anchor>
  );
};

export default Header;
