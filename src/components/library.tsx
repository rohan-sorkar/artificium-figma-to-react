import Header from "./header";
import dotsSvg from "../assets/svgIcons/dots.svg";
import avatar from "../assets/img/avatar4.png";
import chatDubbleSVG from "../assets/svgIcons/chat-bubble.svg";

interface PropTypes {
  changeFilterTerm: (text: string) => void;
  filterTerm: string;
}

const Library = ({ changeFilterTerm, filterTerm }: PropTypes) => {
  return (
    <main className="ml-auto h-full w-[78%] p-8">
      <div className="flex h-full w-full flex-col justify-between">
        <Header changeFilterTerm={changeFilterTerm} filterTerm={filterTerm} />
        <div className="h-[80%] flex justify-between">
          {/* first column */}
          <div className="basis-1/3 px-5 border-r border-noble-black-600 mt-9 no-scrollbar overflow-scroll">
            <div>
              <div className="flex justify-between mb-7">
                <h3 className=" text-heading-xs font-bold text-[#ffffff]">Images</h3>
                <img src={dotsSvg} alt="dots" />
              </div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Captain Drake</h4>
                <p className="pb-6 text-body-lg font-medium text-noble-black-300">
                  Natural born leader with years of experience in space
                  exploration.
                </p>
                <div className="pb-6 flex gap-2 justify-stretch">
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                </div>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      12
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Cosmic Voyager</h4>
                <p className="pb-6 text-body-lg font-medium text-noble-black-300">
                Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.
                </p>
                <div className="pb-6 flex gap-2 justify-stretch">
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                </div>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      12
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Captain Drake</h4>
                <p className="pb-6 text-body-lg font-medium text-noble-black-300">
                  Natural born leader with years of experience in space
                  exploration.
                </p>
                <div className="pb-6 flex gap-2 justify-stretch">
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                </div>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      12
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Captain Drake</h4>
                <p className="pb-6 text-body-lg font-medium text-noble-black-300">
                  Natural born leader with years of experience in space
                  exploration.
                </p>
                <div className="pb-6 flex gap-2 justify-stretch">
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                </div>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      12
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Captain Drake</h4>
                <p className="pb-6 text-body-lg font-medium text-noble-black-300">
                  Natural born leader with years of experience in space
                  exploration.
                </p>
                <div className="pb-6 flex gap-2 justify-stretch">
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                  <img className="w-full object-cover h-20 rounded-xl" src={avatar} alt="avatar" />
                </div>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      12
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="basis-1/3 px-5 border-r border-noble-black-600 mt-9 no-scrollbar overflow-scroll">
            <div>
              <div className="flex justify-between mb-7">
                <h3 className=" text-heading-xs font-bold text-[#ffffff]">Documents</h3>
                <img src={dotsSvg} alt="dots" />
              </div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Character bios</h4>
                <p className="pb-6 text-body-lg font-medium text-noble-black-300">
                3 documents, 43832 words
                </p>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Plot outline</h4>
                <p className="pb-6 text-body-lg font-medium text-noble-black-300">
                1 document, 18745 words
                </p>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Scene descriptions</h4>
                <p className="pb-6 text-body-lg font-medium text-noble-black-300">
                5 documents, 23992 words
                </p>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Character bios</h4>
                <p className="pb-6 text-body-lg font-medium text-noble-black-300">
                3 documents, 43832 words
                </p>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Character bios</h4>
                <p className="pb-6 text-body-lg font-medium text-noble-black-300">
                3 documents, 43832 words
                </p>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* third column */}
          <div className="basis-1/3 px-5 mt-9 no-scrollbar overflow-scroll">
            <div>
              <div className="flex justify-between mb-7">
                <h3 className=" text-heading-xs font-bold text-[#ffffff]">Ideas</h3>
                <img src={dotsSvg} alt="dots" />
              </div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Character bios</h4>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">A list of potential plot points or story arcs.</h4>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Ideas for potential spin-offs or other related media.</h4>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Potential partnerships or collaborations with other artists or creators.</h4>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Character bios</h4>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-7">
                <h3 className=" text-heading-xs font-bold text-[#ffffff]">Ideas</h3>
                <img src={dotsSvg} alt="dots" />
              </div>
              <div className="bg-noble-black-800 p-5 rounded-[20px] mb-3">
                <h4 className="text-body-lg font-semibold text-[#ffffff] pb-2">Character bios</h4>
                <div className=" flex justify-between items-center border-t border-t-noble-black-500 pt-6">
                  <div className="flex">
                    <div className="">
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-4 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <p className="absolute left-4 top-0 h-[7px] w-[7px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className="relative -ml-2  ring-2 ring-noble-black-700">
                      <img
                        className="w-8 rounded-full"
                        src={avatar}
                        alt="avatar"
                      />
                    </div>
                    <div className=" relative -ml-2 h-8 rounded-xl bg-noble-black-600 px-2 pt-1 font-semibold text-noble-black-400 ring-2 ring-noble-black-700">
                      <p>+4</p>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <p className=" text-body-md font-semibold text-noble-black-100">
                      0
                    </p>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 3H6.5C4.84315 3 3.5 4.34315 3.5 6V15.7574C3.5 16.553 3.81607 17.3161 4.37868 17.8787L7.21967 20.7197C7.69214 21.1921 8.5 20.8575 8.5 20.1893V19C8.5 17.8954 9.39543 17 10.5 17H18.5C20.1569 17 21.5 15.6569 21.5 14V6C21.5 4.34315 20.1569 3 18.5 3Z"
                        stroke="#B6F09C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="px-5 text-heading-xs rounded-xl text-noble-black-100 bg-noble-black-600 mt-9">+</button>
        </div>
      </div>
    </main>
  );
};

export default Library;
