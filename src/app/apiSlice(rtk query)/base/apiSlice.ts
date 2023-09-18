import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Todos'], //per aggiornare i dati in tempo reale. Diverso per query e mutation
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
            transformResponse: (res: any[]) => res,
            providesTags: ['Todos']
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: 'todos',
                method: 'POST', 
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        removeTodo: builder.mutation({
            query: (todo) => ({
                url: `todos/${todo.id}`,
                method: 'DELETE', 
                body: todo.id
            }),
            invalidatesTags: ['Todos']
        })
    })

});

export const { 
    useGetTodosQuery, 
    useAddTodoMutation,
    useRemoveTodoMutation 
} = apiSlice;