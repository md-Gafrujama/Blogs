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

  // Enhanced LinkedIn sharing function
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(currentUrl);
    const title = encodeURIComponent("The AI Illusion: B2B Marketers Need Better Questions, Not More Hype");
    const summary = encodeURIComponent("Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink.");
    const source = encodeURIComponent("Compare Bazaar");
    
    // LinkedIn share URL with all parameters
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;

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
      'scrollbars=no',
      'resizable=no',
      'copyhistory=no'
    ].join(',');

    // Open window
    const newWindow = window.open(shareUrl, 'LinkedInShare', features);
    
    if (newWindow) {
      newWindow.focus();
    } else {
      // Fallback if popup is blocked
      window.location.href = shareUrl;
    }
  };

  // Alternative sharing method using navigator.share API for mobile devices
  const shareContent = async () => {
    const title = "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype";
    const text = "Discover key insights on how B2B marketers should approach AI without falling for the hype. Read more about first-party data importance, AI-washing, and targeting precision.";
    const imageUrl = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: text,
          url: currentUrl,
        });
      } else if (navigator.clipboard) {
        // Fallback: Copy URL to clipboard
        await navigator.clipboard.writeText(currentUrl);
        alert("Link copied to clipboard!");
      } else {
        // Final fallback: Open LinkedIn share
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
        <meta name="description" content="Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="The AI Illusion: B2B Marketers Need Better Questions, Not More Hype" />
        <meta property="og:description" content="Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content="The AI Illusion: B2B Marketers Need Better Questions, Not More Hype" />
        <meta name="twitter:description" content="Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" />
      </Helmet>

      {/* Rest of your component remains the same */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-900 overflow-hidden">
        {/* ... existing header content ... */}
      </div>

      {/* ... rest of your blog content ... */}

      {/* Share buttons section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3">Share this article:</p>
        <div className="flex flex-col space-y-3">
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

      {/* ... rest of your component ... */}
    </>
  );
};

export default Blog1;