import { useState } from 'react';
import WideDiv from './WideDiv';
import Navbar from './Navbar';

export default function BlogLayout() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Web3 Forms integration
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your actual key
          email: email,
          subject: "New Blog Subscription",
          from_name: "Future Tech Insights Blog",
          botcheck: false
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError(result.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      console.error('Subscription error:', err);
      setError('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Blog posts array with 16 posts
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
      title: "Decentralized Finance: The Future of Banking",
      date: "May 12, 2025",
      readTime: "7 min read",
      category: "DeFi",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      slug: "/blog/defi-future-banking"
    },
    {
      id: 3,
      title: "NFT Marketplaces: Beyond Digital Art",
      date: "May 10, 2025",
      readTime: "4 min read",
      category: "NFTs",
      imageUrl: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=500&h=300&fit=crop",
      slug: "/blog/nft-marketplaces-beyond-art"
    },
    {
      id: 4,
      title: "Smart Contracts: Automating Trust in Web3",
      date: "May 8, 2025",
      readTime: "6 min read",
      category: "Blockchain",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&h=300&fit=crop",
      slug: "/blog/smart-contracts-web3-trust"
    },
    {
      id: 5,
      title: "The Metaverse Economy: Virtual Real Estate Boom",
      date: "May 5, 2025",
      readTime: "8 min read",
      category: "Metaverse",
      imageUrl: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&h=300&fit=crop",
      slug: "/blog/metaverse-virtual-real-estate"
    },
    {
      id: 6,
      title: "Cryptocurrency Trading: Advanced Strategies",
      date: "May 3, 2025",
      readTime: "9 min read",
      category: "Trading",
      imageUrl: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=500&h=300&fit=crop",
      slug: "/blog/crypto-trading-strategies"
    },
    {
      id: 7,
      title: "Web3 Security: Protecting Your Digital Assets",
      date: "May 1, 2025",
      readTime: "6 min read",
      category: "Security",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      slug: "/blog/web3-security-digital-assets"
    },
    {
      id: 8,
      title: "Layer 2 Solutions: Scaling Ethereum",
      date: "April 28, 2025",
      readTime: "7 min read",
      category: "Ethereum",
      imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=500&h=300&fit=crop",
      slug: "/blog/layer2-scaling-ethereum"
    },
    {
      id: 9,
      title: "DAO Governance: Decentralized Decision Making",
      date: "April 25, 2025",
      readTime: "5 min read",
      category: "Governance",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      slug: "/blog/dao-governance-decisions"
    },
    {
      id: 10,
      title: "Cross-Chain Bridges: Connecting Blockchains",
      date: "April 22, 2025",
      readTime: "6 min read",
      category: "Infrastructure",
      imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop",
      slug: "/blog/cross-chain-bridges"
    },
    {
      id: 11,
      title: "Web3 Gaming: Play-to-Earn Revolution",
      date: "April 20, 2025",
      readTime: "8 min read",
      category: "Gaming",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
      slug: "/blog/web3-gaming-play-to-earn"
    },
    {
      id: 12,
      title: "Decentralized Storage: IPFS and Beyond",
      date: "April 18, 2025",
      readTime: "5 min read",
      category: "Storage",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      slug: "/blog/decentralized-storage-ipfs"
    },
    {
      id: 13,
      title: "Tokenomics: Designing Sustainable Crypto Economics",
      date: "April 15, 2025",
      readTime: "7 min read",
      category: "Economics",
      imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
      slug: "/blog/tokenomics-crypto-economics"
    },
    {
      id: 14,
      title: "Web3 Identity: Self-Sovereign Digital Identity",
      date: "April 12, 2025",
      readTime: "6 min read",
      category: "Identity",
      imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&h=300&fit=crop",
      slug: "/blog/web3-digital-identity"
    },
    {
      id: 15,
      title: "Quantum Computing vs Blockchain Security",
      date: "April 10, 2025",
      readTime: "9 min read",
      category: "Quantum",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
      slug: "/blog/quantum-blockchain-security"
    },
    {
      id: 16,
      title: "The Future of Work in Web3",
      date: "April 8, 2025",
      readTime: "8 min read",
      category: "Future of Work",
      imageUrl: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=500&h=300&fit=crop",
      slug: "/blog/future-work-web3"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Enhanced Hero Section */}
        <div className="relative py-16 lg:py-32 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          {/* Animated gradient background */}
          <div className="absolute inset-0 overflow-hidden opacity-80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-purple-500/10 to-pink-500/20 animate-pulse"></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: `${Math.random() * 10 + 2}px`,
                  height: `${Math.random() * 10 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 15 + 5}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5 + 0.1
                }}
              />
            ))}
          </div>

          {/* Floating tech icons */}
          <div className="absolute inset-0 overflow-hidden">
            {['🔗', '⚡', '🔮', '🌐', '💎', '🧠', '📊', '🔒'].map((icon, i) => (
              <div
                key={`icon-${i}`}
                className="absolute text-2xl md:text-3xl opacity-20"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                {icon}
              </div>
            ))}
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
              {/* Left side - Main heading */}
              <div className="lg:w-2/3 text-center lg:text-left">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/30 shadow-lg animate-bounce">
                    🚀 Web3 Insights Hub
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="inline-block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                    Future Tech
                  </span>{' '}
                  <span className="inline-block bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 bg-clip-text text-transparent">
                    Insights
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                  Explore the cutting-edge world of Web3, blockchain, AI, and decentralized technologies through our comprehensive guides and expert analysis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => document.getElementById('blog-section').scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <span>🔍 Explore Articles</span>
                    <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </button>
                  <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white/15 backdrop-blur-md text-white font-medium rounded-lg border border-white/30 hover:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <span>🌐 Join Community</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>
                
                {/* Stats */}
                <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                    <div className="text-sm text-white/80">Published Articles</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">50K+</div>
                    <div className="text-sm text-white/80">Monthly Readers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                    <div className="text-sm text-white/80">Industry Experts</div>
                  </div>
                </div>
              </div>

              {/* Right side - Subscription Form */}
              <div className="lg:w-1/3 w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Join Web3 Revolution</h3>
                    <p className="text-white/80">Get exclusive insights delivered to your inbox</p>
                  </div>
                  
                  {isSubscribed ? (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-green-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-green-400/50 animate-bounce">
                        <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">🎉 Welcome!</h4>
                      <p className="text-white/90 mb-4">You're now part of our community. Check your email for confirmation.</p>
                      <button 
                        onClick={() => setIsSubscribed(false)} 
                        className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
                      >
                        Subscribe Another Email
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 rounded-lg border border-white/30 focus:border-white/60 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-purple-500/50"
                          required
                        />
                      </div>
                      {error && (
                        <div className="text-red-300 text-sm">{error}</div>
                      )}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          isLoading 
                            ? 'bg-gray-500/50 text-gray-300 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                        } flex items-center justify-center gap-2`}
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Subscribing...
                          </>
                        ) : (
                          <>
                            <span>🚀 Join the Revolution</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                  
                  <div className="mt-6 text-center">
                    <p className="text-xs text-white/70">
                      Join 10,000+ Web3 enthusiasts • No spam, unsubscribe anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Blog Content */}
        <div id="blog-section" className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest Web3 & Tech Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover the future of technology through our expert analysis</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition-colors">
              All Topics
            </button>
            {['AI', 'Blockchain', 'DeFi', 'NFTs', 'Metaverse', 'Security', 'Gaming'].map((category) => (
              <button 
                key={category}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-md hover:bg-gray-100 transition-colors border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid - Responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto">
              <span>Load More Articles</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <WideDiv />
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </>
  );
}

function BlogCard({ post }) {
  return (
    <a href={post.slug} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        {/* Image with hover effect */}
        <div className="relative overflow-hidden h-48">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
              {post.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
              Read Now →
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 flex-grow flex flex-col">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{post.date}</span>
            <span className="mx-1">•</span>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h3>
          
          {/* Footer with read more and actions */}
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
              Read More
              <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex space-x-1">
              <button 
                onClick={(e) => e.preventDefault()} 
                className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Save to favorites"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button 
                onClick={(e) => e.preventDefault()} 
                className="p-1.5 text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Share article"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}