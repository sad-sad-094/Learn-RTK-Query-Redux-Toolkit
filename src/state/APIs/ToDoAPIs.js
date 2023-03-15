/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toDoAPIs = createApi({

  reducerPath: 'toDos',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),

  endpoints: (builder) => ({

    getTodos: builder.query({
      query: () => '/todos'
    }),

    getTodoById: builder.query({
      query: (toDoId) => `/todos/${toDoId}`
    })

  })

})

export const { useGetTodosQuery, useGetTodoByIdQuery } = toDoAPIs;

