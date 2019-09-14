import React from "react";
import PropTypes from "prop-types";

function ProfilePage(props) {
  return (
    <div>
      <h1>PROFILE PAGE</h1>
      <h2>hello, {props.name}</h2>
    </div>
  );
}

ProfilePage.propTypes = {
  name: PropTypes.string
};

export default ProfilePage;
