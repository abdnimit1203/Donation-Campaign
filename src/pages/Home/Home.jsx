import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner"
import AllDonations from "../../components/AllDonations/AllDonations";


const Home = () => {
    const donations = useLoaderData();
    console.log(donations);
    return (
        <div>
            <div><Banner></Banner></div>
           
            <div className="w-[80%] mx-auto py-20">
               <AllDonations donations={donations} ></AllDonations>
            </div>
            

        </div>
    );
};

export default Home;