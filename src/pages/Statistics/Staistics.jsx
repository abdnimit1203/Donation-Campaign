import { Chart } from "react-google-charts";
const Staistics = () => {
  const storedData = localStorage.getItem("donations");
  let yourDonation = 4;
  if (storedData) {
    yourDonation = JSON.parse(storedData).length;
    console.log(yourDonation);
  }

  return (
    <div className="pt-[100px]">
      <Chart
        chartType="PieChart"
        data={[
          ["Donation type", "Donation percentage"],
          ["Your Donation", yourDonation],
          ["Total Donation", 12 - yourDonation],
        ]}
        options={{
          legend: "bottom",
        //   title: "Total Donation",
          colors: ["#00C49F", "#FF444A"],
          pieStartAngle: 90
        }}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default Staistics;
