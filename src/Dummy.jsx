import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dummy = ({ dummyValue }) => {

  const makeToast = () => toast.success("Successfully Toasted 😁");

  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <h2>This is a dummy component </h2>
      <p className="flex items-center">
        To play around. My dummy value is :
        <span>
          <FiDollarSign />
        </span>
        {dummyValue}
      </p>
      <button onClick={makeToast} className="btn btn-primary">
        Toast
      </button>
      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

Dummy.propTypes = {
  dummyValue: PropTypes.number.isRequired,
};

export default Dummy;
