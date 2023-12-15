import React from "react";
import { Layout, Button } from "antd";
//import "antd/dist/antd.css"; // Import Ant Design CSS
import "./Footer.css"; // Your custom CSS

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer id="Footer" className="footer">
      <div className="left-section">
        <h3 style={{ color: "white" }}>We’d love to hear from you</h3>

        <h1 style={{ color: "#06B9F0" }}>GET IN TOUCH</h1>
        <div className="button-group flex-col">
          <Button className="business-related-button">Business Related</Button>
          <Button className="driver-related-button">Driver Related</Button>
        </div>
      </div>
      <div className="right-section flex-col">
        <div className=" flex-row ">
          <h2 style={{ paddingRight: "30px" }}>Home</h2>
          <h2 style={{ paddingRight: "30px" }}>Business</h2>
          <h2 style={{ paddingRight: "30px" }}>Driver</h2>
          <h2 style={{ paddingRight: "30px" }}>Vehicle</h2>
          <h2 style={{ paddingRight: "30px" }}>About us</h2>

          {/* Add more content or modify the structure as needed */}
        </div>
        <h2>Location:</h2>
        <div className="flex-row">
          <div style={{ width: "250px", paddingRight: "20px" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sollicitudin, eros id tincidunt feugiat, sem magna tristique nunc,
              viverra vehic
            </p>
          </div>
          <div style={{ width: "250px" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sollicitudin, eros id tincidunt feugiat, sem magna tristique nunc,
              viverra vehic
            </p>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
