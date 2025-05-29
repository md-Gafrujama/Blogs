import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import WideDiv from './WideDiv';
import Navbar from './Navbar';

const Blog2 = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Enhanced LinkedIn sharing with proper URL encoding
  const shareOnLinkedIn = () => {
    const title = encodeURIComponent("The AI Illusion: B2B Marketers Need Better Questions, Not More Hype");
    const summary = encodeURIComponent("Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink.");
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${title}&summary=${summary}`;

    window.open(
      shareUrl,
      'LinkedInShare',
      'width=600,height=600,top=100,left=100,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no'
    );
  };

  // Universal share function
  const shareContent = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Tech Buyer And Its Decision Making Journey",
          text: "Making smart decisions in a noisy digital marketplace",
          url: currentUrl,
        });
      } else {
        shareOnLinkedIn();
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter a valid email!");

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify({
          access_key: "4e9faa02-cb51-4253-98e6-b5794f4ece3a",
          subject: "New Subscription",
          from_name: "Subscription Form",
          message: `New user subscribed: ${email}`,
          reply_to: email,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
      });

      const result = await response.json();
      if (result.success) {
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
        <title>Tech Buyer Decision Making Journey | Compare Bazaar</title>
        <meta name="description" content="Explore the complete tech buyer decision making process and how to navigate it effectively." />
        
        {/* Primary Meta Tags */}
        <meta property="og:title" content="Tech Buyer And Its Decision Making Journey" />
        <meta property="og:description" content="Making smart decisions in a noisy digital marketplace - explore the complete buyer journey." />
        <meta property="og:image" content="https://blogs.compare-bazaar.com/images/blog2.png" />
        <meta property="og:url" content="https://blogs.compare-bazaar.com/buyer-journey" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Buyer And Its Decision Making Journey" />
        <meta name="twitter:description" content="Making smart decisions in a noisy digital marketplace" />
        <meta name="twitter:image" content="https://blogs.compare-bazaar.com/images/blog2.png" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Compare Bazaar" />
        <meta name="keywords" content="tech buyer, decision making, B2B marketing, technology purchase" />
        <link rel="canonical" href="https://blogs.compare-bazaar.com/buyer-journey" />
      </Helmet>

      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-2 text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0A3761] mb-4 leading-tight">
            Tech Buyer And Its Decision Making Journey
          </h1> 
          <img
            src="https://blogs.compare-bazaar.com/images/blog2.png"
            alt="Tech Buyer Decision Journey"
            className="mx-auto rounded-lg shadow-lg mb-6 w-full max-w-full h-auto max-h-[500px] object-cover"
            loading="lazy"
          />
        
          <p className="mt-6">
            In a world increasingly driven by automation and algorithms, it's easy to forget that behind every B2B technology decision is a real person—navigating complexity, weighing risks, and trying to make the right call.
            <br /><br />
            Let's walk a mile in the shoes of a typical tech buyer. Not the fictional "CTO Persona" in your CRM, but someone like Rachel, an IT Director at a mid-sized logistics firm who's just been told: "We need to upgrade our fleet tracking system—ASAP."
          </p>
        </div>

        <div className="mt-7">
          <img
            src="https://blogs.compare-bazaar.com/images/blog2_img.jpg"
            alt="Tech Buyer Research Process"
            className="mx-auto rounded-lg mb-6 max-w-full h-auto max-h-[500px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Content sections remain the same as your original */}
        {/* ... */}

        {/* Subscribe Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-3xl mx-auto mt-10">
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">Subscribe</h3>
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
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="w-full bg-[#ff8633] cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02] mt-2 disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? "Subscribing..." : subscribed ? "Subscribed ✅" : "Subscribe"}
            </button>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-white p-8 rounded-xl border border-gray-100 max-w-3xl mx-auto mt-6">
          <p className="text-sm text-gray-600 mb-3">Share this article:</p>
          <div className="flex flex-row space-x-3">
            <button
              onClick={shareOnLinkedIn}
              className="cursor-pointer flex items-center justify-center gap-2 w-full bg-[#0A66C2] text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-[#004182]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
              Share on LinkedIn
            </button>
            <button
              onClick={shareContent}
              className="cursor-pointer flex items-center justify-center gap-2 w-full bg-[#ff8633] text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-[#e67a2e]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
              </svg>
              Share Article
            </button>
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

      <WideDiv />
    </>
  );
};

export default Blog2;