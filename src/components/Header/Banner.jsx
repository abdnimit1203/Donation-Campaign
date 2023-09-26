import { useState } from "react";
import PropTypes from "prop-types";

const Banner = ({handleSearchData}) => {
  const [searchText, setSearchText] = useState(null);
  const handleSearchText = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };
  
  return (
    <div>
      <div className="card bg-base-100 relative rounded-none">
        <figure className="">
          <img
            src="/donationBanner.png"
            alt="donation Banner"
            className="hidden sm:w-full sm:flex"
          />
        </figure>
        <div className="card-body bg-[#ffffffde] sm:absolute w-full h-full flex flex-col justify-center items-center gap-8 pb-10 pt-[200px] sm:pt-[100px]">
          <h2 className="card-title text-center text-2xl lg:text-5xl font-bold">
            I Grow By Helping People In Need
          </h2>
          <div className="join">
            <input
            onChange={handleSearchText}
              className="input w-full  join-item input-bordered "
              placeholder="Search here..."
            />
            <button onClick={()=>handleSearchData(searchText)} className="btn join-item btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  handleSearchData: PropTypes.func
};
export default Banner;
