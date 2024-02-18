import React, { createContext, useContext, useState } from 'react';

const NavigatorContext = createContext();

export const NavigatorProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <NavigatorContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </NavigatorContext.Provider>
  );
};

export const useNavigator = () => useContext(NavigatorContext);
