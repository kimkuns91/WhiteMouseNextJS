"use client";

import { ObjectId } from "mongoose";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { findAllPosts } from "@/api/postsApi";
import Link from "next/link";

interface Post {
  _id: ObjectId;
  category: string;
  title: string;
}

export default function Posts() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const search = searchParams.get("search");

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await findAllPosts();
        setPosts(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="page">
      <h1>
        Post
      </h1>
      <ul>
        {posts &&
          posts.map((post, index) => (
            <Link key={index} href={`/posts/${post._id}`}>
              {post.title}
            </Link>
          ))}
      </ul>
    </section>
  );
}
