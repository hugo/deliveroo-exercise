import React from "react";

import logoIcon from "./svg/logo-icon.svg";
import userIcon from "./svg/user-icon.svg";

export default function App() {
  return (
    <>
      <div class="container">
        <div class="top-nav">
          <img src={logoIcon} />
          <img src={userIcon} />
        </div>
      </div>

      <div class="bg-teal">
        <div class="container">
          <div class="header">
            <h1 class="stratos white">Deliveroo</h1>
            <h2 class="adelle white">Take home exercise</h2>
          </div>
        </div>
      </div>
    </>
  );
}
