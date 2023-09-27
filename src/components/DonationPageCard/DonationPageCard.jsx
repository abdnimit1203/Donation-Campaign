import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationPageCard = ({ donation }) => {
  const { id, image_square, title, category, card_bg_color,category_bg_color, text_color ,price} =
    donation;
  return (
    <div className="flex flex-col h-full sm:w-full sm:flex-row rounded-xl">

        <img src={image_square} alt="donation-card-image" className=" sm:h-full aspect-square rounded-xl sm:rounded-none" />
    
      <div
        className="card-body pt-4 rounded-b-xl sm:rounded-b-none sm:rounded-r-xl"
        style={{ backgroundColor: card_bg_color, color: text_color }}
      >
        <button
          className="btn btn-xs w-fit h-10 rounded-md text-sm"
          style={{ backgroundColor: category_bg_color, color: text_color }}
        >
          {category}
        </button>
        <h2 className="card-title text-black text-2xl">{title}</h2>
        <p className="font-semibold">${price}</p>
        <Link className="h-full pb-4 w-fit" to={`/donation/${id}`} state={title}>
          <button
            className="btn btn-md w-fit h-10 rounded-md font-bold text-white"
            style={{ backgroundColor: text_color }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

DonationPageCard.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default DonationPageCard;
