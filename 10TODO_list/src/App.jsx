import { useEffect, useState } from "react";
import "./App.css";

import { TODOProvider } from "./Context/TODOContext";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";


function App() {

    // =====================================================
    // Load todos from Local Storage when application starts
    // =====================================================

    const [todos, setTodos] = useState(() => {

        try {

            const savedTodos = localStorage.getItem("todos");

            return savedTodos
                ? JSON.parse(savedTodos)
                : [];

        } catch (error) {

            console.log("Error loading todos:", error);

            return [];
        }
    });


    // =====================================================
    // ADD TODO
    // =====================================================

    const addTodo = (todo) => {

        setTodos((prev) => [

            {
                id: Date.now(),
                ...todo
            },

            ...prev

        ]);
    };


    // =====================================================
    // UPDATE TODO
    // =====================================================

    const update_todo = (id, todo) => {

        setTodos((prev) =>

            prev.map((prevtodo) =>

                prevtodo.id === id
                    ? {
                        ...todo,
                        id: id
                    }
                    : prevtodo

            )
        );
    };


    // =====================================================
    // DELETE TODO
    // =====================================================

    const delete_todo = (id) => {

        setTodos((prev) =>

            prev.filter((todo) =>

                todo.id !== id

            )
        );
    };


    // =====================================================
    // TOGGLE COMPLETE
    // =====================================================

    const toggle_complete = (id) => {

        setTodos((prev) =>

            prev.map((prevtodo) =>

                prevtodo.id === id

                    ? {
                        ...prevtodo,
                        complete: !prevtodo.complete
                    }

                    : prevtodo

            )
        );
    };


    // =====================================================
    // SAVE TODOS TO LOCAL STORAGE
    // =====================================================

    useEffect(() => {

        localStorage.setItem(
            "todos",
            JSON.stringify(todos)
        );

    }, [todos]);


    // =====================================================
    // UI
    // =====================================================

    return (

        <TODOProvider
            value={{
                todos,
                addTodo,
                update_todo,
                delete_todo,
                toggle_complete
            }}
        >

            <div className="bg-[#172842] min-h-screen py-8">

                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">

                    {/* Heading */}

                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Manage Your Todos
                    </h1>


                    {/* Todo Form */}

                    <div className="mb-4">
                        <TodoForm />
                    </div>


                    {/* Todo List */}

                    <div className="flex flex-wrap gap-y-3">

                        {todos.map((todo) => (

                            <div
                                key={todo.id}
                                className="w-full"
                            >

                                <TodoItem todo={todo} />

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </TODOProvider>
    );
}

export default App;