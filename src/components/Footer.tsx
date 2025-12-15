import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://i.imgur.com/Tk5H4Is.jpeg"
              alt="3B Ministry Logo"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm">
              Berakar, Bertumbuh, Berbuah dalam pelayanan media Kristen
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#28763a]">Menu</h3>
            <ul className="space-y-2">
              {['Beranda', 'Profil', 'Program', 'Media'].map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(['home', 'profile', 'programs', 'media'][index])}
                    className="text-gray-400 hover:text-[#28763a] transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#28763a]">Pelayanan</h3>
            <ul className="space-y-2">
              {['Kolaborasi', 'Donasi', 'Kontak'].map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(['collaboration', 'donation', 'contact'][index])}
                    className="text-gray-400 hover:text-[#28763a] transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#28763a]">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@3bcreative.org</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+62 811-8331-111</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} 3B Ministry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
