import DonationPageCard from "../../components/DonationPageCard/DonationPageCard";

const Donation = () => {
    const donatedData = JSON.parse(localStorage.getItem("donations"))
    console.log(donatedData);
    return (
        <div className="pt-[100px]">
           <div className=" py-20 grid grid-cols-1 lg:grid-cols-2  gap-6 relative items-center justify-center w-[90%] mx-auto">
           {
                donatedData.map(donation =><DonationPageCard key={donation.id} donation={donation}></DonationPageCard>)
            }
           </div>
            
        </div>
    );
};

export default Donation;