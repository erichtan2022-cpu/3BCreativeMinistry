import { Calendar, MapPin, User, Radio } from 'lucide-react';
import SEO from '../components/SEO';

export default function Aktivitas() {
  const activities = [
    {
      id: 1,
      image: 'https://i.imgur.com/klNiHpt.jpeg',
      title: 'Tentang Natal Yang Hidup: Dari Perayaan menuju Kesaksian',
      date: 'Kamis, 18 Desember 2025',
      time: '',
      location: 'Radio Heartline FM',
      speaker: 'Ps. Bambang Irwanto, S.Th',
      type: 'Program Siaran Radio',
      description: 'Diskusi mendalam tentang makna Natal yang sesungguhnya dan bagaimana mengubah perayaan menjadi kesaksian hidup yang nyata.',
    },
    {
      id: 2,
      image: 'https://i.imgur.com/BBMCIek.jpeg',
      title: 'Christmas Celebration',
      date: 'Sabtu, 21 Desember 2025',
      time: '16:00 WIB',
      location: 'ElShadai Room Lt. 2, Mall Metropolis, Tangerang',
      speaker: 'Ps. Bambang Irwanto, S.Th',
      type: 'Perayaan Natal',
      description: 'Perayaan Natal penuh sukacita dengan ibadah, pujian, dan pesan firman Tuhan yang membangun iman.',
    },
    {
      id: 3,
      image: 'https://i.imgur.com/ojjYjaO.jpeg',
      title: 'Natal Gabungan CWCC 2025 - Bercahaya Di Tengah Dunia Yang Gelap',
      date: 'Jumat, 18 Desember 2025',
      time: '18:00 WIB',
      location: 'Radio Heartline',
      speaker: 'Pdt. Dr. Philip S. Buulolo, M.Th & Pdm. Mia Ayu Lestari, S.Th',
      type: 'Special Talkshow Radio',
      description: 'Natal Gabungan CWCC 2025 dengan tema inspiratif tentang menjadi terang di tengah kegelapan dunia. Special talkshow bersama gembala sidang.',
    },
  ];

  return (
    <div className="pt-16 animate-fadeIn">
      <SEO
        title="Aktivitas - 3B Ministry"
        description="Jelajahi kegiatan dan acara terbaru dari 3B Ministry. Bergabunglah dengan program, perayaan, dan talkshow rohani yang menginspirasi."
      />

      <section className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Aktivitas & Kegiatan</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ikuti berbagai kegiatan dan acara rohani yang kami selenggarakan untuk membangun iman dan komunitas
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#ff7e28] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {activity.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0d5e96] mb-4">
                      {activity.title}
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {activity.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start space-x-3">
                        <Calendar className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-700 font-semibold">{activity.date}</p>
                          {activity.time && (
                            <p className="text-gray-600 text-sm">{activity.time}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{activity.location}</p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <User className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-gray-600 text-sm">Pembicara:</p>
                          <p className="text-gray-700 font-semibold">{activity.speaker}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="bg-[#ff7e28] hover:bg-[#e6711f] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                        Daftar Sekarang
                      </button>
                      <button className="border-2 border-[#0d5e96] text-[#0d5e96] hover:bg-[#0d5e96] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                        Info Selengkapnya
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] rounded-2xl p-12 text-white text-center">
            <Radio className="h-16 w-16 mx-auto mb-6 text-[#ff7e28]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Jangan Lewatkan Kegiatan Kami
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Ikuti terus update aktivitas dan acara terbaru melalui media sosial atau hubungi kami untuk informasi lebih lanjut
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/628118331111"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff7e28] hover:bg-[#e6711f] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Hubungi via WhatsApp
              </a>
              <button className="bg-white text-[#0d5e96] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Lihat Program Lainnya
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#ff7e28]/5 to-[#0d5e96]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d5e96] mb-12">
            Mengapa Ikut Aktivitas Kami?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pembinaan Rohani',
                description: 'Memperdalam iman melalui pengajaran firman Tuhan yang berkualitas',
              },
              {
                title: 'Komunitas Solid',
                description: 'Bertemu dan berjejaring dengan komunitas orang percaya yang seiman',
              },
              {
                title: 'Inspirasi & Motivasi',
                description: 'Mendapat inspirasi dan motivasi untuk hidup lebih bermakna dalam Kristus',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-[#ff7e28] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-[#0d5e96] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
