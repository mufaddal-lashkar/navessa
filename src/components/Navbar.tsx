import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'
            }`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    {/* <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-white/20 to-white/40 rounded-lg backdrop-blur-sm"></div>
            <span className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Navessa
            </span>
          </div> */}
                    {isScrolled ? (
                        <div className="flex items-center space-x-3">
                            {/* <img
                                src="/Navessa-Logo-mark.png"
                                alt="Logo 1"
                                className="h-10 w-auto object-contain"
                            /> */}
                            <img
                                src="/Navessa-Logo-2.png"
                                alt="Logo 2"
                                className="h-10 w-auto object-contain mt-2"
                            />
                        </div>
                    ) : (
                        <div className="flex items-center space-x-3">
                            {/* <img
                                src="/Navessa-Logo-mark-white.png"
                                alt="Logo 1"
                                className="h-10 w-auto object-contain"
                            /> */}
                            <img
                                src="/Navessa-Logo-White-2.png"
                                alt="Logo 2"
                                className="h-10 w-auto object-contain mt-2"
                            />
                        </div>
                    )}

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${isScrolled
                                    ? 'text-foreground/80 hover:text-primary'
                                    : 'text-white/90 hover:text-white'
                                    } hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg hover:shadow-white/20`}
                            >
                                <span className="relative z-10">{item.name}</span>
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a href='#contact'>
                            <Button className="btn-luxury text-white">
                                Get Quote
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'
                            }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-6 glass rounded-lg p-6 animate-fade-in">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-foreground/80 hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg group hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg hover:shadow-white/20"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                            ))}
                            <Button className="btn-luxury text-white mt-4">
                                Get Quote
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;