import { useState } from 'react';
import { Headphones, Video, BookOpen, Play, Calendar } from 'lucide-react';
import RadioPlayer from '../components/RadioPlayer';
import SEO from '../components/SEO';

export default function Media() {
  const [activeTab, setActiveTab] = useState<'podcast' | 'video' | 'article'>('podcast');

  const podcasts = [
    {
      id: 1,
      title: 'Renungan Pagi: Berjalan Bersama Tuhan',
      description: 'Memulai hari dengan firman Tuhan dan refleksi rohani yang menyegarkan',
      duration: '25 menit',
      date: '15 Nov 2025',
    },
    {
      id: 2,
      title: 'Kreativitas dalam Pelayanan',
      description: 'Bagaimana menggunakan kreativitas untuk memuliakan Tuhan',
      duration: '32 menit',
      date: '12 Nov 2025',
    },
    {
      id: 3,
      title: 'Media Ministry untuk Generasi Digital',
      description: 'Strategi pelayanan media yang efektif di era digital',
      duration: '28 menit',
      date: '10 Nov 2025',
    },
    {
      id: 4,
      title: 'Membangun Tim Media Gereja',
      description: 'Tips praktis membangun dan mengembangkan tim media yang solid',
      duration: '35 menit',
      date: '8 Nov 2025',
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'Workshop Videografi Gereja',
      description: 'Tutorial lengkap videografi untuk pelayanan gereja',
      duration: '45 menit',
      date: '14 Nov 2025',
      thumbnail: 'video',
    },
    {
      id: 2,
      title: 'Testimony: Dampak Media Ministry',
      description: 'Kesaksian gereja yang bertransformasi melalui media',
      duration: '15 menit',
      date: '11 Nov 2025',
      thumbnail: 'video',
    },
    {
      id: 3,
      title: 'Live Streaming untuk Gereja',
      description: 'Panduan praktis setup live streaming ibadah',
      duration: '38 menit',
      date: '9 Nov 2025',
      thumbnail: 'video',
    },
    {
      id: 4,
      title: 'Konten Kreatif untuk Media Sosial',
      description: 'Membuat konten rohani yang engaging di media sosial',
      duration: '22 menit',
      date: '7 Nov 2025',
      thumbnail: 'video',
    },
  ];

  const articles = [
    {
      id: 1,
      title: 'Mengapa Media Penting dalam Pelayanan Masa Kini',
      excerpt: 'Di era digital, media bukan lagi pilihan tetapi kebutuhan. Bagaimana gereja dapat memanfaatkan media untuk menjangkau lebih banyak jiwa...',
      date: '15 Nov 2025',
      readTime: '5 menit',
    },
    {
      id: 2,
      title: 'Prinsip Berakar, Bertumbuh, Berbuah dalam Kehidupan',
      excerpt: 'Refleksi mendalam tentang ketiga prinsip rohani yang menjadi fondasi pelayanan kita dan bagaimana menerapkannya dalam kehidupan sehari-hari...',
      date: '13 Nov 2025',
      readTime: '7 menit',
    },
    {
      id: 3,
      title: 'Kreativitas: Karunia Tuhan untuk Melayani',
      excerpt: 'Kreativitas bukan hanya tentang seni, tetapi tentang bagaimana kita menggunakan talenta untuk memuliakan Tuhan dan memberkati sesama...',
      date: '11 Nov 2025',
      readTime: '6 menit',
    },
    {
      id: 4,
      title: 'Membangun Komunitas Digital yang Sehat',
      excerpt: 'Panduan praktis membangun dan memelihara komunitas Kristen di platform digital dengan nilai-nilai kerajaan Allah...',
      date: '9 Nov 2025',
      readTime: '8 menit',
    },
  ];

  const tabs = [
    { id: 'podcast' as const, label: 'Podcast', icon: Headphones },
    { id: 'video' as const, label: 'Video', icon: Video },
    { id: 'article' as const, label: 'Renungan', icon: BookOpen },
  ];

  return (
    <div className="pt-16 animate-fadeIn">
      <SEO
        title="Media - 3B Creative Ministry"
        description="Jelajahi koleksi podcast, video, dan renungan rohani dari 3B Creative Ministry. Dengarkan radio streaming 24/7 dengan konten yang membangun iman."
      />

      <section className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Media & Konten</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Konten rohani berkualitas untuk membangun iman dan memberkati kehidupan Anda
          </p>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#0d5e96] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeTab === 'podcast' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0d5e96] mb-12 text-center">
              Podcast Terbaru
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {podcasts.map((podcast) => (
                <div
                  key={podcast.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#ff7e28] text-white p-4 rounded-xl">
                      <Headphones className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#0d5e96] mb-2">
                        {podcast.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{podcast.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{podcast.date}</span>
                          </span>
                          <span>{podcast.duration}</span>
                        </div>
                        <button className="bg-[#0d5e96] hover:bg-[#0a4a72] text-white p-2 rounded-full transition-colors">
                          <Play className="h-5 w-5" fill="currentColor" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'video' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0d5e96] mb-12 text-center">
              Video Terbaru
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] h-48 flex items-center justify-center">
                    <Video className="h-16 w-16 text-white/50" />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                      <div className="bg-[#ff7e28] text-white p-4 rounded-full">
                        <Play className="h-8 w-8" fill="currentColor" />
                      </div>
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#0d5e96] mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{video.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{video.date}</span>
                      </span>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'article' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0d5e96] mb-12 text-center">
              Renungan & Artikel
            </h2>

            <div className="space-y-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#ff7e28] text-white p-4 rounded-xl">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-[#0d5e96] mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                          </span>
                          <span>{article.readTime}</span>
                        </div>
                        <button className="text-[#0d5e96] hover:text-[#0a4a72] font-semibold">
                          Baca Selengkapnya →
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Radio Streaming 3B Creative
          </h2>
          <p className="text-center text-gray-200 mb-12 text-lg">
            Dengarkan konten rohani, musik worship, dan pengajaran firman Tuhan 24/7
          </p>

          <div className="max-w-2xl mx-auto">
            <RadioPlayer />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Musik Worship</h3>
              <p className="text-gray-200 text-sm">Lagu pujian dan penyembahan pilihan</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Pengajaran Firman</h3>
              <p className="text-gray-200 text-sm">Khotbah dan renungan yang membangun</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Live 24/7</h3>
              <p className="text-gray-200 text-sm">Streaming non-stop sepanjang hari</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
