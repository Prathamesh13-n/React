import { useState } from "react";
import { useTODO } from "../Context/TODOContext";

function TodoItem({ todo }) {

    // Get functions from Context
    const {
        update_todo,
        delete_todo,
        toggle_complete
    } = useTODO();


    // Store edited todo text
    const [isTodoEditable, setIsTodoEditable] = useState(false);

    const [todoMsg, setTodoMsg] = useState(todo.todo);


    // Save edited Todo
    const editTodo = () => {

        update_todo(todo.id, {
            ...todo,
            todo: todoMsg
        });

        setIsTodoEditable(false);
    };


    return (
        <div
            className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 ${
                todo.complete
                    ? "bg-[#c6e9a7]"
                    : "bg-[#ccbed7]"
            }`}
        >

            {/* Checkbox */}

            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.complete}
                onChange={() => toggle_complete(todo.id)}
            />


            {/* Todo Input */}

            <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable
                        ? "border-black/10 px-2"
                        : "border-transparent"
                } ${
                    todo.complete
                        ? "line-through"
                        : ""
                }`}
            />


            {/* Edit / Save button */}

            <button
                type="button"
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {

                    if (todo.complete) {
                        return;
                    }

                    if (isTodoEditable) {
                        editTodo();
                    } else {
                        setIsTodoEditable(true);
                    }

                }}
                disabled={todo.complete}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>


            {/* Delete button */}

            <button
                type="button"
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => delete_todo(todo.id)}
            >
                ❌
            </button>

        </div>
    );
}

export default TodoItem;