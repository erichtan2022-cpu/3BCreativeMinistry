import { Target, Flag, Award, Users } from 'lucide-react';
import SEO from '../components/SEO';

export default function Profile() {
  const founders = [
    {
      name: 'Pdt. DR. Philip S. Buulolo, M.A., M.Th',
      image: 'https://i.imgur.com/iHcAotC.jpeg',
    },
    {
      name: 'Rev. DR. Joseph Kuntadi, S.E., M.Th',
      image: 'https://i.imgur.com/Ot4IN8k.jpeg',
    },
    {
      name: 'Pnt. Yusmanto Arywiguna, S.M.',
      image: 'https://i.imgur.com/1lYKHm3.jpeg',
    },
  ];

  const missions = [
    'Menghadirkan konten media Kristen yang relevan, inspiratif, dan transformatif bagi gereja dan masyarakat',
    'Memperlengkapi gereja lokal dengan keterampilan media dan teknologi melalui pelatihan dan pendampingan',
    'Membangun ekosistem kolaborasi antara pelayan media, gereja, dan komunitas Kristen',
    'Mengembangkan platform digital untuk memperluas jangkauan Injil di era digital',
    'Mendorong generasi muda untuk terlibat aktif dalam pelayanan media Kristen dengan kreativitas',
    'Menciptakan dampak sosial melalui karya media yang membawa nilai-nilai Kerajaan Allah',
  ];

  const values = [
    {
      title: 'Berkat',
      description: 'Menjadi saluran berkat bagi banyak orang',
      icon: Award,
    },
    {
      title: 'Integritas',
      description: 'Setia pada panggilan dan nilai-nilai kebenaran',
      icon: Target,
    },
    {
      title: 'Kreativitas',
      description: 'Inovatif dalam menyampaikan pesan Injil',
      icon: Flag,
    },
    {
      title: 'Excellence',
      description: 'Menghadirkan karya terbaik untuk kemuliaan Tuhan',
      icon: Award,
    },
    {
      title: 'Kolaborasi',
      description: 'Bekerja sama membangun tubuh Kristus',
      icon: Users,
    },
  ];

  return (
    <div className="pt-16 animate-fadeIn">
      <SEO
        title="Profil - 3B Ministry"
        description="Mengenal lebih dalam tentang 3B Ministry: pelayanan media Kristen yang berakar, bertumbuh, dan berbuah untuk memberdayakan gereja dan generasi muda."
      />

      <section className="relative bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIEwgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Profil 3B Ministry</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Berakar, Bertumbuh, Berbuah dalam pelayanan media Kristen
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-8 text-center">
              Tentang Kami
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold text-[#0d5e96]">3B Ministry</span> adalah sebuah pelayanan media Kristen yang hadir untuk memberdayakan gereja, komunitas, dan generasi muda melalui kreativitas, teknologi, dan konten yang membangun iman.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nama <span className="font-semibold text-[#ff7e28]">"3B"</span> diambil dari prinsip rohani: <span className="font-semibold">Berakar, Bertumbuh, Berbuah</span>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Kami percaya media adalah ladang pelayanan modern. Melalui audio-visual, pendidikan digital, dan kreativitas kami dipanggil menjadi garam dan terang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96]/5 to-[#ff7e28]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#ff7e28] text-white p-3 rounded-lg">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-[#0d5e96]">Visi</h2>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed italic">
                "Menjadi pelayanan media Kristen yang mengakar dalam Kristus, bertumbuh dalam kreativitas, dan berbuah bagi bangsa."
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-[#0d5e96] text-white p-3 rounded-lg">
                  <Flag className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-[#0d5e96]">Misi</h2>
              </div>

              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="bg-[#ff7e28] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d5e96] mb-12">
            Nilai Inti
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#0d5e96] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0d5e96] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#ff7e28] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff7e28] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pendiri
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{founder.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6">
            Mari Bergabung dalam Pelayanan
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bersama kita dapat membawa dampak yang lebih besar bagi Kerajaan Allah
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6288808068106"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff7e28] hover:bg-[#e6711f] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Hubungi Kami
            </a>
            <a
              href="#"
              className="bg-[#0d5e96] hover:bg-[#0a4a72] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Lihat Program
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
