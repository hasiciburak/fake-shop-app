import React from "react";

const Header = () => {
  return (
    <div className="ui fixed menu" style={{ padding: "20px 0" }}>
      <div className="ui container center">
        <h2>
          <span
            style={{
              color: "#FDB813",
              padding: "5px 10px",
              backgroundColor: "#3D2C05",
              borderRadius: "5px",
            }}
          >
            Fake
          </span>
          <span
            style={{ fontWeight: "100", marginLeft: "5px", color: "#3D2C05" }}
          >
            Shop
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
