import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-indigo-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Logo/Brand */}
          <div className="text-2xl md:text-3xl font-light tracking-wide">
            Akdenar Labs
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8 text-sm md:text-base">
            <a href="#about" className="hover:text-indigo-200 transition-colors">
              About
            </a>
            <a href="#careers" className="hover:text-indigo-200 transition-colors">
              Careers
            </a>
            <a href="#services" className="hover:text-indigo-200 transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-indigo-200 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="hover:text-indigo-200 transition-colors">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-indigo-400/30 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-indigo-100">
            © 2025 Akdenar Labs. All rights reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a 
              href="#twitter" 
              className="hover:text-indigo-200 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#facebook" 
              className="hover:text-indigo-200 transition-colors"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a 
              href="#linkedin" 
              className="hover:text-indigo-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}