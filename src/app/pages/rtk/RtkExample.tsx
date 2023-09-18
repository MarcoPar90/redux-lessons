import { useState } from "react";
import { useAddTodoMutation, useGetTodosQuery, useRemoveTodoMutation } from "../../apiSlice(rtk query)/base/apiSlice"

const RtkExample = () => {

    const [text, setText] = useState<string>('')

    const {
        data: todos,
        isLoading,
        isError,
        isSuccess,
        error
    } = useGetTodosQuery(null);
    const [addTodo] = useAddTodoMutation();
    const [removeTodo] = useRemoveTodoMutation();

    const addTodos = () => {
        if(todos && text) {
            const max = todos.reduce((acc, item) => acc>item.id ? acc : item.id, 0);            
            addTodo({id: max+1, userId: 1026, title: text, completed: false})
        }
    }

    return (
        <>
            <div>
                <input onKeyUp={(e: any) => setText(e.target.value)} /> 
                <button onClick={addTodos}>add</button>
            </div>

            {
                isLoading && <p>Loading...</p>
            }
            {
                (isSuccess && todos.length) &&
                    todos.map((item, index) => {
                        return(
                            <div key={index}>
                                <p>{item.title}</p>
                                <button onClick={()=>removeTodo({id: item.id})}>remove</button>
                            </div>
                        )
                    })
            }
            
        </>
    )
}

export default RtkExample