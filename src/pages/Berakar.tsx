import { BookOpen, Heart, Zap } from 'lucide-react';
import SEO from '../components/SEO';

export default function Berakar() {
  const gallery = [
    'https://i.imgur.com/0SK037z.jpeg',
    'https://i.imgur.com/MZQ1SPD.jpeg',
    'https://i.imgur.com/ERS8u2u.jpeg',
    'https://i.imgur.com/IbfbJBN.jpeg',
    'https://i.imgur.com/g2L4FQ7.jpeg',
    'https://i.imgur.com/U67G124.jpeg',
  ];

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Berakar – Renungan & Dasar Iman | 3B Creative Ministry"
        description="Program Renungan dan Dasar Iman untuk memperkuat fondasi iman Anda dalam Kristus melalui pembinaan rohani yang mendalam."
      />

      <section className="relative bg-gradient-to-br from-[#0d5e96] via-[#0a4a72] to-[#073651] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff7e28] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff7e28] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slideDown">
            Berakar
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-slideUp">
            Renungan & Dasar Iman
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fadeIn">
            Memperkuat fondasi iman Anda dalam Kristus melalui pembinaan rohani yang mendalam dan relevan
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0d5e96]/5 to-[#ff7e28]/5 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#0d5e96] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#0d5e96] text-center mb-3">Firman Tuhan</h3>
              <p className="text-gray-600 text-center">Mendalami Alkitab dengan pemahaman yang tajam dan aplikasi yang praktis untuk kehidupan sehari-hari</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0d5e96]/5 to-[#ff7e28]/5 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#ff7e28] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#0d5e96] text-center mb-3">Kehidupan Rohani</h3>
              <p className="text-gray-600 text-center">Membina hubungan yang lebih intim dengan Tuhan melalui doa, penyembahan, dan komitmen alkitabiah</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0d5e96]/5 to-[#ff7e28]/5 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#0d5e96] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#0d5e96] text-center mb-3">Transformasi Hidup</h3>
              <p className="text-gray-600 text-center">Mengalami perubahan sejati dalam karakter dan tindakan melalui kekuatan Roh Kudus</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6 text-center">
              Tentang Program Berakar
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
              Program Berakar adalah inisiatif pembinaan rohani yang dirancang untuk membantu jemaat mengembangkan fondasi iman yang kuat dalam Kristus. Melalui renungan Alkitab yang mendalam, pembelajaran doktrin Kristen, dan aplikasi praktis, kami membimbing Anda dalam perjalanan spiritual yang berkelanjutan.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Kami percaya bahwa seorang Kristen yang berakar dengan baik akan mampu bertumbuh dengan sehat dan menghasilkan buah rohani yang berlimpah. Oleh karena itu, program ini mencakup pembelajaran sistematis, diskusi kelompok, dan mentoring pribadi untuk memastikan setiap peserta mendapatkan perhatian yang tepat.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-12 text-center">
            Galeri Kegiatan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={`Kegiatan Renungan ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Kegiatan Pembinaan Rohani {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-12 text-center">
            Materi Pembelajaran
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Fondasi Alkitab',
                description: 'Memahami struktur, pesan, dan relevansi Alkitab dalam kehidupan modern',
                topics: ['Pengenalan Alkitab', 'Hermeneutika Dasar', 'Studi Kitab Suci']
              },
              {
                title: 'Doktrin Kristen',
                description: 'Mempelajari ajaran-ajaran inti Kekristenan dan implikasinya dalam kehidupan',
                topics: ['Trinitass', 'Keselamatan', 'Kehidupan Kekal']
              },
              {
                title: 'Kehidupan Doa',
                description: 'Mengembangkan disiplin dan kedalaman dalam komunikasi dengan Tuhan',
                topics: ['Doa Syukur', 'Doa Permohonan', 'Doa Syafaat']
              },
              {
                title: 'Karakter Kristus',
                description: 'Membentuk karakter yang sesuai dengan teladan Yesus Kristus',
                topics: ['Kesederhanaan', 'Kerendahan Hati', 'Kasih']
              }
            ].map((module, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-[#0d5e96] mb-3">{module.title}</h3>
                <p className="text-gray-600 mb-6">{module.description}</p>
                <div className="space-y-2">
                  {module.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#ff7e28] rounded-full"></div>
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bergabunglah dengan Keluarga Berakar
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Mulai perjalanan spiritual Anda hari ini dan alami transformasi iman yang mendalam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#ff7e28] hover:bg-[#e6711f] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Daftar Sekarang
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#0d5e96] px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
