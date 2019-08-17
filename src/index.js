import React, { useState } from "react";
import ReactDOM from "react-dom";

const Toggler = ({ children }) => {
  const [isVisible, setVisible] = useState(true);
  const renderChildren = React.Children.toArray(children).map((el, index) => {
    const props = index
      ? { style: { display: isVisible ? "block" : "none" } }
      : { onClick: () => setVisible(!isVisible) };

    return React.cloneElement(el, props);
  });

  return <>{renderChildren}</>;
};

export const App = () => (
  <Toggler>
    <button>toggle</button>
    <div>Content goes here...</div>
  </Toggler>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
