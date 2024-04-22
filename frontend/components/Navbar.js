import React, { useEffect } from 'react';

const Navbar = (props) => {
  const toggleMode = e => {
    console.log("props.geceModu: ", props.geceModu);
    e.preventDefault();
    props.setGeceModu(!props.geceModu);
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.geceModu ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
