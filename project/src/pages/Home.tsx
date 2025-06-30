import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { BlogCard } from '../components/Blog/BlogCard';
import { SearchBar } from '../components/UI/SearchBar';
import { CategoryFilter } from '../components/UI/CategoryFilter';
import { blogPosts, getFeaturedPosts, searchPosts, getPostsByCategory } from '../utils/blogData';

export const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredPosts = getFeaturedPosts();
  
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    if (searchQuery) {
      posts = searchPosts(searchQuery);
    }

    if (selectedCategory) {
      posts = posts.filter(post => 
        post.categories.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase())
      );
    }

    return posts;
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null); // Reset category when searching
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Reset search when filtering by category
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
            ModernBlog
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover the latest insights in web development, design trends, and modern technologies. 
          Join our community of developers and designers building the future of the web.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12 space-y-6">
        <div className="max-w-2xl mx-auto">
          <SearchBar 
            onSearch={handleSearch}
            placeholder="Search articles, topics, or technologies..."
            realTime={true}
          />
        </div>
        <div className="flex justify-center">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
      </div>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="mb-8">
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4">
            <p className="text-primary-700 dark:text-primary-300">
              {filteredPosts.length > 0 
                ? `Found ${filteredPosts.length} article${filteredPosts.length === 1 ? '' : 's'} matching "${searchQuery}"`
                : `No articles found matching "${searchQuery}"`
              }
            </p>
          </div>
        </div>
      )}

      {/* Featured Posts */}
      {!searchQuery && !selectedCategory && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary-500" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Featured Articles
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {featuredPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                featured={index === 0}
              />
            ))}
          </div>
        </section>
      )}

      {/* All Posts or Filtered Results */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {searchQuery 
              ? `Search Results` 
              : selectedCategory 
                ? `${selectedCategory} Articles`
                : 'Latest Articles'
            }
          </h2>
          {!searchQuery && !selectedCategory && (
            <Link 
              to="/categories" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
            >
              View all categories
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {searchQuery 
                  ? `No articles match your search for "${searchQuery}". Try different keywords.`
                  : `No articles found in the ${selectedCategory} category.`
                }
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200"
              >
                View all articles
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};