import { BlogPost, Author, Category } from '../types/blog';

export const authors: Author[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@modernblog.com',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    bio: 'Frontend developer and UI/UX enthusiast with 8 years of experience building modern web applications.',
    social: {
      twitter: '@sarahjohnson',
      github: 'sarahjohnson',
      linkedin: 'sarah-johnson'
    }
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael@modernblog.com',
    avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    bio: 'Full-stack developer passionate about React, Node.js, and modern web technologies.',
    social: {
      twitter: '@michaelchen',
      github: 'michaelchen',
      linkedin: 'michael-chen'
    }
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily@modernblog.com',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
    bio: 'Tech writer and developer advocate focusing on web accessibility and inclusive design.',
    social: {
      twitter: '@emilyrodriguez',
      github: 'emilyrodriguez',
      linkedin: 'emily-rodriguez'
    }
  }
];

export const categories: Category[] = [
  { id: '1', name: 'React', description: 'Modern React development and best practices', postCount: 12 },
  { id: '2', name: 'JavaScript', description: 'JavaScript fundamentals and advanced concepts', postCount: 8 },
  { id: '3', name: 'TypeScript', description: 'Type-safe JavaScript development', postCount: 6 },
  { id: '4', name: 'CSS', description: 'Modern CSS techniques and frameworks', postCount: 10 },
  { id: '5', name: 'Web Design', description: 'UI/UX design principles and trends', postCount: 5 },
  { id: '6', name: 'Performance', description: 'Web performance optimization techniques', postCount: 4 }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Modern React Applications with TypeScript',
    slug: 'building-modern-react-applications-typescript',
    excerpt: 'Learn how to set up and build scalable React applications using TypeScript, focusing on best practices and modern development patterns.',
    content: `# Building Modern React Applications with TypeScript

TypeScript has become an essential tool for building robust React applications. In this comprehensive guide, we'll explore how to set up and structure a modern React application with TypeScript.

## Getting Started

First, let's create a new React application with TypeScript support:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

## Component Design Patterns

When building components with TypeScript, we can leverage interfaces to define our props:

\`\`\`typescript
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, size, children, onClick }) => {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## State Management

For complex state management, we can use React's useReducer hook with TypeScript:

\`\`\`typescript
type State = {
  count: number;
  loading: boolean;
};

type Action = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_LOADING'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
\`\`\`

## Conclusion

TypeScript provides excellent tooling and type safety for React applications. By following these patterns, you can build more maintainable and scalable applications.`,
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    author: authors[0],
    publishedAt: '2024-01-15',
    readingTime: 8,
    categories: ['React', 'TypeScript'],
    tags: ['react', 'typescript', 'frontend', 'development'],
    featured: true
  },
  {
    id: '2',
    title: 'CSS Grid vs Flexbox: When to Use Each',
    slug: 'css-grid-vs-flexbox-when-to-use',
    excerpt: 'Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout method for optimal results.',
    content: `# CSS Grid vs Flexbox: When to Use Each

Both CSS Grid and Flexbox are powerful layout systems, but they serve different purposes. Let's explore when to use each one.

## Flexbox: One-Dimensional Layouts

Flexbox is designed for one-dimensional layouts - either row OR column layouts.

### Use Flexbox for:
- Navigation bars
- Card layouts in a row
- Centering content
- Distributing space between items

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
\`\`\`

## CSS Grid: Two-Dimensional Layouts

CSS Grid excels at two-dimensional layouts where you need to control both rows AND columns.

### Use CSS Grid for:
- Page layouts
- Complex card grids
- Magazine-style layouts
- Any layout where you need precise control over rows and columns

\`\`\`css
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## Combining Both

You can and should use both in the same project:

\`\`\`css
/* Grid for overall page layout */
.page {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
}

/* Flexbox for component internals */
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
\`\`\`

## Conclusion

Choose Flexbox for one-dimensional layouts and CSS Grid for two-dimensional layouts. They complement each other perfectly!`,
    coverImage: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    author: authors[1],
    publishedAt: '2024-01-12',
    readingTime: 5,
    categories: ['CSS', 'Web Design'],
    tags: ['css', 'grid', 'flexbox', 'layout'],
    featured: true
  },
  {
    id: '3',
    title: 'Modern JavaScript Features You Should Know',
    slug: 'modern-javascript-features-you-should-know',
    excerpt: 'Explore the latest JavaScript features that can improve your code quality and development experience.',
    content: `# Modern JavaScript Features You Should Know

JavaScript continues to evolve with new features that make our code more readable, maintainable, and powerful.

## Optional Chaining (?.)

Safely access nested object properties:

\`\`\`javascript
const user = {
  name: 'John',
  address: {
    street: '123 Main St'
  }
};

// Before
const zipCode = user && user.address && user.address.zipCode;

// After
const zipCode = user?.address?.zipCode;
\`\`\`

## Nullish Coalescing (??)

Provide fallback values for null or undefined:

\`\`\`javascript
const settings = {
  theme: null,
  notifications: false
};

// Using || (incorrect for false/0/'')
const theme = settings.theme || 'light'; // 'light'
const notifications = settings.notifications || true; // true (wrong!)

// Using ?? (correct)
const theme = settings.theme ?? 'light'; // 'light'
const notifications = settings.notifications ?? true; // false (correct!)
\`\`\`

## Array Methods

Powerful array manipulation methods:

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Find methods
const found = numbers.find(n => n > 3); // 4
const foundIndex = numbers.findIndex(n => n > 3); // 3

// Includes
const hasThree = numbers.includes(3); // true

// Flat and FlatMap
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.flat(); // [1, 2, 3, 4, 5, 6]

const doubled = numbers.flatMap(n => [n, n * 2]); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
\`\`\`

## Destructuring with Default Values

\`\`\`javascript
// Object destructuring
const { name = 'Anonymous', age = 0 } = user;

// Array destructuring
const [first, second = 'default'] = array;

// Function parameters
function greet({ name = 'World', enthusiastic = false } = {}) {
  return \`Hello, \${name}\${enthusiastic ? '!' : '.'}\`;
}
\`\`\`

## Template Literals and Tagged Templates

\`\`\`javascript
// Basic template literals
const message = \`Hello, \${name}!\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] ? \`<mark>\${values[i]}</mark>\` : '';
    return result + string + value;
  }, '');
}

const highlighted = highlight\`The answer is \${42}\`; // "The answer is <mark>42</mark>"
\`\`\`

These features make JavaScript more expressive and help us write cleaner, more maintainable code.`,
    coverImage: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    author: authors[1],
    publishedAt: '2024-01-10',
    readingTime: 6,
    categories: ['JavaScript'],
    tags: ['javascript', 'es6', 'modern', 'features'],
    featured: false
  },
  {
    id: '4',
    title: 'Web Performance Optimization Techniques',
    slug: 'web-performance-optimization-techniques',
    excerpt: 'Learn practical techniques to optimize your website performance and improve user experience.',
    content: `# Web Performance Optimization Techniques

Web performance directly impacts user experience and business metrics. Here are proven techniques to optimize your website.

## Core Web Vitals

Google's Core Web Vitals are essential metrics:

- **Largest Contentful Paint (LCP)**: Should occur within 2.5 seconds
- **First Input Delay (FID)**: Should be less than 100 milliseconds  
- **Cumulative Layout Shift (CLS)**: Should be less than 0.1

## Image Optimization

Images often make up the largest portion of page weight:

\`\`\`html
<!-- Use modern formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.avif" type="image/avif">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>

<!-- Responsive images -->
<img src="small.jpg" 
     srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 25vw"
     alt="Description">
\`\`\`

## Code Splitting

Split your JavaScript bundles to reduce initial load time:

\`\`\`javascript
// Dynamic imports
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Route-based splitting
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
\`\`\`

## Resource Hints

Help browsers optimize resource loading:

\`\`\`html
<!-- Preload critical resources -->
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="hero-image.jpg" as="image">

<!-- Prefetch likely next page resources -->
<link rel="prefetch" href="/about">

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
\`\`\`

## CSS Optimization

\`\`\`css
/* Use CSS containment */
.card {
  contain: layout style paint;
}

/* Optimize animations */
.element {
  /* Use transform and opacity for smooth animations */
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.element:hover {
  transform: translateX(10px);
}
\`\`\`

## JavaScript Optimization

\`\`\`javascript
// Debounce expensive operations
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
}

const debouncedSearch = debounce(searchFunction, 300);

// Use Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadContent(entry.target);
      observer.unobserve(entry.target);
    }
  });
});
\`\`\`

## Conclusion

Performance optimization is an ongoing process. Use tools like Lighthouse, WebPageTest, and browser DevTools to measure and improve your site's performance continuously.`,
    coverImage: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    author: authors[2],
    publishedAt: '2024-01-08',
    readingTime: 7,
    categories: ['Performance'],
    tags: ['performance', 'optimization', 'web-vitals', 'speed'],
    featured: true
  },
  {
    id: '5',
    title: 'Accessibility Best Practices for Web Developers',
    slug: 'accessibility-best-practices-web-developers',
    excerpt: 'Essential accessibility guidelines and techniques to make your websites usable by everyone.',
    content: `# Accessibility Best Practices for Web Developers

Building accessible websites ensures that all users, including those with disabilities, can use your applications effectively.

## Semantic HTML

Use proper HTML elements for their intended purpose:

\`\`\`html
<!-- Good -->
<button onClick={handleClick}>Submit</button>
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- Bad -->
<div onClick={handleClick}>Submit</div>
<div>
  <div><span href="/home">Home</span></div>
  <div><span href="/about">About</span></div>
</div>
\`\`\`

## ARIA Attributes

Use ARIA attributes to provide additional context:

\`\`\`html
<!-- Form labels -->
<label for="email">Email Address</label>
<input id="email" type="email" required aria-describedby="email-error">
<div id="email-error" role="alert">Please enter a valid email</div>

<!-- Loading states -->
<button aria-label="Search" aria-describedby="search-status">
  Search
</button>
<div id="search-status" aria-live="polite" aria-atomic="true">
  Searching for results...
</div>

<!-- Expandable content -->
<button 
  aria-expanded="false" 
  aria-controls="menu"
  onClick={toggleMenu}
>
  Menu
</button>
<ul id="menu" hidden>
  <li><a href="/home">Home</a></li>
  <li><a href="/about">About</a></li>
</ul>
\`\`\`

## Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

\`\`\`javascript
// Custom dropdown component
function Dropdown({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        if (focusedIndex >= 0) {
          onSelect(options[focusedIndex]);
          setIsOpen(false);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < options.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className="dropdown">
      <button 
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        Select option
      </button>
      {isOpen && (
        <ul role="listbox" onKeyDown={handleKeyDown}>
          {options.map((option, index) => (
            <li 
              key={option.id}
              role="option"
              aria-selected={index === focusedIndex}
              onClick={() => onSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
\`\`\`

## Color and Contrast

Ensure sufficient color contrast and don't rely solely on color:

\`\`\`css
/* Good contrast ratios */
.text-primary {
  color: #1a202c;
  background: #ffffff;
  /* Contrast ratio: 15.3:1 */
}

.text-error {
  color: #e53e3e;
  background: #ffffff;
  /* Don't rely only on color */
}

.text-error::before {
  content: "⚠️ ";
  /* Add icon for non-color indication */
}
\`\`\`

## Focus Management

Manage focus appropriately in dynamic content:

\`\`\`javascript
// Modal focus management
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
        
        // Trap focus within modal
        if (e.key === 'Tab') {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
\`\`\`

## Testing Accessibility

- Use automated tools like axe-core or Lighthouse
- Test with keyboard navigation only
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Validate HTML and check contrast ratios

Building accessible websites is not just about compliance—it creates better experiences for all users.`,
    coverImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    author: authors[2],
    publishedAt: '2024-01-05',
    readingTime: 9,
    categories: ['Web Design'],
    tags: ['accessibility', 'a11y', 'inclusive-design', 'usability'],
    featured: false
  },
  {
    id: '6',
    title: 'Getting Started with React Server Components',
    slug: 'getting-started-react-server-components',
    excerpt: 'Understand React Server Components and how they can improve your application performance and user experience.',
    content: `# Getting Started with React Server Components

React Server Components represent a new paradigm in React development, allowing components to render on the server and stream to the client.

## What are Server Components?

Server Components run on the server and can:
- Access databases directly
- Read files from the filesystem  
- Fetch data without exposing API endpoints
- Reduce client-side JavaScript bundle size

## Client vs Server Components

\`\`\`javascript
// Server Component (default)
// Runs on server, no interactivity
async function BlogPost({ slug }) {
  const post = await fetchPost(slug); // Direct database access
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

// Client Component
// Runs on client, can use hooks and event handlers
'use client';

function LikeButton({ postId }) {
  const [liked, setLiked] = useState(false);
  
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'} Like
    </button>
  );
}
\`\`\`

## Data Fetching Patterns

\`\`\`javascript
// Server Component - async/await
async function UserProfile({ userId }) {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { posts: true }
  });

  return (
    <div>
      <h2>{user.name}</h2>
      <UserPosts posts={user.posts} />
    </div>
  );
}

// Parallel data fetching
async function Dashboard() {
  const [user, posts, analytics] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchAnalytics()
  ]);

  return (
    <div>
      <UserInfo user={user} />
      <PostList posts={posts} />
      <AnalyticsDashboard data={analytics} />
    </div>
  );
}
\`\`\`

## Composition Patterns

\`\`\`javascript
// Server Component wrapper with Client Component children
function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// Passing Server Components as children to Client Components
function InteractiveWrapper({ children }) {
  'use client';
  
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      {isVisible && children}
    </div>
  );
}

// Usage
function Page() {
  return (
    <InteractiveWrapper>
      <ServerRenderedContent /> {/* This runs on server */}
    </InteractiveWrapper>
  );
}
\`\`\`

## Streaming and Suspense

\`\`\`javascript
// Streaming data with Suspense
function BlogPage() {
  return (
    <div>
      <h1>My Blog</h1>
      <Suspense fallback={<PostSkeleton />}>
        <BlogPosts />
      </Suspense>
      <Suspense fallback={<CommentSkeleton />}>
        <Comments />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const posts = await fetchPosts(); // This can be slow
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
\`\`\`

## Error Boundaries

\`\`\`javascript
// Error boundary for Server Components
function ErrorBoundary({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorHandler>
        {children}
      </ErrorHandler>
    </Suspense>
  );
}

function ErrorHandler({ children }) {
  try {
    return children;
  } catch (error) {
    return <ErrorMessage error={error} />;
  }
}
\`\`\`

## Best Practices

1. **Use Server Components by default** - Only add 'use client' when needed
2. **Push Client Components down** - Keep client boundaries as low as possible
3. **Pass data down, not up** - Server Components can't receive props from Client Components
4. **Compose carefully** - Plan your component tree architecture

## Benefits

- **Reduced Bundle Size**: Server logic doesn't ship to client
- **Better Performance**: Direct database access, no API roundtrips
- **Enhanced Security**: Sensitive operations stay on server
- **Improved SEO**: Server-rendered content

Server Components mark a significant evolution in React architecture, enabling new patterns for building faster, more secure applications.`,
    coverImage: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
    author: authors[0],
    publishedAt: '2024-01-03',
    readingTime: 10,
    categories: ['React'],
    tags: ['react', 'server-components', 'performance', 'architecture'],
    featured: false
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => 
    post.categories.some(cat => cat.toLowerCase() === category.toLowerCase())
  );
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getRelatedPosts = (currentPostId: string, limit: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => 
      post.id !== currentPostId && 
      post.categories.some(cat => currentPost.categories.includes(cat))
    )
    .slice(0, limit);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};