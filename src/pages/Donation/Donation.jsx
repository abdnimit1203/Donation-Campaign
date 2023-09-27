import { useState } from "react";
import DonationPageCard from "../../components/DonationPageCard/DonationPageCard";
import { GiPayMoney } from "react-icons/gi";

const Donation = () => {
  const [dataLenght, setDataLenght] = useState(4);
  const [seeAll, setSeeAll] = useState(false);

  const donatedData = JSON.parse(localStorage.getItem("donations"));

  console.log(donatedData);

  const handleSeeAll = () => {
    if (dataLenght > 4) {
      setDataLenght(4);
    } else {
      setDataLenght(donatedData.length);
    }
  };
  return (
    <>
      <div>
        {
         donatedData == null
         ? <h2 className="text-xl font-semibold text-rose-800 text-center flex flex-col items-center justify-center min-h-screen gap-6">
            <span className="text-9xl">
              <GiPayMoney />{" "}
            </span>{" "}
            Please donate first !
          </h2>:<div className="pt-[100px] px-10">
        <div className=" py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 relative items-center justify-center w-[90%] mx-auto">
          {donatedData
                .slice(0, dataLenght)
                .map((donation) => (
                  <DonationPageCard
                    key={donation.id}
                    donation={donation}
                  ></DonationPageCard>
                ))
           }
        </div>

        <div className="flex justify-center items-center">
          { donatedData.length > 4 ? (
            <button
              onClick={() => {
                handleSeeAll(), setSeeAll(!seeAll);
              }}
              className="btn btn-lg px-10 mb-10 bg-[#009444] hover:bg-green-700 text-white"
            >
              {seeAll ? `See Less` : `See All`}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
        }
      </div>

      
    </>
  );
};

export default Donation;
