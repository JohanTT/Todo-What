import { createContext, useState } from "react";
import { Provider } from "react";

// Init value
export const MyContext = createContext({
    username: null, // State
    isLogged: false,
    setIsLogged: () => {},
    setUsername: () => {}   //setState
});

export const MyContextProvider = ({children}) => {
    const [username, setUsername] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    return (
        <MyContext.Provider value={{
            username,
            setUsername,
            isLogged,
            setIsLogged
        }}>
            {children}
        </MyContext.Provider>
    )
}