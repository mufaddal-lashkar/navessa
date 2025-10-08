import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        services: [
            'Event Planning',
            'Venue Management',
            'Exhibition Design',
            'Photography',
            'Complete Execution'
        ],
        company: [
            'About Us',
            'Our Team',
            'Careers',
            'Blog',
            'Press Kit'
        ],
        support: [
            'Contact Us',
            'FAQ',
            'Privacy Policy',
            'Terms of Service',
            'Support Center'
        ]
    };

    const socialLinks = [
        // { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
        { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/navessa.eventsexpo/', name: 'Instagram' },
        { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/navessa-events-expos/', name: 'LinkedIn' },
        // { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' }
    ];

    return (
        <footer className="bg-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-platinum rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-platinum rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-platinum/20 rounded-full"></div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="container mx-auto px-6 py-16">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center mb-6">
                                <div className="flex items-center space-x-3 ">
                                    {/* <img
                                        src="/Navessa-Logo-mark-white.png"
                                        alt="Logo 1"
                                        className="h-10 w-auto object-contain"
                                    /> */}
                                    <img
                                        src="/Navessa-Logo-White-2.png"
                                        alt="Logo 2"
                                        className="h-12 w-auto object-contain mt-4"
                                    />
                                </div>
                            </div>

                            <p className="text-platinum/80 leading-relaxed mb-6">
                                Crafting world-class events and exhibitions with 100% in-house excellence.
                                Your vision, our expertise, extraordinary results.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-4 w-4 text-platinum" />
                                    <span className="text-platinum/80">+91 95747 81413 <br></br> +91 79906 65336</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-4 w-4 text-platinum" />
                                    <span className="text-platinum/80">navessaeventsexpo@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="h-4 w-4 text-platinum" />
                                    <span className="text-platinum/80">Sindhu Bhavan Marg, Ahmedabad, Gujarat</span>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-lg font-playfair font-bold mb-6">Services</h3>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-platinum/80 hover:text-platinum transition-colors duration-300 hover:translate-x-1 inline-block"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-lg font-playfair font-bold mb-6">Company</h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-platinum/80 hover:text-platinum transition-colors duration-300 hover:translate-x-1 inline-block"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support & Newsletter */}
                        <div>
                            <h3 className="text-lg font-playfair font-bold mb-6">Support</h3>
                            <ul className="space-y-3 mb-8">
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-platinum/80 hover:text-platinum transition-colors duration-300 hover:translate-x-1 inline-block"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            {/* Copyright */}
                            <div className="text-platinum/70 text-sm">
                                © 2024 Navessa Events & Expo. All rights reserved.
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center space-x-4">
                                <span className="text-platinum/70 text-sm mr-2">Follow us:</span>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-platinum hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>

                            {/* Back to Top */}
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="text-platinum/70 hover:text-platinum text-sm transition-colors duration-300"
                            >
                                Back to Top ↑
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;