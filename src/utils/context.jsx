import React, { useState, useContext, useReducer} from 'react'
import {data} from '../data'

const AppContext = React.createContext();

export function AppProvider({ initialState, reducer, children }) {
    
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