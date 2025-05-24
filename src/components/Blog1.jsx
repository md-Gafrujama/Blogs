import React, { useState, useEffect } from 'react';

const Blog1 = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  // Blog post metadata
  const blogData = {
    title: "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype",
    description: "Key insights on AI in B2B Marketing: Bad Data = Bad AI - first-party data is critical, Beware of AI-washing in vendor tools, Targeting precision matters as budgets shrink.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop&auto=format",
    siteName: "Compare Bazaar",
    author: "Compare Bazaar Team",
    publishedDate: "2025-05-02T08:00:00Z",
    url: "https://comparebazaar.com/blog/ai-illusion-b2b-marketers",
    type: "article"
  };

  useEffect(() => {
    // Set the current URL when component mounts
    const url = window.location.href || blogData.url;
    setCurrentUrl(url);
    
    // Update meta tags for social sharing
    updateMetaTags();
  }, []);

  // Function to update meta tags dynamically
  const updateMetaTags = () => {
    // Update or create meta tags
    const metaTags = [
      { property: 'og:title', content: blogData.title },
      { property: 'og:description', content: blogData.description },
      { property: 'og:image', content: blogData.image },
      { property: 'og:url', content: currentUrl || blogData.url },
      { property: 'og:type', content: blogData.type },
      { property: 'og:site_name', content: blogData.siteName },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: blogData.title },
      { name: 'twitter:description', content: blogData.description },
      { name: 'twitter:image', content: blogData.image },
      { name: 'description', content: blogData.description },
      { property: 'article:author', content: blogData.author },
      { property: 'article:published_time', content: blogData.publishedDate }
    ];

    metaTags.forEach(tag => {
      let element = null;
      
      if (tag.property) {
        element = document.querySelector(`meta[property="${tag.property}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('property', tag.property);
          document.head.appendChild(element);
        }
      } else if (tag.name) {
        element = document.querySelector(`meta[name="${tag.name}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('name', tag.name);
          document.head.appendChild(element);
        }
      }
      
      if (element) {
        element.setAttribute('content', tag.content);
      }
    });

    // Update page title
    document.title = blogData.title;
  };

  // Enhanced LinkedIn sharing function
  const shareOnLinkedIn = () => {
    const shareUrl = encodeURIComponent(currentUrl || blogData.url);
    const shareTitle = encodeURIComponent(blogData.title);
    const shareText = encodeURIComponent(`${blogData.title}\n\n${blogData.description}`);
    
    // LinkedIn share URL with title and summary
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}&title=${shareTitle}&summary=${encodeURIComponent(blogData.description)}`;
    
    const width = 600;
    const height = 650;
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    const windowWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const windowHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    const left = (windowWidth - width) / 2 + dualScreenLeft;
    const top = (windowHeight - height) / 2 + dualScreenTop;

    const features = [
      `width=${width}`,
      `height=${height}`,
      `top=${top}`,
      `left=${left}`,
      'toolbar=no',
      'location=no',
      'directories=no',
      'status=no',
      'menubar=no',
      'scrollbars=yes',
      'resizable=yes',
      'copyhistory=no'
    ].join(',');

    const newWindow = window.open(linkedInShareUrl, 'LinkedInShare', features);
    
    if (newWindow) {
      newWindow.focus();
    } else {
      window.open(linkedInShareUrl, '_blank');
    }
  };

  // Twitter sharing function with title and description
  const shareOnTwitter = () => {
    const twitterText = `${blogData.title}\n\n${blogData.description}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}&url=${encodeURIComponent(currentUrl || blogData.url)}`;
    
    const width = 550;
    const height = 420;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no`;
    
    window.open(twitterUrl, 'TwitterShare', features);
  };

  // Facebook sharing function with proper parameters
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl || blogData.url)}&quote=${encodeURIComponent(blogData.title + ' - ' + blogData.description)}`;
    
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no`;
    
    window.open(facebookUrl, 'FacebookShare', features);
  };

  // Native sharing API (for mobile devices)
  const shareContent = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: blogData.title,
          text: blogData.description,
          url: currentUrl || blogData.url,
        });
      } else {
        shareOnLinkedIn();
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  // Copy link to clipboard with enhanced feedback
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl || blogData.url);
      // Show temporary success message
      const button = event.target.closest('button');
      const originalText = button.innerHTML;
      button.innerHTML = button.innerHTML.replace('Copy Link', 'Copied! ✅');
      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    } catch (error) {
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl || blogData.url;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        alert("Link copied to clipboard!");
      } catch (err) {
        alert("Failed to copy link");
      }
      document.body.removeChild(textArea);
    }
  };

  // HANDLING THE SUBSCRIBE BUTTON
  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter a valid email!");

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "4e9faa02-cb51-4253-98e6-b5794f4ece3a");
    formData.append("subject", "New Subscription");
    formData.append("from_name", "Subscription Form");
    formData.append("message", `New user subscribed: ${email}`);
    formData.append("reply_to", email);
    formData.append("redirect", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setEmail("");
          setSubscribed(false);
        }, 3000);
      } else {
        alert("Failed to subscribe. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('${blogData.image}')` }}
        ></div>
        
        <div className="relative h-full flex flex-col justify-center items-start p-6 md:p-10 lg:p-16 text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-2">
            The AI Illusion: B2B Marketers Need
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            Better Questions, Not More Hype
          </h2>
          <p className="text-sm md:text-base opacity-90">
            May 2, 2025 8:00:00 AM
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-gray-900 text-3xl font-semibold tracking-wider mb-4">
              Let's Talk About AI in B2B Marketing —
            </p>
            <h2 className="text-3xl font-semibold text-gray-900">
              Minus the Hype
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mt-5">
              We need to talk about AI. Not the glossy, "next-gen" kind you see in vendor decks and flooding your inbox with promises of effortless pipeline growth. That version is exhausting and honestly, it's making it harder to spot what is actually useful.
            </p>
            <p className="text-gray-800 text-base mt-5">
              So we hosted a real conversation at Compare Bazaar. — Katrina Gonzalez led the discussion with Ben Luck (Chief Data Scientist) and Michael McGoldrick (Global VP of Marketing) on using AI and intent data without getting burned.
            </p>
          </div>
        </div>
      </div>

      {/* Key Points Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        <div className="bg-white overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Here's what stood out:
            </h2>
          </div>

          <div className="px-5 lg:px-20 space-y-6">
            <div className="flex items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1. Bad Data = Bad AI
                </h3>
                <p className="pl-5 text-gray-700 mb-4">
                  Ben said it best: <span className="italic">"You can't make good predictions with bad inputs."</span> If your AI is running on outdated, third-party data, you're not targeting - you're guessing. Bad data makes your AI blind.
                </p>
                <p className="pl-5 text-gray-700">
                  First-party data is cleaner, fresher, and far more predictive. That's what gives AI the juice to spot who's actually in-market.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2. Watch out for AI-washing
                </h3>
                <p className="pl-5 text-gray-800 mb-3">
                  It's rules dressed up as rocket science.
                </p>
                <p className="pl-5 text-gray-800 mb-4">
                  Michael called this out hard — and he's right. Too many vendors are just slapping "AI" on basic automation and hoping you won't ask questions. If a platform can't tell you how its models are trained or what data it learns from, chances are it's not real AI. 
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3. Budgets are shrinking. Buying committees are growing.
                </h3>
                <p className="pl-5 text-gray-800 mb-4">
                  Which means... your targeting must get smarter. You don't have the luxury of broad, generic campaigns anymore. You need relevance. Precision. Confidence that you're putting dollars behind the right accounts.
                </p>
                <p className="pl-5 text-gray-800">       
                  That's where AI and behavioral intent data work best — but only when the data is real, and the model learns in real time. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Items Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="overflow-hidden">
          <div className="bg-white p-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              So, what now?
            </h2>
            <p className="text-gray-800 mt-2">
              If you're trying to figure out what to actually do with AI (and not just talk about it), start here:
            </p>
            <div className="space-y-1 mt-3">
              <div className="flex items-start">
                <div>
                  <h3 className="text-base text-gray-800">
                    1. Use first-party data - it's your most valuable asset
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <h3 className="text-base text-gray-800">
                    2. Ask your vendors real questions about how their AI works 
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <h3 className="text-base text-gray-800">
                    3. Ignore the buzzwords. Look for results.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Section with Subscribe */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Final Thoughts
              </h2>
              
              <div className="prose prose-lg md:prose-xl text-gray-700 mb-8">
                <p className="text-base leading-relaxed mb-6">
                  AI isn't the silver bullet — but it can give you a serious edge if you stay sharp. The marketers winning right now aren't chasing hype. They ask sharper questions, read clearer signals and use AI to scale what works.
                </p>
                
                <p className="text-base leading-relaxed mb-6">
                  That's where we're focused at <span className="font-semibold text-orange-500">Compare Bazaar</span>: fewer assumptions, smarter execution, and real outcomes.
                </p>
                
                <p className="text-base leading-relaxed font-semibold text-gray-900">
                  Because in a world full of noise, clarity is your best competitive advantage.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-10">
                {['AI Marketing', 'B2B Strategy', 'Data-Driven', 'Marketing Tech', 'First-Party Data'].map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Subscribe
              </h3>
              <p className="text-gray-600 text-base mb-6">
                Subscribe to the very latest B2B lead gen updates — only the best bits, none of the fluff!
              </p>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
                
                <div className="flex items-center">
                  <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">
                    <span className="font-semibold">Subscribe</span> to our newsletter
                  </label>
                </div>
                
                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="w-full bg-orange-500 cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02] mt-4 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {loading ? "Subscribing..." : subscribed ? "Subscribed ✅" : "Subscribe"}
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4 font-semibold">Share this article:</p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {/* LinkedIn sharing button */}
                    <button
                      onClick={shareOnLinkedIn}
                      className="cursor-pointer flex items-center justify-center gap-3 w-full bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-blue-800 hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                      Share on LinkedIn
                    </button>
                    
                    {/* Twitter sharing button */}
                    <button
                      onClick={shareOnTwitter}
                      className="cursor-pointer flex items-center justify-center gap-3 w-full bg-sky-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-sky-600 hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                      Share on Twitter
                    </button>
                    
                    {/* Facebook sharing button */}
                    <button
                      onClick={shareOnFacebook}
                      className="cursor-pointer flex items-center justify-center gap-3 w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                      Share on Facebook
                    </button>
                    
                    {/* Universal Share button */}
                    <button
                      onClick={shareContent}
                      className="cursor-pointer flex items-center justify-center gap-3 w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-orange-600 hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                      </svg>
                      More Options
                    </button>
                    
                    {/* Copy Link button */}
                    <button
                      onClick={copyToClipboard}
                      className="cursor-pointer flex items-center justify-center gap-3 w-full bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                      </svg>
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;