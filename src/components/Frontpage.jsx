import { useState } from 'react';

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
      {/* Enhanced Header with Advanced SVG elements */}
      <div 
        className="relative py-48 overflow-hidden bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80')" 
        }}
      >
        {/* Multi-layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-pink-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Advanced Animated SVG Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Complex geometric patterns */}
          <svg className="absolute top-16 left-8 w-32 h-32 text-white/10 animate-spin" style={{animationDuration: '25s'}} viewBox="0 0 100 100">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hexPattern)" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          </svg>
          
          {/* Morphing blob */}
          <svg className="absolute top-24 right-16 w-40 h-40 text-cyan-400/15" viewBox="0 0 200 200">
            <path fill="currentColor" opacity="0.6">
              <animate attributeName="d" dur="15s" repeatCount="indefinite"
                values="M40,60 C60,40 140,40 160,60 C180,80 180,120 160,140 C140,160 60,160 40,140 C20,120 20,80 40,60 Z;
                        M60,40 C80,20 120,20 140,40 C160,60 160,140 140,160 C120,180 80,180 60,160 C40,140 40,60 60,40 Z;
                        M50,30 C90,10 110,50 150,70 C170,90 150,130 130,150 C90,170 70,130 30,110 C10,90 30,50 50,30 Z;
                        M40,60 C60,40 140,40 160,60 C180,80 180,120 160,140 C140,160 60,160 40,140 C20,120 20,80 40,60 Z"/>
            </path>
          </svg>

          {/* DNA helix-like structure */}
          <svg className="absolute bottom-32 left-12 w-24 h-48 text-purple-400/20" viewBox="0 0 50 100">
            <path d="M10,0 Q25,25 40,50 Q25,75 10,100" stroke="currentColor" strokeWidth="2" fill="none">
              <animate attributeName="d" dur="8s" repeatCount="indefinite"
                values="M10,0 Q25,25 40,50 Q25,75 10,100;M40,0 Q25,25 10,50 Q25,75 40,100;M10,0 Q25,25 40,50 Q25,75 10,100"/>
            </path>
            <path d="M40,0 Q25,25 10,50 Q25,75 40,100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6">
              <animate attributeName="d" dur="8s" repeatCount="indefinite"
                values="M40,0 Q25,25 10,50 Q25,75 40,100;M10,0 Q25,25 40,50 Q25,75 10,100;M40,0 Q25,25 10,50 Q25,75 40,100"/>
            </path>
            <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.8">
              <animateTransform attributeName="transform" type="translate" dur="4s" repeatCount="indefinite"
                values="0,0; 0,50; 0,0"/>
            </circle>
          </svg>

          {/* Network nodes */}
          <svg className="absolute top-40 left-1/3 w-56 h-56 text-blue-300/15" viewBox="0 0 200 200">
            <g>
              <circle cx="50" cy="50" r="3" fill="currentColor">
                <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.3;1;0.3"/>
              </circle>
              <circle cx="150" cy="70" r="4" fill="currentColor">
                <animate attributeName="opacity" dur="2.5s" repeatCount="indefinite" values="0.5;1;0.5"/>
              </circle>
              <circle cx="100" cy="120" r="3.5" fill="currentColor">
                <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0.4;1;0.4"/>
              </circle>
              <circle cx="30" cy="150" r="2.5" fill="currentColor">
                <animate attributeName="opacity" dur="3.5s" repeatCount="indefinite" values="0.6;1;0.6"/>
              </circle>
              <circle cx="170" cy="140" r="3" fill="currentColor">
                <animate attributeName="opacity" dur="2.8s" repeatCount="indefinite" values="0.3;1;0.3"/>
              </circle>
              
              {/* Connecting lines */}
              <line x1="50" y1="50" x2="150" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0.1;0.5;0.1"/>
              </line>
              <line x1="150" y1="70" x2="100" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" dur="4.5s" repeatCount="indefinite" values="0.2;0.6;0.2"/>
              </line>
              <line x1="100" y1="120" x2="30" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" dur="3.8s" repeatCount="indefinite" values="0.1;0.4;0.1"/>
              </line>
              <line x1="100" y1="120" x2="170" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" dur="4.2s" repeatCount="indefinite" values="0.3;0.7;0.3"/>
              </line>
            </g>
          </svg>

          {/* Fractal tree */}
          <svg className="absolute bottom-40 right-20 w-32 h-40 text-green-400/20" viewBox="0 0 100 120">
            <g transform="translate(50,120)">
              <line x1="0" y1="0" x2="0" y2="-30" stroke="currentColor" strokeWidth="3"/>
              <g transform="translate(0,-30) rotate(-30)">
                <line x1="0" y1="0" x2="0" y2="-20" stroke="currentColor" strokeWidth="2"/>
                <g transform="translate(0,-20) rotate(-20)">
                  <line x1="0" y1="0" x2="0" y2="-12" stroke="currentColor" strokeWidth="1"/>
                </g>
                <g transform="translate(0,-20) rotate(20)">
                  <line x1="0" y1="0" x2="0" y2="-12" stroke="currentColor" strokeWidth="1"/>
                </g>
              </g>
              <g transform="translate(0,-30) rotate(30)">
                <line x1="0" y1="0" x2="0" y2="-20" stroke="currentColor" strokeWidth="2"/>
                <g transform="translate(0,-20) rotate(-20)">
                  <line x1="0" y1="0" x2="0" y2="-12" stroke="currentColor" strokeWidth="1"/>
                </g>
                <g transform="translate(0,-20) rotate(20)">
                  <line x1="0" y1="0" x2="0" y2="-12" stroke="currentColor" strokeWidth="1"/>
                </g>
              </g>
              <animateTransform attributeName="transform" type="rotate" dur="20s" repeatCount="indefinite"
                values="0 50 120; 10 50 120; -10 50 120; 0 50 120"/>
            </g>
          </svg>

          {/* Constellation pattern */}
          <svg className="absolute top-20 right-1/3 w-48 h-32 text-yellow-300/25" viewBox="0 0 200 120">
            {/* Stars */}
            <g>
              <polygon points="20,30 22,36 28,36 23,40 25,46 20,42 15,46 17,40 12,36 18,36" fill="currentColor">
                <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="0.5;1;0.5"/>
              </polygon>
              <polygon points="60,20 62,26 68,26 63,30 65,36 60,32 55,36 57,30 52,26 58,26" fill="currentColor">
                <animate attributeName="opacity" dur="2.5s" repeatCount="indefinite" values="0.3;1;0.3"/>
              </polygon>
              <polygon points="120,25 122,31 128,31 123,35 125,41 120,37 115,41 117,35 112,31 118,31" fill="currentColor">
                <animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0.4;1;0.4"/>
              </polygon>
              <polygon points="170,35 172,41 178,41 173,45 175,51 170,47 165,51 167,45 162,41 168,41" fill="currentColor">
                <animate attributeName="opacity" dur="1.8s" repeatCount="indefinite" values="0.6;1;0.6"/>
              </polygon>
              
              {/* Connecting constellation lines */}
              <polyline points="20,30 60,25 120,30 170,40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4">
                <animate attributeName="opacity" dur="6s" repeatCount="indefinite" values="0.2;0.6;0.2"/>
              </polyline>
            </g>
          </svg>

          {/* Decorative grid with animated elements */}
          <svg className="absolute top-1/2 right-0 w-80 h-80 text-white/8 transform translate-x-40" viewBox="0 0 300 300">
            <defs>
              <pattern id="advancedGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="15" cy="15" r="1" fill="currentColor" opacity="0.5">
                  <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0.2;0.8;0.2"/>
                </circle>
              </pattern>
            </defs>
            <rect width="300" height="300" fill="url(#advancedGrid)" />
            
            {/* Animated diagonal lines */}
            <line x1="0" y1="0" x2="300" y2="300" stroke="currentColor" strokeWidth="2" opacity="0.3">
              <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0.1;0.5;0.1"/>
            </line>
            <line x1="300" y1="0" x2="0" y2="300" stroke="currentColor" strokeWidth="2" opacity="0.3">
              <animate attributeName="opacity" dur="7s" repeatCount="indefinite" values="0.2;0.6;0.2"/>
            </line>
          </svg>

          {/* Enhanced flowing wave pattern */}
          <svg className="absolute bottom-0 left-0 w-full h-40 text-white/8" preserveAspectRatio="none" viewBox="0 0 1200 160">
            <path fill="currentColor" opacity="0.6">
              <animate attributeName="d" dur="12s" repeatCount="indefinite"
                values="M0,80 C300,140 600,20 1200,80 L1200,160 L0,160 Z;
                        M0,60 C300,20 600,140 1200,60 L1200,160 L0,160 Z;
                        M0,100 C300,160 600,40 1200,100 L1200,160 L0,160 Z;
                        M0,80 C300,140 600,20 1200,80 L1200,160 L0,160 Z"/>
            </path>
            <path fill="currentColor" opacity="0.3">
              <animate attributeName="d" dur="15s" repeatCount="indefinite"
                values="M0,100 C400,160 800,40 1200,100 L1200,160 L0,160 Z;
                        M0,120 C400,60 800,180 1200,120 L1200,160 L0,160 Z;
                        M0,80 C400,140 800,20 1200,80 L1200,160 L0,160 Z;
                        M0,100 C400,160 800,40 1200,100 L1200,160 L0,160 Z"/>
            </path>
          </svg>
        </div>

        {/* Enhanced animated particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-ping ${
                i % 3 === 0 ? 'bg-white/40' : i % 3 === 1 ? 'bg-blue-400/50' : 'bg-purple-400/40'
              }`}
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 90 + 5}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Decorative top line */}
            <div className="flex items-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
              <span className="mx-4 text-white/60 text-xs uppercase tracking-[0.2em] font-light">Blog & Insights</span>
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-24"></div>
            </div>

            {/* Main heading with enhanced styling */}
            <h1 className="text-7xl md:text-8xl font-black text-white mb-8 leading-none tracking-tight">
              Latest{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
                  Insights
                </span>
                {/* Enhanced decorative underline */}
                <svg className="absolute -bottom-4 left-0 w-full h-6" viewBox="0 0 300 24">
                  <path d="M0,12 Q75,6 150,12 Q225,18 300,12" stroke="url(#gradient1)" strokeWidth="3" fill="none" strokeLinecap="round">
                    <animate attributeName="d" dur="8s" repeatCount="indefinite"
                      values="M0,12 Q75,6 150,12 Q225,18 300,12;M0,12 Q75,18 150,12 Q225,6 300,12;M0,12 Q75,6 150,12 Q225,18 300,12"/>
                  </path>
                  <path d="M0,16 Q100,10 200,16 Q250,20 300,16" stroke="url(#gradient2)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6">
                    <animate attributeName="d" dur="6s" repeatCount="indefinite"
                      values="M0,16 Q100,10 200,16 Q250,20 300,16;M0,16 Q100,22 200,16 Q250,12 300,16;M0,16 Q100,10 200,16 Q250,20 300,16"/>
                  </path>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Enhanced description */}
            <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed font-light max-w-3xl">
              Discover our curated collection of{' '}
              <span className="text-cyan-300 font-normal">cutting-edge articles</span>,{' '}  
              comprehensive guides, and{' '}
              <span className="text-purple-300 font-normal">industry perspectives</span>{' '}
              that shape tomorrow's digital landscape
            </p>

            {/* Enhanced call-to-action area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-4">
                <div className="h-px bg-gradient-to-r from-cyan-400 to-purple-400 w-20"></div>
                <span className="text-white/80 text-sm uppercase tracking-widest font-medium">Explore Now</span>
                <svg className="w-5 h-5 text-white/60 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Interactive stats */}
              <div className="flex space-x-8 text-white/70">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">12+</div>
                  <div className="text-xs uppercase tracking-wide">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-xs uppercase tracking-wide">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-xs uppercase tracking-wide">Ideas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced decorative side element */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
            <svg className="w-40 h-80 text-white/12" viewBox="0 0 120 300">
              <path d="M20,0 Q60,75 20,150 Q60,225 20,300" stroke="currentColor" strokeWidth="2" fill="none">
                <animate attributeName="d" dur="10s" repeatCount="indefinite"
                  values="M20,0 Q60,75 20,150 Q60,225 20,300;M20,0 Q80,75 20,150 Q80,225 20,300;M20,0 Q60,75 20,150 Q60,225 20,300"/>
              </path>
              <circle cx="20" cy="75" r="4" fill="currentColor" opacity="0.7">
                <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="75;225;75"/>
              </circle>
              <circle cx="20" cy="150" r="5" fill="currentColor" opacity="0.5">
                <animate attributeName="r" dur="6s" repeatCount="indefinite" values="5;8;5"/>
              </circle>
              <circle cx="20" cy="225" r="3" fill="currentColor" opacity="0.8">
                <animate attributeName="cy" dur="7s" repeatCount="indefinite" values="225;75;225"/>
              </circle>
              
              {/* Additional orbital elements */}
              <circle cx="60" cy="100" r="2" fill="currentColor" opacity="0.6">
                <animateTransform attributeName="transform" type="rotate" dur="12s" repeatCount="indefinite"
                  values="0 20 150; 360 20 150"/>
              </circle>
              <circle cx="60" cy="200" r="2.5" fill="currentColor" opacity="0.4">
                <animateTransform attributeName="transform" type="rotate" dur="15s" repeatCount="indefinite"
                  values="360 20 150; 0 20 150"/>
              </circle>
            </svg>
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
      <a href={post.slug} className="block h-48 relative overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </a>
      <div className="p-6">
        <div className="flex justify-between items-center text-sm mb-3">
          <span className="font-medium" style={{ color: '#FF8C42' }}>{post.category}</span>
        </div>
        <a href={post.slug} className="block">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 hover:text-orange-500 transition-colors">
            {post.title}
          </h3>
        </a>
        <a 
          href={post.slug}
          className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors duration-200 inline-block"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}