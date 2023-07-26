import DextopSort from "../modules/DextopSort";
import DextopSideBar from "../modules/DextopSideBar";
import HomeProducts from "../modules/HomeProducts";

const Home = () => {
  return (
    <>
      {/* Dextop */}
      <div className="hidden md:block xl:container px-4 sm:px-8">
        <div>
          <DextopSort />
        </div>
        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-3 xl:col-span-2">
            <DextopSideBar />
          </div>
          <div className="col-span-9 xl:col-span-10">
            <div className=" rounded-lg">
              <HomeProducts />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-4 sm:px-10">
        <div className="flex justify-between">
          <div>sort</div>
          <div>filter</div>
        </div>
        <div>
          <HomeProducts />
        </div>
      </div>
    </>
  );
};

export default Home;
