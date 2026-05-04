import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, User, Calendar, Instagram, Mail, Camera, Facebook } from 'lucide-react';

const Logo = ({ className = "text-4xl" }: { className?: string }) => (
  <motion.div 
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: [0.95, 1.02, 1], opacity: 1 }}
    transition={{ duration: 1.2, times: [0, 0.6, 1], ease: "easeOut" }}
    className={`font-display font-black text-white tracking-tighter leading-none ${className}`}
  >
    Co<span className="text-cokreate-red">K</span>reate<span className="text-cokreate-red">.</span>
  </motion.div>
);

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 max-w-[1440px] left-1/2 -translate-x-1/2 bg-transparent">
      <div className="flex justify-between items-end border-b border-white/10 pb-8">
        <div className="flex flex-col cursor-pointer" onClick={() => setCurrentPage('home')}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-cokreate-red font-bold mb-2">Creative Studio</span>
          <Logo className="text-4xl" />
        </div>
        <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.3em] font-bold mb-1">
          <button 
            onClick={() => setCurrentPage('work')}
            className={`${currentPage === 'work' ? 'text-cokreate-red border-b border-cokreate-red' : 'text-white/60 hover:text-white'} pb-1 transition-all cursor-pointer`}
          >
            Work
          </button>
          <button 
            onClick={() => setCurrentPage('about')}
            className={`${currentPage === 'about' ? 'text-cokreate-red border-b border-cokreate-red' : 'text-white/60 hover:text-white'} pb-1 transition-all cursor-pointer`}
          >
            About
          </button>
          <button 
            onClick={() => setCurrentPage('contact')}
            className={`${currentPage === 'contact' ? 'text-cokreate-red border-b border-cokreate-red' : 'text-white/60 hover:text-white'} pb-1 transition-all cursor-pointer`}
          >
            Contact
          </button>
        </div>
        <button 
          onClick={() => setCurrentPage('contact')}
          className="bg-cokreate-red text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-red-700 transition-all duration-200"
        >
          Book Session
        </button>
      </div>
    </nav>
  );
};

