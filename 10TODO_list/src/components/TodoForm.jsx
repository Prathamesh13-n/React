import { useState } from "react";
import { useTODO } from "../Context/TODOContext";

function TodoForm() {

    // Store the value typed into the input
    const [todo, setTodo] = useState("");

    // Get addTodo function from Context
    const { addTodo } = useTODO();


    const add = (e) => {

        // Prevent page refresh
        e.preventDefault();

        // Don't add an empty todo
        if (!todo.trim()) {
            return;
        }

        // Add todo
        addTodo({
            todo: todo,
            complete: false
        });

        // Clear input box
        setTodo("");
    };


    return (
        <form
            onSubmit={add}
            className="flex"
        >

            <input
                type="text"
                placeholder="Write a Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />

            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white"
            >
                Add
            </button>

        </form>
    );
}

export default TodoForm;