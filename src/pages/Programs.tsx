import { Radio, Users, Handshake, Smartphone, Video, BookOpen, Headphones, Globe } from 'lucide-react';
import SEO from '../components/SEO';

interface ProgramsProps {
  onNavigate: (page: string) => void;
}

export default function Programs({ onNavigate }: ProgramsProps) {
  const programs = [
    {
      title: 'Produksi Media Kristen',
      description: 'Layanan produksi konten audio-visual berkualitas tinggi untuk gereja, komunitas, dan pelayanan Kristen',
      icon: Video,
      features: [
        'Video dokumentasi kegiatan gereja dan pelayanan',
        'Produksi video worship dan musik rohani',
        'Konten media sosial untuk gereja',
        'Live streaming ibadah dan acara rohani',
        'Video teaching dan pengajaran firman Tuhan',
      ],
    },
    {
      title: 'Pelatihan Media & Kreativitas',
      description: 'Workshop dan training komprehensif untuk memperlengkapi tim media gereja dan komunitas',
      icon: BookOpen,
      features: [
        'Workshop videografi dan fotografi gereja',
        'Pelatihan editing video dan audio',
        'Training social media ministry',
        'Kursus desain grafis untuk konten rohani',
        'Pelatihan live streaming untuk gereja',
      ],
    },
    {
      title: 'Kolaborasi Gereja',
      description: 'Partnership strategis dengan gereja lokal untuk pengembangan media dan teknologi pelayanan',
      icon: Handshake,
      features: [
        'Konsultasi strategi media ministry',
        'Pendampingan pembangunan tim media gereja',
        'Kolaborasi konten rohani berkualitas',
        'Sharing best practices pelayanan media',
        'Networking antar pelayan media Kristen',
      ],
    },
    {
      title: 'Pengembangan Platform Digital',
      description: 'Solusi teknologi dan aplikasi digital untuk mendukung pelayanan gereja di era modern',
      icon: Smartphone,
      features: [
        'Pengembangan website gereja',
        'Aplikasi mobile untuk jemaat',
        'Sistem manajemen jemaat digital',
        'Platform pembelajaran rohani online',
        'Integrasi sistem donasi digital',
      ],
    },
  ];

  const additionalServices = [
    {
      title: 'Podcast Ministry',
      description: 'Produksi dan distribusi podcast rohani',
      icon: Headphones,
    },
    {
      title: 'Radio Streaming',
      description: 'Layanan radio online 24/7',
      icon: Radio,
    },
    {
      title: 'Community Building',
      description: 'Pembangunan komunitas media Kristen',
      icon: Users,
    },
    {
      title: 'Digital Outreach',
      description: 'Strategi penjangkauan digital',
      icon: Globe,
    },
  ];

  return (
    <div className="pt-16 animate-fadeIn">
      <SEO
        title="Program Pelayanan - 3B Ministry"
        description="Program pelayanan media Kristen: produksi media, pelatihan kreativitas, kolaborasi gereja, dan pengembangan platform digital untuk memberdayakan pelayanan Anda."
      />

      <section className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Program Pelayanan</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Memperlengkapi gereja dan komunitas dengan keterampilan media dan teknologi untuk pelayanan yang lebih efektif
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white p-12 rounded-2xl shadow-xl">
                    <program.icon className="h-16 w-16 mb-6" />
                    <h2 className="text-3xl font-bold mb-4">{program.title}</h2>
                    <p className="text-gray-200 text-lg">{program.description}</p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-semibold text-[#0d5e96] mb-6">Layanan Meliputi:</h3>
                    <ul className="space-y-4">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="bg-[#ff7e28] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 text-sm font-semibold">
                            ✓
                          </span>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96]/5 to-[#ff7e28]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d5e96] mb-12">
            Layanan Tambahan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-[#0d5e96] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#0d5e96] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tertarik untuk Berkolaborasi?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Mari bersama-sama membangun pelayanan media yang memberkati dan membawa dampak bagi Kerajaan Allah
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-[#ff7e28] hover:bg-[#e6711f] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Hubungi Kami untuk Kerjasama
              </button>
              <button
                onClick={() => onNavigate('collaboration')}
                className="bg-white text-[#0d5e96] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Info Kolaborasi
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6">
              Proses Kerjasama
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Langkah mudah untuk memulai kolaborasi dengan kami
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Konsultasi', desc: 'Diskusi kebutuhan' },
                { step: '2', title: 'Proposal', desc: 'Penawaran solusi' },
                { step: '3', title: 'Implementasi', desc: 'Eksekusi program' },
                { step: '4', title: 'Evaluasi', desc: 'Review & improve' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-[#ff7e28] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-[#0d5e96] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#ff7e28]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
