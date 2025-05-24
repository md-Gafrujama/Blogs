import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogLayout() {
  // Blog post data with image URLs and slug/URL paths
  const blogPosts = [
  {
  id: 1,
  title: "The AI Blueprint Series — Strategies, Use-Cases, and More Hype",
  date: "May 3, 2023",
  readTime: "2 min read",
  category: "AI",
  imageUrl: "https://blogs.compare-bazaar.com/images/blog1.jpg",
  slug: "/blog1"
},
    {
      id: 2,
      title: "The Power of Storytelling in Modern B2B Marketing",
      date: "April 22, 2023",
      readTime: "3 min read",
      category: "Marketing",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQFX-bPOKftqGw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732097572633?e=2147483647&v=beta&t=ThmlZP9VCygkzqo0yHB9hi_RuokqGdX6OxAh9G6oWxQ",
      slug: "/blog/storytelling-b2b-marketing"
    },
    {
      id: 3,
      title: "Simplifying B2B Demand Generation — Understanding Your Tech Stack",
      date: "April 16, 2023",
      readTime: "4 min read",
      category: "Technology",
      imageUrl: "https://blog.pharosiq.com/hubfs/Simplifying%20B2B%20Demand%20Generation%20Without%20Overcomplicating%20Your%20Tech%20Stack.jpg",
      slug: "/blog/b2b-demand-generation-tech-stack"
    },
    {
      id: 4,
      title: "Automation in B2B Marketing — Enhancing Your Workflow",
      date: "April 10, 2023",
      readTime: "2 min read",
      category: "Automation",
      imageUrl: "https://cdn.prod.website-files.com/5e19fbe7e402b63edc7c289a/650d4b1202152569b9081d5a_9%20Common%20Workflows%20Between%20Your%20B2B%20Store%20and%20Cloud%20Accounting%20Solution_1.jpg",
      slug: "/blog/automation-b2b-marketing-workflow"
    },
    {
      id: 5,
      title: "How Conversational AI Is Changing Customer Engagement",
      date: "April 5, 2023",
      readTime: "3 min read",
      category: "AI",
      imageUrl: "https://assets.torryharris.com/assets/articles/conversationalAI/banner.png",
      slug: "/blog/conversational-ai-customer-engagement"
    },
    {
      id: 6,
      title: "Evaluating AI in Marketing Teams — A Step-by-Step Guide",
      date: "March 30, 2023",
      readTime: "5 min read",
      category: "AI",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQG00EdX0uQfBA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1724882335881?e=2147483647&v=beta&t=4hVsCMXfScfBtHH0KTd45lOuirwlt1iphbbbKDiYBqM",
      slug: "/blog/evaluating-ai-marketing-teams"
    },
    {
      id: 7,
      title: "The Future of Remote Sales in a Post-Pandemic World",
      date: "March 25, 2023",
      readTime: "3 min read",
      category: "Sales",
      imageUrl: "https://framerusercontent.com/images/Wo9vp6jyVl5eKgcSIuJ50zFFWgk.jpg",
      slug: "/blog/future-remote-sales"
    },
    {
      id: 8,
      title: "Data-Driven Decision Making for Marketing Teams",
      date: "March 18, 2023",
      readTime: "4 min read",
      category: "Analytics",
      imageUrl: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/Data-Driven-Decision-Making.jpg&w=1200&h=630",
      slug: "/blog/data-driven-decision-making"
    },
    {
      id: 9,
      title: "Building Effective Landing Pages That Convert",
      date: "March 12, 2023",
      readTime: "2 min read",
      category: "Design",
      imageUrl: "https://zoomdigital.ae/wp-content/uploads/2023/05/8-Effective-Tips-to-Create-Landing-Pages-that-Convert.png",
      slug: "/blog/effective-landing-pages"
    },
    {
      id: 10,
      title: "SEO Strategies That Actually Work in 2023",
      date: "March 5, 2023",
      readTime: "3 min read",
      category: "SEO",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgREjdIpwvyHUMdqead6Jl6vcwPiVKDAkDqQ&s",
      slug: "/blog/seo-strategies-2023"
    },
    {
      id: 11,
      title: "The Psychology Behind Customer Purchasing Decisions",
      date: "February 28, 2023",
      readTime: "4 min read",
      category: "Psychology",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQFp6A_VIyhTIg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697161976238?e=2147483647&v=beta&t=H37P5CZ8fxzUdYb1LBbn3dqfXBtbafCzXAo4biDEuNQ",
      slug: "/blog/psychology-customer-purchasing"
    },
    {
      id: 12,
      title: "Content Marketing Trends You Can't Ignore This Year",
      date: "February 20, 2023",
      readTime: "3 min read",
      category: "Content",
      imageUrl: "https://kyrossolution.com/wp-content/uploads/2024/04/From-Chatbots-To-The-Metaverse-5-Digital-Marketing-Trends-You-Cant-Ignore.webp",
      slug: "/blog/content-marketing-trends"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with background image */}
      <div 
        className="relative py-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://st3.depositphotos.com/11272048/37227/i/450/depositphotos_372273898-stock-photo-aged-paper-sheet-blank-old.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Latest Insights
            </h1>
            <p className="text-xl text-white opacity-90 mb-8">
              Discover our collection of articles, guides and industry perspectives
            </p>
          </div>
        </div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Blog Grid */}
        <div className="py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* View More Button - Aligned with blog cards */}
          <div className="mt-8">
            <button 
              className="px-6 py-3 text-white font-medium rounded-full transition-colors duration-300 cursor-pointer"
              style={{ backgroundColor: '#FF8633' }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
      <div className="p-4 pb-2 text-sm text-gray-500">
        <span>{post.date} • {post.readTime}</span>
      </div>
      <Link to={post.slug} className="block h-48 relative overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </Link>
      <div className="p-6">
        <div className="flex justify-between items-center text-sm mb-3">
          <span className="font-medium" style={{ color: '#FF8C42' }}>{post.category}</span>
        </div>
        <Link to={post.slug} className="block">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 hover:text-orange-500 transition-colors">
            {post.title}
          </h3>
        </Link>
        <Link 
          to={post.slug}
          className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors duration-200 inline-block"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}