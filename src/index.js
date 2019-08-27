import React, { useState } from "react";
import ReactDOM from "react-dom";

const Toggler = ({ children }) => {
  const [isVisible, setVisible] = useState(true);
  const renderChildren = React.Children.map(children, (el, index) => {
    // content should be returned "as is" if it is visible
    if (index) return isVisible ? el : null;
    // if index = 0 then we consider our element is a toggler button
    // To change props, React.cloneElement is used because element is immutable
    return React.cloneElement(el, { onClick: () => setVisible(!isVisible) });
  });

  return renderChildren;
};

export const App = () => (
  <Toggler>
    <button>toggle</button>
    <div>Content goes here...</div>
  </Toggler>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
