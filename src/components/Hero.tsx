import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-luxury-event.jpg';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* Background Video with Enhanced Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-video" type="video/mp4" />
                    {/* Fallback image if video fails to load */}
                    <img
                        src={heroImage}
                        alt="Luxury event and exhibition hall"
                        className="w-full h-full object-cover"
                    />
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="max-w-5xl mx-auto">

                    {/* Main Headline */}
                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-playfair font-bold text-white mb-4 leading-[0.9] tracking-tight">
                        Creativity isn't just seen
                        <span className="block text-luxury">it's felt in every detail</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        Transform your vision into extraordinary experiences. We deliver premium event solutions
                        with unmatched attention to detail and luxury that exceeds expectations.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href='#contact'>
                            <Button className="btn-luxury text-white text-lg px-8 py-4 group font-medium">
                                Get a Quote
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href='#services'>
                            <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 group font-medium backdrop-blur-sm">
                                <Play className="mr-2 h-5 w-5" />
                                Explore Services
                            </Button>
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-[-24px] right-8">
                        <div className="flex flex-col items-center text-white/60 animate-bounce">
                            <div className="text-xs font-medium mb-2 rotate-90 origin-center whitespace-nowrap">
                                SCROLL
                            </div>
                            <div className="w-px h-12 bg-white/30"></div>
                            <div className="w-2 h-2 bg-white/50 rounded-full mt-2"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;