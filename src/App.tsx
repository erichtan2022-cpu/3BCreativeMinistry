import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Jobs from './pages/Jobs';
import Employers from './pages/Employers';
import Contact from './pages/Contact';

type PageType = 'home' | 'about' | 'services' | 'jobs' | 'employers' | 'contact';

interface PageMetadata {
  title: string;
  description: string;
}

const pageMetadata: Record<PageType, PageMetadata> = {
  home: {
    title: 'PT Solusi Global Karier | International Recruitment & Global Career Solutions Indonesia',
    description: 'Leading Indonesian overseas recruitment agency connecting skilled professionals with global career opportunities. Comprehensive training, placement services, and workforce solutions for international jobs.',
  },
  about: {
    title: 'About Us | PT Solusi Global Karier - Your Partner in Global Success',
    description: 'Learn about PT Solusi Global Karier, Indonesia\'s trusted international recruitment agency. 15+ years of experience placing skilled Indonesian professionals in global careers.',
  },
  services: {
    title: 'Our Services | Talent Recruitment, Training & Global Placement',
    description: 'Comprehensive international recruitment services including talent sourcing, workforce training programs, visa processing, and global placement support for Indonesian professionals.',
  },
  jobs: {
    title: 'Job Openings | International Career Opportunities for Indonesians',
    description: 'Browse current international job opportunities for Indonesian professionals. Find jobs abroad in Japan, Singapore, UAE, Malaysia, Saudi Arabia and more countries.',
  },
  employers: {
    title: 'For Employers | Hire Top Indonesian Talent & Skilled Workforce',
    description: 'International companies: access Indonesia\'s skilled workforce. Professional recruitment, training, and placement services for reliable Indonesian employees.',
  },
  contact: {
    title: 'Contact Us | PT Solusi Global Karier - Get Started Today',
    description: 'Contact PT Solusi Global Karier for international recruitment services. Jakarta-based office serving Indonesian job seekers and international employers worldwide.',
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
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'jobs':
        return <Jobs />;
      case 'employers':
        return <Employers />;
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
    </div>
  );
}

export default App;
