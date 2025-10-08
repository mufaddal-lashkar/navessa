// import { ExternalLink, ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Portfolio = () => {
//   const projects = [
//     {
//       title: 'Tech Summit 2024',
//       category: 'Corporate Conference',
//       description: 'A premium technology conference featuring cutting-edge exhibition booths and immersive experiences.',
//       image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
//       highlights: ['500+ Attendees', 'Interactive Booths', 'Live Streaming']
//     },
//     {
//       title: 'Luxury Brand Launch',
//       category: 'Product Launch',
//       description: 'An exclusive product launch event with sophisticated décor and premium guest experience.',
//       image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
//       highlights: ['VIP Experience', 'Custom Staging', 'Media Coverage']
//     },
//     {
//       title: 'International Trade Expo',
//       category: 'Exhibition',
//       description: 'Large-scale international exhibition with custom booth designs and comprehensive logistics.',
//       image: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=600&fit=crop',
//       highlights: ['200+ Exhibitors', 'Custom Booths', 'Multi-day Event']
//     },
//     {
//       title: 'Corporate Gala Dinner',
//       category: 'Gala Event',
//       description: 'An elegant corporate gala with luxury dining experience and award ceremony.',
//       image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
//       highlights: ['300+ Guests', 'Awards Ceremony', 'Live Entertainment']
//     },
//     {
//       title: 'Innovation Showcase',
//       category: 'Tech Exhibition',
//       description: 'A futuristic innovation showcase featuring interactive displays and modern architecture.',
//       image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
//       highlights: ['Interactive Tech', 'Future Design', 'Innovation Awards']
//     },
//     {
//       title: 'Fashion Week Runway',
//       category: 'Fashion Event',
//       description: 'High-end fashion runway show with sophisticated lighting and premium venue setup.',
//       image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
//       highlights: ['Runway Design', 'Luxury Setting', 'Media Production']
//     }
//   ];

//   return (
//     <section id="portfolio" className="py-24 bg-background">
//       <div className="container mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <div className="glass inline-flex items-center px-4 py-2 rounded-full text-luxury-gray text-sm font-medium mb-6">
//             Our Portfolio
//           </div>

//           <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
//             Showcasing Excellence in
//             <span className="text-luxury block">Event Creation</span>
//           </h2>

//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Explore our curated collection of premium events and exhibitions that demonstrate 
//             our commitment to luxury, innovation, and exceptional execution.
//           </p>
//         </div>

//         {/* Portfolio Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div 
//               key={index} 
//               className="group relative overflow-hidden rounded-2xl glass hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

//                 {/* Overlay Icon */}
//                 <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <ExternalLink className="h-5 w-5 text-white" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <div className="text-sm text-platinum/80 font-medium mb-2">
//                   {project.category}
//                 </div>

//                 <h3 className="text-xl font-playfair font-bold text-primary mb-3 group-hover:text-luxury transition-colors duration-300">
//                   {project.title}
//                 </h3>

//                 <p className="text-muted-foreground text-sm leading-relaxed mb-4">
//                   {project.description}
//                 </p>

//                 {/* Highlights */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.highlights.map((highlight, highlightIndex) => (
//                     <span 
//                       key={highlightIndex}
//                       className="px-3 py-1 bg-gradient-platinum text-primary text-xs rounded-full font-medium"
//                     >
//                       {highlight}
//                     </span>
//                   ))}
//                 </div>

//                 {/* View Details */}
//                 <div className="flex items-center text-sm text-luxury-gray group-hover:text-primary transition-colors duration-300 cursor-pointer">
//                   <span>View Details</span>
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-16 animate-fade-in">
//           <Button className="btn-luxury text-white px-8 py-4 text-lg">
//             View Complete Portfolio
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
    const projects = [
        {
            title: 'Tech Summit 2024',
            category: 'Corporate Conference',
            description: 'A premium technology conference featuring cutting-edge exhibition booths and immersive experiences.',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
            highlights: ['500+ Attendees', 'Interactive Booths', 'Live Streaming']
        },
        {
            title: 'Luxury Brand Launch',
            category: 'Product Launch',
            description: 'An exclusive product launch event with sophisticated décor and premium guest experience.',
            image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
            highlights: ['VIP Experience', 'Custom Staging', 'Media Coverage']
        },
        {
            title: 'International Trade Expo',
            category: 'Exhibition',
            description: 'Large-scale international exhibition with custom booth designs and comprehensive logistics.',
            image: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=600&fit=crop',
            highlights: ['200+ Exhibitors', 'Custom Booths', 'Multi-day Event']
        },
        {
            title: 'Corporate Gala Dinner',
            category: 'Gala Event',
            description: 'An elegant corporate gala with luxury dining experience and award ceremony.',
            image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
            highlights: ['300+ Guests', 'Awards Ceremony', 'Live Entertainment']
        },
        {
            title: 'Innovation Showcase',
            category: 'Tech Exhibition',
            description: 'A futuristic innovation showcase featuring interactive displays and modern architecture.',
            image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
            highlights: ['Interactive Tech', 'Future Design', 'Innovation Awards']
        },
        {
            title: 'Fashion Week Runway',
            category: 'Fashion Event',
            description: 'High-end fashion runway show with sophisticated lighting and premium venue setup.',
            image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
            highlights: ['Runway Design', 'Luxury Setting', 'Media Production']
        }
    ];

    return (
        <section id="portfolio" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="glass inline-flex items-center px-4 py-2 rounded-full text-luxury-gray text-sm font-medium mb-6">
                        Our Portfolio
                    </div>

                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
                        Showcasing Excellence in
                        <span className="text-luxury block">Event Creation</span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Explore our curated collection of premium events and exhibitions that demonstrate
                        our commitment to luxury, innovation, and exceptional execution.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl glass hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                                {/* Overlay Icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink className="h-5 w-5 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-sm text-platinum/80 font-medium mb-2">
                                    {project.category}
                                </div>

                                <h3 className="text-xl font-playfair font-bold text-primary mb-3 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.highlights.map((highlight, highlightIndex) => (
                                        <span
                                            key={highlightIndex}
                                            className="px-3 py-1 bg-gradient-platinum text-primary text-xs rounded-full font-medium"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* View Details */}
                                <div className="flex items-center text-sm text-luxury-gray group-hover:text-primary transition-colors duration-300 cursor-pointer">
                                    <span>View Details</span>
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-16 animate-fade-in">
                    <Button className="btn-luxury font-medium px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                        View Complete Portfolio
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;