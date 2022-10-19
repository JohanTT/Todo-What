import { createContext, useState } from "react";
// import { Provider } from "react";

// Init value
export const MyContext = createContext({
    username: "caovietthang", // State
    passwork: "thejohan39", 
    isLogged: false,
    setIsLogged: () => {},
    setUsername: () => {},   //setState
    setPassWork: () => {}
});

export const MyContextProvider = ({children}) => {
    const [username, setUsername] = useState("caovietthang");
    const [passwork, setPassWork] = useState("thejohan39");
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