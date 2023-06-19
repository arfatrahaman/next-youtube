"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch, FaToggleOff, FaToggleOn } from "react-icons/fa";

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [searchvideos, setsearchvideos] = useState("");
  const router = useRouter();

  const changeTheme = () => {
    if (toggleIcon === false) {
      setToggleIcon(true);
      document.body.className = "dark-theme";
    } else {
      setToggleIcon(false);
      document.body.className = "light-theme";
    }
  };

  const handleInputValue = (e) => {
    e.preventDefault();
    setsearchvideos(e.target.value);
  };

  const handleSearchVideos = () => {
    if (searchvideos) {
      router.push(`/search/${searchvideos}`);
    }
  };

  return (
    <section id="navigation">
      <div className="container">
        <div className="navigation-wrapper">
          {/* Navigation Item 1 */}
          <div className="navigation-item-1 navigation-item">
            <Link href="/">
              <div className="page-logo">
                <Image
                  src="/images/youtube.png"
                  width={50}
                  height={40}
                  property="true"
                  alt="youtubelogo"
                  className="logo"
                />
              </div>
            </Link>
          </div>
          {/* Navigation Item 2 */}
          <div className="navigation-item-2 navigation-item">
            <div className="page-searchbar">
              <form action="" className="searchbar-form">
                <input
                  type="text"
                  className="searchbar-input"
                  value={searchvideos}
                  onChange={handleInputValue}
                />
                <FaSearch
                  className="search-icon icon"
                  onClick={handleSearchVideos}
                />
              </form>
            </div>
          </div>
          {/* Navigation Item 3 */}
          <div className="navigation-item-3 navigation-item">
            <div className="page-toggle-icons" onClick={changeTheme}>
              {toggleIcon ? (
                <FaToggleOn className="icon" />
              ) : (
                <FaToggleOff className="icon" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
