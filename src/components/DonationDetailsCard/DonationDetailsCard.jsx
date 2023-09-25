import PropTypes from "prop-types";


const DonationDetailsCard = ({ donation }) => {
  const {  image_cover, title, description, text_color, price } = donation;


 const  handleAddToDonation = () =>{
    const storedDonationArray = [];

    const donationItems = JSON.parse(localStorage.getItem("donations"))

  
    if (!donationItems) {
        storedDonationArray.push(donation);
      localStorage.setItem('donations',JSON.stringify(storedDonationArray)  )
    }else{

        const isExists = favouriteItem.find(phone=>phone.id == id)
        if(!isExists){
           
            addedFavArray.push(...favouriteItem,phone)
            localStorage.setItem('favorites',JSON.stringify(addedFavArray))
            Swal.fire({
                color: 'green',
                timer: 4000,
                title: 'Yeah Added',
                text: 'Success',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }else{
            console.log("Error!!Already in !");
        }

        }
 }
  return (
    <>
      <div className="card w-full">
        <figure className="">
          <img src={image_cover} alt="donation-card-cover" className="w-full rounded-xl" />
        </figure>
        <div className="relative -top-11 md:-top-32 px-4 py-[9px] md:p-10 bg-[#1111116c] z-10 rounded-b-xl">
    
        <button onClick={handleAddToDonation}
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
    </>
  );
};
DonationDetailsCard.propTypes = {
    donation: PropTypes.object.isRequired,
  };
export default DonationDetailsCard;
