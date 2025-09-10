import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FacebookIcon, TwitterIcon, LinkedInIcon } from './icons';

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(footerRef, { threshold: 0.1 });

    const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
        <a href={href} className="relative text-sky-200/80 hover:text-cyan-300 transition-colors duration-300 group">
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
        </a>
    );

    return (
        <footer ref={footerRef} className="relative bg-[#020617] text-white pt-16 pb-8 overflow-hidden transform-style-3d">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-cyan-900/10 to-slate-900 animate-flowing-gradient opacity-20 [transform:translateZ(-50px)_scale(1.5)]"></div>
            <div className={`relative container mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className={isVisible ? 'animate-fade-in-slide-up' : ''}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                        {/* About Column */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-500">Digital Enroute</h3>
                            <p className="text-sky-200/70">
                                Your dedicated partner in navigating the digital landscape to drive growth and achieve market leadership.
                            </p>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-3">
                                <li><NavLink href="#home">Home</NavLink></li>
                                <li><NavLink href="#about">About Us</NavLink></li>
                                <li><NavLink href="#services">Services</NavLink></li>
                                <li><NavLink href="#insights">Insights</NavLink></li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
                            <ul className="space-y-3 text-sky-200/80">
                                <li>London, United Kingdom</li>
                                <li>hello@digitalenroute.co.uk</li>
                                <li>+44 20 1234 5678</li>
                            </ul>
                        </div>

                        {/* Social Media Column */}
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" aria-label="Facebook" className="text-sky-200/80 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-all duration-300">
                                    <FacebookIcon className="h-6 w-6" />
                                </a>
                                <a href="#" aria-label="Twitter" className="text-sky-200/80 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-all duration-300">
                                    <TwitterIcon className="h-6 w-6" />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="text-sky-200/80 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-all duration-300">
                                    <LinkedInIcon className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 pt-8 text-center text-sky-200/60">
                        <p>&copy; {new Date().getFullYear()} Digital Enroute. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;