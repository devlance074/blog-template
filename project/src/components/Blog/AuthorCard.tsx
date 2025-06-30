import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';
import { Author } from '../../types/blog';

interface AuthorCardProps {
  author: Author;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-start space-x-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {author.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
            {author.bio}
          </p>
          <div className="flex items-center space-x-3">
            <a
              href={`https://twitter.com/${author.social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
              aria-label={`Follow ${author.name} on Twitter`}
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href={`https://github.com/${author.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
              aria-label={`Follow ${author.name} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`https://linkedin.com/in/${author.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
              aria-label={`Connect with ${author.name} on LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};