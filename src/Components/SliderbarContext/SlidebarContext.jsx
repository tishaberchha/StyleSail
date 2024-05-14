import React, { useState, createContext, children } from "react";

export const SlidebarContext = createContext();
const SlidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    console.log(children);
    setIsOpen(false);
  };
  return (
    <SlidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SlidebarContext.Provider>
  );
};

export default SlidebarProvider;
