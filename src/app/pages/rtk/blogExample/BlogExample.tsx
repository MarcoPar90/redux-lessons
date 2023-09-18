import React, { useEffect } from 'react';
import { selectAllPosts, useGetPostsQuery } from '../../../apiSlice(rtk query)/advance/postSlice';
import { useSelector } from 'react-redux';

const BlogExample = () => {

    const {
        isLoading,
        isSuccess,
        isError,
        error 
    } = useGetPostsQuery('');

    const orderedPostIds = useSelector(selectAllPosts);

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = orderedPostIds.map(item => <p key={item.id}>{item.title}</p>)
    } else {
        content = <p>prova</p>;
    }

    return (
        <>
            {
                content
            }
        </>
    )
}

export default BlogExample