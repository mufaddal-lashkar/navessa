// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// const Contact = () => {
//     const contactInfo = [
//         {
//             icon: <Phone className="h-6 w-6" />,
//             title: 'Phone',
//             info: '+91 95747 81413 , +91 79906 65336',
//             subInfo: 'Mon-Fri 9am-6pm'
//         },
//         {
//             icon: <Mail className="h-6 w-6" />,
//             title: 'Email',
//             info: 'navessaeventsexpo@gmail.com',
//             subInfo: 'We reply within 24 hours'
//         },
//         {
//             icon: <MapPin className="h-6 w-6" />,
//             title: 'Location',
//             info: 'Sindhu Bhavan Marg, Ahmedabad, Gujarat',
//             subInfo: 'Ahmedabad, Gujarat'
//         },
//         {
//             icon: <Clock className="h-6 w-6" />,
//             title: 'Business Hours',
//             info: 'Mon-Sat- 9:00 AM - 6:00 PM',
//             subInfo: 'Weekend by appointment'
//         }
//     ];

//     return (
//         <section id="contact" className="py-24 bg-muted/30">
//             <div className="container mx-auto px-6">
//                 {/* Header */}
//                 <div className="text-center mb-16 animate-fade-in">

//                     <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
//                         Let's Create Something
//                         <span className="text-luxury block">Extraordinary Together</span>
//                     </h2>

//                     <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//                         Ready to transform your vision into an unforgettable experience? Contact our team
//                         to discuss your next premium event or exhibition.
//                     </p>
//                 </div>

//                 {/* First Row: Contact Info and Map */}
//                 <div className="grid lg:grid-cols-2 gap-12 mb-16 px-4">
//                     {/* Contact Information */}
//                     <div className="animate-fade-in">
//                         <div className="space-y-6">
//                             {contactInfo.map((item, index) => (
//                                 <div key={index} className="flex items-start space-x-4 group">
//                                     <div className="flex-shrink-0 w-12 h-12 bg-gradient-platinum rounded-xl flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
//                                         {item.icon}
//                                     </div>
//                                     <div>
//                                         <h4 className="font-semibold text-primary mb-1">
//                                             {item.title}
//                                         </h4>
//                                         <p className="text-foreground font-medium">
//                                             {item.info}
//                                         </p>
//                                         <p className="text-muted-foreground text-sm">
//                                             {item.subInfo}
//                                         </p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Map */}
//                     <div className="animate-slide-in">
//                         <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
//                             <h4 className="text-xl font-playfair font-bold text-primary mb-4">
//                                 Visit Our Location
//                             </h4>
//                             <div className="bg-gradient-platinum h-64 rounded-xl flex items-center justify-center">
//                                 <div className="text-center">
//                                     <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
//                                     <p className="text-primary font-semibold mb-1">Sindhu Bhavan Marg</p>
//                                     <p className="text-luxury-gray text-sm">Ahmedabad, Gujarat, India</p>
//                                     <p className="text-luxury-gray text-xs mt-2">Interactive Map Coming Soon</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Contact Form */}
//                 <div className="max-w-4xl mx-auto animate-slide-in">
//                     <div className="bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/30">
//                         <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-8 text-center">
//                             Send us a message
//                         </h3>

//                         <div className="space-y-6">
//                             <div className="grid sm:grid-cols-2 gap-6">
//                                 <div>
//                                     <label className="block text-sm font-medium text-foreground mb-2">
//                                         First Name
//                                     </label>
//                                     <Input
//                                         placeholder=""
//                                         className="bg-white/60 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 rounded-xl"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-foreground mb-2">
//                                         Last Name
//                                     </label>
//                                     <Input
//                                         placeholder=""
//                                         className="bg-white/60 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 rounded-xl"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="grid sm:grid-cols-2 gap-6">
//                                 <div>
//                                     <label className="block text-sm font-medium text-foreground mb-2">
//                                         Email Address
//                                     </label>
//                                     <Input
//                                         type="email"
//                                         placeholder=""
//                                         className="bg-white/60 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 rounded-xl"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-foreground mb-2">
//                                         Phone Number
//                                     </label>
//                                     <Input
//                                         type="tel"
//                                         placeholder=""
//                                         className="bg-white/60 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 rounded-xl"
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-foreground mb-2">
//                                     Event Type
//                                 </label>
//                                 <select className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none h-12">
//                                     <option>Select Event Type</option>
//                                     <option>Corporate Event</option>
//                                     <option>Exhibition</option>
//                                     <option>Product Launch</option>
//                                     <option>Gala Dinner</option>
//                                     <option>Conference</option>
//                                     <option>Other</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-foreground mb-2">
//                                     Message
//                                 </label>
//                                 <Textarea
//                                     placeholder="Tell us about your event vision and requirements..."
//                                     rows={5}
//                                     className="bg-white/60 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none rounded-xl"
//                                 />
//                             </div>

