import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Berakar from './pages/Berakar';
import Bertumbuh from './pages/Bertumbuh';
import Berbuah from './pages/Berbuah';
import Profile from './pages/Profile';
import Programs from './pages/Programs';
import Media from './pages/Media';
import Collaboration from './pages/Collaboration';
import Donation from './pages/Donation';
import Contact from './pages/Contact';

type PageType = 'home' | 'berakar' | 'bertumbuh' | 'berbuah' | 'profile' | 'programs' | 'media' | 'collaboration' | 'donation' | 'contact';

interface PageMetadata {
  title: string;
  description: string;
}

const pageMetadata: Record<PageType, PageMetadata> = {
  home: {
    title: '3B Ministry – Pelayanan Media Kristen Modern',
    description: 'Memberdayakan Gereja & Generasi Melalui Kreativitas dan Media Kristen. Berakar, Bertumbuh, Berbuah dalam pelayanan.',
  },
  berakar: {
    title: 'Berakar – Kuat dalam Iman dan Firman Tuhan | 3B Ministry',
    description: 'Program Berakar: membangun fondasi iman yang kuat melalui pengajaran firman Tuhan dan pembinaan rohani yang mendalam.',
  },
  bertumbuh: {
    title: 'Bertumbuh – Berkembang dalam Kreativitas dan Pelayanan | 3B Ministry',
    description: 'Program Bertumbuh: pelatihan media dan kreativitas untuk mengembangkan talenta dalam pelayanan Kristen modern.',
  },
  berbuah: {
    title: 'Berbuah – Memberkati Bangsa Melalui Media | 3B Ministry',
    description: 'Program Berbuah: menjangkau dan memberkati lebih banyak jiwa melalui produksi konten dan media Kristen berkualitas.',
  },
  profile: {
    title: 'Profil Kami | 3B Ministry',
    description: 'Kenali lebih dalam tentang 3B Ministry, visi, misi, dan tim yang melayani dalam pelayanan media Kristen.',
  },
  programs: {
    title: 'Program Pelayanan | 3B Ministry',
    description: 'Jelajahi berbagai program pelayanan kami: produksi media, pelatihan, kolaborasi gereja, dan platform digital.',
  },
  media: {
    title: 'Media & Konten | 3B Ministry',
    description: 'Akses koleksi konten rohani, video, audio, dan media kreatif untuk membangun iman dan memberkati komunitas.',
  },
  collaboration: {
    title: 'Kolaborasi | 3B Ministry',
    description: 'Bermitra dengan 3B Ministry untuk mengembangkan pelayanan media di gereja dan komunitas Anda.',
  },
  donation: {
    title: 'Donasi | Dukung Pelayanan Media Kristen | 3B Ministry',
    description: 'Jadilah bagian dari pekerjaan Tuhan dengan mendukung pelayanan media Kristen yang memberkati banyak jiwa.',
  },
  contact: {
    title: 'Kontak Kami | 3B Ministry',
    description: 'Hubungi 3B Ministry untuk informasi lebih lanjut tentang pelayanan, kolaborasi, dan program media Kristen.',
  },
};

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const metadata = pageMetadata[currentPage];
    document.title = metadata.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    }
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'berakar':
        return <Berakar onNavigate={handleNavigate} />;
      case 'bertumbuh':
        return <Bertumbuh onNavigate={handleNavigate} />;
      case 'berbuah':
        return <Berbuah onNavigate={handleNavigate} />;
      case 'profile':
        return <Profile onNavigate={handleNavigate} />;
      case 'programs':
        return <Programs onNavigate={handleNavigate} />;
      case 'media':
        return <Media onNavigate={handleNavigate} />;
      case 'collaboration':
        return <Collaboration onNavigate={handleNavigate} />;
      case 'donation':
        return <Donation onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
