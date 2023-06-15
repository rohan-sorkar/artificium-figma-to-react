import avatar from "../assets/img/Avatar.png";
import arrowDown from "../assets/svgIcons/chevron-down.svg";
import searchSvg from "../assets/svgIcons/search.svg";
import billingSvg from "../assets/svgIcons/billing.svg";
import settingSvg from "../assets/svgIcons/settings.svg";
import triangleSvg from "../assets/svgIcons/triangle.svg";
import circlePlus from "../assets/svgIcons/plus-circle.svg";
import octagonSvg from "../assets/svgIcons/octagon.svg";
import logo from "../assets/img/Logo.png";
import chatSvg from "../assets/svgIcons/chat.svg";
import librarySvg from "../assets/svgIcons/library.svg";
import shareSvg from "../assets/svgIcons/share.svg";
import editSvg from "../assets/svgIcons/edit.svg";
import audioSvg from "../assets/svgIcons/audio.svg";
import documentSvg from "../assets/svgIcons/document.svg";
import sendSvg from "../assets/svgIcons/send.svg";
import arrowSvg from "../assets/svgIcons/arrow.svg";
import pencilSvg from "../assets/svgIcons/pencil.svg";
import bulbSvg from "../assets/svgIcons/bulb.svg";
import codeSvg from "../assets/svgIcons/code.svg";


const DashboardModal = () => {
  return (
    <section className="h-screen w-screen bg-noble-black-700">
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
              <div className="my-3 flex cursor-pointer items-center gap-4 rounded-lg from-noble-black-600 to-noble-black-700 px-4 py-3 transition hover:bg-gradient-to-r">
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

      <main className="relative ml-auto h-full w-[78%] p-8">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="w-full rounded-[20px] bg-noble-black-800 px-5 pt-5">
            <div className="flex justify-between pb-10">
              <div>
                <h1 className=" text-heading-xs font-bold text-noble-black-100">
                  Orbital Oddysey
                </h1>
                <p className=" mt-4 text-body-md font-medium text-noble-black-300">
                  Marketing Campaign for a new TV series Launch
                </p>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex">
                  <div>
                    <img className="w-8" src={avatar} alt="avatar" />
                  </div>
                  <div className="relative -ml-2">
                    <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                    <img className="w-8" src={avatar} alt="avatar" />
                  </div>
                  <div className="relative -ml-2">
                    <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                    <img className="w-8" src={avatar} alt="avatar" />
                  </div>
                  <div className="relative -ml-2">
                    <img className="w-8" src={avatar} alt="avatar" />
                  </div>
                  <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-800">
                    <p>+4</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <img src={shareSvg} alt="share" />
                  <p className=" text-body-md font-semibold text-noble-black-400">
                    Share
                  </p>
                </div>
                <div className="h-8 rounded-lg bg-noble-black-600 px-3 pt-1">
                  <img src={editSvg} alt="edit" />
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="relative flex cursor-pointer items-center gap-3 pb-7">
                <img className="w-5" src={logo} alt="logo" />
                <p className="text-body-md font-semibold text-noble-black-100">
                  Artificium
                </p>
                <hr className=" absolute bottom-0 h-1.5 w-28 rounded-t-xl bg-stem-green-500" />
              </div>
              <div className="relative flex cursor-pointer items-center gap-3 pb-7">
                <img src={chatSvg} alt="chat" />
                <p className="text-body-md font-semibold text-noble-black-300">
                  Chat
                </p>
              </div>
              <div className="relative flex cursor-pointer items-center gap-3 pb-7">
                <img src={librarySvg} alt="library" />
                <p className="text-body-md font-semibold text-noble-black-300">
                  Library
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-full w-full flex-col justify-between px-8 py-14">
            <div className="text-center">
              <h1 className=" pb-5 text-heading-md font-medium text-noble-black-100">
                Innovation Starter Pack
              </h1>
              <p className=" text-body-lg font-medium text-noble-black-300">
                Kickstart your innovation process with our comprehensive
                selection of predefined prompts.
              </p>
            </div>
            <div className="flex justify-between gap-28 px-10">
              <div className="basis-1/4">
                <div className="mb-6">
                  <div className="shadow-circle-green mx-auto mb-3 h-12 w-12 rounded-full border-t border-[#FFFFFF14] bg-gradient-to-r from-noble-black-500 to-noble-black-600 py-3">
                    <svg
                      className="mx-auto"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9V16.5H9Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h4 className=" text-center text-body-xl font-semibold text-noble-black-100">
                    Creative Assets
                  </h4>
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    UI wireframe
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Brochure design
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Social media
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Brand guidelines
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
              </div>
              <div className="basis-1/4">
                <div className="mb-6">
                  <div className="shadow-circle-blue mx-auto mb-3 h-12 w-12 rounded-full border-t border-[#FFFFFF14] bg-gradient-to-r from-noble-black-500 to-noble-black-600 py-3">
                    <img className="mx-auto" src={codeSvg} alt="code" />
                  </div>
                  <h4 className=" text-center text-body-xl font-semibold text-noble-black-100">
                    Developer Tools
                  </h4>
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    API Integration
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Test automation
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    DB optimization
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Code review
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
              </div>
              <div className="basis-1/4">
                <div className="mb-6">
                  <div className="shadow-circle-purple mx-auto mb-3 h-12 w-12 rounded-full border-t border-[#FFFFFF14] bg-gradient-to-r from-noble-black-500 to-noble-black-600 py-3">
                    <img className="mx-auto" src={pencilSvg} alt="pencil" />
                  </div>
                  <h4 className=" text-center text-body-xl font-semibold text-noble-black-100">
                    Content Creation
                  </h4>
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Product description
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    E-mail copy
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Whitepaper
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Press release
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
              </div>
              <div className="basis-1/4">
                <div className="mb-6">
                  <div className="shadow-circle-yellow mx-auto mb-3 h-12 w-12 rounded-full border-t border-[#FFFFFF14] bg-gradient-to-r from-noble-black-500 to-noble-black-600 py-3">
                    <img className="mx-auto" src={bulbSvg} alt="bulb" />
                  </div>
                  <h4 className=" text-center text-body-xl font-semibold text-noble-black-100">
                    Idea Generation
                  </h4>
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Hashtag ideas
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Brainstorming
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Trend analysis
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
                <div className="bg-glass mb-2 flex items-center justify-between rounded-xl border-t border-[#FFFFFF14] px-6 py-3">
                  <p className=" text-body-md font-semibold text-noble-black-200">
                    Social media posts
                  </p>
                  <img className="w-[16px]" src={arrowSvg} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between gap-7 rounded-[20px] bg-noble-black-800 px-9 py-5">
            <img className="cursor-pointer" src={audioSvg} alt="audio" />
            <input
              type="text"
              className="w-full bg-noble-black-800 text-body-md font-medium text-noble-black-500 outline-none placeholder:text-noble-black-500"
              placeholder="You can ask me anything! I am here to help."
            />
            <img className="cursor-pointer" src={documentSvg} alt="document" />
            <div className=" cursor-pointer rounded-xl bg-noble-black-600 p-4">
              <img src={sendSvg} alt="send" />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default DashboardModal;
