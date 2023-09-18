import React, { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allPosts, fetchPosts, getPostStatus, deletePosts, Post, singlePost } from '../../store/postsStoreSclice/PostStore';
import { RootReducer } from '../../store';

const PostsExample = () => {

    const [idPostSelect, setIdPostSelect] = useState<number | undefined>()

    const dispatch = useDispatch();
    const posts = useSelector(allPosts);
    const status = useSelector(getPostStatus);
    const singlePos: any =  useSelector((state: RootReducer) => singlePost(state, idPostSelect));
    
    

    useEffect(()=> {
        if(status === 'idle') {
            dispatch<any>(fetchPosts())
        }
                
    }, []);

    const deletePost = (item: Post) => {
        dispatch<any>(deletePosts(item))
    }
    

    return (
        <div>
            <h2>single post</h2>
            {
                singlePos &&
                <div>
                    <h3>{singlePos.title}</h3>
                    <p>{singlePos.body}</p>
                </div>
            }
            <h2>all posts</h2>
            {
                posts ?
                    posts.map((item: any, index) => {
                        return (
                            <div key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                                <button onClick={()=>deletePost(item)}>delete</button>
                                <button onClick={()=>setIdPostSelect(item.id)}>get single</button>
                            </div>
                        )
                    })
                    : null
            }
        </div>
    )
}

//memo(PostsExample);

export default PostsExample