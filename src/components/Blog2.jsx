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
    const title = "Tech Buyer And Its Decision Making Journey.";
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
<Navbar />
    <Helmet>
        <title>Tech Buyer Decision Making Journey</title>
        <meta property="og:title" content="Tech Buyer And Its Decision Making Journey" />
        <meta property="og:description" content="Explore tech buyer decision making process." />
        <meta property="og:image" content="https://blogs.compare-bazaar.com/images/blog2.png" />
        <meta property="og:url" content="https://blogs.compare-bazaar.com/buyer-journey" />
        <meta property="og:type" content="website" />
      </Helmet>

<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto px-4 pt-10 pb-2 text-left">
      <h1 className="text-2xl md:text-4xl font-bold text-[#0A3761] mb-4 leading-tight">
        Tech Buyer And Its Decision Making Journey.
      </h1> 
      <img
        src="/images/blog2.png"
        alt="AI Illusion B2B Marketing"
        className="mx-auto rounded-lg shadow-lg mb-6 w-full max-w-full h-auto max-h-[500px] object cover"
      />
    
      <p class="mt-6">In a world increasingly driven by automation and algorithms, it’s easy to forget that behind every B2B technology decision is a real person—navigating complexity, weighing risks, and trying to make the right call.<br></br><br></br>
        Let’s walk a mile in the shoes of a typical tech buyer. Not the fictional "CTO Persona" in your CRM, but someone like Rachel, an IT Director at a mid-sized logistics firm who’s just been told: “We need to upgrade our fleet tracking system—ASAP.”
        </p>
    </div>

<div class="mt-7">
<img
    src="/images/blog2_img.jpg"
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
              Phase 1: The Trigger
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mt-5">
             It always starts with a problem.
            </p>
            <p className="text-gray-800 text-base mt-5">For Rachel, it was a series of missed deliveries, frustrated drivers, and a lack of visibility across the fleet. She didn’t wake up excited to shop for GPS solutions—but something broke, and now she needs to fix it.<br></br><br></br>
            Like most tech buyers, her first instinct isn’t to call a vendor. She turns to Google, scans a few articles, and starts forming a basic understanding of what’s out there. Her goal? Build a short list before the next leadership meeting.
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
               Phase 2: Research Mode
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mt-5">
             Here’s where content makes all the difference.
            </p>
            <p className="text-gray-800 text-base mt-5">
               Rachel’s not looking for fluff or jargon. She’s after practical, no-nonsense guidance:
              <p class="mt-4"></p>
              •	What features actually matter?<br></br>
              •	How much do these solutions cost?<br></br>
              •	What do other companies in her industry use?<br></br><br></br>
            
              She reads comparison guides, peeks at reviews on G2, and even watches a few explainer videos while grabbing lunch. The vendors that win her attention are the ones who help her <i>learn</i>—not just <i>sell</i>.
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
              Phase 3: Internal Buy-In
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mt-5">
             Now comes the pitch—internally, that is.
            </p>
            <p className="text-gray-800 text-base mt-5">
              Rachel has to build a case for investment. She needs data to convince Finance it’s worth the spend, assurance from Ops that it will actually work, and a green light from Legal.
              <p class="mt-4">The tech buyer often becomes the internal “salesperson,” advocating for your solution. Do you give them the materials and language they need to succeed?
              </p>
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
               Phase 4: Evaluation & Comparison
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mt-5">
             Here’s where many brands lose their chance.
            </p>
            <p className="text-gray-800 text-base mt-5">
               By now, Rachel’s narrowed her list to 3 or 4 vendors. She fills out demo request forms. She talks to sales teams. She gets quotes. But more importantly, she asks herself:
              <p class="mt-4"></p>
              •	Who actually understood our needs?<br></br>
              •	Who was transparent and responsive?<br></br>
              •	Who made her feel confident in the decision?<br></br><br></br>
            
              t’s not just about features—it’s about trust.
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
              Phase 5: The Decision
            </h2>
            <p className="text-gray-800 text-base leading-relaxed mt-5">
             After weeks of research, budget juggling, and stakeholder wrangling, Rachel makes her choice. Not for the cheapest or flashiest option, but for the one that gave her the most clarity and confidence.
            </p>
            <p className="text-gray-800 text-base mt-5">
              The “decision-making journey” ends with a signed contract—but the real journey continues in how the solution performs post-sale.

            </p>
          </div>
        </div>
      </div>

  {/* Final Thoughts - now aligned with previous sections */}
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
  <div className="overflow-hidden">
    <div className="bg-white p-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        So, What Can Marketers Learn?
      </h2>
      <div className="prose prose-lg md:prose-xl text-gray-700 mb-8">
        <p className="text-base leading-relaxed mb-6">
         •	Your buyers are human. Respect their time, their challenges, and their intelligence.<br></br>
         •	Help first, sell second. Content that informs will always outperform content that pushes.<br></br>
         •	Make it easy to compare. Simplify pricing, feature sets, and benefits.<br></br>
         •	Trust is everything. Be responsive, authentic, and consistent.

         </p>
        <p className="text-base leading-relaxed  text-gray-700">
          <i>Want to learn how we help tech companies like yours connect with real buyers like Rachel? Let’s talk.</i>
        </p>
        <p class="mt-6">
        Reach us at <a>marketing@compare-bazaar.com</a> / Contactus@compare-bazaar.com  or call us at +1 332-231-0404.
        </p>
      </div>
      </div>
</div>


  {/* Subscribe Card */}
  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-3xl mx-auto mt-10">
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
        className="w-full bg-[#ff8633] cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02] mt-2 disabled:opacity-70 disabled:hover:scale-100"
      >
        {loading ? "Subscribing..." : subscribed ? "Subscribed ✅" : "Subscribe"}
      </button>
    </div>
  </div>

  {/* Share Section */}
  <div className="bg-white p-8 rounded-xl  border border-gray-100 max-w-3xl mx-auto mt-6">
    <p className="text-sm text-gray-600 mb-3">Share this article:</p>
    <div className="flex flex-row space-x-3">
      <button
        onClick={shareOnLinkedIn}
        className="cursor-pointer flex items-center justify-center gap-2 w-full bg-[#0A66C2] text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-[#004182]"
      >
        {/* LinkedIn SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
        Share on LinkedIn
      </button>
      <button
        onClick={shareContent}
        className="cursor-pointer flex items-center justify-center gap-2 w-full bg-[#ff8633] text-white font-semibold py-2 px-4 rounded-lg transition-colors hover:bg-[#e67a2e]"
      >
        {/* Share SVG */}
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
        {/* Copy Link SVG */}
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
<WideDiv/>
   </>
  );
};

export default Blog2;