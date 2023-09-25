import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "../DonationDetailsCard/DonationDetailsCard";

const DonationDetails = () => {
  const donations = useLoaderData();
  const {id} = useParams();
  console.log(id);

  const [donation, setDonation] = useState([])
  useEffect(()=>{
    const findDonation = donations.find(thisdonation=> thisdonation.id == id)
    setDonation(findDonation)
  },[id,donations])
  console.log(donation);
  return (
    <>
    <div className="pt-[100px] md:pt-[200px]  mx-auto w-[80%] ">
      {
        <DonationDetailsCard key={donation.id} donation={donation}></DonationDetailsCard>
      }
    </div>
    </>
  );
};

export default DonationDetails;
