import { createRef, useState } from "react";
import Sidebar from "./Sidebar";
import SidebarMobile from "./SidebarMobile";

const SidebarWrapper = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navRef = createRef<HTMLDivElement>();
  const toggleNav = (): void => {
    if (!navRef.current) return;
    navRef.current.classList.toggle("-translate-x-full");
    setIsOpened(!navRef.current.classList.contains("-translate-x-full"));
  };

  return (
    <>
      <Sidebar ref={navRef} />
      <SidebarMobile togglNavHandler={toggleNav} isOpened={isOpened} />
      <div
        onClick={toggleNav}
        className={`fixed inset-0 bg-black z-20 lg:hidden transition-opacity ${
          isOpened ? "opacity-50" : "pointer-events-none opacity-0"
        }`}
      ></div>
    </>
  );
};

export default SidebarWrapper;
