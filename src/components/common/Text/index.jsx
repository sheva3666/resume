/* eslint-disable react/prop-types */
import "./index.css";

const Text = ({ children, maxwidth }) => {
  return (
    <p style={{ maxWidth: maxwidth }} className="text">
      {children}
    </p>
  );
};

export default Text;
