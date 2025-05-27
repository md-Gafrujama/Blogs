import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import WideDiv from './WideDiv';
import Navbar from './Navbar';


const Blog1 = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // Set the current URL when component mounts
    setCurrentUrl(window.location.href);
  }, []);

  // Improved LinkedIn sharing function
const shareOnLinkedIn = () => {
  const title = "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype";
  const summary = "Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink.";
  const imageUrl = "/images/blog1.jpg"; // Ensure this image is accessible in your public folder or use a full URL
  const source = "Compare Bazaar";

  // Log the values before encoding
  console.log("Pre-encoded values:", {
    currentUrl,
    title,
    summary,
    imageUrl,
    source
  });

  // Construct share URL
  const shareUrl = new URL("https://www.linkedin.com/sharing/share-offsite/");
  shareUrl.searchParams.append("url", currentUrl);
  shareUrl.searchParams.append("title", title);
  shareUrl.searchParams.append("summary", summary);
  shareUrl.searchParams.append("source", source);

  // Log the constructed URL
  console.log("Constructed share URL:", shareUrl.toString());
  console.log("URL search params:", Object.fromEntries(shareUrl.searchParams.entries()));

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
  console.log("Attempting to open share window with URL:", shareUrl.toString());
  const newWindow = window.open(shareUrl.toString(), 'LinkedInShare', features);
  
  if (newWindow) {
    console.log("Share window opened successfully");
    newWindow.focus();
  } else {
    console.error("Failed to open share window - possibly blocked by popup blocker");
  }
};

  // Alternative sharing method using navigator.share API for mobile devices
  const shareContent = async () => {
    const title = "How Comparison Quotes, Reviews, and Articles Help a Tech Buyer’s Journey";
    const text = "Making smart decisions in a noisy digital marketplace";
    
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
<Navbar/>
   <Helmet>
      <title>How Comparison Quotes, Reviews, and Articles Help a Tech Buyer’s Journey</title>
      <meta property="og:title" content="How Comparison Quotes, Reviews, and Articles Help a Tech Buyer’s Journey" />
      <meta property="og:description" content="Making smart decisions in a noisy digital marketplace" />
      <meta property="og:image" content="./images/blog1.jpg" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Compare Bazaar" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>

<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto px-4 pt-10 pb-2 text-left">
      <h1 className="text-2xl md:text-4xl font-bold text-[#0A3761] mb-4 leading-tight">
        How Comparison Quotes, Reviews, and Articles Help a Tech Buyer’s Journey
      </h1> 
      <img
        src="/images/blog1.jpg"
        alt="AI Illusion B2B Marketing"
        className="mx-auto rounded-lg shadow-lg mb-6 w-full max-w-full h-auto max-h-[500px] object cover"
      />
      <i>Making smart decisions in a noisy digital marketplace</i>
      <p class="mt-5">Let’s face it— <b>buying tech today isn’t easy.</b>
Whether you’re a small business owner searching for the right VoIP system or an IT manager evaluating GPS fleet solutions, the options are endless, the jargon overwhelming, and every vendor claims to be the best.
That’s why tech buyers today crave clarity over clever marketing. And that’s exactly where tools like comparison quotes, honest reviews, and expert content come into play.
</p>
    </div>

<div class="mt-7">
<img
    src="/images/blog1_img.jpg"
    alt="AI Illusion B2B Marketing"
    className="mx-auto rounded-lg  mb-6  max-w-400 h-auto max-h-[500px] object cover"
/>
</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-gray-900 text-3xl font-semibold tracking-wider mb-4">
            </p>
            <h2 className="text-3xl font-semibold text-gray-900">
              Step 1: The Realization — “We Need Something Better”
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mt-5">
             Every tech buyer’s journey starts with a trigger. Maybe your team outgrew its payroll software. Maybe a service outage pushed you to explore alternatives. Or maybe you’re just trying to cut costs.
            </p>
            <p className="text-gray-800 text-base mt-5">
              Whatever the reason, the next step is rarely, “Call a vendor.”
              It’s usually:
              <p class="mt-4"><b>✅ Search. Compare. Learn.</b></p>
              And in that moment, having access to unbiased insights and real user feedback is everything.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-gray-900 text-3xl font-semibold tracking-wider mb-4">
            </p>
            <h2 className="text-3xl font-semibold text-gray-900">
               Step 2: The Research Phase — From “What Is?” to “Which One?”
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mt-5">
             This is the part where buyers become detectives. They read articles, compare feature lists, study customer reviews, and ask, “What does this actually do for me?”
            </p>
            <p className="text-gray-800 text-base mt-5">
               That’s where <b>Compare-Bazaar.com</b> steps in.
              <p class="mt-4">We provide:</p>
              •	<b>Clear, side-by-side quotes</b> from multiple vendors<br></br>
              •	<b>Real-time pricing visibility</b> (no hidden costs or fine print)<br></br>
              •	<b>Educational articles</b> that answer the “dumb questions” no one wants to ask out loud<br></br>
              •	<b>User reviews</b> that highlight pros, cons, and real-world experiences<br></br><br></br>
              This stage is all about <b>building confidence,</b> not closing a sale.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-gray-900 text-3xl font-semibold tracking-wider mb-4">
            </p>
            <h2 className="text-3xl font-semibold text-gray-900">
              Step 3: Decision Time — “Who Can I Trust With My Budget?”
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mt-5">
             Now that the shortlist is clear, it’s time to choose.
            </p>
            <p className="text-gray-800 text-base mt-5">
              By now, the tech buyer has moved from confusion to clarity—and the final nudge often comes from a trusted quote comparison or a well-written article that explains the tech in plain English.
              <p class="mt-4">It’s not about who shouts the loudest.<br></br>
              It’s about who helps the most.
              </p>
            </p>
          </div>
        </div>
      </div>

<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="overflow-hidden">
          <div className="bg-white p-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              🔁 Bonus: A Better Way to Buy—Every Time
            </h2>
            <p className="text-gray-800 mt-4">
              At Compare-Bazaar, we believe buyers deserve power in the purchasing process. That’s why we do what we do:
            </p>
            <div className="space-y-1 mt-3">
              <div className="flex items-start">
                <div>
                  <h3 className="text-base text-gray-800">
                  •	<b>No pressure.</b> Just free, side-by-side quotes.
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <h3 className="text-base text-gray-800">
                    •	<b>No bias.</b> We don’t push one brand over another.
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <h3 className="text-base text-gray-800">
                    •	<b>No waste.</b> Only spend time on vendors that actually fit your needs.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>

  {/* Final Thoughts - now aligned with previous sections */}
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
  <div className="overflow-hidden">
    <div className="bg-white p-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Final Thoughts
      </h2>
      <div className="prose prose-lg md:prose-xl text-gray-700 mb-8">
        <p className="text-base leading-relaxed mb-6">
          The buyer’s journey is no longer a straight line from awareness to purchase. It’s a winding path filled with research, peer input, and self-education.</p>
        <p className="text-base leading-relaxed mb-6">
          And that’s okay.
        </p>
        <p className="text-base leading-relaxed  text-gray-700">
          Because with the right tools—like comparison quotes, honest reviews, and helpful content—buyers make better decisions. And better decisions build better businesses.
        </p>
        <p class="mt-6"><b>🔗 Ready to compare quotes for your next tech investment?</b><br></br>
        Visit Compare-Bazaar.com or reach us on <a>marketing@compare-bazaar.com</a> /Contactus@compare-bazaar.com. You can also call us on +1 332-231-0404 — where smart choices start.
        </p>
      </div>
      </div>
</div>


 {/* Subscribe Card */}
  <div className="bg-white p-16 rounded-4xl shadow-lg border border-gray-500 max-w-xl mx-auto mt-5 ">
    <h3 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
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
        className="w-full bg-[#ff8633] cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02] mt-2 disabled:opacity-70 disabled:hover:scale-100"
      >
        {loading ? "Subscribing..." : subscribed ? "Subscribed ✅" : "Subscribe"}
      </button>
    </div>
  </div>

  {/* Share Section */}
 <div className="p-8 mt-6 text-center">
  <p className="text-lg text-gray-900 mb-3 font-semibold">Share this article:</p>
  <div className="flex flex-row justify-center space-x-3">
    <button
      onClick={shareOnLinkedIn}
      className="cursor-pointer bg-[#0A66C2] text-white font-semibold px-4 py-2 transition-colors rounded-lg hover:bg-[#004182] flex items-center justify-center gap-2"
    >
      {/* LinkedIn SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
      </svg>
    </button>
    <button
      onClick={shareContent}
      className="cursor-pointer bg-[#0A66C2] text-white font-semibold px-4 py-2 transition-colors rounded-lg hover:bg-[#004182] flex items-center justify-center gap-2"
    >
      {/* Share SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
      </svg>
    </button>
    <button
      onClick={() => {
        navigator.clipboard.writeText(currentUrl);
        alert("Link copied to clipboard!");
      }}
      className="cursor-pointer bg-[#0A66C2] text-white font-semibold px-4 py-2 transition-colors rounded-lg hover:bg-[#004182] flex items-center justify-center gap-2"
    >
      {/* Copy Link SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
      </svg>
    </button>
  </div>
</div>
</div>
</div>
<WideDiv/>
   </>
  );
};

export default Blog1;