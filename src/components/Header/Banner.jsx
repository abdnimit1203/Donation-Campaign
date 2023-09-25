const Banner = () => {
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
        <div className="card-body bg-[#ffffffde] absolute w-full h-full flex flex-col justify-center items-center gap-8 pt-[200px] sm:pt-[100px]">
          <h2 className="card-title text-center text-2xl lg:text-5xl font-bold">
            I Grow By Helping People In Need
          </h2>
          <div className="join">
            <input
              className="input w-full  join-item input-bordered "
              placeholder="Search here..."
            />
            <button className="btn join-item btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
