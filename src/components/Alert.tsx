import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onBand: () => void;
}

const Alert = ({ children, onBand }: props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onBand}
      ></button>
    </div>
  );
};

export default Alert;
