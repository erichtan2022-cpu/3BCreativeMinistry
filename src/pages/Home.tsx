import { Play, Radio, Heart, Users, Lightbulb, TrendingUp } from 'lucide-react';
import RadioPlayer from '../components/RadioPlayer';
import SEO from '../components/SEO';

interface HomeProps {
  onNavigate: (page: string) => void;
  onPlayRadio?: () => void;
}

export default function Home({ onNavigate, onPlayRadio }: HomeProps) {
  return (
    <div className="animate-fadeIn">
      <SEO
        title="3B Creative Ministry – Pelayanan Media Kristen Modern"
        description="Memberdayakan Gereja & Generasi Melalui Kreativitas dan Media Kristen. Berakar, Bertumbuh, Berbuah dalam pelayanan."
      />

      <section className="relative bg-gradient-to-br from-[#3E5F48] via-[#2a4233] to-[#1a2a1f] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A646] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A646] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slideDown">
            Memberdayakan Gereja & Generasi<br />
            Melalui Kreativitas dan Media Kristen
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-slideUp">
            Media ministry untuk memberdayakan gereja, komunitas, dan generasi muda melalui kreativitas
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn">
            <button
              onClick={onPlayRadio}
              className="bg-[#C9A646] hover:bg-[#b89438] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Play className="h-5 w-5" fill="currentColor" />
              <span>Dengarkan Radio</span>
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="bg-white text-[#3E5F48] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Program Pelayanan
            </button>
            <button
              onClick={() => onNavigate('donation')}
              className="border-2 border-white text-white hover:bg-white hover:text-[#3E5F48] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Donasi Sekarang
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#3E5F48]/5 to-[#C9A646]/5 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#3E5F48] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Radio className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E5F48] mb-2">Berakar</h3>
              <p className="text-gray-600">Kuat dalam iman dan firman Tuhan</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#3E5F48]/5 to-[#C9A646]/5 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#C9A646] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E5F48] mb-2">Bertumbuh</h3>
              <p className="text-gray-600">Berkembang dalam kreativitas dan pelayanan</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#3E5F48]/5 to-[#C9A646]/5 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#3E5F48] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#3E5F48] mb-2">Berbuah</h3>
              <p className="text-gray-600">Memberkati bangsa melalui media</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3E5F48] mb-6">
                Tentang 3B Creative Ministry
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                3B Creative Ministry adalah sebuah pelayanan media Kristen yang hadir untuk memberdayakan gereja, komunitas, dan generasi muda melalui kreativitas, teknologi, dan konten yang membangun iman.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nama "3B" diambil dari prinsip rohani: <span className="font-semibold text-[#3E5F48]">Berakar, Bertumbuh, Berbuah</span>. Kami percaya media adalah ladang pelayanan modern.
              </p>
              <button
                onClick={() => onNavigate('profile')}
                className="bg-[#C9A646] hover:bg-[#b89438] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Selengkapnya
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#C9A646] text-white p-3 rounded-lg">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3E5F48] text-lg mb-1">Visi</h3>
                    <p className="text-gray-600">Menjadi pelayanan media Kristen yang mengakar dalam Kristus, bertumbuh dalam kreativitas, dan berbuah bagi bangsa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#3E5F48] text-white p-3 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3E5F48] text-lg mb-1">Misi</h3>
                    <p className="text-gray-600">Menghadirkan konten rohani berkualitas untuk memberdayakan gereja dan generasi muda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3E5F48] mb-12">
            Program Pelayanan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Produksi Media',
                description: 'Video, audio, dan konten digital berkualitas tinggi',
                icon: Radio,
              },
              {
                title: 'Pelatihan Media',
                description: 'Workshop dan training untuk gereja dan komunitas',
                icon: Users,
              },
              {
                title: 'Kolaborasi Gereja',
                description: 'Partnership strategis dengan gereja lokal',
                icon: Heart,
              },
              {
                title: 'Platform Digital',
                description: 'Pengembangan sistem dan aplikasi pelayanan',
                icon: Lightbulb,
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#3E5F48] text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <program.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-[#3E5F48] mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('programs')}
              className="bg-[#3E5F48] hover:bg-[#2a4233] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Lihat Semua Program
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#3E5F48] to-[#2a4233] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Radio Streaming 3B Creative
          </h2>
          <p className="text-center text-gray-200 mb-12 text-lg">
            Dengarkan konten rohani, musik worship, dan pengajaran firman Tuhan
          </p>

          <div className="max-w-2xl mx-auto">
            <RadioPlayer />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E5F48] mb-6">
            Jadilah Bagian dari Pekerjaan Tuhan
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Dukungan Anda memampukan kami untuk terus melayani dan memberkati lebih banyak jiwa melalui media Kristen
          </p>

          <button
            onClick={() => onNavigate('donation')}
            className="bg-[#C9A646] hover:bg-[#b89438] text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Donasi Sekarang
          </button>
        </div>
      </section>
    </div>
  );
}
