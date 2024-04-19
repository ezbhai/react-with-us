import { createContext } from "react";
import { useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed: false
        }
    ]
})

export const useTodo = () => {
 return useContext(TodoContext)   
}
export const Todoprovider = TodoContext.Provider