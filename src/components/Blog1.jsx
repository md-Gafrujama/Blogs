import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import WideDiv from './WideDiv';
import Navbar from './Navbar';

const Blog1 = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareOnLinkedIn = () => {
    const title = "The AI Illusion: B2B Marketers Need Better Questions, Not More Hype";
    const summary = "Key insights on AI in B2B Marketing: 1) Bad Data = Bad AI - first-party data is critical, 2) Beware of AI-washing in vendor tools, 3) Targeting precision matters as budgets shrink.";
    const source = "Compare Bazaar";

    const shareUrl = new URL("https://www.linkedin.com/sharing/share-offsite/");
    shareUrl.searchParams.append("url", currentUrl);
    shareUrl.searchParams.append("title", title);
    shareUrl.searchParams.append("summary", summary);
    shareUrl.searchParams.append("source", source);

    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      shareUrl.toString(),
      'LinkedInShare',
      `width=${width},height=${height},top=${top},left=${left},toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no`
    );
  };

  const shareContent = async () => {
    const title = "How Comparison Quotes, Reviews, and Articles Help a Tech Buyer's Journey";
    const text = "Making smart decisions in a noisy digital marketplace";
    
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar/>
      <Helmet>
        <title>How Comparison Quotes, Reviews, and Articles Help a Tech Buyer's Journey</title>
        <meta property="og:title" content="How Comparison Quotes, Reviews, and Articles Help a Tech Buyer's Journey" />
        <meta property="og:description" content="Making smart decisions in a noisy digital marketplace" />
        <meta property="og:image" content="./images/blog1.jpg" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Compare Bazaar" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-2 text-left">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-[#0A3761] bg-blue-100 rounded-full mb-4">
              B2B Tech Buying Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-[#0A3761] mb-6 leading-tight">
              How Comparison Quotes, Reviews, and Articles Help a Tech Buyer's Journey
            </h1>
            <div className="flex items-center text-gray-500 text-sm mb-6">
              <span>Published on May 28, 2024</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>
          
          <img
            src="/images/blog1.jpg"
            alt="Tech buyer's journey"
            className="mx-auto rounded-xl shadow-xl mb-8 w-full max-w-4xl aspect-[16/9] object-cover hover:scale-[1.01] transition-all duration-500 ease-out hover:shadow-2xl"
          />
          
          <div className="bg-blue-50 border-l-4 border-[#0A3761] p-4 mb-8 rounded-r-lg">
            <p className="italic text-gray-700">
              "Making smart decisions in a noisy digital marketplace"
            </p>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Let's face it— <span className="font-bold text-[#0A3761]">buying tech today isn't easy.</span>
            Whether you're a small business owner searching for the right VoIP system or an IT manager evaluating GPS fleet solutions, the options are endless, the jargon overwhelming, and every vendor claims to be the best.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            That's why tech buyers today crave clarity over clever marketing. And that's exactly where tools like comparison quotes, honest reviews, and expert content come into play.
          </p>
        </div>

        {/* Step 1 */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-[#0A3761] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                1
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                The Realization — "We Need Something Better"
              </h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Every tech buyer's journey starts with a trigger. Maybe your team outgrew its payroll software. Maybe a service outage pushed you to explore alternatives. Or maybe you're just trying to cut costs.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whatever the reason, the next step is rarely, "Call a vendor." It's usually:
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-4">
                <p className="font-semibold text-[#0A3761] flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Search. Compare. Learn.
                </p>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                And in that moment, having access to unbiased insights and real user feedback is everything.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-[#0A3761] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                2
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                The Research Phase — From "What Is?" to "Which One?"
              </h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                This is the part where buyers become detectives. They read articles, compare feature lists, study customer reviews, and ask, "What does this actually do for me?"
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                That's where <span className="font-bold text-[#0A3761]">Compare-Bazaar.com</span> steps in.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-[#0A3761] mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm4 0h2v2h-2V5zm-4 4h2v2H7V9zm4 0h2v2h-2V9z" clipRule="evenodd" />
                    </svg>
                    Clear, side-by-side quotes
                  </h3>
                  <p className="text-gray-600">From multiple vendors with no hidden costs</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-[#0A3761] mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Educational articles
                  </h3>
                  <p className="text-gray-600">That answer the "dumb questions" no one asks</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-[#0A3761] mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Real user reviews
                  </h3>
                  <p className="text-gray-600">Highlighting pros, cons, and real-world experiences</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-[#0A3761] mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Confidence building
                  </h3>
                  <p className="text-gray-600">Not sales pressure</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                This stage is all about <span className="font-bold text-[#0A3761]">building confidence,</span> not closing a sale.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-[#0A3761] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                3
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Decision Time — "Who Can I Trust With My Budget?"
              </h2>
            </div>
            <div className="pl-14">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Now that the shortlist is clear, it's time to choose.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                By now, the tech buyer has moved from confusion to clarity—and the final nudge often comes from a trusted quote comparison or a well-written article that explains the tech in plain English.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-6">
                <p className="font-semibold text-gray-800">
                  It's not about who shouts the loudest.
                  <br />
                  It's about who helps the most.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <img
              src="/images/blog1_img.jpg"
              alt="Tech decision making process"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-2xl aspect-[4/3] object-cover hover:scale-[1.01] transition-all duration-500 ease-out"
            />
            <p className="text-center text-sm text-gray-500 mt-2">Making informed tech decisions with Compare Bazaar</p>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-[#0A3761] to-blue-700 p-6 md:p-8 rounded-xl text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              🔁 A Better Way to Buy—Every Time
            </h2>
            <p className="text-blue-100 mb-6">
              At Compare-Bazaar, we believe buyers deserve power in the purchasing process. That's why we do what we do:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-white text-[#0A3761] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">No pressure.</h3>
                  <p className="text-blue-100">Just free, side-by-side quotes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white text-[#0A3761] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">No bias.</h3>
                  <p className="text-blue-100">We don't push one brand over another.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white text-[#0A3761] rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">No waste.</h3>
                  <p className="text-blue-100">Only spend time on vendors that actually fit your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Final Thoughts
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The buyer's journey is no longer a straight line from awareness to purchase. It's a winding path filled with research, peer input, and self-education.
              </p>
              <p className="mb-6">
                And that's okay.
              </p>
              <p className="mb-8">
                Because with the right tools—like comparison quotes, honest reviews, and helpful content—buyers make better decisions. And better decisions build better businesses.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-bold text-lg text-[#0A3761] mb-3">
                  Ready to compare quotes for your next tech investment?
                </p>
                <p className="mb-4">
                  Visit <a href="https://compare-bazaar.com" className="text-blue-600 hover:underline">Compare-Bazaar.com</a> or reach us at:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>marketing@compare-bazaar.com</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+1 332-231-0404</span>
                  </li>
                </ul>
                <p className="mt-4 italic text-gray-600">
                  Where smart choices start.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Card */}
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-center text-[#0A3761] mb-2"> 
              Stay Updated
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Subscribe to the very latest B2B lead gen updates — only the best bits, none of the fluff!
            </p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3761] focus:border-[#0A3761] transition"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className={`w-full ${
                  subscribed ? 'bg-green-600' : 'bg-[#ff8633] hover:bg-[#e6732b]'
                } text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02] mt-2 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </>
                ) : subscribed ? (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Subscribed!
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-lg font-semibold text-gray-800 mb-4">Share this article:</p>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </button>
              
              <button
                onClick={shareContent}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Share
              </button>
              
              <button
                onClick={copyToClipboard}
                className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 000 7.071 4.983 4.983 0 003.535 1.462A4.982 4.982 0 0012 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 01-4.243 0 3.005 3.005 0 010-4.243l2.122-2.121z"/>
                  <path d="M12 4.929l-.707.707 1.414 1.414.707-.707a3.007 3.007 0 014.243 0 3.005 3.005 0 010 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 000-7.071 5.006 5.006 0 00-7.071 0z"/>
                </svg>
                {copied ? "Copied!" : "Copy Link"}
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