import DextopSort from "../modules/DextopSort";
import DextopSideBar from "../modules/DextopSideBar";
import HomeProducts from "../modules/HomeProducts";
import MobileFilter from "../modules/mobile/MobileFilter";
import MobileFavorite from "../modules/mobile/MobileFavorite";
import MobileBottomBar from "../modules/mobile/MobileBottomBar";

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
        <div className="flex justify-between gap-4 my-5">
          <div className="w-full">
            <MobileFavorite />
          </div>
          <div className="w-full">
            <MobileFilter />
          </div>
        </div>
        <div>
          <HomeProducts />
        </div>
        <MobileBottomBar />
      </div>
    </>
  );
};

export default Home;
