import { createContext, useState } from "react";

// Init value
export const TodoContext = createContext({
    tasks: [],
    setTasks: () => {}
});

const initTask = [
    {
        id: 1, name: "Hoc", deadline: '2022-10-8', isComplete: true
    },
    {
        id: 2, name: "choi", deadline: '2022-10-9', isComplete: false
    }
];

export const TodoContextProvider = ({children}) => {
    const [tasks, setTasks] = useState(initTask);
    return (
        <TodoContext.Provider value={{
            tasks,
            setTasks
        }}>
            {children}
        </TodoContext.Provider>
    )
}

