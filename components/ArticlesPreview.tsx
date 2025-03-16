import React, { useState, useEffect } from "react";
import { Post } from "@/interfaces/post";
import { PostPreviewCompact } from "@/components/blog/PostPreviewCompact";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ArticlesPreview = () => {
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const res = await fetch("/api/posts?page=1");
                const posts = await res.json();
                setRecentPosts(posts.slice(0, 3));
            } catch (error) {
                console.error("Error fetching recent posts:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecentPosts();
    }, []);

    if (isLoading) {
        return (
            <div className="h-48 flex items-center justify-center">Chargement...</div>
        );
    }

    // Afficher seulement le premier article sur mobile
    const displayPosts = isMobile ? recentPosts.slice(0, 1) : recentPosts;

    return (
        <section className="lg:py-12 py-4">
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold mb-4">Derniers Articles</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {displayPosts.map((post) => (
                        <div key={post.slug}>
                            <PostPreviewCompact
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                                slug={post.slug}
                                excerpt={post.excerpt}
                            />
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Link href="/articles" passHref>
                        <Button color="primary" variant="light">
                            Voir tous les articles
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ArticlesPreview;