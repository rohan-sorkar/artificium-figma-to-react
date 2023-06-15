import avatar from "../assets/img/Avatar.png";
import arrowDown from "../assets/svgIcons/chevron-down.svg";
import searchSvg from "../assets/svgIcons/search.svg";
import billingSvg from "../assets/svgIcons/billing.svg";
import settingSvg from "../assets/svgIcons/settings.svg";
import triangleSvg from "../assets/svgIcons/triangle.svg";
import circlePlus from "../assets/svgIcons/plus-circle.svg";
import octagonSvg from "../assets/svgIcons/octagon.svg";

interface PropTypes {
  openModal: () => void;
}

const Sidebar = ({ openModal }: PropTypes) => {
  return (
    <div className="fixed h-full w-[22%] p-8">
      <div className=" flex h-full flex-col justify-between rounded-[20px] bg-noble-black-800">
        <div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <img src={avatar} alt="avatar" />
              <div>
                <p className=" text-body-lg font-semibold text-noble-black-100">
                  Intellisys
                </p>
                <p className=" text-body-sm font-medium text-stem-green-500">
                  12 members
                </p>
              </div>
            </div>
            <img src={arrowDown} alt="arrow-down" />
          </div>
          <div className="border-y border-noble-black-600 px-6 py-8">
            <p className=" text-body-sm font-semibold text-noble-black-400">
              GENERAL
            </p>
            <div className="flex justify-between py-6">
              <div className="flex items-center justify-center gap-4">
                <img src={searchSvg} alt="search" />
                <p className=" text-body-md font-semibold text-noble-black-100">
                  Search
                </p>
              </div>
              <div className=" rounded-md bg-gradient-to-r from-noble-black-600 to-noble-black-700">
                <p className="rounded-md border border-noble-black-600 px-2 py-1 text-body-sm font-semibold text-noble-black-300">
                  ⌘ S
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={billingSvg} alt="billing" />
              <p className="text-body-md font-semibold text-noble-black-100">
                Billing
              </p>
            </div>
          </div>
          <div className="mx-3 py-8">
            <p className=" px-3 pb-5 text-body-sm font-semibold text-noble-black-400">
              PROJECTS
            </p>
            <div className="my-3 flex cursor-pointer items-center gap-4 rounded-lg bg-gradient-to-r from-noble-black-600 to-noble-black-700 px-4 py-3 transition">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="18"
                  height="18"
                  rx="3"
                  stroke="#B6F09C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p className=" text-body-md font-semibold text-noble-black-100">
                Orbital Oddysey
              </p>
            </div>
            <div className="my-3 flex cursor-pointer items-center gap-4 rounded-lg from-noble-black-600 to-noble-black-700 px-4 py-3 transition hover:bg-gradient-to-r">
              <img src={triangleSvg} alt="triangle" />
              <p className="text-body-md font-semibold text-noble-black-100">
                Digital Product Launch
              </p>
            </div>
            <div className="my-3 flex cursor-pointer items-center gap-4 rounded-lg from-noble-black-600 to-noble-black-700 px-4 py-3 transition hover:bg-gradient-to-r">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="18"
                  height="18"
                  rx="3"
                  stroke="#E26F20"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <p className=" text-body-md font-semibold text-noble-black-100">
                Brand Refresh
              </p>
            </div>
            <div className="my-3 flex cursor-pointer items-center gap-4 rounded-lg from-noble-black-600 to-noble-black-700 px-4 py-3 transition hover:bg-gradient-to-r">
              <img src={octagonSvg} alt="octagon" />
              <p className="text-body-md font-semibold text-noble-black-100">
                Social Media Strategy
              </p>
            </div>
            <div
              onClick={openModal}
              className="my-3 flex cursor-pointer items-center gap-4 rounded-lg from-noble-black-600 to-noble-black-700 px-4 py-3 transition hover:bg-gradient-to-r"
            >
              <img src={circlePlus} alt="plus" />
              <p className="text-body-md font-semibold text-noble-black-400">
                Add new project
              </p>
            </div>
          </div>
        </div>
        <div className="m-3 flex items-center justify-between rounded-md bg-gradient-to-r from-noble-black-600 to-noble-black-700 p-6">
          <div className="relative flex items-center gap-4">
            <p className="absolute left-9 top-[3px] h-[10px] w-[10px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
            <img src={avatar} alt="avatar" />
            <div>
              <p className=" text-body-lg font-semibold text-noble-black-100">
                Ryan Lee
              </p>
              <p className=" text-body-sm font-medium text-stem-green-500">
                premium
              </p>
            </div>
          </div>
          <img className="cursor-pointer" src={settingSvg} alt="settings" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
