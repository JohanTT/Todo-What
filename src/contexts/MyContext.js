import { createContext, useState } from "react";
import { Provider } from "react";

// Init value
export const MyContext = createContext({
    username: null, // State
    passwork: null, 
    isLogged: false,
    setIsLogged: () => {},
    setUsername: () => {},   //setState
    setPassWork: () => {}
});

export const MyContextProvider = ({children}) => {
    const [username, setUsername] = useState(null);
    const [passwork, setPassWork] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    return (
        <MyContext.Provider value={{
            username,
            setUsername,
            passwork,
            setPassWork,
            isLogged,
            setIsLogged
        }}>
            {children}
        </MyContext.Provider>
    )
}