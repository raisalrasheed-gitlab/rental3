"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--secondary-bg)] border-t border-[var(--border)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Store Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-serif uppercase tracking-tight">Mafa</h2>
          <ul className="space-y-4 text-[var(--foreground)] opacity-80 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-[var(--accent)]" />
              <span>
                Shop No. 214, Second Floor Kesar Empire, Opp Liliwadi Restaurant, B/H- Ramji Mandir, Nikol, Ahmedabad, Gujarat - 382350
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="flex-shrink-0 text-[var(--accent)]" />
              <span>+91 00000 00000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="flex-shrink-0 text-[var(--accent)]" />
              <span>info@mafa.co</span>
            </li>
          </ul>
          
          <div className="flex gap-4 pt-4">
            <a href="#" className="p-2 bg-white rounded-full hover:bg-[var(--accent)] hover:text-white transition-all shadow-sm flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-[var(--accent)] hover:text-white transition-all shadow-sm flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-serif mb-6">Quick links</h3>
          <ul className="space-y-3 opacity-70 text-sm">
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Catalog</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Necklaces</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Bracelets</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Rings</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Earrings</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-xl font-serif mb-6">Customer Care</h3>
          <ul className="space-y-3 opacity-70 text-sm">
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter (Modern UX Improvement) */}
        <div>
          <h3 className="text-xl font-serif mb-6">Stay Connected</h3>
          <p className="text-sm opacity-70 mb-4">Join our mailing list for updates and new collections.</p>
          <div className="flex gap-0">
            <input 
              type="email" 
              placeholder="Email address"
              className="bg-white border border-r-0 border-[var(--border)] px-4 py-2 w-full text-sm outline-none"
            />
            <button className="bg-[var(--accent)] text-white px-4 py-2 text-sm uppercase font-semibold">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest opacity-50">
        <p>© 2026, MAFA INDIA. Powered by Antigravity</p>
        <div className="flex gap-4">
          <span>G-Pay</span>
          <span>PhonePe</span>
          <span>Paytm</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