//                             <div className="pt-4">
//                                 <Button className="btn-luxury text-white w-full py-4 h-14 text-lg font-medium rounded-xl hover:shadow-lg transition-all duration-300">
//                                     Send Message
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const contactInfo = [
        {
            icon: <Phone className="h-6 w-6" />,
            title: 'Phone',
            info: '+91 95747 81413 , +91 79906 65336',
            subInfo: 'Mon-Fri 9am-6pm'
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: 'Email',
            info: 'navessaeventsexpo@gmail.com',
            subInfo: 'We reply within 24 hours'
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: 'Location',
            info: 'Sindhu Bhavan Marg, Ahmedabad, Gujarat',
            subInfo: 'Ahmedabad, Gujarat'
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: 'Business Hours',
            info: 'Mon-Sat- 9:00 AM - 6:00 PM',
            subInfo: 'Weekend by appointment'
        }
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccess(false);

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwLiblAQqruD15qyxNW-8Hvdsl_FJn5G2dc87UzxAyDf9TT7NsBAUDXxCYbr2wDKnMa/exec',
                {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    eventType: '',
                    message: '',
                });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Error submitting form. Please try again later.');
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
                        Let's Create Something
                        <span className="text-luxury block">Extraordinary Together</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Ready to transform your vision into an unforgettable experience? Contact our team
                        to discuss your next premium event or exhibition.
                    </p>
                </div>

                {/* First Row: Contact Info and Map */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16 px-4">
                    {/* Contact Information */}
                    <div className="animate-fade-in">
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-platinum rounded-xl flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                                        <p className="text-foreground font-medium">{item.info}</p>
                                        <p className="text-muted-foreground text-sm">{item.subInfo}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map */}
                    <div className="animate-slide-in">
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                            <h4 className="text-xl font-playfair font-bold text-primary mb-4">
                                Visit Our Location
                            </h4>
                            <div className="bg-gradient-platinum h-64 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                                    <p className="text-primary font-semibold mb-1">Sindhu Bhavan Marg</p>
                                    <p className="text-luxury-gray text-sm">Ahmedabad, Gujarat, India</p>
                                    <p className="text-luxury-gray text-xs mt-2">Interactive Map Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-4xl mx-auto animate-slide-in">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/30"
                    >
                        <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-8 text-center">
                            Send us a message
                        </h3>

                        <div className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        First Name
                                    </label>
                                    <Input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="bg-white/60 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 rounded-xl"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Last Name
                                    </label>
                                    <Input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="bg-white/60 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-white/60 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 rounded-xl"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Phone Number
                                    </label>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-white/60 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 h-12 rounded-xl"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Event Type
                                </label>
                                <select
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none h-12"
                                >
                                    <option value="">Select Event Type</option>
                                    <option>Corporate Event</option>
                                    <option>Exhibition</option>
                                    <option>Product Launch</option>
                                    <option>Gala Dinner</option>
                                    <option>Conference</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Message
                                </label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="bg-white/60 border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none rounded-xl"
                                    placeholder="Tell us about your event vision and requirements..."
                                />
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-luxury text-white w-full py-4 h-14 text-lg font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>

                                {success && (
                                    <p className="text-green-600 text-center mt-4">
                                        ✅ Message sent successfully!
                                    </p>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
