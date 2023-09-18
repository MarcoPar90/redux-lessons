import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import { apiSlice } from "./apiSliceBlog";

const postsAdapter = createEntityAdapter({
    sortComparer: (a, b:any) => b.date.localeCompare(a.date),
})

const initialState = postsAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
            transformResponse: (responseData: any) => {
                let min = 1;
                const loadedPosts = responseData.map((post:any) => {
                    if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    if (!post?.reactions) post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post;
                });
                return postsAdapter.setAll(initialState, loadedPosts)
            },
            providesTags: (result: any, error, args) => {
                return [
                    { type: 'Post', id: "LIST" },
                    ...result.ids.map((id: number) => ({ type: 'Post', id }))
                ]
            }
        }),
    })
})


export const {
    useGetPostsQuery
} = extendedApiSlice;

// returns the query result object
export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select('')

// Creates memoized selector
const selectPostsData = createSelector(
    selectPostsResult,
    postsResult => postsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
    // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => selectPostsData(state as any) ?? initialState)