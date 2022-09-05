import React, { useState, useContext, useReducer} from 'react'
import {data} from '../data'

const AppContext = React.createContext();

export function AppProvider({ initialState, reducer, children }) {
    const getStorageTheme = () => {
        let theme = 'light-theme';
        if (localStorage.getItem('theme')) {
          theme = localStorage.getItem('theme');
        }
        return theme;
      };

  const [theme, setTheme] = useState(getStorageTheme());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const toggleTheme = () => {
        if (theme === 'light-theme') {
          setTheme('dark-theme');
        } else {
          setTheme('light-theme');
        }
      };
      const [user, setUser] = useState({});
      // const getTokenFromUrl = ()=>{
      //     // let token = window.localStorage.getItem("token")
      //       return  window.location.hash
      //               .substring(1)
      //               .split("&")
      //               .reduce((initial, item)=>{
      //                 let parts = item.split("=");
      //                 initial[parts[0]] = decodeURIComponent(parts[1])
                      
      //                 return initial
      //               }, {});
      //               // find(elem => elem.startsWith("access_token")).split("=")[1]
      //         // window.localStorage.setItem("token", token)
      // } 
        

    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);
  
    return (
        <AppContext.Provider 
            value={ 
                isSidebarOpen,openSidebar,
                people, setPeople,
                index, setIndex,
                closeSidebar,toggleTheme,
                theme,
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

// export { AppContext } 