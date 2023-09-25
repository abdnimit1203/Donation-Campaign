import PropTypes from "prop-types";

const DonationCard = ({ donation }) => {
  const { image, title, category, card_bg_color, category_bg_color, text_color } =
    donation;
  return (

      <div className="card border-2 h-full">
        <figure>
          <img src={image} alt="donation-card-image" className="w-full" />
        </figure>
        <div
          className="card-body pt-4"
          style={{ backgroundColor: card_bg_color, color: text_color }}
        >
          <button className="btn btn-sm w-fit h-10 rounded-md text-sm" style={{backgroundColor: category_bg_color, color:text_color}}>{category}</button>
          <h2 className="card-title text-lg">{title}</h2>
        </div>
      </div>

  );
};
DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default DonationCard;
