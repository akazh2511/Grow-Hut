import React from "react";
import "./Home.css";
import Map from "../../Images/Map.png";
import first from "../../Images/0.png";
import second from "../../Images/1.png";
import third from "../../Images/2.png";
import fourth from "../../Images/3.png";
import feature from "../../Images/feature.png";
import { Menu, Dropdown, Button } from "antd";
import car from "../../Images/car.png";
import speed from "../../Images/speed.png";
import milleage from "../../Images/milleage.png";
import CustomFooter from "../Footer";
const truckData = [
  {
    id: 1,
    model: "Model Name",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore cum soluta nobis est",
    fcharge: "3 hrs",
    maxspeed: "125 kmph",
    milleage: "50 kms",
    img: second,
  },
  {
    id: 2,
    model: "Design",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore cum soluta nobis est",
    fcharge: "2 hrs",
    maxspeed: "120 kmph",
    milleage: "35 kms",
    img: third,
  },
  {
    id: 3,
    model: "Design",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore cum soluta nobis est",
    fcharge: "1 hrs",
    maxspeed: "224 kmph",
    milleage: "22 kms",
    img: fourth,
  },
];

const Home = () => {
  return (
    <div className="home">
      <div>
        <img
          className="map"
          src={Map}
          style={{ height: "560px", zIndex: "2" }}
        />
        <div style={{ zIndex: "100" }}>
          <div className="heading">
            <h1 style={{ color: " #00c67a" }}>
              OUR ZERO EMISSION
              <br />
              <span style={{ color: "white" }}>CHAMPIONS!</span>{" "}
            </h1>
          </div>
          <div style={{ position: "absolute" }} className="first">
            <img src={first} style={{ Width: "700px", height: "500px" }} />
          </div>
          <div className="feature">
            <div className="feature1">
              <img src={feature} style={{ Width: "100px", height: "100px" }} />
            </div>
            <div className="feature2">
              <img src={feature} style={{ Width: "100px", height: "100px" }} />
            </div>
            <div className="feature3">
              <img src={feature} style={{ Width: "100px", height: "100px" }} />
            </div>
            <div className="feature4">
              <img src={feature} style={{ Width: "100px", height: "100px" }} />
            </div>
          </div>
        </div>
      </div>
      {/* middle section--buttons */}
      <div style={{ marginTop: "60px" }} className="vehcile-type">
        <Menu mode="horizontal">
          <Menu.Item key="All Vehicles">All Vehicles</Menu.Item>
          <Menu.Item key="2-wheeler">2-wheeler</Menu.Item>
          <Menu.Item key="4-wheeler">4-wheeler</Menu.Item>
          <Menu.Item key="6-wheeler">6-wheeler</Menu.Item>
        </Menu>
      </div>

      {/* lower section */}

      {truckData.map((item) => {
        if (item.id % 2 === 1) {
          return (
            <div key={item.id} className="info-div">
              <div>
                <h1 style={{ fontSize: "64px" }}>{item.model}</h1>
                <p>{item.description}</p>
                <div style={{ paddingTop: "10px" }} className="flex-row">
                  <div>
                    <img src={car} style={{ paddingLeft: "40px" }} />
                    <p style={{ fontWeight: "bold", paddingLeft: "40px" }}>
                      {item.fcharge}
                    </p>
                  </div>
                  <div>
                    <img
                      src={speed}
                      style={{ paddingLeft: "40px", paddingTop: "10px" }}
                    />
                    <p style={{ fontWeight: "bold", paddingLeft: "40px" }}>
                      {item.maxspeed}
                    </p>
                  </div>

                  <div>
                    <img
                      src={milleage}
                      style={{ paddingLeft: "40px", paddingTop: "12px" }}
                    />
                    <p style={{ fontWeight: "bold", paddingLeft: "40px" }}>
                      {item.milleage}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={item.img}
                  style={{
                    Width: "200px",
                    height: "400px",
                    paddingTop: "80px",
                  }}
                />
              </div>
            </div>
          );
        } else {
          return (
            <div key={item.id} className="info-div2">
              <div>
                <img
                  src={item.img}
                  style={{
                    Width: "200px",
                    height: "400px",
                    paddingTop: "80px",
                  }}
                />
              </div>
              <div>
                <h1 style={{ fontSize: "64px" }}>{item.model}</h1>
                <p>{item.description}</p>
                <div style={{ paddingTop: "10px" }} className="flex-row">
                  <div>
                    <img src={car} style={{ paddingLeft: "40px" }} />
                    <p style={{ fontWeight: "bold", paddingLeft: "40px" }}>
                      {item.fcharge}
                    </p>
                  </div>
                  <div>
                    <img
                      src={speed}
                      style={{ paddingLeft: "40px", paddingTop: "10px" }}
                    />
                    <p style={{ fontWeight: "bold", paddingLeft: "40px" }}>
                      {item.maxspeed}
                    </p>
                  </div>

                  <div>
                    <img
                      src={milleage}
                      style={{ paddingLeft: "40px", paddingTop: "12px" }}
                    />
                    <p style={{ fontWeight: "bold", paddingLeft: "40px" }}>
                      {item.milleage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Home;
