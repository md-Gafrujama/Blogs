import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Blog1 = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // Set the current URL when component mounts
    setCurrentUrl(window.location.href);
  }, []);

  // Fixed LinkedIn sharing function
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(currentUrl);
    const title = encodeURIComponent("The AI Illusion: B2B Marketers Need Better Questions, Not More Hype");
    const summary = encodeURIComponent("Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink.");
    
    // Use the newer LinkedIn share URL format
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    
    // Calculate centered position
    const width = 600;
    const height = 600;
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    const windowWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const windowHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    const left = (windowWidth - width) / 2 + dualScreenLeft;
    const top = (windowHeight - height) / 2 + dualScreenTop;

    // Window features string
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

    // Open window
    const newWindow = window.open(linkedInUrl, 'LinkedInShare', features);
    
    if (newWindow) {
      newWindow.focus();
    } else {
      console.error("Failed to open share window - possibly blocked by popup blocker");
      // Fallback: open in same tab
      window.open(linkedInUrl, '_blank');
    }
  };

  // Alternative sharing method using navigator.share API for mobile devices
  const shareContent = async () => {
    const title = "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype";
    const text = "Discover key insights on how B2B marketers should approach AI without falling for the hype. Read more about first-party data importance, AI-washing, and targeting precision.";
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: text,
          url: currentUrl,
        });
      } else {
        // Fallback for desktop browsers
        shareOnLinkedIn();
      }
    } catch (error) {
      console.error("Error sharing:", error);
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
    <>
      <Helmet>
        <title>The AI Illusion: B2B Marketers Need Better Questions, Not More Hype</title>
        <meta name="description" content="Key insights on AI in B2B Marketing: Bad Data = Bad AI, first-party data is critical, beware of AI-washing in vendor tools, and targeting precision matters as budgets shrink." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The AI Illusion: B2B Marketers Need Better Questions, Not More Hype" />
        <meta property="og:description" content="Key insights on AI in B2B Marketing: Bad Data = Bad AI, first-party data is critical, beware of AI-washing in vendor tools, and targeting precision matters as budgets shrink." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Compare Bazaar" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The AI Illusion: B2B Marketers Need Better Questions, Not More Hype" />
        <meta name="twitter:description" content="Key insights on AI in B2B Marketing: Bad Data = Bad AI, first-party data is critical, beware of AI-washing in vendor tools, and targeting precision matters as budgets shrink." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
        
        {/* LinkedIn specific */}
        <meta property="linkedin:owner" content="Compare Bazaar" />
        
        {/* Additional SEO */}
        <meta name="author" content="Compare Bazaar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')" }}
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-15 pb-10">
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
                  That's where we're focused at <span className="font-semibold text-[#ff8633]">Compare Bazaar</span>: fewer assumptions, smarter execution, and real outcomes.
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
                  className="w-full bg-[#ff8633] cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02] mt-4 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {loading ? "Subscribing..." : subscribed ? "Subscribed ✅" : "Subscribe"}
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">Share this article:</p>
                  
                  {/* Enhanced sharing section with multiple options */}
                  <div className="flex flex-col space-y-3">
                    {/* LinkedIn sharing button */}
                    <button
                      onClick={shareOnLinkedIn}
                      className="cursor-pointer flex items-center justify-center gap-2 w-full bg-[#0A66C2] text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-[#004182]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                      Share on LinkedIn
                    </button>
                    
                    {/* Universal Share button (works on mobile) */}
                    <button
                      onClick={shareContent}
                      className="cursor-pointer flex items-center justify-center gap-2 w-full bg-[#ff8633] text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-[#e67a2e]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                      </svg>
                      Share Article
                    </button>
                    
                    {/* Copy Link button */}
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(currentUrl);
                        alert("Link copied to clipboard!");
                      }}
                      className="cursor-pointer flex items-center justify-center gap-2 w-full bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-gray-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
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
    </>
  );
};

export default Blog1;