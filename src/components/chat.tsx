import Header from "./header";
import avatar from "../assets/img/Avatar.png";
import avatarTwo from "../assets/img/avatarTwo.png";
import avatarThree from "../assets/img/avatarThree.png";
import chatDubbleSVG from "../assets/svgIcons/chat-bubble.svg";
import usersSVG from "../assets/svgIcons/users.svg";
import copySvg from "../assets/svgIcons/copy.svg";
import starSvg from "../assets/svgIcons/Star.svg";
import dotsSvg from "../assets/svgIcons/dots.svg";
import audioSvg from "../assets/svgIcons/audio.svg";
import documentSvg from "../assets/svgIcons/document.svg";
import sendSvg from "../assets/svgIcons/send.svg";

interface PropTypes {
  changeFilterTerm: (text: string) => void;
  filterTerm: string;
}

const Chat = ({ changeFilterTerm, filterTerm }: PropTypes) => {
  return (
    <main className="ml-auto h-full w-[78%] p-8">
      <div className="flex h-full w-full flex-col justify-between">
        <Header changeFilterTerm={changeFilterTerm} filterTerm={filterTerm} />
        <div className="relative h-full w-full px-12 pt-8">
          <div className="h-full w-[60%] flex flex-col justify-between">
            {/* chat header */}
            <div className="flex justify-between mb-5">
              <div className="flex items-center gap-7">
                <h2 className=" text-heading-xs font-bold text-noble-black-100">
                  Spaceship Crew
                </h2>
                <button className="bg-glass rounded-full border-t border-noble-black-500 px-2 py-1 font-medium text-stem-green-500">
                  4
                </button>
              </div>
              <div className="flex items-center gap-9">
                <img className="cursor-pointer" src={starSvg} alt="star" />
                <img className="cursor-pointer" src={dotsSvg} alt="dots" />
              </div>
            </div>
            {/* chat body */}
            <div className="h-full">
                <div className="flex items-start gap-3 bg-noble-black-800 p-4 rounded-2xl">
                    <img src={avatarTwo} alt="avatar" />
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <h4 className=" text-body-lg font-semibold text-noble-black-100">Lily Patel 💅🏻</h4>
                                <p className=" text-body-sm font-medium text-noble-black-400">27.04.2023, 13:30</p>
                            </div>
                            <img src={copySvg} alt="copy" />
                        </div>
                        <p className=" text-body-lg font-medium text-noble-black-300 py-4">Agreed. In the meantime, let's keep pushing forward with this episode. I think it's going to be a real crowd-pleaser.</p>
                        <div className="flex gap-4 items-center">
                            <button className=" text-body-sm font-semibold bg-noble-black-600 text-noble-black-300 px-4 py-1 rounded-xl">Reply</button>
                            <button>🔥</button>
                            <button>💅🏻</button>
                            <button>🙄</button>
                        </div>
                    </div>
                </div>
                <p className=" text-body-sm font-semibold text-noble-black-300 my-4 text-center">Today</p>
                <div className="flex items-start gap-3 p-3 rounded-2xl border border-noble-black-500 mb-4">
                    <img src={avatarThree} alt="avatar" />
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <h4 className=" text-body-lg font-semibold text-noble-black-100">Adam Green</h4>
                                <p className=" text-body-sm font-medium text-noble-black-400">5 min ago</p>
                            </div>
                            <img src={copySvg} alt="copy" />
                        </div>
                        <p className=" text-body-lg font-medium text-noble-black-300 py-4">Hey guys, I was thinking about some character ideas for our show. What do you think we should focus on?</p>
                    </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-2xl border border-noble-black-500 mb-4">
                    <img src={avatarThree} alt="avatar" />
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4 items-center">
                                <h4 className=" text-body-lg font-semibold text-noble-black-100">Adam Green</h4>
                                <p className=" text-body-sm font-medium text-noble-black-400">5 min ago</p>
                            </div>
                            <img src={copySvg} alt="copy" />
                        </div>
                        <p className=" text-body-lg font-medium text-noble-black-300 py-4">Hey guys, I was thinking about some character ideas for our show. What do you think we should focus on?</p>
                    </div>
                </div>
            </div>
            {/* chat footer */}
            <div className="flex w-full justify-between gap-7 rounded-[20px] bg-noble-black-800 px-9 py-4">
              <img className="cursor-pointer" src={audioSvg} alt="audio" />
              <input
                type="text"
                className="w-full bg-noble-black-800 text-body-md font-medium text-noble-black-500 outline-none placeholder:text-noble-black-500"
                placeholder="What you want to share today?"
              />
              <img
                className="cursor-pointer"
                src={documentSvg}
                alt="document"
              />
              <div className=" cursor-pointer rounded-xl bg-noble-black-600 p-4">
                <img src={sendSvg} alt="send" />
              </div>
            </div>
          </div>

          {/* chat active users */}
          <div className="absolute right-7 top-10 w-[312px]">
            <div>
              <div className="mb-6 flex justify-between text-body-sm font-semibold text-noble-black-300">
                <p>Currently Online</p>
                <p>4</p>
              </div>
              <div className=" space-y-3">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <p className="absolute left-10 top-[4px] h-[10px] w-[10px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      Adam Green
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-noble-black-300">
                      Exploring <p className=" text-day-blue-500">Library</p>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img src={avatarTwo} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      Harper Singh
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-noble-black-300">
                      <p className=" text-happy-orange-600">Away</p> for 20
                      minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <p className="absolute left-10 top-[4px] h-[10px] w-[10px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      David Singh👹
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-noble-black-300">
                      Exploring <p className=" text-day-blue-500">Library</p>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img src={avatarThree} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      Lily Patel 💅🏻
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-red-power-600">
                      Lily Patel 💅🏻
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" no-scrollbar relative mt-6 h-[300px] overflow-scroll">
              <div className="mb-6 flex justify-between text-body-sm font-semibold text-noble-black-300">
                <p className="">Offline</p>
                <p>12</p>
              </div>
              <div className=" space-y-3 opacity-50">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <p className="absolute left-10 top-[4px] h-[10px] w-[10px] rounded-full bg-noble-black-400 ring-4 ring-noble-black-700"></p>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      Lucas Ortiz
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-noble-black-300">
                      Last visit: 14 hr ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <p className="absolute left-10 top-[4px] h-[10px] w-[10px] rounded-full bg-noble-black-400 ring-4 ring-noble-black-700"></p>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      Marcus Chen
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-noble-black-300">
                      Last visit: 14 hr ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <p className="absolute left-10 top-[4px] h-[10px] w-[10px] rounded-full bg-noble-black-400 ring-4 ring-noble-black-700"></p>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      Harper Singh
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-noble-black-300">
                      <p className=" text-happy-orange-600">Away</p> for 20
                      minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <p className="absolute left-10 top-[4px] h-[10px] w-[10px] rounded-full bg-noble-black-400 ring-4 ring-noble-black-700"></p>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      Mia Park
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-noble-black-300">
                      Last visit: 17 hr ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <p className="absolute left-10 top-[4px] h-[10px] w-[10px] rounded-full bg-noble-black-400 ring-4 ring-noble-black-700"></p>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      Adam Green
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-noble-black-300">
                      Exploring <p className=" text-day-blue-500">Library</p>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <p className="absolute left-10 top-[4px] h-[10px] w-[10px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      David Singh👹
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-noble-black-300">
                      Exploring <p className=" text-day-blue-500">Library</p>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <p className="absolute left-10 top-[4px] h-[10px] w-[10px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      Harper Singh
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-noble-black-300">
                      <p className=" text-happy-orange-600">Away</p> for 20
                      minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <p className="absolute left-10 top-[4px] h-[10px] w-[10px] rounded-full bg-electric-green-600 ring-4 ring-noble-black-700"></p>
                    <img src={avatar} alt="avatar" />
                  </div>
                  <div>
                    <h5 className=" pb-2 text-body-lg font-semibold text-noble-black-100">
                      Lily Patel 💅🏻
                    </h5>
                    <p className="flex gap-1 text-body-sm font-semibold text-red-power-600">
                      Lily Patel 💅🏻
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center rounded-xl border  border-noble-black-500">
              <button className="flex w-full gap-3 rounded-xl px-7 py-2 text-noble-black-300">
                <img src={chatDubbleSVG} alt="chat" />
                Chat
              </button>
              <button className="flex w-full gap-3 rounded-xl bg-noble-black-600 px-7 py-2 text-noble-black-100">
                <img src={usersSVG} alt="users" />
                Members
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chat;
