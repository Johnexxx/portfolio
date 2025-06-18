import React from "react";
import "@/styles/components/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} John Carl T. Diongson. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
