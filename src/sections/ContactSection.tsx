import { useState, useRef } from 'react';
import type { FC } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, Linkedin, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // For client-side React apps (Vite, CRA, etc.), environment variables need VITE_ prefix for Vite
    // or REACT_APP_ prefix for Create React App, OR they won't be available in the browser
    
    // Replace these with your actual EmailJS credentials from https://emailjs.com
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS Config:', { 
      serviceId: serviceId ? 'Set' : 'Not set', 
      templateId: templateId ? 'Set' : 'Not set', 
      publicKey: publicKey ? 'Set' : 'Not set' 
    });

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not configured! Please check your .env file.");
      console.error("Make sure to use VITE_ prefix for Vite or REACT_APP_ prefix for Create React App");
      setStatus('error');
      return;
    }

    if (form.current) {
      // Add form data logging for debugging
      const formData = new FormData(form.current);
      console.log('Form data:', Object.fromEntries(formData));

      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log('SUCCESS!', result.text);
            setStatus('success');
            form.current?.reset();
        }, (error) => {
            console.error('EmailJS Error:', error);
            setStatus('error');
        });
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Message Sent!';
      case 'error':
        return 'Try Again';
      default:
        return 'Send Message';
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-purple-400/30 rounded-full">
            <Mail className="w-5 h-5 text-purple-400"/>
            <span className="text-purple-400 font-mono text-sm">CONTACT.init</span>
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
            "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400",
            "bg-clip-text text-transparent",
            "filter drop-shadow-[0_0_10px_rgba(232,121,249,0.5)]"
          )}>
            Get In Touch
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 md:text-lg">
            Have a project in mind or just want to say hello? My inbox is always open. I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Main Contact Panel */}
        <div className={cn(
          "max-w-5xl mx-auto grid lg:grid-cols-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl",
          "border border-gray-700/80 shadow-2xl shadow-purple-500/5"
        )}>
          {/* Left Side: Info */}
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently available for freelance work and open to discussing new projects. Feel free to reach out through the form or any of the channels below.
            </p>
            <div className="space-y-6">
              <a href="mailto:ansupanda.official@gmail.com" className="group flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <div className="p-3 bg-gray-900/50 border border-gray-700 rounded-lg group-hover:border-cyan-400 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span>ansupanda.official@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/ansushree-panda/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                 <div className="p-3 bg-gray-900/50 border border-gray-700 rounded-lg group-hover:border-cyan-400 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
              <div className="group flex items-center gap-4 text-gray-300">
                 <div className="p-3 bg-gray-900/50 border border-gray-700 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Brahmapur, Odisha, India</span>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-green-400 font-mono text-sm">Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-8 lg:p-12">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-300">Your message has been sent successfully. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    name="from_name" 
                    required 
                    className="peer block w-full bg-gray-900/50 border border-gray-700 rounded-lg p-4 pt-6 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition" 
                    placeholder="Full Name" 
                  />
                  <label htmlFor="name" className="absolute left-4 top-3.5 text-gray-400 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-3.5 peer-focus:text-sm peer-focus:text-cyan-400">Full Name</label>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="from_email" 
                    required 
                    className="peer block w-full bg-gray-900/50 border border-gray-700 rounded-lg p-4 pt-6 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition" 
                    placeholder="Email Address" 
                  />
                  <label htmlFor="email" className="absolute left-4 top-3.5 text-gray-400 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-3.5 peer-focus:text-sm peer-focus:text-cyan-400">Email Address</label>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    className="peer block w-full bg-gray-900/50 border border-gray-700 rounded-lg p-4 pt-6 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition" 
                    placeholder="Subject" 
                  />
                  <label htmlFor="subject" className="absolute left-4 top-3.5 text-gray-400 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-3.5 peer-focus:text-sm peer-focus:text-cyan-400">Subject</label>
                </div>
                <div className="relative">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="peer block w-full bg-gray-900/50 border border-gray-700 rounded-lg p-4 pt-6 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition" 
                    placeholder="Your Message" 
                  />
                  <label htmlFor="message" className="absolute left-4 top-3.5 text-gray-400 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-3.5 peer-focus:text-sm peer-focus:text-cyan-400">Your Message</label>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className={cn(
                    "group relative w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600",
                    "text-white font-semibold rounded-full overflow-hidden",
                    "transform transition-all duration-300 hover:scale-105",
                    "hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]",
                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  )}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send size={18} />
                    {getButtonText()}
                  </span>
                </button>
                {status === 'error' && (
                  <div className="text-center space-y-2">
                    <p className="text-red-400 font-mono text-sm">Something went wrong. Please try again.</p>
                    <p className="text-gray-400 text-xs">Check the console for more details.</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;