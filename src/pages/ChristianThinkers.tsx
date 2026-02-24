import { Brain, Target, BookOpen, Headphones, Users, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

export default function ChristianThinkers() {
  const missions = [
    'Membangun iman yang kokoh melalui pemahaman, bukan hanya perasaan',
    'Memperlengkapi kaum muda Kristen dengan alat berpikir kritis',
    'Menjembatani kesenjangan antara gereja dan komunitas intelektual',
    'Menunjukkan harmoni antara wahyu Tuhan dan ciptaan-Nya',
  ];

  const activities = [
    {
      title: 'Buku & Publikasi',
      description: 'Literatur berkualitas yang mengintegrasikan iman dan pemikiran rasional',
      icon: BookOpen,
    },
    {
      title: 'Podcast',
      description: 'Diskusi mendalam tentang teologi, sains, dan filsafat Kristen',
      icon: Headphones,
    },
    {
      title: 'Pengajaran',
      description: 'Seminar dan workshop untuk mengembangkan pemikiran kritis',
      icon: Users,
    },
    {
      title: 'Diskusi Komunitas',
      description: 'Forum untuk menyuarakan ide dan pandangan kekristenan',
      icon: MessageSquare,
    },
  ];

  return (
    <div className="pt-16 animate-fadeIn">
      <SEO
        title="Christian Thinkers - Where Faith Meets Reason | 3B Ministry"
        description="Komunitas bagi mereka yang percaya bahwa iman Kristen dan pemikiran rasional bukanlah musuh, tetapi sekutu yang kuat. Mengintegrasikan teologi, sains, dan filsafat untuk iman yang utuh."
      />

      <section className="relative bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIEwgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#ff7e28] p-4 rounded-2xl">
              <Brain className="h-16 w-16" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CHRISTIAN THINKERS</h1>
          <p className="text-2xl md:text-3xl font-semibold text-[#ff7e28] mb-6">
            Where Faith Meets Reason
          </p>
          <p className="text-xl text-gray-200 italic">
            "Iman yang Berpikir, Sains yang Beriman"
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="bg-gradient-to-br from-[#0d5e96]/10 to-[#ff7e28]/10 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-[#0d5e96] mb-6">Motto Kami</h2>
              <div className="space-y-4">
                <p className="text-2xl font-semibold text-[#ff7e28]">
                  AUDIO ergo CREDO
                </p>
                <p className="text-lg text-gray-700 italic">
                  (Saya mendengar maka saya percaya)
                </p>
                <div className="my-4 w-16 h-1 bg-[#ff7e28] mx-auto"></div>
                <p className="text-2xl font-semibold text-[#ff7e28]">
                  COGITO ergo CONFIDO
                </p>
                <p className="text-lg text-gray-700 italic">
                  (Saya berpikir maka saya beriman)
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-[#0d5e96] mb-6">Christian Thinkers adalah</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Komunitas bagi mereka yang percaya bahwa iman Kristen dan pemikiran rasional bukanlah musuh, tetapi sekutu yang kuat. Melalui buku, podcast, dan pengajaran, kami mengeksplorasi kebenaran alkitabiah dengan pendekatan intelektual yang sehat, mengintegrasikan teologi, sains, dan filsafat untuk iman yang utuh.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96]/5 to-[#ff7e28]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-[#ff7e28] text-white p-3 rounded-lg">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96]">Misi Kami</h2>
            </div>

            <ul className="space-y-6">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <span className="bg-[#0d5e96] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 font-bold">
                    {index + 1}
                  </span>
                  <span className="text-lg text-gray-700 leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d5e96] mb-12">
            Aktivitas Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#0d5e96] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <activity.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#0d5e96] mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bergabunglah dengan Komunitas
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Melalui komunitas ini, Anda juga dapat menyuarakan ide ataupun pandangan Anda tentang kekristenan, dan bersama menjaga arah kekristenan sesuai Firman Tuhan.
          </p>

          <a
            href="https://wa.me/6288808068106"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff7e28] hover:bg-[#e6711f] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Hubungi Kami untuk Bergabung
          </a>
        </div>
      </section>
    </div>
  );
}
