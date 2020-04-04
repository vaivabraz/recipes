import React from "react";
import Colors from "./Colors";

function Footer() {
  return (
    <div
      style={{
        height: "10vh",
        backgroundColor: Colors.footer,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h6 style={{ color: Colors.lightGrey }}>
        kazkokia labai svarbi info kur buna puslapio apacioj
      </h6>
    </div>
  );
}

export default Footer;
