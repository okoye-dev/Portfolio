import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import closeIcon from "../assets/close-icon.svg";
import menuIcon from "../assets/menu-icon.svg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 699px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={` ${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      {/* DESKTOP NAV */}
      {isAboveSmallScreens ? (
        <div className="flex justify-around gap-16 text-sm font-semibold">
          <span className="font-extrabold text-lg italic">OD</span>
          <div className="flex justify-between gap-16">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      ) : (
        <div className="mx-5 flex justify-between items-center">
          <span className="font-extrabold text-lg italic">OD</span>
          <button
            className="rounded-full p-2 bg-red"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={menuIcon} />
          </button>
        </div>
      )}

      {/* MOBILE MENU POPUP */}
      {!isAboveSmallScreens && isMenuToggled && (
        <div className="flex flex-col fixed right-0 bottom-0 h-full bg-blue w-[70vw]">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <img
                className="-translate-y-5 translate-x-5"
                alt="close-icon"
                src={closeIcon}
              />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex">
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue items-center">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
