import React from "react";
import ReactDOM from "react-dom/client";
import { FadeInDiv } from "./lib";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <FadeInDiv threshold={0.5}>
      <div style={{ height: "100vh" }}>
        <div style={{ width: "300px", background: "red" }}>하이하이</div>
      </div>
    </FadeInDiv>
  </React.StrictMode>,
);
