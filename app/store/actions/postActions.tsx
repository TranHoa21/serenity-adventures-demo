export const setPost = (post: any) => ({
    type: 'SET_POST',
    payload: post
});

export const likePost = (likedPostId: number, likedUserId: any) => ({
    type: 'LIKE_POST',
    payload: { postId: likedPostId, userId: likedUserId }
});

export const unlikePost = (likedPostId: number, likedUserId: any) => ({
    type: 'UNLIKE_POST',
    payload: { postId: likedPostId, userId: likedUserId }
});


export const addComment = (postId: number, comment: string) => ({
    type: 'ADD_COMMENT',
    payload: {
        postId,
        comment
    }
});

export const deleteComment = (postId: number, commentId: number) => ({
    type: 'DELETE_COMMENT',
    payload: {
        postId,
        commentId
    }
});