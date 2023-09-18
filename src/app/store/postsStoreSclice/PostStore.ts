import { createSlice, createAsyncThunk, PayloadAction, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootReducer } from '..';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type InitialStatePosts = {
    posts: Post[],
    status: string,
    error: string
}

const initialState: InitialStatePosts = {
    posts: [],
    status: 'idle',
    error: ''
}


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
    try {
        const {data} = await axios.get(POSTS_URL);
        return [...data];
    } catch (error: any) {
        return error.message
    }
})

export const deletePosts = createAsyncThunk('posts/deletePosts', async(initalPost: Post)=>{
    const { id } = initalPost;
    try {
        const response = await axios.delete(`${POSTS_URL}/${id}`);
        if(response.status === 200) return initalPost;
        return `${response.status}: ${response.statusText}`;
    } catch (error: any) {
        return error.message
    }
})

const postReducer = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action: PayloadAction<any>)=>{
            state.status = 'failed';
            state.error = action.payload;
        });
        builder.addCase(deletePosts.fulfilled, (state, action: PayloadAction<Post>) => {
            if(!action.payload.id) {
                return;
            }
            const {id} = action.payload;
            const posts = state.posts.filter(post => post.id !== id);
            state.posts = posts;
        });
    }
});

export const allPosts = (state: RootReducer) => state.posts.posts;
export const singlePost = (state: RootReducer, idPost: number | undefined) => state.posts.posts.filter(({id}) => id === idPost)[0]
export const getPostStatus = (state: RootReducer) => state.posts.status

export default postReducer.reducer;