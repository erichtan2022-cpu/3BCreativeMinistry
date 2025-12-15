import { Handshake, Target, Users, TrendingUp, CheckCircle, Heart } from 'lucide-react';
import SEO from '../components/SEO';

interface CollaborationProps {
  onNavigate: (page: string) => void;
}

export default function Collaboration({ onNavigate }: CollaborationProps) {
  const benefits = [
    {
      title: 'Peningkatan Kualitas Media',
      description: 'Tim profesional yang membantu meningkatkan kualitas konten media gereja',
      icon: TrendingUp,
    },
    {
      title: 'Pelatihan & Mentoring',
      description: 'Pendampingan berkelanjutan untuk tim media gereja Anda',
      icon: Users,
    },
    {
      title: 'Akses Teknologi',
      description: 'Penggunaan peralatan dan teknologi media terkini',
      icon: Target,
    },
    {
      title: 'Networking',
      description: 'Koneksi dengan komunitas pelayan media Kristen lainnya',
      icon: Handshake,
    },
    {
      title: 'Dukungan Strategis',
      description: 'Konsultasi strategi media ministry yang efektif',
      icon: CheckCircle,
    },
    {
      title: 'Dampak Lebih Besar',
      description: 'Jangkauan pelayanan yang lebih luas dan berdampak',
      icon: Heart,
    },
  ];

  const partnershipTypes = [
    {
      title: 'Kemitraan Produksi',
      description: 'Kolaborasi dalam produksi konten media rohani berkualitas tinggi',
      features: [
        'Co-production video dan audio content',
        'Sharing resources dan equipment',
        'Joint creative development',
        'Distribution partnership',
      ],
    },
    {
      title: 'Kemitraan Pelatihan',
      description: 'Program pelatihan dan capacity building untuk tim media gereja',
      features: [
        'Workshop reguler untuk tim media',
        'Mentoring one-on-one',
        'Training on-site di gereja',
        'Online learning resources',
      ],
    },
    {
      title: 'Kemitraan Strategis',
      description: 'Partnership jangka panjang untuk pengembangan media ministry',
      features: [
        'Konsultasi strategi media reguler',
        'Roadmap pengembangan media ministry',
        'Evaluasi dan improvement berkelanjutan',
        'Access to exclusive resources',
      ],
    },
    {
      title: 'Kemitraan Teknologi',
      description: 'Kolaborasi dalam pengembangan solusi teknologi untuk gereja',
      features: [
        'Pengembangan aplikasi dan platform',
        'Sistem manajemen konten',
        'Live streaming infrastructure',
        'Technical support dan maintenance',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Pdt. Michael Santoso',
      church: 'GKI Surya Kasih',
      quote: 'Kemitraan dengan 3B Ministry telah mentransformasi pelayanan media kami. Tim yang profesional dan berpengalaman.',
    },
    {
      name: 'Sarah Wijaya',
      church: 'GBI Keluarga Allah',
      quote: 'Pelatihan yang diberikan sangat praktis dan applicable. Tim media kami kini jauh lebih percaya diri dan kreatif.',
    },
  ];

  return (
    <div className="pt-16 animate-fadeIn">
      <SEO
        title="Kolaborasi - 3B Ministry"
        description="Mari berkolaborasi dengan 3B Ministry untuk membangun pelayanan media yang lebih efektif. Partnership strategis untuk gereja dan komunitas Kristen."
      />

      <section className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kolaborasi & Partnership</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Bersama kita lebih kuat. Mari bermitra untuk membawa dampak yang lebih besar bagi Kerajaan Allah
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6">
              Mengapa Berkolaborasi dengan Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnership dengan 3B Ministry memberikan nilai tambah yang signifikan untuk pelayanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#0d5e96] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#0d5e96] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96]/5 to-[#ff7e28]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6">
              Bentuk Kemitraan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai bentuk kolaborasi yang dapat disesuaikan dengan kebutuhan pelayanan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-[#0d5e96] mb-4">
                  {partnership.title}
                </h3>
                <p className="text-gray-600 mb-6">{partnership.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-[#0d5e96]">Meliputi:</h4>
                  <ul className="space-y-2">
                    {partnership.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6">
              Apa Kata Mitra Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white rounded-2xl p-8 shadow-lg"
              >
                <div className="mb-6">
                  <svg
                    className="h-8 w-8 text-[#ff7e28]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>
                <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-200 text-sm">{testimonial.church}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6">
              Proses Kolaborasi
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Langkah mudah untuk memulai kemitraan dengan kami
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: '1', title: 'Kontak Awal', desc: 'Hubungi kami' },
                { step: '2', title: 'Konsultasi', desc: 'Diskusi kebutuhan' },
                { step: '3', title: 'Proposal', desc: 'Rencana kerjasama' },
                { step: '4', title: 'Agreement', desc: 'MoU & kontrak' },
                { step: '5', title: 'Pelaksanaan', desc: 'Mulai bermitra' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-[#ff7e28] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-[#0d5e96] mb-1 text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#ff7e28]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap untuk Berkolaborasi?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Mari bersama-sama membangun pelayanan media yang membawa dampak kekal bagi Kerajaan Allah
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#ff7e28] hover:bg-[#e6711f] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ajukan Kerjasama
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="bg-white text-[#0d5e96] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Lihat Program Kami
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
