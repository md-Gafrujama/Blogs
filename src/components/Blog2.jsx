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
    // Set the current URL when component mounts
    setCurrentUrl(window.location.href);
  }, []);

  // Your existing functions remain the same...
  const shareOnLinkedIn = () => {
    const title = "Tech Buyer And Its Decision Making Journey";
    const summary = "Explore the 5 phases of tech buyer decision making process: from initial trigger to final decision, and learn what marketers can do to connect with real buyers.";
    const imageUrl = "https://blogs.compare-bazaar.com/images/blog2.png";
    const source = "Compare Bazaar";

    console.log("Pre-encoded values:", {
      currentUrl,
      title,
      summary,
      imageUrl,
      source
    });

    const shareUrl = new URL("https://www.linkedin.com/sharing/share-offsite/");
    shareUrl.searchParams.append("url", currentUrl);
    shareUrl.searchParams.append("title", title);
    shareUrl.searchParams.append("summary", summary);
    shareUrl.searchParams.append("source", source);

    console.log("Constructed share URL:", shareUrl.toString());
    console.log("URL search params:", Object.fromEntries(shareUrl.searchParams.entries()));

    const width = 600;
    const height = 600;
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
      'scrollbars=no',
      'resizable=no',
      'copyhistory=no'
    ].join(',');

    console.log("Attempting to open share window with URL:", shareUrl.toString());
    const newWindow = window.open(shareUrl.toString(), 'LinkedInShare', features);
    
    if (newWindow) {
      console.log("Share window opened successfully");
      newWindow.focus();
    } else {
      console.error("Failed to open share window - possibly blocked by popup blocker");
    }
  };

  const shareContent = async () => {
    const title = "Tech Buyer And Its Decision Making Journey";
    const text = "Explore the 5 phases of tech buyer decision making process and learn what marketers can do to connect with real buyers.";
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: text,
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
      <Navbar />
      <Helmet>
        {/* Basic HTML Meta Tags */}
        <title>Tech Buyer And Its Decision Making Journey | Compare Bazaar</title>
        <meta name="description" content="Explore the 5 phases of tech buyer decision making process: from initial trigger to final decision. Learn what B2B marketers can do to connect with real buyers like Rachel." />
        <meta name="keywords" content="tech buyer journey, B2B marketing, decision making process, technology purchasing, buyer persona" />
        <meta name="author" content="Compare Bazaar" />
        
        {/* Essential Open Graph Meta Tags for LinkedIn */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Compare Bazaar Blog" />
        <meta property="og:title" content="Tech Buyer And Its Decision Making Journey" />
        <meta property="og:description" content="Explore the 5 phases of tech buyer decision making process: from initial trigger to final decision. Learn what B2B marketers can do to connect with real buyers like Rachel in logistics who needs fleet tracking solutions." />
        <meta property="og:image" content="https://blogs.compare-bazaar.com/images/blog2.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Tech Buyer Decision Making Journey - 5 Phases from Trigger to Decision" />
        <meta property="og:url" content="https://blogs.compare-bazaar.com/buyer-journey" />
        <meta property="og:locale" content="en_US" />
        
        {/* Article specific tags */}
        <meta property="article:author" content="Compare Bazaar" />
        <meta property="article:published_time" content="2024-12-01T10:00:00Z" />
        <meta property="article:section" content="B2B Marketing" />
        <meta property="article:tag" content="Tech Buyer Journey" />
        <meta property="article:tag" content="B2B Marketing" />
        <meta property="article:tag" content="Decision Making" />
        
        {/* Twitter Cards (as fallback) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CompareBazaar" />
        <meta name="twitter:title" content="Tech Buyer And Its Decision Making Journey" />
        <meta name="twitter:description" content="Explore the 5 phases of tech buyer decision making process: from initial trigger to final decision." />
        <meta name="twitter:image" content="https://blogs.compare-bazaar.com/images/blog2.png" />
        
        {/* LinkedIn specific (if needed) */}
        <meta property="linkedin:owner" content="Compare Bazaar" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://blogs.compare-bazaar.com/buyer-journey" />
      </Helmet>

      {/* Rest of your component remains the same */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-2 text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0A3761] mb-4 leading-tight">
            Tech Buyer And Its Decision Making Journey.
          </h1> 
          <img
            src="/images/blog2.png"
            alt="Tech Buyer Decision Making Journey - 5 Phases from Trigger to Decision"
            className="mx-auto rounded-lg shadow-lg mb-6 w-full max-w-full h-auto max-h-[500px] object cover"
          />
        
          <p className="mt-6">In a world increasingly driven by automation and algorithms, it's easy to forget that behind every B2B technology decision is a real person—navigating complexity, weighing risks, and trying to make the right call.<br /><br />
            Let's walk a mile in the shoes of a typical tech buyer. Not the fictional "CTO Persona" in your CRM, but someone like Rachel, an IT Director at a mid-sized logistics firm who's just been told: "We need to upgrade our fleet tracking system—ASAP."
          </p>
        </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
    <p className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      Share this article
    </p>
    
    <div className="flex flex-wrap gap-3">
      {/* LinkedIn Button */}
      <button
        onClick={shareOnLinkedIn}
        className="flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0A55A0] transition-all duration-300 shadow hover:shadow-md"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        LinkedIn
      </button>
      
      {/* Instagram Button */}
      <button
        onClick={shareContent}
        className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow hover:shadow-md"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        Instagram
      </button>
      
    
      
      {/* Copy Link Button */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(currentUrl);
          alert("Link copied to clipboard!");
        }}
        className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow hover:shadow-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
        Copy Link
      </button>
    </div>
  </div>
</div>
        {/* Rest of your content... */}
        
      </div>
    </>
  );
};

export default Blog2;