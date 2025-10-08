import { CheckCircle, Users, Award, Sparkles } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <CheckCircle className="h-6 w-6" />,
            title: 'End-to-End Solutions',
            description: 'Seamless event & expo management from planning to execution'
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: 'Passionate Team',
            description: 'Young, dynamic professionals with creative event expertise'
        },
        {
            icon: <Award className="h-6 w-6" />,
            title: 'Quality First',
            description: 'Delivering memorable experiences with attention to detail'
        },
        {
            icon: <Sparkles className="h-6 w-6" />,
            title: 'Creative Innovation',
            description: 'Unique concepts & modern technology for impactful events'
        }
    ];

    // Duplicate features for seamless loop
    const duplicatedFeatures = [...features, ...features];

    return (
        <section id="about" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* Content */}
                    <div className="animate-slide-in">
                        <div className="glass inline-flex items-center px-4 py-2 rounded-full text-luxury-gray text-sm font-medium mb-6">
                            About Navessa 
                        </div>

                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
                            Transforming Ideas into
                            <span className="text-luxury block">Unforgettable Events</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We are a new-age Events & Expos Management Company, dedicated to turning visions into reality. From intimate gatherings to large-scale exhibitions, our mission is to design and deliver experiences that truly inspire.
                        </p>

                        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                            With a passionate team and innovative strategies, We bring creativity, professionalism, and flawless execution to every event. Our promise is simple: make your event stress-free, impactful, and unforgettable.
                        </p>
                    </div>

                    {/* Visual Element */}
                    <div className="relative animate-fade-in">
                        <div className="glass p-8 rounded-2xl">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <div className="bg-gradient-luxury p-6 rounded-xl text-white">
                                        <div className="text-3xl font-playfair font-bold mb-2">100%</div>
                                        <div className="text-platinum/80">Client Satisfaction</div>
                                    </div>
                                    {/* <div className="bg-gradient-platinum p-6 rounded-xl">
                                        <div className="text-3xl font-playfair font-bold text-primary mb-2"></div>
                                        <div className="text-luxury-gray"></div>
                                    </div> */}
                                </div>
                                <div className="space-y-6 mt-8">
                                    {/* <div className="bg-gradient-platinum p-6 rounded-xl">
                                        <div className="text-3xl font-playfair font-bold text-primary mb-2"></div>
                                        <div className="text-luxury-gray"></div>
                                    </div> */}
                                    <div className="bg-gradient-luxury p-6 rounded-xl text-white">
                                        <div className="text-3xl font-playfair font-bold mb-2">24/7</div>
                                        <div className="text-platinum/80">Dedicated Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-platinum rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-luxury rounded-full opacity-30 animate-pulse"></div>
                    </div>
                </div>

                {/* Moving Feature Cards */}
                <div className="relative overflow-hidden ">
                    <div className="flex space-x-6 animate-scroll bg-white mb-4">
                        {duplicatedFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-80 glass p-6 rounded-xl group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-platinum rounded-lg flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }

                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-slide-in {
                    animation: slide-in 0.8s ease-out;
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out 0.2s both;
                }

                .glass {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .bg-gradient-luxury {
                    background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
                }

                .bg-gradient-platinum {
                    background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
                }

                .text-primary {
                    color: #1a1a1a;
                }

                .text-luxury {
                    color: #666666;
                }

                .text-luxury-gray {
                    color: #888888;
                }

                .text-muted-foreground {
                    color: #666666;
                }

                .bg-background {
                    background-color: #fafafa;
                }

                .text-platinum\/80 {
                    color: rgba(240, 240, 240, 0.8);
                }

                .font-playfair {
                    font-family: 'Playfair Display', serif;
                }
            `}</style>
        </section>
    );
};

export default About;