const Hero = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Cinematic studio" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlcu5O1VW7bhCw_TiJN-Z8b79jhZ4689oqVO0nOgY2gWUlsiGSBQPN0M4l2MduC9fN9FlLnC0u0vN7Kof8QJHk55z0I34vxJtIySX1969JJ2TYxHxTmCbC2OmjFAgnHi6icSnhPTIOpFkMBcdOHQl8orZYAyEdbZiwWezau7CFQ6nYzNJGK8YLBS4a_jgY61fUp3W5vKt8cvFLposydYwKzi68MONqH9xHCzdJ9vEputSOHgC79wM_jkFXvkmXIT255HZaNGqgXKs"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 hero-glow pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 max-w-[1280px] w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[60px] md:text-[100px] text-white mb-8 leading-[0.9] tracking-tight font-light"
          >
            Seen with<br/>
            <span className="italic font-medium text-cokreate-red">Intention.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-l-2 border-cokreate-red pl-8 max-w-lg"
          >
            <p className="font-body text-xl text-white/70 leading-relaxed font-light">
              CoKreate Media is a creative studio focused on photography, film, and visual storytelling that feels bold, cinematic, and deeply personal.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-cokreate-red text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-red-700 flex items-center gap-3 group"
            >
              Book Session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setCurrentPage('work')}
              className="border border-white/20 text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:border-white"
            >
              View Reel
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const items = [
    {
      id: '01',
      title: 'Photography',
      description: 'Portraits and editorial sessions crafted to connect and leave a lasting impression.',
    },
    {
      id: '02',
      title: 'Commercial',
      description: 'Brand visuals and commercial campaigns designed for impact and authenticity.',
    },
    {
      id: '03',
      title: 'Cinematography',
      description: 'Music videos, documentaries, and narrative film projects with cinematic depth.',
    },
  ];

  return (
    <section className="py-[120px] px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/5">
      <div className="mb-20 max-w-3xl">
        <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">Our Focus</span>
        <h2 className="font-display text-4xl md:text-5xl text-white font-light italic leading-tight">Stories that matter.</h2>
        <p className="mt-6 text-white/50 font-body text-lg leading-relaxed font-light">
          We help individuals, businesses, artists, and organizations turn ideas into visuals that connect, inspire, and leave a lasting impression.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-3 group"
          >
            <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-tighter">{item.id}</span>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-cokreate-red transition-colors">{item.title}</h4>
            <p className="text-xs text-white/40 leading-normal font-light">{item.description}</p>
          </motion.div>
        ))}
        <div className="flex items-center md:justify-end">
          <div className="text-left md:text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Studio Location</p>
            <p className="text-xs font-medium text-white/80 uppercase tracking-wider">Dayton, Ohio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedSection = () => {
  return (
    <section className="py-[120px] bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-7 relative group">
          <div className="aspect-[16/9] w-full bg-zinc-900 relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,_#dc2626_0%,_transparent_100%)] z-10 pointer-events-none"></div>
            <img 
              alt="Editorial fashion" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              src="/regenerated_image_1777580601972.png"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 mb-1">Featured Project</p>
              <h3 className="text-2xl font-display italic text-white">Faces</h3>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-white/20 z-20 pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-white/20 z-20 pointer-events-none"></div>
          </div>
          
          {/* Vertical Label */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex items-center gap-4 -rotate-90 hidden lg:flex">
            <div className="h-[1px] w-12 bg-white/20"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 whitespace-nowrap italic">Est. MMXXIV</span>
          </div>
        </div>
        
        <div className="md:col-span-5">
          <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.3em] block mb-6">The Heart of CoKreate</span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-8 italic leading-[0.95] font-light">Authentic &<br/>Unforgettable.</h2>
          <p className="text-white/60 font-body text-base mb-10 leading-relaxed font-light">
            We don’t believe in generic visuals or one-size-fits-all content. Every project is approached with collaboration, creativity, and purpose—because the best work happens when people create together.
          </p>
          <div className="flex gap-4 border-l-2 border-cokreate-red pl-8">
            <p className="text-white text-lg font-display italic font-medium leading-relaxed">"Every person, brand, and story deserves to be seen with intention."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <section className="py-[160px] relative overflow-hidden bg-background border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
          <h2 className="text-[120px] md:text-[350px] font-black italic select-none tracking-tighter text-white">CREATE</h2>
        </div>
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 text-center">
        <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">Collaboration</span>
        <h2 className="font-display text-5xl md:text-7xl text-white mb-8 font-light italic leading-none">Create Together.</h2>
        <p className="font-body text-lg text-white/50 mb-12 max-w-[500px] mx-auto font-light leading-relaxed">
          Let's turn your ideas into unforgettable visuals. Book a session to start your story.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-cokreate-red text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-red-700 flex items-center gap-3"
          >
            Book Now
            <Calendar className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setCurrentPage('work')}
            className="border border-white/10 text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:border-white transition-all duration-300"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

const Home = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => (
  <>
    <Hero setCurrentPage={setCurrentPage} />
    <Capabilities />
    <FeaturedSection />
    <CTA setCurrentPage={setCurrentPage} />
  </>
);

const Contact = () => {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          let message = `Server error: ${response.status}`;
          try {
            const errorData = await response.json();
            message = errorData.message || errorData.error || message;
          } catch (parseErr) {
            console.error('Failed to parse error JSON:', parseErr);
          }
          throw new Error(message);
        } else {
          const errorText = await response.text();
          console.error('Server error response (text):', errorText);
          throw new Error(`Server error: ${response.status}`);
        }
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-60 pb-40 max-w-xl mx-auto px-6 text-center"
      >
        <div className="w-20 h-20 bg-cokreate-red/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Mail className="w-10 h-10 text-cokreate-red" />
        </div>
        <h2 className="font-display text-4xl text-white italic mb-4">Message Sent.</h2>
        <p className="text-white/50 font-body leading-relaxed mb-12">
          Thank you for reaching out. We've received your booking request and will get back to you within 24-48 hours.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.4em] hover:text-white transition-colors"
        >
          Back to home
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-40 max-w-[1440px] mx-auto px-6 md:px-12"
    >
      <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-12">
          <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">Contact & Booking</span>
          <h1 className="font-display text-[60px] md:text-[100px] text-white leading-[0.9] tracking-tight font-light">
            Start your<br/>
            <span className="italic font-medium text-cokreate-red">Journey.</span>
          </h1>
        </div>
        
        <div className="lg:col-span-5 space-y-12">
          <div className="border-l-2 border-cokreate-red pl-8">
            <h3 className="text-white text-xl font-display italic mb-4">Let's create something together.</h3>
            <p className="text-white/50 font-body leading-relaxed font-light">
              Whether you have a fully formed concept or just the spark of an idea, we're here to help you bring it to life with cinematic precision.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email</span>
              <a href="mailto:vision@cokreatemedia.com" className="text-white hover:text-cokreate-red transition-colors text-lg font-light">vision@cokreatemedia.com</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Location</span>
              <p className="text-white text-lg font-light">Dayton, Ohio & Beyond</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Inquiries</span>
              <p className="text-white text-lg font-light">General: 24-48hr response time</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-900/30 p-8 md:p-12 ring-1 ring-white/5 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Full Name</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  autoComplete="name"
                  className="bg-background border border-white/10 px-6 py-4 text-white text-sm font-light focus:outline-none focus:border-cokreate-red transition-colors w-full"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Email Address</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  autoComplete="email"
                  className="bg-background border border-white/10 px-6 py-4 text-white text-sm font-light focus:outline-none focus:border-cokreate-red transition-colors w-full"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Project Type</label>
                <select 
                  name="projectType"
                  className="bg-background border border-white/10 px-6 py-4 text-white text-sm font-light focus:outline-none focus:border-cokreate-red transition-colors w-full appearance-none"
                >
                  <option value="photography">Portrait Session</option>
                  <option value="commercial">Commercial/Brand</option>
                  <option value="film">Film/Music Video</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Preferred Date</label>
                <input 
                  name="date"
                  type="date" 
                  className="bg-background border border-white/10 px-6 py-4 text-white text-sm font-light focus:outline-none focus:border-cokreate-red transition-colors w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Project Details</label>
              <textarea 
                required
                name="message"
                rows={6}
                className="bg-background border border-white/10 px-6 py-4 text-white text-sm font-light focus:outline-none focus:border-cokreate-red transition-colors w-full resize-none"
                placeholder="Tell us about your vision..."
              ></textarea>
            </div>

            {status === 'error' && (
              <p className="text-cokreate-red text-xs font-medium bg-cokreate-red/10 p-4 border-l-2 border-cokreate-red italic">
                Error: {errorMessage}
              </p>
            )}

            <button 
              disabled={status === 'loading'}
              type="submit"
              className="bg-cokreate-red text-white w-full py-5 text-xs font-bold uppercase tracking-[0.4em] hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Submit Request'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </motion.div>
  );
};

