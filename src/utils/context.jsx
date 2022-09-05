import React, { useState, useContext, useReducer} from 'react'
import {data} from '../data'

const AppContext = React.createContext();

export function AppProvider({ initialState, reducer, children }) {
    // const getStorageTheme = () => {
    //     let theme = 'light-theme';
    //     if (localStorage.getItem('theme')) {
    //       theme = localStorage.getItem('theme');
    //     }
    //     return theme;
    //   };

  // const [theme, setTheme] = useState(getStorageTheme());
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const openSidebar = () => {
  //       setIsSidebarOpen(true);
  //   };
  //   const closeSidebar = () => {
  //       setIsSidebarOpen(false);
  //   };

  //   const toggleTheme = () => {
  //       if (theme === 'light-theme') {
  //         setTheme('dark-theme');
  //       } else {
  //         setTheme('light-theme');
  //       }
  //     };
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);
  
    return (
        <AppContext.Provider 
            value={ 
                // people, setPeople,
                // index, setIndex,
                useReducer(reducer, initialState)
            }
        >
                {children}
        </AppContext.Provider>
  )
};
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export { AppContext } 