import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Folder, FileText } from 'lucide-react';
import { BlogCard } from '../components/Blog/BlogCard';
import { CategoryFilter } from '../components/UI/CategoryFilter';
import { SearchBar } from '../components/UI/SearchBar';
import { categories, blogPosts, getPostsByCategory, searchPosts } from '../utils/blogData';

export const Categories: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('filter') || null
  );
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filter = searchParams.get('filter');
    setSelectedCategory(filter);
  }, [searchParams]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setSearchQuery('');
    
    if (category) {
      setSearchParams({ filter: category });
    } else {
      setSearchParams({});
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null);
    setSearchParams({});
  };

  const getFilteredPosts = () => {
    if (searchQuery) {
      return searchPosts(searchQuery);
    }
    if (selectedCategory) {
      return getPostsByCategory(selectedCategory);
    }
    return blogPosts;
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Explore by Category
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Browse our articles organized by topics and technologies. 
          Find exactly what you're looking for or discover something new.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Search in categories..."
          realTime={true}
        />
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

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Category Overview (only shown when no filter is applied) */}
      {!selectedCategory && !searchQuery && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Folder className="mr-2 h-6 w-6 text-primary-500" />
            All Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryChange(category.name)}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {category.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                    <FileText className="h-4 w-4" />
                    <span>{category.postCount}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Posts Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <FileText className="mr-2 h-6 w-6 text-primary-500" />
            {searchQuery 
              ? `Search Results (${filteredPosts.length})`
              : selectedCategory 
                ? `${selectedCategory} Articles (${filteredPosts.length})`
                : `All Articles (${filteredPosts.length})`
            }
          </h2>
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
                <Folder className="mx-auto h-12 w-12" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {searchQuery 
                  ? `No articles match your search for "${searchQuery}".`
                  : `No articles found in the ${selectedCategory} category.`
                }
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setSearchParams({});
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