const Portfolio = () => {

  const photography = [
    { title: "Brooklyn", category: "Portrait", url: "/regenerated_image_1777580731945.png" },
    { title: "Rylie", category: "Portrait", url: "/regenerated_image_1777580732400.png" },
    { title: "Elizabeth", category: "Portrait", url: "/regenerated_image_1777580732988.png" },
    { title: "Sydney", category: "Portrait", url: "/regenerated_image_1777580733484.png" },
  ];

  const testimonials = [
    { 
      quote: "Working with CoKreate was a true partnership. They didn't just execute a brief; they helped me refine my vision and brought it to life with incredible cinematic depth.",
      author: "Sarah J.",
      role: "Creative Director"
    },
    { 
      quote: "Drew has an uncanny ability to capture the emotion of a moment. The final portraits felt like more than just photos—they felt like a story told with intention.",
      author: "Marcus V.",
      role: "Artist"
    },
    { 
      quote: "CoKreate Media transformed our brand visuals. Their focus on authentic storytelling is exactly what our organization needed to connect with our audience.",
      author: "Elena R.",
      role: "Founder, Bloom & Co."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-40 max-w-[1440px] mx-auto px-6 md:px-12"
    >
      <section className="mb-32">
        <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">Portfolio</span>
        <h1 className="font-display text-[60px] md:text-[100px] text-white leading-[0.9] tracking-tight font-light mb-12">
          Selected<br/>
          <span className="italic font-medium text-cokreate-red">Works.</span>
        </h1>
      </section>

      {/* Showcase Video Section */}
      <section className="mb-40">
        <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
          <h2 className="font-display text-4xl text-white font-light italic">Featured Showcase</h2>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Directorial — Reel</span>
        </div>
        <div className="relative aspect-video w-full bg-zinc-900 overflow-hidden ring-1 ring-white/10 shadow-2xl">
          <iframe 
            src="https://drive.google.com/file/d/1YrPKoFPav0g6tdRGM1c-zKVg9CmxWXsh/preview" 
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay"
            title="CoKreate Media Showcase"
          ></iframe>
          {/* Decorative corner accents for consistency */}
          <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-white/20 z-20 pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-white/20 z-20 pointer-events-none"></div>
        </div>
      </section>

      {/* Photography Grid */}
      <section className="mb-40">
        <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
          <h2 className="font-display text-4xl text-white font-light italic">Photography</h2>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Editorial — Portrait</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {photography.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 ring-1 ring-white/10"
            >
              <img 
                src={item.url} 
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                alt={item.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end pointer-events-none">
                <span className="text-[10px] uppercase font-bold text-cokreate-red tracking-widest mb-1">{item.category}</span>
                <h3 className="text-white font-display text-xl italic">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Film Selection */}
      <section className="mb-40">
        <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
          <h2 className="font-display text-4xl text-white font-light italic">Cinematography</h2>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Shorts — Commercial</span>
        </div>
        <div className="aspect-[21/9] w-full bg-zinc-950/50 border border-white/5 flex flex-col items-center justify-center text-center p-12 group overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,_#dc2626_0%,_transparent_100%)]"></div>
          <div className="relative z-10">
            <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.5em] block mb-4">Coming Soon</span>
            <p className="font-display text-2xl md:text-4xl text-white/40 italic font-light">The next chapter in <br/><span className="text-white/60">visual storytelling</span> is currently in production.</p>
          </div>
          {/* Animated decorative line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cokreate-red/30 to-transparent"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-32 py-24 border-t border-white/5">
        <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.4em] block mb-12 text-center">Words from Co-Kreators</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-8 text-center md:text-left"
            >
              <p className="font-display text-2xl text-white/80 leading-relaxed italic font-light">"{t.quote}"</p>
              <div className="flex flex-col gap-1 border-l-2 border-cokreate-red pl-6 mx-auto md:mx-0">
                <span className="text-white text-sm font-bold uppercase tracking-widest">{t.author}</span>
                <span className="text-white/30 text-[10px] uppercase tracking-widest">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

const About = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="pt-40 max-w-[1440px] mx-auto px-6 md:px-12"
  >
    {/* Studio Section */}
    <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-12 pointer-events-none">
            <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">About Us</span>
            <h2 className="font-display text-[60px] md:text-[100px] text-white leading-[0.9] tracking-tight font-light mb-12">
              Seeing with<br/>
              <span className="italic font-medium text-cokreate-red">Intention.</span>
            </h2>
          </div>
      <div className="lg:col-span-7 space-y-10">
        <p className="font-body text-2xl text-white/80 leading-relaxed font-light border-l-2 border-cokreate-red pl-8 italic">
          At CoKreate Media, we believe every person, brand, and story deserves to be seen with intention.
        </p>
        <div className="font-body text-lg text-white/50 space-y-6 leading-relaxed font-light">
          <p>
            We are a creative media company focused on photography, film, and visual storytelling that feels bold, cinematic, and deeply personal. Whether we are capturing portraits, producing commercial content, creating branded visuals, or developing films, our goal is always the same: create work that feels authentic and unforgettable.
          </p>
          <p>
            We don’t believe in generic visuals or one-size-fits-all content. Every project is approached with collaboration, creativity, and purpose—because the best work happens when people create together.
          </p>
          <p className="text-white">That is the heart of CoKreate.</p>
          <p>
            We help individuals, businesses, artists, and organizations turn ideas into visuals that connect, inspire, and leave a lasting impression.
          </p>
          <p>
            From portraits and editorial sessions to commercial campaigns, music videos, documentaries, and narrative film projects, CoKreate Media is built to tell stories that matter.
          </p>
        </div>
      </div>
      <div className="lg:col-span-5 relative hidden lg:block">
         <div className="sticky top-40 aspect-[3/4] bg-zinc-900 overflow-hidden ring-1 ring-white/10">
           <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,_#dc2626_0%,_transparent_100%)] z-10 pointer-events-none"></div>
           <img 
              alt="Cinematic vision" 
              className="w-full h-full object-cover brightness-[0.7] transition-all duration-700 hover:brightness-100" 
              src="/regenerated_image_1777580282454.png" 
              referrerPolicy="no-referrer"
            />
         </div>
      </div>
    </section>

    {/* Founder Section */}
    <section className="mb-32 py-24 border-t border-white/5 border-b grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-5">
        <div className="aspect-[4/5] bg-[#49503d] overflow-hidden ring-1 ring-white/10 relative group">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,_#dc2626_0%,_transparent_100%)] z-10 pointer-events-none"></div>
          <img 
            alt="Drew McCoy" 
            className="w-full h-full object-cover scale-105 transition-transform duration-1000 group-hover:scale-110" 
            src="/regenerated_image_1777409389322.png"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?bg=0d0f0f&q=80&w=2000";
              target.onerror = null;
              target.style.objectFit = 'cover';
            }}
          />
        </div>
      </div>
      <div className="lg:col-span-7">
        <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">The Visionary</span>
        <h2 className="font-display text-5xl md:text-6xl text-white mb-2 font-light tracking-tight">Drew McCoy</h2>
        <p className="text-cokreate-red text-sm font-bold uppercase tracking-widest mb-10">Founder | Creative Director | Photographer | Filmmaker</p>
        
        <div className="font-body text-white/60 space-y-6 leading-relaxed font-light text-base">
          <p>
            CoKreate Media was founded by Drew McCoy, a creative driven by the belief that the strongest work isn't just made <i>for</i> a client, but <i>with</i> them.
          </p>
          <p>
            The "Co" in CoKreate is intentional. Drew's approach is rooted in partnership—blending his cinematic vision and technical expertise with your unique perspective. He believes that a project only truly succeeds when it authentically captures the client's vision and brings it to life with precision and purpose.
          </p>
          <p className="text-white italic font-medium">
            "I believe great creative work should not just look good—it should be a true reflection of the person or brand behind it. We don't just create; we co-create."
          </p>
          <p>
            With a background in technology and design, Drew ensures that the collaborative process is as seamless as the final result. His goal is simple: to build a studio where storytelling and artistry meet the highest level of collaboration.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-2 gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
          <div className="flex flex-col gap-2">
            <span className="text-white/10 border-b border-white/5 pb-2">Not just content.</span>
            <span className="text-cokreate-red">Connection.</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white/10 border-b border-white/5 pb-2">Not just visuals.</span>
            <span className="text-cokreate-red">Stories.</span>
          </div>
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section className="mb-32 text-center max-w-4xl mx-auto py-20 relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
        <h2 className="text-[150px] md:text-[250px] font-black italic select-none">MISSION</h2>
      </div>
      <div className="relative z-10">
        <span className="text-cokreate-red text-[10px] font-bold uppercase tracking-[0.4em] block mb-8">Our Mission</span>
        <h3 className="font-display text-4xl md:text-6xl text-white mb-12 font-light italic leading-[1.1]">
          To create bold, meaningful visual experiences that help people, brands, and stories stand out.
        </h3>
        <div className="font-body text-xl text-white/40 space-y-2 uppercase tracking-[0.1em] font-bold">
          <p>Every frame should mean something.</p>
          <p className="text-white/60">Every project should leave a mark.</p>
          <p className="text-white">Every story deserves to be told well.</p>
        </div>
      </div>
    </section>
  </motion.div>
);

