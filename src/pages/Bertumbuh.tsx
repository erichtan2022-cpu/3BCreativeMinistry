import { Users, BookMarked, Zap, Target } from 'lucide-react';
import SEO from '../components/SEO';

export default function Bertumbuh() {
  const gallery = [
    'https://i.imgur.com/Ce8T1Xb.jpeg',
    'https://i.imgur.com/g2F3QII.jpeg',
    'https://i.imgur.com/oB3bOQZ.jpeg',
    'https://i.imgur.com/ytclxre.jpeg',
    'https://i.imgur.com/JPYmnvj.jpeg',
    'https://i.imgur.com/BI1ttmf.jpeg',
  ];

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Bertumbuh – Materi Pembelajaran & Komunitas | 3B Ministry"
        description="Program Materi Pembelajaran dan Komunitas untuk pengembangan diri dan pertumbuhan bersama dalam lingkungan yang sehat dan suportif."
      />

      <section className="relative bg-gradient-to-br from-[#ff7e28] via-[#e6711f] to-[#cc6620] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slideDown">
            Bertumbuh
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto animate-slideUp">
            Materi Pembelajaran & Komunitas
          </p>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto animate-fadeIn">
            Berkembang melalui pembelajaran berkelanjutan dan komunitas yang saling mendukung
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#ff7e28]/5 to-[#0d5e96]/5 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#ff7e28] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookMarked className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#0d5e96] text-center mb-3">Materi Berkualitas</h3>
              <p className="text-gray-600 text-center">Pembelajaran sistematis dan terstruktur yang dirancang untuk meningkatkan pemahaman dan keterampilan secara progresif</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#ff7e28]/5 to-[#0d5e96]/5 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#0d5e96] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#0d5e96] text-center mb-3">Komunitas Suportif</h3>
              <p className="text-gray-600 text-center">Bergabung dengan komunitas yang saling mendukung, berbagi pengalaman, dan tumbuh bersama dalam perjalanan spiritual</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6 text-center">
              Tentang Program Bertumbuh
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
              Program Bertumbuh adalah platform komprehensif untuk pengembangan diri dan pembelajaran berkelanjutan. Kami menyediakan kurikulum yang dirancang khusus untuk memenuhi kebutuhan spiritual dan profesional peserta dalam konteks pelayanan Kristen modern.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
              Selain materi pembelajaran berkualitas tinggi, kami menciptakan komunitas yang inklusif di mana setiap anggota dapat berbagi pengalaman, saling mendukung, dan tumbuh bersama. Melalui diskusi kelompok, mentoring, dan proyek kolaboratif, peserta mengembangkan tidak hanya pengetahuan tetapi juga hubungan yang bermakna.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Kami percaya bahwa pertumbuhan sejati terjadi ketika individu belajar tidak hanya dari materi, tetapi juga dari pengalaman dan perspektif satu sama lain dalam lingkungan yang aman dan mendukung.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-12 text-center">
            Galeri Pembelajaran & Komunitas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={`Komunitas dan Pembelajaran ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Sesi Pembelajaran & Komunitas {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-12 text-center">
            Program Pembelajaran
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Kelas Online Interaktif',
                description: 'Pembelajaran fleksibel dengan materi video, slide, dan diskusi langsung yang dapat diakses kapan saja',
                features: ['Video berkualitas HD', 'Live session mingguan', 'Forum diskusi aktif']
              },
              {
                title: 'Workshop & Seminar',
                description: 'Pelatihan intensif dengan para ahli di bidang rohani, kreativitas, dan media Kristen',
                features: ['Praktik langsung', 'Mentor berpengalaman', 'Sertifikat resmi']
              },
              {
                title: 'Komunitas Belajar',
                description: 'Grup diskusi berdasarkan minat dan kebutuhan untuk berbagi pembelajaran dan pengalaman',
                features: ['Grup studi', 'Mentoring peer', 'Networking']
              },
              {
                title: 'Perpustakaan Digital',
                description: 'Akses ribuan sumber daya pembelajaran termasuk e-book, jurnal, dan artikel pilihan',
                features: ['E-book gratis', 'Jurnal mingguan', 'Podcast']
              }
            ].map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-[#0d5e96] mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#ff7e28] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96] to-[#0a4a72]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Mengapa Bergabung?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Fokus & Terstruktur',
                description: 'Kurikulum yang jelas dengan tujuan pembelajaran yang terukur'
              },
              {
                icon: Users,
                title: 'Komunitas Solid',
                description: 'Jaringan peserta yang saling mendukung dan berbagi visi yang sama'
              },
              {
                icon: Zap,
                title: 'Berkembang Cepat',
                description: 'Metode pembelajaran terbukti efektif untuk percepatan pertumbuhan'
              },
              {
                icon: BookMarked,
                title: 'Materi Lengkap',
                description: 'Sumber daya pembelajaran yang komprehensif dan selalu diperbarui'
              }
            ].map((item, index) => (
              <div key={index} className="text-center text-white">
                <div className="bg-[#ff7e28] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6">
            Mulai Perjalanan Pertumbuhan Anda
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan peserta yang telah merasakan transformasi melalui pembelajaran dan komunitas kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#ff7e28] hover:bg-[#e6711f] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Daftar Program
            </button>
            <button className="border-2 border-[#0d5e96] text-[#0d5e96] hover:bg-[#0d5e96] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Lihat Kurikulum
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
