import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner"
import AllDonations from "../../components/AllDonations/AllDonations";
import {  useState } from "react";


const Home = () => {
    const donations = useLoaderData();
    const [filteredArray, setFilteredArray] =useState(donations)
    const [isSearched, setIsSearched] =useState(false)
    const [searchedText, setSearchedText] =useState("none")
    let searchedDonations = donations;
    const handleSearchData= (searchText) =>{
        const newArray = donations.filter(donation=> donation.category.toUpperCase() == searchText.toUpperCase())
        setFilteredArray(newArray)
        setIsSearched(true)
        setSearchedText(searchText)
    }
    
    
    console.log(searchedDonations);
    console.log("filtered",filteredArray);
    

    return (
        <div>
            <div><Banner handleSearchData={handleSearchData}></Banner></div>
           <div className="p-10">
           {
            
                isSearched? <p className="text-red-700">You searched for `{searchedText}` <br />{filteredArray.length} results found... </p>:<h2></h2>
            
           }
           </div>
            
            {
                  filteredArray.length ==0? <h2 className="flex justify-center sm:text-4xl text-2xl flex-col items-center gap-4 pb-40">Nothing matched <span className="font-extralight sm:text-base text-sm">Try again or refesh the page please...</span> </h2> : <div className="w-[80%] mx-auto py-20"><AllDonations donations={filteredArray} ></AllDonations></div>
            }
               
            
            

        </div>
    );
};

export default Home;