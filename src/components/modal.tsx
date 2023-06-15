import crossSvg from "../assets/svgIcons/cross.svg";
import webSvg from '../assets/svgIcons/web.svg';
import avatar from "../assets/img/Avatar.png";
import arrowDown from "../assets/svgIcons/chevron-down.svg";
import documentSvg from "../assets/svgIcons/document.svg";

interface PropTypes {
    closeModal: () => void;
}

const Modal = ({closeModal} : PropTypes) => {
  return (
    <div className="bg-blur flex items-center justify-center">
        <div className="bg-modal w-[720px] border-t border-noble-black-500 p-6">
          <div>
            <div className="flex items-start justify-between pb-5">
              <h1 className=" text-heading-sm font-semibold text-noble-black-100">
                Manage who can view this project
              </h1>
              <img onClick={closeModal} className="cursor-pointer" src={crossSvg} alt="close" />
            </div>
            <p className=" text-body-md font-medium text-noble-black-300">
              Select which users can access and view this project. Only users
              with access can <br /> view and edit the project.
            </p>
          </div>

          <div className="flex items-center justify-between gap-5 pt-7">
            <div className="flex w-full items-center justify-between gap-4 rounded-xl border border-noble-black-500 px-3 py-2">
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1 rounded-full border border-noble-black-500 px-3">
                  <img
                    className="h-6 w-6 rounded-full"
                    src={avatar}
                    alt="avatar"
                  />
                  <p className=" text-body-sm font-semibold text-noble-black-300">
                    Sophia Zhang
                  </p>
                  <img
                    className="h-8 w-3 cursor-pointer"
                    src={crossSvg}
                    alt="cross"
                  />
                </div>
                <div className="flex items-center gap-1 rounded-full border border-noble-black-500 px-3">
                  <img
                    className="h-6 w-6 rounded-full"
                    src={avatar}
                    alt="avatar"
                  />
                  <p className=" text-body-sm font-semibold text-noble-black-300">
                    Olivia Sharma
                  </p>
                  <img
                    className="h-8 w-3 cursor-pointer"
                    src={crossSvg}
                    alt="cross"
                  />
                </div>
              </div>
              <div className="flex cursor-pointer gap-2">
                <p className=" text-body-lg font-medium text-stem-green-500">
                  can edit
                </p>
                <img src={arrowDown} alt="arrow-down" />
              </div>
            </div>
            <div>
              <button className="flex items-center gap-3 rounded-xl bg-stem-green-500 px-8 py-3 text-day-blue-900 text-body-lg font-semibold">
                Invite{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.73084 11.2692L16.2337 1.76642M2.48664 4.99807L14.1349 1.11532C15.8344 0.54883 17.4512 2.16564 16.8847 3.8651L13.0019 15.5134C12.3895 17.3507 9.86133 17.5304 8.9952 15.7981L7.05483 11.9174C6.84447 11.4967 6.50334 11.1555 6.08263 10.9452L2.20188 9.0048C0.469619 8.13866 0.64929 5.61052 2.48664 4.99807Z"
                    stroke="#0C1132"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="my-11 space-y-3">
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className="w-12 h-12 rounded-[20px]" src={avatar} alt="avatar" />
                    <div>
                        <h4 className=" text-body-lg font-semibold text-noble-black-100">You</h4>
                        <p className=" text-body-sm font-medium text-stem-green-500">@ryan</p>
                    </div>
                </div>
                <button className="badge-glass-bg px-4 py-1 text-body-sm font-semibold text-stem-green-500">Owner</button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className="w-12 h-12 rounded-[20px]" src={avatar} alt="avatar" />
                    <div>
                        <h4 className=" text-body-lg font-semibold text-noble-black-100">Mia Park</h4>
                        <p className=" text-body-sm font-medium text-stem-green-500">@cute-mia</p>
                    </div>
                </div>
                <button className="badge-glass-bg px-4 py-1 text-body-sm font-semibold text-heisenberg-blue-500">Editor</button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className="w-12 h-12 rounded-[20px]" src={avatar} alt="avatar" />
                    <div>
                        <h4 className=" text-body-lg font-semibold text-noble-black-100">Isabella Chen</h4>
                        <p className=" text-body-sm font-medium text-stem-green-500">@issa</p>
                    </div>
                </div>
                <button className="badge-glass-bg px-4 py-1 text-body-sm font-semibold text-heisenberg-blue-500">Editor</button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className="w-12 h-12 rounded-[20px]" src={avatar} alt="avatar" />
                    <div>
                        <h4 className=" text-body-lg font-semibold text-noble-black-100">Andrew Garcia</h4>
                        <p className=" text-body-sm font-medium text-stem-green-500">@garci28</p>
                    </div>
                </div>
                <button className="badge-glass-bg px-4 py-1 text-body-sm font-semibold text-day-blue-300">Viewer</button>
            </div>
          </div>

          <div className=" bg-noble-black-700 rounded-xl p-6 flex justify-between">
            <div className="flex justify-between w-full border-r border-noble-black-500 pr-5">
                <div className="flex gap-4 items-center">
                    <img src={webSvg} alt="" />
                    <p className=" text-body-lg font-medium text-noble-black-100">Anyone with the link</p>
                </div>
                <div className="flex cursor-pointer gap-2 items-center">
                <p className=" text-body-lg font-medium text-stem-green-500">
                  can view
                </p>
                <img src={arrowDown} alt="arrow-down" />
              </div>
            </div>
            <div className="flex items-center gap-3 px-3 py-1.5 basis-1/4 ml-5 cursor-pointer bg-gradient-to-r from-noble-black-500 to-noble-black-600 rounded-xl">
                  <img
                    className="rounded-full"
                    src={documentSvg}
                    alt="avatar"
                  />
                  <p className=" text-body-sm font-semibold text-noble-black-300">
                    Copy link
                  </p>
                </div>
          </div>
        </div>
      </div>
  )
}

export default Modal;