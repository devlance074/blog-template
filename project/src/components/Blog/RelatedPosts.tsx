import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface RelatedPostsProps {
  posts: BlogPost[];
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  if (posts.length === 0) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
          >
            <Link to={`/post/${post.slug}`} className="block">
              <div className="relative overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            
            <div className="p-4">
              <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <time>{formatDate(post.publishedAt)}</time>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readingTime} min</span>
                </div>
              </div>

              <Link to={`/post/${post.slug}`}>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2 mb-2">
                  {post.title}
                </h3>
              </Link>

              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {post.author.name}
                  </span>
                </div>
                <div className="flex space-x-1">
                  {post.categories.slice(0, 1).map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};