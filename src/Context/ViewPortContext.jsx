import React, { useState, useEffect, createContext } from "react";

export const ViewPortContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [updates, setUpdates] = useState(true);
  const [sent, setSent] = useState(null)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewPortContext.Provider
      value={{
        width,
        height,
        name,
        setName,
        email,
        setEmail,
        updates,
        setUpdates,
        sent,
        setSent
      }}
    >
      {children}
    </ViewPortContext.Provider>
  );
};
