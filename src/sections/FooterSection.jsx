"use client";
import React from "react";

export default function FooterSection() {
  return (
    <div
      className='relative h-[500px]' // Increased height to make room for more content
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className='fixed bottom-0 h-[500px] w-full'>
        <footer className="py-10 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
            {/* Main content and social links */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              <div className="flex-1 max-w-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0AB6BC] to-[#045C43] flex items-center justify-center text-black font-bold text-lg">N</div>
                  <div className="text-2xl font-bold">NameForge</div>
                </div>
                <p className="text-[#F6F6F6]/70">
                  Generate the perfect name for your business, project, or brand with our powerful AI tools. We make naming simple, creative, and fast.
                </p>
                <div className="flex gap-4 mt-6">
                  {/* Social Media Icons/Links */}
                  <a href="#" className="text-[#F6F6F6]/70 hover:text-white transition-colors">
                    {/* Placeholder for social icon (e.g., an SVG or icon component) */}
                    Facebook
                  </a>
                  <a href="#" className="text-[#F6F6F6]/70 hover:text-white transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-[#F6F6F6]/70 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Newsletter and quick links */}
              <div className="flex-1 flex flex-col md:flex-row justify-between gap-10">
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-lg">Quick Links</h4>
                  <div className="flex flex-col gap-2 text-[#F6F6F6]/70">
                    <a href="#" className="hover:text-white transition-colors">About Us</a>
                    <a href="#" className="hover:text-white transition-colors">Pricing</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                    <a href="#" className="hover:text-white transition-colors">FAQs</a>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-lg">Stay Updated</h4>
                  <p className="text-[#F6F6F6]/70">Join our newsletter to get the latest updates and tips.</p>
                  <form className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="bg-[#2a2a2a] text-white rounded-l-md px-4 py-2 border border-[#444] focus:outline-none focus:border-[#0AB6BC]"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-br from-[#0AB6BC] to-[#045C43] text-black font-bold px-4 py-2 rounded-r-md"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Bottom links and copyright */}
            <div className="mt-8 pt-8 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#F6F6F6]/70">
              <div className="flex gap-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
              <div>Built with ❤️ by Dhruv</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}