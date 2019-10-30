import React from "react";
import PropTypes from "prop-types";

function ProfilePage(props) {
  const title = "Kazkas labai skanaus 101";

  // H1 38 Georgia
  // H2 24
  // H3 20
  // H4 16
  // H5 16 Courier New
  // H6 10.72
  return (
    <div
      className="pageFlexContainer"
      style={{
        flexDirection: "column"
      }}
    >
      <h1>PROFILE PAGE</h1>
      <h2>hello, {props.name}</h2>

      <h1 style={{ backgroundColor: "#f4f4f4" }}>H1 {title}</h1>
      <h2>H2 {title}</h2>
      <h3 style={{ backgroundColor: "#f4f4f4" }}>H3 {title}</h3>
      <h4>H4 {title}</h4>
      <h5 style={{ backgroundColor: "#f4f4f4" }}>H5 {title}</h5>
      <h6>H6 {title}</h6>
    </div>
  );
}

ProfilePage.propTypes = {
  name: PropTypes.string
};

export default ProfilePage;
