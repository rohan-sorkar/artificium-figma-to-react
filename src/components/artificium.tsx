import audioSvg from "../assets/svgIcons/audio.svg";
import documentSvg from "../assets/svgIcons/document.svg";
import sendSvg from "../assets/svgIcons/send.svg";
import arrowSvg from "../assets/svgIcons/arrow.svg";
import pencilSvg from "../assets/svgIcons/pencil.svg";
import bulbSvg from "../assets/svgIcons/bulb.svg";
import codeSvg from "../assets/svgIcons/code.svg";
import Header from "./header";

interface PropTypes {
    changeFilterTerm: (text: string) => void;
    filterTerm: string
}

const Artificium = ({changeFilterTerm, filterTerm} : PropTypes) => {
  return (
    <main className="ml-auto h-full w-[78%] p-8">
      <div className="flex h-full w-full flex-col justify-between">
        <Header changeFilterTerm={changeFilterTerm} filterTerm={filterTerm}/>
        <div className="flex h-full w-full flex-col justify-between px-8 py-14">
          <div className="text-center">
            <h1 className=" pb-5 text-heading-md font-medium text-noble-black-100">
              Innovation Starter Pack
            </h1>
            <p className=" text-body-lg font-medium text-noble-black-300">
              Kickstart your innovation process with our comprehensive selection
              of predefined prompts.
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
  );
};

export default Artificium;
