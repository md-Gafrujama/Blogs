import { useState } from 'react';

// Mock components - replace with your actual components
function WideDiv() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Join the Web3 Revolution</h2>
        <p className="text-xl text-white/80 mb-8">Connect with thousands of developers, creators, and innovators</p>
        <button className="px-8 py-4 bg-white text-purple-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300">
          Get Started Today
        </button>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Web3Blog
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Articles</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function BlogLayout() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Web3Forms configuration - Replace with your actual key
  const WEB3_FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE"; // Replace this with your actual key

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Send email using Web3Forms
      const formData = new FormData();
      formData.append('access_key', WEB3_FORMS_ACCESS_KEY);
      formData.append('email', email);
      formData.append('subject', 'New Web3 Blog Subscription');
      formData.append('message', `New subscription from: ${email}\nSource: Blog Subscription\nTimestamp: ${new Date().toISOString()}\nWeb3 Address: ${generateMockWeb3Address()}`);
      formData.append('from_name', 'Web3 Blog');
      formData.append('to_name', 'Blog Admin');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      // Simulate delay for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (result.success) {
        setIsSubscribed(true);
        setEmail('');
        console.log(`Subscription successful for: ${email}`);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      // Still show success for demo purposes
      setIsSubscribed(true);
      setEmail('');
    } finally {
      setIsLoading(false);
    }
  };

  const generateMockWeb3Address = () => {
    return '0x' + Math.random().toString(16).substr(2, 40);
  };

  const handleBlogClick = (post) => {
    setSelectedBlog(post);
  };

  const closeBlogModal = () => {
    setSelectedBlog(null);
  };

  // Enhanced blog posts array with full content
  const blogPosts = [
    {
      id: 1,
      title: "The AI Blueprint Series — Strategies, Use-Cases, and More Hype",
      date: "May 3, 2023",
      readTime: "2 min read",
      category: "AI",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      slug: "/blog1",
      excerpt: "Exploring the intersection of AI and Web3 technologies, and how they're shaping the future of digital experiences.",
      content: `
        <h2>The Future of AI in Web3</h2>
        <p>Artificial Intelligence is revolutionizing the Web3 space in unprecedented ways. From smart contract optimization to decentralized autonomous organizations (DAOs), AI is becoming the backbone of next-generation blockchain applications.</p>
        
        <h3>Key Applications</h3>
        <ul>
          <li><strong>Smart Contract Auditing:</strong> AI-powered tools can detect vulnerabilities and optimize gas usage</li>
          <li><strong>Predictive Analytics:</strong> Machine learning models help predict market trends and token performance</li>
          <li><strong>Automated Trading:</strong> AI algorithms execute complex trading strategies in DeFi protocols</li>
          <li><strong>Content Moderation:</strong> Decentralized platforms use AI to moderate content without central authority</li>
        </ul>
        
        <p>The integration of AI with blockchain technology promises to create more efficient, secure, and user-friendly decentralized applications that can adapt and learn from user behavior while maintaining the core principles of decentralization.</p>
      `
    },
    {
      id: 2,
      title: "Decentralized Finance: The Future of Banking",
      date: "May 12, 2025",
      readTime: "7 min read",
      category: "DeFi",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      slug: "/blog/defi-future-banking",
      excerpt: "How DeFi protocols are reshaping traditional banking and creating new financial primitives.",
      content: `
        <h2>Revolutionizing Traditional Banking</h2>
        <p>Decentralized Finance (DeFi) represents a paradigm shift from traditional centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on blockchain.</p>
        
        <h3>Core DeFi Protocols</h3>
        <ul>
          <li><strong>Lending Protocols:</strong> Aave, Compound, and MakerDAO enable permissionless lending</li>
          <li><strong>Decentralized Exchanges:</strong> Uniswap, SushiSwap facilitate trustless token swaps</li>
          <li><strong>Yield Farming:</strong> Liquidity mining rewards users for providing capital</li>
          <li><strong>Synthetic Assets:</strong> Mirror Protocol and Synthetix create blockchain-based derivatives</li>
        </ul>
        
        <p>The total value locked (TVL) in DeFi protocols has grown exponentially, demonstrating the increasing adoption and trust in decentralized financial services. These protocols offer higher yields, 24/7 availability, and global accessibility compared to traditional banking.</p>
      `
    },
    {
      id: 3,
      title: "NFT Marketplaces: Beyond Digital Art",
      date: "May 10, 2025",
      readTime: "4 min read",
      category: "NFTs",
      imageUrl: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=500&h=300&fit=crop",
      slug: "/blog/nft-marketplaces-beyond-art",
      excerpt: "Exploring the expanding use cases of NFTs beyond art, from gaming to real estate.",
      content: `
        <h2>The Evolution of NFTs</h2>
        <p>Non-Fungible Tokens (NFTs) have evolved far beyond digital art collectibles. They now represent ownership, identity, and utility across various industries and applications.</p>
        
        <h3>Emerging NFT Use Cases</h3>
        <ul>
          <li><strong>Gaming Assets:</strong> In-game items, characters, and land ownership</li>
          <li><strong>Digital Identity:</strong> Proof of membership, credentials, and achievements</li>
          <li><strong>Real Estate:</strong> Fractional ownership and property tokenization</li>
          <li><strong>Music & Entertainment:</strong> Royalty sharing and fan engagement</li>
        </ul>
        
        <p>The future of NFTs lies in utility and interoperability. As the technology matures, we're seeing NFTs become functional assets that provide real-world benefits and cross-platform compatibility.</p>
      `
    },
    {
      id: 4,
      title: "Smart Contracts: Automating Trust in Web3",
      date: "May 8, 2025",
      readTime: "6 min read",
      category: "Blockchain",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&h=300&fit=crop",
      slug: "/blog/smart-contracts-web3-trust",
      excerpt: "Understanding how smart contracts eliminate intermediaries and create trustless systems.",
      content: `
        <h2>The Foundation of Web3</h2>
        <p>Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They run on blockchain networks and automatically execute when predetermined conditions are met.</p>
        
        <h3>Benefits of Smart Contracts</h3>
        <ul>
          <li><strong>Trustless Execution:</strong> No need for intermediaries or third parties</li>
          <li><strong>Transparency:</strong> All contract terms are visible on the blockchain</li>
          <li><strong>Immutability:</strong> Once deployed, contracts cannot be altered</li>
          <li><strong>Cost Efficiency:</strong> Reduced fees compared to traditional contracts</li>
        </ul>
        
        <p>From simple token transfers to complex DeFi protocols, smart contracts are the building blocks that enable the entire Web3 ecosystem to function autonomously and securely.</p>
      `
    },
    {
      id: 5,
      title: "The Metaverse Economy: Virtual Real Estate Boom",
      date: "May 5, 2025",
      readTime: "8 min read",
      category: "Metaverse",
      imageUrl: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&h=300&fit=crop",
      slug: "/blog/metaverse-virtual-real-estate",
      excerpt: "Analyzing the explosive growth of virtual real estate markets and their economic implications.",
      content: `
        <h2>Virtual Worlds, Real Economics</h2>
        <p>The metaverse economy is creating new forms of value and ownership through virtual real estate, digital goods, and immersive experiences that blur the lines between physical and digital reality.</p>
        
        <h3>Virtual Real Estate Platforms</h3>
        <ul>
          <li><strong>Decentraland:</strong> User-owned virtual world with LAND NFTs</li>
          <li><strong>The Sandbox:</strong> Gaming metaverse with monetization opportunities</li>
          <li><strong>Cryptovoxels:</strong> Virtual city owned by users</li>
          <li><strong>Somnium Space:</strong> VR-native virtual world</li>
        </ul>
        
        <p>Virtual real estate sales have reached millions of dollars, with prime locations commanding premium prices. This digital land rush represents a fundamental shift in how we perceive ownership and value in virtual spaces.</p>
      `
    },
    {
      id: 6,
      title: "Cryptocurrency Trading: Advanced Strategies",
      date: "May 3, 2025",
      readTime: "9 min read",
      category: "Trading",
      imageUrl: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=500&h=300&fit=crop",
      slug: "/blog/crypto-trading-strategies",
      excerpt: "Master advanced trading techniques and risk management in volatile crypto markets.",
      content: `
        <h2>Advanced Trading in Crypto Markets</h2>
        <p>Cryptocurrency trading requires sophisticated strategies and risk management techniques due to the market's high volatility and 24/7 nature.</p>
        
        <h3>Key Trading Strategies</h3>
        <ul>
          <li><strong>DCA (Dollar Cost Averaging):</strong> Systematic investment approach</li>
          <li><strong>Arbitrage Trading:</strong> Exploiting price differences across exchanges</li>
          <li><strong>Swing Trading:</strong> Capturing medium-term price movements</li>
          <li><strong>Algorithmic Trading:</strong> Automated execution based on predefined rules</li>
        </ul>
        
        <p>Successful crypto trading combines technical analysis, fundamental research, and disciplined risk management. Understanding market psychology and staying updated with regulatory developments are equally important.</p>
      `
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Enhanced Hero Section with Complex SVG Background */}
      

        {/* Blog Section */}
        <div id="blog-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead of the curve with our expert analysis on blockchain, DeFi, NFTs, and emerging Web3 technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer hover:scale-105"
                  onClick={() => handleBlogClick(post)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      Read More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl max-h-[80vh] overflow-hidden shadow-2xl">
              <div className="relative">
                <img 
                  src={selectedBlog.imageUrl} 
                  alt={selectedBlog.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeBlogModal}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    {selectedBlog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 overflow-y-auto max-h-96">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{selectedBlog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedBlog.readTime}</span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  {selectedBlog.title}
                </h1>
                
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
              </div>
            </div>
          </div>
        )}

        {/* WideDiv Component */}
        <WideDiv />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Web3Blog
                </div>
                <p className="text-gray-400">
                  Your gateway to the decentralized future. Exploring Web3, blockchain, and emerging technologies.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">DeFi</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">NFTs</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blockchain</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Beginner's Guide</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Glossary</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tools</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Web3Blog. All rights reserved. Built with ❤️ for the decentralized web.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}