import { Chart } from "react-google-charts";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
const Staistics = () => {
  const storedData = localStorage.getItem("donations");
  let yourDonation = 0;
  if (storedData) {
    yourDonation = JSON.parse(storedData).length;
  }
  console.log(yourDonation);

  return (
    <div className="">
      {yourDonation == 0 ? (
        <h2 className="text-xl font-semibold text-rose-800 text-center flex flex-col items-center justify-center min-h-screen gap-6">
          <span className="text-9xl">
            <MdOutlineMoneyOffCsred />{" "}
          </span>{" "}
          You have not donated yet!
          <br /> Please Donate and then come back
        </h2>
      ) : (
        <div className="min-h-screen flex items-center flex-col justify-center">
          <Chart
            className="h-[400px] md:h-[600px]"
            chartType="PieChart"
            data={[
              ["Donation type", "Donation percentage"],
              ["Your Donation", yourDonation],
              ["Total Donation", 12 - yourDonation],
            ]}
            options={{
              legend: "none",
              //   title: "Total Donation",
              colors: ["#00C49F", "#FF444A"],
              pieStartAngle: 90,
            }}
            width="100%"
          />
          <div className="flex sm:gap-12 items-center font-semibold flex-col sm:flex-row">
            <div className="flex items-center gap-4">
              <p>Your Donation </p>
              <p className="bg-[#00C49F] w-[100px] h-[12px] rounded-sm"></p>
            </div>
            <div className="flex items-center gap-4 ">
              <p>Total Donation </p>
              <p className="bg-[#FF444A] w-[100px] h-[12px] text-lg rounded-sm" ></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staistics;
