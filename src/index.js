import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img className="foods" alt="lake" src={img /*+ "?grayscale"*/} />
      <img className="foods" alt="lake" src={img /*+ "?grayscale"*/} />
      <img className="foods" alt="lake" src={img /*+ "?grayscale"*/} />
      <img className="foods" alt="lake" src={img /*+ "?grayscale"*/} />

      <img
        className="foods"
        src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="eggs"
      />
      <img
        className="foods"
        src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="pizza"
      />
      <img
        className="foods"
        src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="noodles"
      />
      <img
        className="foods"
        src="https://images.pexels.com/photos/68086/pexels-photo-68086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="noodles"
      />
    </div>
  </div>,
  document.getElementById("root")
);
