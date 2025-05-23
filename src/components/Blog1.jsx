import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Blog1 = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  // Image URL - Make sure this is absolute and accessible
  const featuredImageUrl = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";

  useEffect(() => {
    setCurrentUrl(window.location.href);
    
    // Preload the image for better sharing
    const img = new Image();
    img.src = featuredImageUrl;
    img.onload = () => setImageLoaded(true);
  }, []);

  const shareOnLinkedIn = () => {
    const title = "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype";
    const summary = "Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink.";
    const source = "Compare Bazaar";

    const shareUrl = new URL("https://www.linkedin.com/sharing/share-offsite/");
    shareUrl.searchParams.append("url", currentUrl);
    
    // Open window with centered position
    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    window.open(
      shareUrl.toString(),
      'LinkedInShare',
      `width=${width},height=${height},top=${top},left=${left},toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no`
    );
  };

  const shareContent = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype",
          text: "Discover key insights on how B2B marketers should approach AI without falling for the hype.",
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
          email: email,
          subject: "New Subscription",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setEmail("");
          setSubscribed(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>The AI Illusion: B2B Marketers Need Better Questions, Not More Hype</title>
        <meta name="description" content="Key insights on AI in B2B Marketing: first-party data importance, AI-washing, and targeting precision." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="The AI Illusion: B2B Marketers Need Better Questions, Not More Hype" />
        <meta property="og:description" content="Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink." />
        <meta property="og:image" content={featuredImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Compare Bazaar" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The AI Illusion: B2B Marketers Need Better Questions, Not More Hype" />
        <meta name="twitter:description" content="Key insights on AI in B2B Marketing: first-party data importance, AI-washing, and targeting precision." />
        <meta name="twitter:image" content={featuredImageUrl} />
      </Helmet>

      {/* Rest of your component remains the same */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('${featuredImageUrl}')` }}
        ></div>
        
        {/* ... rest of your existing JSX ... */}
      </div>

      {/* Make sure to update all share buttons to use the shareOnLinkedIn function */}
    </>
  );
};

export default Blog1;