import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetailsCard = ({ donation }) => {

  const { id, image_cover, title, description, text_color, price } = donation;

  const notifySuccess = () => toast.success("Added Donation Successfully!");
  const notifyWarning = () => toast.error("Opps! You Already This Donation!"); // demo 2

  const handleAddToDonation = () => {
    const storedDonationArray = [];

    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (!donationItems) {
      storedDonationArray.push(donation);
      localStorage.setItem("donations", JSON.stringify(storedDonationArray));
    } else {
      const isExists = donationItems.find((donation) => donation.id == id);
      if (!isExists) {
        storedDonationArray.push(...donationItems, donation);
        localStorage.setItem("donations", JSON.stringify(storedDonationArray));
        notifySuccess();
      } else {
        notifyWarning();
      }
    }
  };
  return (
    <>
      <div className="card w-full">
        <figure className="">
          <img
            src={image_cover}
            alt="donation-card-cover"
            className="w-full rounded-xl"
          />
        </figure>
        <div className="relative -top-11 md:-top-32 px-4 py-[9px] md:p-10 bg-[#1111116c] z-10 rounded-b-xl">
          <button
            onClick={handleAddToDonation}
            className="btn btn-xs md:btn-md w-fit text-white font-semibold border-none"
            style={{ backgroundColor: text_color }}
          >
            Donate $ {price}
          </button>
        </div>
      </div>

      <div>
        <div className="card-body p-0  ">
          <h2 className="card-title text-4xl font-bold">{title}</h2>
          <p className="text-slate-600 leading-7">{description}</p>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
};
DonationDetailsCard.propTypes = {
  donation: PropTypes.object,
};
export default DonationDetailsCard;
