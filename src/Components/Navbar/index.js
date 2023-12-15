import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Logo from "../../Images/Logo.png";
import "./Navbar.css";
const Navbar = () => {
  const languageMenu = (
    <Menu>
      <Menu.Item key="1">
        <span role="img" aria-label="USA Flag">
          🇺🇸
        </span>{" "}
        English
      </Menu.Item>
      <Menu.Item key="2">
        <span role="img" aria-label="Spain Flag">
          🇪🇸
        </span>{" "}
        Spanish
      </Menu.Item>
      {/* Add more languages as needed */}
    </Menu>
  );

  return (
    <div className="navbar">
      {/* Logo on the left */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Headings on the right */}
      <div className="menu-items">
        <Menu mode="horizontal">
          <Menu.Item key="Business">Business</Menu.Item>
          <Menu.Item key="Driver Partner">Driver Partner</Menu.Item>
          <Menu.Item key="Vehicles">Vehicles</Menu.Item>
          <Menu.Item key="About Us">About Us</Menu.Item>
          <Menu.Item key="Contact Us">Contact Us</Menu.Item>
        </Menu>
      </div>

      {/* Language dropdown with flag icon on the right */}
      <div className="language-dropdown">
        <Dropdown overlay={languageMenu}>
          <Button>
            Select Language <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
