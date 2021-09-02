import React from "react";
import { Modal } from "../Modal";

import "./Loader.css";

const Loader = () => {
  return (
    <Modal>
      <div className="loader" />
    </Modal>
  );
};

export { Loader };
