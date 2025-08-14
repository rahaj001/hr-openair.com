import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext();

export const ScrollPr = ({ children }) => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
     

      if (Math.abs(currentScrollY - lastScrollY) > 100) {
        setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      }
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return (
    <ScrollContext.Provider value={scrollDirection}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom Hook zum einfachen Zugriff
export const useScrollDirection = () => useContext(ScrollContext);
