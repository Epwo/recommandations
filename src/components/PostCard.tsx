import { Post } from '../types/Post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-meta">
        <span>{post.category}</span>
        <span>{post.date}</span>
      </div>
    </article>
  );
}