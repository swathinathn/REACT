import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0b132b",
        color: "white",
        textAlign: "center",
        padding: "20px 0",
        marginTop: "500px",
      }}
    >
      <p>© {new Date().getFullYear()} Mywebsite. All rights reserved.</p>
      <p style={{ fontSize: "14px", color: "#ccc" }}>
        Designed & built with ❤️ using React
      </p>
    </footer>
  );
};

export default Footer;
