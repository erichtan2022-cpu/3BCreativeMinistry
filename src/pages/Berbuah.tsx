import { Heart, Users, Award, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

export default function Berbuah() {
  const gallery = [
    'https://i.imgur.com/DcWsBt3.jpeg',
    'https://i.imgur.com/whuEJXT.jpeg',
    'https://i.imgur.com/DndXTHk.jpeg',
    'https://i.imgur.com/ZXsbmiD.jpeg',
    'https://i.imgur.com/a2MN4zs.jpeg',
    'https://i.imgur.com/fPZixLQ.jpeg',
  ];

  const testimonies = [
    {
      name: 'Budi Santoso',
      role: 'Pemimpin Komunitas',
      content: 'Melalui 3B Creative Ministry, saya menemukan panggilan hidup yang sejati. Program pembelajaran dan komunitas yang solid membuat saya tumbuh tidak hanya spiritually tetapi juga profesionally.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg'
    },
    {
      name: 'Siti Nur Azizah',
      role: 'Content Creator',
      content: 'Pelayanan ini mengubah perspektif saya tentang kreativitas dalam konteks iman. Saya belajar bahwa setiap karya kreatif bisa menjadi alat untuk melayani dan menyaksikan kebaikan Allah.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      name: 'Ahmad Rahman',
      role: 'Pastor & Mentor',
      content: 'Kolaborasi dengan 3B Creative Ministry membuka pintu baru dalam pelayanan gereja kami. Program dan materi yang mereka sediakan sangat relevan dan impactful untuk generasi muda.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    }
  ];

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Berbuah – Kesaksian & Pelayanan | 3B Creative Ministry"
        description="Kisah nyata tentang transformasi hidup, pelayanan yang berdampak, dan bagaimana Anda bisa berkontribusi dalam misi kami."
      />

      <section className="relative bg-gradient-to-br from-[#0d5e96] via-[#0a4a72] to-[#073651] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slideDown">
            Berbuah
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto animate-slideUp">
            Kesaksian & Pelayanan
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fadeIn">
            Kisah nyata transformasi hidup dan dampak pelayanan yang mengubah dunia
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6 text-center">
              Tentang Program Berbuah
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
              Program Berbuah adalah kesempatan untuk melihat hasil nyata dari pembelajaran dan komunitas yang telah Anda bangun. Ini bukan hanya tentang kesaksian pribadi, tetapi tentang bagaimana setiap orang dapat menjadi instrumen perubahan dalam masyarakat.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
              Kami percaya bahwa buah sejati dari pertumbuhan spiritual adalah pelayanan yang berkualitas dan berdampak. Melalui berbagai bentuk pelayanan, dari mentoring hingga proyek sosial, setiap anggota komunitas kami berkontribusi untuk membuat perbedaan nyata.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Donasi Anda tidak hanya mendukung program dan materi pembelajaran, tetapi juga memungkinkan kami untuk menjangkau lebih banyak orang yang membutuhkan transformasi spiritual dan pemberdayaan hidup yang sejati.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-12 text-center">
            Galeri Kesaksian & Pelayanan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={`Kesaksian dan Pelayanan ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Momen Pelayanan {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-12 text-center">
            Kesaksian Komunitas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonies.map((testimony, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimony.image}
                    alt={testimony.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-[#0d5e96]">{testimony.name}</h3>
                    <p className="text-sm text-gray-600">{testimony.role}</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#ff7e28]">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimony.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#ff7e28] via-[#e6711f] to-[#cc6620] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Bentuk-Bentuk Pelayanan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: 'Mentoring & Konseling',
                description: 'Program bimbingan personal untuk membantu orang lain tumbuh dalam iman dan menghadapi tantangan hidup dengan kuat.'
              },
              {
                icon: Users,
                title: 'Kelompok Studi Alkitab',
                description: 'Memimpin diskusi Alkitab yang mendalam untuk memperkuat pemahaman iman dan aplikasinya dalam kehidupan sehari-hari.'
              },
              {
                icon: TrendingUp,
                title: 'Pemberdayaan Sosial',
                description: 'Proyek-proyek yang memberdayakan masyarakat kurang mampu melalui pelatihan keterampilan dan akses sumber daya.'
              },
              {
                icon: Award,
                title: 'Produksi Konten',
                description: 'Membuat materi edukatif dan inspiratif dalam berbagai format untuk menyebarkan nilai-nilai positif dan pembelajaran.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <service.icon className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-12 text-center">
            Bagaimana Donasi Anda Berdampak
          </h2>
          <div className="space-y-8">
            {[
              {
                percentage: '30%',
                title: 'Pengembangan Materi Pembelajaran',
                description: 'Pembuatan konten berkualitas tinggi, video edukatif, dan sumber daya digital untuk mendukung program pembelajaran.'
              },
              {
                percentage: '25%',
                title: 'Beasiswa & Bantuan Peserta',
                description: 'Membantu peserta yang memiliki keterbatasan finansial agar dapat mengakses program pembelajaran berkualitas.'
              },
              {
                percentage: '20%',
                title: 'Infrastruktur & Teknologi',
                description: 'Investasi dalam platform teknologi, server, dan infrastruktur untuk memastikan program dapat diakses dengan optimal.'
              },
              {
                percentage: '15%',
                title: 'Program Pelayanan Sosial',
                description: 'Mendukung proyek pemberdayaan masyarakat, mentoring, dan berbagai inisiatif sosial yang berdampak nyata.'
              },
              {
                percentage: '10%',
                title: 'Operasional & Tim',
                description: 'Mendukung tim profesional yang mengelola dan mengembangkan program 3B Creative Ministry dengan dedikasi penuh.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-xl bg-gradient-to-r from-[#ff7e28]/5 to-[#0d5e96]/5 border border-gray-200 hover:border-[#ff7e28] transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#ff7e28] text-white font-bold text-xl">
                    {item.percentage}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#0d5e96] mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96] to-[#0a4a72]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jadilah Bagian dari Perubahan
          </h2>
          <p className="text-lg mb-8 text-gray-300 leading-relaxed">
            Setiap donasi, sekecil apapun, memiliki dampak nyata dalam kehidupan ribuan orang. Bersama-sama kita membangun komunitas yang kuat, pembelajaran yang bermakna, dan pelayanan yang mengubah dunia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#ff7e28] hover:bg-[#e6711f] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Berdonasi Sekarang
            </button>
            <button className="border-2 border-[#ff7e28] text-[#ff7e28] hover:bg-[#ff7e28] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Jadilah Relawan
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-12 text-center">
            Statistik Dampak
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5K+', label: 'Peserta Aktif' },
              { number: '150+', label: 'Mentor & Tutor' },
              { number: '50+', label: 'Program Pelayanan' },
              { number: '100K+', label: 'Kehidupan Tersentuh' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-[#ff7e28]/10 to-[#0d5e96]/10 border border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-[#ff7e28] mb-2">{stat.number}</div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
