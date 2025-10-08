import { Calendar, Building, Palette, Camera, Settings, Sparkles } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Calendar className="h-8 w-8" />,
            title: 'Event Planning',
            description: 'Complete event conceptualization and strategic planning with meticulous attention to detail.',
            features: ['Concept Development', 'Timeline Management', 'Budget Planning', 'Vendor Coordination'],
            bgImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <Building className="h-8 w-8" />,
            title: 'Venue Management',
            description: 'Premium venue selection and comprehensive space management for optimal event flow.',
            features: ['Venue Selection', 'Space Design', 'Logistics Planning', 'Setup Management'],
            bgImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <Palette className="h-8 w-8" />,
            title: 'Stall & Booth Design',
            description: 'Custom exhibition stalls and booth designs that captivate and engage your audience.',
            features: ['Custom Design', '3D Visualization', 'Brand Integration', 'Interactive Elements'],
            bgImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <Sparkles className="h-8 w-8" />,
            title: 'Décor & Ambiance',
            description: 'Luxurious décor solutions that transform spaces into extraordinary environments.',
            features: ['Theme Development', 'Lighting Design', 'Floral Arrangements', 'Luxury Furnishing'],
            bgImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <Camera className="h-8 w-8" />,
            title: 'Photography & Media',
            description: 'Professional documentation capturing every precious moment of your special event.',
            features: ['Event Photography', 'Videography', 'Live Streaming', 'Content Creation'],
            bgImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            icon: <Settings className="h-8 w-8" />,
            title: 'Complete Execution',
            description: 'End-to-end event execution ensuring seamless delivery and unforgettable experiences.',
            features: ['Project Management', 'Quality Control', 'Real-time Support', 'Post-event Analysis'],
            bgImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="services" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="glass inline-flex items-center px-4 py-2 rounded-full text-luxury-gray text-sm font-medium mb-6">
                        Our Premium Services
                    </div>

                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
                        Comprehensive Event
                        <span className="text-luxury block">Solutions</span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        From initial concept to final execution, we provide complete in-house solutions
                        that deliver exceptional results for every type of event and exhibition.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative animate-fade-in-up overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative glass p-6 rounded-2xl h-full hover:shadow-luxury transition-all duration-500 overflow-hidden">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
                                    style={{
                                        backgroundImage: `url(${service.bgImage})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                ></div>

                                {/* Overlay for better text readability */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 rounded-2xl"></div>

                                {/* Content */}
                                <div className="relative z-10 text-center group-hover:text-left transition-all duration-300">
                                    <h3 className="text-lg font-playfair font-bold text-white mb-3 flex items-center justify-center h-12 group-hover:h-auto group-hover:justify-start">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-left">
                                    <p className="text-white/90 mb-4 leading-relaxed text-sm">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-1.5">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-xs text-white/80">
                                                <div className="w-1 h-1 bg-white/60 rounded-full mr-2"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16 animate-fade-in">
                    <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
                        <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                            Ready to Create Something Extraordinary?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Let's discuss your vision and create an event experience that exceeds all expectations.
                        </p>
                        <a href='#contact'>
                            <button className="btn-luxury text-white px-8 py-3 rounded-lg">
                                Start Your Project
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;