const Footer = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <footer className="w-full py-20 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
        <div className="flex flex-col gap-6 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <Logo className="text-2xl" />
          <p className="font-body text-xs tracking-widest text-white/30 uppercase max-w-xs leading-relaxed">
            Stories that matter. Portraits, Editorial, Campaigns, and Film. Dayton, Ohio.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Studio</h5>
            <div className="flex flex-col gap-2 text-xs uppercase tracking-widest text-white/60">
              <button onClick={() => setCurrentPage('work')} className="hover:text-cokreate-red transition-colors text-left cursor-pointer">Work</button>
              <button onClick={() => setCurrentPage('about')} className="hover:text-cokreate-red transition-colors text-left cursor-pointer">About</button>
              <button onClick={() => setCurrentPage('contact')} className="hover:text-cokreate-red transition-colors text-left cursor-pointer">Contact</button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Social</h5>
            <div className="flex flex-col gap-2 text-xs uppercase tracking-widest text-white/60">
              <a className="hover:text-cokreate-red transition-colors" href="https://www.facebook.com/DrewRMcCoyphotography/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a className="hover:text-cokreate-red transition-colors" href="https://www.tiktok.com/@cokreatemedia" target="_blank" rel="noopener noreferrer">TikTok</a>
              <a className="hover:text-cokreate-red transition-colors" href="https://www.instagram.com/cokreatemedia/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/40">Connect</h5>
            <div className="flex flex-col gap-2 text-xs uppercase tracking-widest text-white/60">
              <a className="hover:text-cokreate-red transition-colors" href="mailto:vision@cokreatemedia.com">Mail</a>
              <a className="hover:text-cokreate-red transition-colors" href="#">Client Portal</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
        <p className="font-body text-[10px] tracking-widest text-white/20 uppercase font-bold">© 2026 CoKreate Media. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="text-white/20 hover:text-white transition-colors" href="https://www.facebook.com/DrewRMcCoyphotography/" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-4 h-4" />
          </a>
          <a className="text-white/20 hover:text-white transition-colors" href="https://www.instagram.com/cokreatemedia/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-4 h-4" />
          </a>
          <a className="text-white/20 hover:text-white transition-colors" href="https://www.tiktok.com/@cokreatemedia" target="_blank" rel="noopener noreferrer">
             <div className="w-4 h-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M21 8V11C21 11 19.3 11 17.6 10.3C16.3 9.8 15.5 9 15 8.1V16.5C15 19 13 21 10.5 21s-4.5-2-4.5-4.5 2-4.5 4.5-4.5c.6 0 1.1.1 1.6.3v2.8c-.5-.2-1-.3-1.6-.3-1 0-1.7.8-1.7 1.7s.8 1.7 1.7 1.7 1.7-.8 1.7-1.7V3h3c.1 4.3 3.4 7.7 7.7 8V8h-2.1z"/></svg>
             </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'work':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background selection:bg-cokreate-red/30 selection:text-white">
      <div className="fixed inset-0 z-[100] film-grain pointer-events-none"></div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderContent()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
