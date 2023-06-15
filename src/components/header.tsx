import avatar from "../assets/img/Avatar.png";
import logo from "../assets/img/Logo.png";
import chatSvg from "../assets/svgIcons/chat.svg";
import librarySvg from "../assets/svgIcons/library.svg";
import shareSvg from "../assets/svgIcons/share.svg";
import editSvg from "../assets/svgIcons/edit.svg";
import {Link} from 'react-router-dom';

interface PropTypes {
    changeFilterTerm: (text: string) => void;
    filterTerm: string
}

const Header = ({changeFilterTerm, filterTerm} : PropTypes) => {
  return (
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
      <div className="flex justify-between items-center">
        <div className="flex gap-10">
          <div onClick={() => changeFilterTerm('artificium')} className="relative flex cursor-pointer items-center gap-3 pb-7">
            <img className="w-5" src={logo} alt="logo" />
            <p className="text-body-md font-semibold text-noble-black-100">
              Artificium
            </p>
            { filterTerm === 'artificium' && <hr className=" absolute bottom-0 h-1.5 w-28 rounded-t-xl bg-stem-green-500" /> }
          </div>
          <div onClick={() => changeFilterTerm('chat')} className="relative flex cursor-pointer items-center gap-3 pb-7">
            <img src={chatSvg} alt="chat" />
            <p className="text-body-md font-semibold text-noble-black-300">
              Chat
            </p>
            { filterTerm === 'chat' && <hr className=" absolute bottom-0 h-1.5 w-28 rounded-t-xl bg-stem-green-500" /> }
          </div>
          <div onClick={() => changeFilterTerm('library')} className="relative flex cursor-pointer items-center gap-3 pb-7">
            <img src={librarySvg} alt="library" />
            <p className="text-body-md font-semibold text-noble-black-300">
              Library
            </p>
            { filterTerm === 'library' && <hr className=" absolute bottom-0 h-1.5 w-28 rounded-t-xl bg-stem-green-500" /> }
          </div>
        </div>
        <div className="flex gap-5 mb-5">
          <Link to={'/register'} className="px-6 py-1 badge-glass-bg rounded-lg text-sunglow-400 shadow-circle-yellow">Register</Link>
          <Link to={'/login'} className="px-6 py-1 badge-glass-bg rounded-lg text-sunglow-400 shadow-circle-yellow">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
