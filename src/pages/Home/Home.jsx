import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner"
import AllDonations from "../../components/AllDonations/AllDonations";
import { useState } from "react";


const Home = () => {
    const donations = useLoaderData();
    const [filteredArray, setFilteredArray] =useState(donations)
    let searchedDonations = donations
    let newarray =[]
    const handleSearchData= (searchText) =>{
        // if(searchText == donations[0].category ){
        //     console.log("Matched");
        // }else{
        //     console.log("Didn't matched");
        // }
        newarray = donations.filter(donation=> donation.category == searchText)
    }
    console.log(searchedDonations);
    console.log("filtered",filteredArray);
    
    console.log(newarray);
    return (
        <div>
            <div><Banner handleSearchData={handleSearchData}></Banner></div>
           
            <div className="w-[80%] mx-auto py-20">
               <AllDonations donations={searchedDonations} ></AllDonations>
            </div>
            

        </div>
    );
};

export default Home;