import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="text-white">Sowjanya</span>
              <span className="text-amber-500"> Motupalli</span>
            </h3>
            <p className="text-gray-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Senior Interior Designer specializing in creating elegant and functional spaces
              that inspire and delight.
            </p>
          </div>

          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-lg mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contact
            </h4>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <li>Hyderabad, India</li>
              <li>sowjanyamotupalli7@gmail.com</li>
              <li>+91 99084 44559</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © {currentYear} Sowjanya Motupalli. Made with <Heart className="text-amber-500 fill-amber-500" size={16} /> by Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
}
