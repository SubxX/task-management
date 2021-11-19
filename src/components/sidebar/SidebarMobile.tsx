import { MdClose, MdMenuOpen } from "react-icons/md";

const SidebarMobile = ({ togglNavHandler, isOpened }: any) => {
  return (
    <div className="flex items-center justify-between text-white p-4 sticky top-0 left-0 bg-deep-purple lg:hidden z-10">
      <p className="font-medium tracking-wider">TODO MANGER</p>
      <button
        aria-label="toggle nav bar"
        onClick={togglNavHandler}
        className="select-none"
      >
        {isOpened ? <MdClose size={24} /> : <MdMenuOpen size={24} />}
      </button>
    </div>
  );
};

export default SidebarMobile;
