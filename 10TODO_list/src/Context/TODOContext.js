import { createContext, useContext } from "react";

// Create the Todo Context
const TODOContext = createContext({
    todos: [],

    addTodo: (todo) => {},

    update_todo: (id, todo) => {},

    delete_todo: (id) => {},

    toggle_complete: (id) => {}
});


// Custom hook to use the Todo Context
export const useTODO = () => {
    return useContext(TODOContext);
};


// Export Provider
export const TODOProvider = TODOContext.Provider;


// Default export
export default TODOContext;