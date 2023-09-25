import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const {id, image, title, category, card_bg_color, category_bg_color, text_color } =
    donation;
  return (
  
    <Link className="h-full " to={`/donation/${id}`} state={title}>
      <div className="card  h-full">
        <figure>
          <img src={image} alt="donation-card-image" className="w-full" />
        </figure>
        <div
          className="card-body pt-4 rounded-b-xl"
          style={{ backgroundColor: card_bg_color, color: text_color }}
        >
          <button className="btn btn-sm w-fit h-10 rounded-md text-sm" style={{backgroundColor: category_bg_color, color:text_color}}>{category}</button>
          <h2 className="card-title text-lg">{title}</h2>
        </div>
      </div>
     </Link>

  );
};
DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
