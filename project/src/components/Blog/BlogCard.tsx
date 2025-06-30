import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className={`group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 ${featured ? 'lg:col-span-2' : ''}`}>
      <Link to={`/post/${post.slug}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${featured ? 'h-64' : 'h-48'}`}
          />
          {post.featured && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <time>{formatDate(post.publishedAt)}</time>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <Link to={`/post/${post.slug}`}>
          <h2 className={`font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2 ${featured ? 'text-2xl mb-3' : 'text-xl mb-2'}`}>
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {post.author.name}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, 2).map((category) => (
              <Link
                key={category}
                to={`/categories?filter=${encodeURIComponent(category)}`}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};