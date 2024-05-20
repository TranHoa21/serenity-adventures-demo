'use client'
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/store';
import "@/app/styles/blog/link.scss";
import MultiSelectWithDB from "@/app/tour/tour";
import love from "@/public/img/heart_833472.png";
import unLike from "@/public/img/love_8647296.png";
import comment from "@/public/img/message_8799976.png"
import { likePost, unlikePost } from '@/app/store/actions/postActions';
import Booking from "@/app/tour/booking"

interface Post {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    places_id: number;
    createdAt: string;
    updatedAt: string;
    content: string;
    like: number;
    comment: number;
}
interface Comment {
    id: number;
    comment_text: string;
    user_name: string;
    post_id: number;
    user_avatar: string;
    user_id: number;
}


interface User {
    id: number;
    name: string;
    avatar: string;
}

const TourDetail = () => {
    const user = useSelector((state: RootState) => state.user);
    const userId = useSelector((state: RootState) => state.user.id);
    const { link } = useParams();

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [liked, setLiked] = useState<boolean>(false)
    const [avatar, setAvatar] = useState<string | null>(null);
    const dispatch = useDispatch();





    useEffect(() => {
        if (link) {
            axios.get<Post>(`https://serenity-adventures-demo.onrender.com/api/v1/post/${link}`)
                .then(response => {
                    setPost(response.data);
                    setLoading(false);
                    const container = document.getElementById('content-container');
                    if (container) {
                        container.innerHTML = response.data.content;
                    }
                    const postId = response.data.id;
                    axios.get(`https://serenity-adventures-demo.onrender.com/api/v1/post/${postId}/like/${userId}`)
                        .then(response => {
                            setLiked(response.data.liked);
                            console.log("check >>>", liked)
                        })
                        .catch(error => {
                            console.error('Lỗi khi lấy danh sách bình luận:', error);
                        });
                    axios.get<Comment[]>(`https://serenity-adventures-demo.onrender.com/api/v1/post/${postId}/comments`)
                        .then(response => {
                            setComments(response.data);
                        })
                        .catch(error => {
                            console.error('Lỗi khi lấy danh sách bình luận:', error);
                        });
                })

                .catch(error => {
                    console.error('Lỗi khi lấy thông tin tour:', error);
                    setLoading(false);
                });
            axios.get<User>(`https://serenity-adventures-demo.onrender.com/api/v1/user/${userId}`)
                .then(response => {
                    setAvatar(response.data.avatar);
                })
                .catch(error => {
                    console.error('Lỗi khi lấy thông tin tour:', error);
                })


        } else {

            setLoading(false);
        }
    }, [link, liked]);






    if (loading) {
        return <div>Loading...</div>; // Show loading indicator while fetching data
    }

    if (!post) {
        return <div>Post not found!</div>; // Show a message if tour is not available
    }

    const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(event.target.value);
    };
    const handleCommentSubmit = (event: FormEvent, postId: number) => {
        const userId = user.id;
        const userAvatar = avatar;
        const userName = user.name;
        event.preventDefault();
        axios.post(`https://serenity-adventures-demo.onrender.com/api/v1/post/${postId}/comments/${userId}`, { content: newComment, userAvatar, userName, userId })
            .then(response => {
                const newComment = response.data;
                setComments(prevComments => [...prevComments, newComment]);
                setNewComment('');
            })
            .catch(error => {
                console.error('Lỗi khi gửi bình luận:', error);
            });
    };

    const handleDeleteComment = (commentId: number) => {
        axios.delete(`https://serenity-adventures-demo.onrender.com/api/v1/post/comments/${commentId}`)
            .then(response => {
                // Xóa comment khỏi state
                setComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
                console.log('Xóa comment thành công');
            })
            .catch(error => {
                console.error('Lỗi khi xóa comment:', error);
            });
    };
    const handleDeleteCommentClick = (commentId: number) => {
        return () => {
            handleDeleteComment(commentId);
        };
    };
    const handleUpdateComment = (commentId: number) => {
        axios.put(`https://serenity-adventures-demo.onrender.com/api/v1/comments/${commentId}`)
            .then(response => {
                // Cập nhật comment thành công, bạn có thể thực hiện các hành động khác ở đây nếu cần
                console.log('Cập nhật comment thành công');
            })
            .catch(error => {
                console.error('Lỗi khi cập nhật comment:', error);
            });
    };
    const handleUpdateCommentClick = (commentId: number) => {
        return () => {
            handleUpdateComment(commentId);
        };
    };

    const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const postId = post?.id;
        const userId = user.id;

        if (liked) {
            axios
                .delete(`https://serenity-adventures-demo.onrender.com/api/v1/post/${postId}/like/${userId}`)
                .then(response => {
                    dispatch(unlikePost(postId, userId));
                    setLiked(false);
                    console.log("removeLike thành công");
                    console.log(liked)
                })
                .catch(error => {
                    console.error('Lỗi khi xóa thích:', error);
                });
        } else {
            axios
                .post(`https://serenity-adventures-demo.onrender.com/api/v1/post/${postId}/like/${userId}`, { postId, userId })
                .then(response => {
                    dispatch(likePost(postId, userId));
                    setLiked(true);
                    console.log("Like thành công");
                })
                .catch(error => {
                    console.error('Lỗi khi thích bài viết:', error);
                });
        }
    };

    return (
        <div>
            <h1 className="h-title">{post.title}</h1>
            <div className="box-container">
                <div className="row">
                    <div className="content col-sm-7">
                        <img className="img-tour" src={post.image} alt={post.title} />
                        <div id="content-container">{post.content}</div>
                        <div className="interact">
                            <div className="comments">
                                <h3>Comments:</h3>
                                <ul>
                                    {comments.map(comments => (
                                        <li className="comment-item" key={comments.id}>
                                            <img className="avatar" src={comments.user_avatar} alt="Avatar" />
                                            <div className="comment-content">
                                                <h5> {comments.user_name} </h5>
                                                {comments.comment_text}
                                            </div>
                                            {comments.user_id === userId && (
                                                <>
                                                    <button className="btn-up-de" onClick={handleDeleteCommentClick(comments.id)}>Delete</button>
                                                </>


                                            )}

                                        </li>
                                    ))}
                                </ul>
                                <form onSubmit={event => handleCommentSubmit(event, post.id)} className="sub-comment">
                                    <textarea
                                        value={newComment}
                                        onChange={handleCommentChange}
                                        placeholder="Add a comment..."
                                    />
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                            <div className="likes">
                                <img src={comment.src} className="comment-icon" /> {post.comment}
                                <button onClick={handleLike}  >
                                    <img src={liked ? love.src : unLike.src} className="like-icon" />{post.like}
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <Booking />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetail;
