import DonationCard from "../DonationCard/DonationCard";
import PropTypes from "prop-types";

const AllDonations = ({ donations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative items-center justify-center w-[90%] mx-auto">
      {donations.map((donation, idx) => (
        <DonationCard key={idx} donation={donation}></DonationCard>
      ))}
    </div>
  );
};
AllDonations.propTypes = {
    donations: PropTypes.array.isRequired,
  };
  
export default AllDonations;
