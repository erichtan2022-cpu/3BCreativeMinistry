import { Heart, DollarSign, Package, Calendar, Shield, Users, Star, Sparkles, TrendingUp, Award, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Donation() {
  const donationTypes = [
    {
      title: 'Donasi Bulanan',
      description: 'Menjadi mitra tetap dengan dukungan rutin setiap bulan untuk mendukung operasional pelayanan',
      icon: Calendar,
      features: [
        'Dukungan operasional berkelanjutan',
        'Update bulanan tentang pelayanan',
        'Sertifikat apresiasi donatur',
        'Doa khusus untuk donatur',
      ],
      color: 'from-[#0d5e96] to-[#0a4a72]',
    },
    {
      title: 'Donasi Peralatan Media',
      description: 'Kontribusi untuk pengadaan dan upgrade peralatan produksi media berkualitas',
      icon: Package,
      features: [
        'Kamera dan lensa profesional',
        'Peralatan audio recording',
        'Lighting dan studio equipment',
        'Komputer dan software editing',
      ],
      color: 'from-[#ff7e28] to-[#e6711f]',
    },
    {
      title: 'Donasi Program',
      description: 'Sponsor program pelatihan dan workshop untuk gereja dan komunitas',
      icon: Users,
      features: [
        'Workshop media untuk gereja',
        'Pelatihan tim media',
        'Produksi konten rohani',
        'Program pengembangan talenta',
      ],
      color: 'from-[#0d5e96] to-[#0a4a72]',
    },
    {
      title: 'Donasi Operasional',
      description: 'Dukungan untuk kebutuhan operasional harian pelayanan',
      icon: DollarSign,
      features: [
        'Biaya produksi konten',
        'Pemeliharaan peralatan',
        'Hosting dan infrastruktur digital',
        'Tim operasional',
      ],
      color: 'from-[#ff7e28] to-[#e6711f]',
    },
  ];

  const impact = [
    {
      number: '50+',
      label: 'Gereja Bermitra',
      icon: Users,
    },
    {
      number: '100+',
      label: 'Konten Diproduksi',
      icon: Package,
    },
    {
      number: '200+',
      label: 'Peserta Pelatihan',
      icon: Users,
    },
    {
      number: '24/7',
      label: 'Radio Streaming',
      icon: Calendar,
    },
  ];

  return (
    <div className="pt-16 animate-fadeIn">
      <SEO
        title="Donasi - 3B Ministry"
        description="Jadilah bagian dari pekerjaan Tuhan melalui media. Dukungan Anda memampukan kami melayani dan memberkati lebih banyak jiwa melalui pelayanan media Kristen."
      />

      <section className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Jadilah Bagian dari Pekerjaan Tuhan Melalui Media
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Dukungan Anda memampukan kami untuk terus melayani dan memberkati lebih banyak jiwa melalui media Kristen
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96]/5 to-[#ff7e28]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-[#ff7e28]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96]">
                Manfaat Berdonasi Melalui 3B Ministry
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Memberikan donasi melalui 3B Ministry bukan hanya sebuah tindakan dukungan, tetapi juga investasi bagi pekerjaan Tuhan dan masa depan generasi. Berikut sejumlah manfaat yang dapat Anda peroleh sebagai donatur:
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#ff7e28] to-[#e6711f] text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0d5e96] mb-3">
                    1. Mendapatkan Pengurangan Beban Pajak
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    3B Ministry terdaftar secara resmi, sehingga donasi Anda dapat dijadikan pengurang penghasilan bruto sesuai ketentuan yang berlaku.
                  </p>
                  <div className="bg-[#0d5e96]/5 rounded-xl p-5">
                    <p className="font-semibold text-[#0d5e96] mb-3">Hasilnya:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Penghasilan kena pajak berkurang</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Jumlah pajak yang perlu dibayarkan menjadi lebih kecil</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Anda berbuat baik sambil menerima manfaat finansial yang sah</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0d5e96] mb-3">
                    2. Kepuasan Sosial dan Spiritual
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Berdonasi bukan sekadar memberikan dana—ini adalah bentuk ibadah, kasih, dan kepedulian.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Melalui 3B Ministry, Anda berkontribusi pada:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Pengembangan konten rohani</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Pembinaan generasi muda</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Penyebaran pesan Injil melalui media digital</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold italic">
                    Memberi membawa sukacita tersendiri yang tidak tergantikan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#ff7e28] to-[#e6711f] text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0d5e96] mb-3">
                    3. Turut Menggerakkan Pelayanan & Filantropi
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dukungan Anda memungkinkan kami untuk terus:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Menciptakan konten yang menguatkan iman</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Menyelenggarakan program pelatihan media</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Menjangkau lebih banyak jiwa melalui platform digital</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Setiap donasi menjadikan Anda bagian dari dampak yang berkelanjutan.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0d5e96] mb-3">
                    4. Meningkatkan Citra & Reputasi
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bagi individu maupun perusahaan, donasi resmi melalui 3B Ministry dapat meningkatkan:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start space-x-2">
                      <Award className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Reputasi sosial</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Award className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Brand image yang peduli</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Award className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Kepercayaan publik, karyawan, dan mitra</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Kepedulian Anda menunjukkan nilai kemanusiaan dan komitmen spiritual yang kuat.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-[#ff7e28] to-[#e6711f] text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0d5e96] mb-3">
                    5. Transparansi & Akuntabilitas Terjamin
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sebagai lembaga pelayanan resmi, 3B Ministry menjalankan:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start space-x-2">
                      <Shield className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sistem pelaporan yang jelas</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Pengelolaan dana yang bertanggung jawab</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Penggunaan dana sesuai peruntukan pelayanan</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    Anda dapat memberi dengan tenang dan yakin, karena setiap kontribusi dikelola dengan integritas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6">
              Dampak Donasi Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Setiap kontribusi Anda membawa perubahan nyata dalam pelayanan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {impact.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#ff7e28] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-[#0d5e96] mb-2">{item.number}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#0d5e96]/5 to-[#ff7e28]/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#0d5e96] mb-4">
                  Mengapa Donasi Anda Penting?
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Pelayanan media membutuhkan sumber daya yang tidak sedikit, mulai dari peralatan, tim profesional, hingga infrastruktur digital.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Dengan dukungan Anda, kami dapat terus menghadirkan konten rohani berkualitas, melatih lebih banyak pelayan media, dan menjangkau lebih banyak jiwa untuk Kristus.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold text-[#0d5e96]">
                    Bersama kita membangun ladang pelayanan digital untuk kemuliaan Tuhan!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-8 w-8 text-[#ff7e28]" />
                  <h3 className="text-xl font-semibold text-[#0d5e96]">Donasi Aman & Transparan</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#ff7e28] mt-1">✓</span>
                    <span>Laporan keuangan transparan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#ff7e28] mt-1">✓</span>
                    <span>Update penggunaan dana secara berkala</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#ff7e28] mt-1">✓</span>
                    <span>Terdaftar secara legal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#ff7e28] mt-1">✓</span>
                    <span>Akuntabilitas tinggi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0d5e96]/5 to-[#ff7e28]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6">
              Jenis Donasi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih bentuk dukungan yang sesuai dengan hati Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {donationTypes.map((donation, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${donation.color} text-white p-8`}>
                  <donation.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{donation.title}</h3>
                  <p className="text-gray-100">{donation.description}</p>
                </div>

                <div className="p-8">
                  <h4 className="font-semibold text-[#0d5e96] mb-4">Dukungan untuk:</h4>
                  <ul className="space-y-3">
                    {donation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Heart className="h-5 w-5 text-[#ff7e28] flex-shrink-0 mt-0.5" />
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] rounded-2xl p-12 text-white text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-[#ff7e28]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cara Berdonasi
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">Informasi Rekening</h3>

              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-sm text-gray-200 mb-1">Bank BCA</p>
                  <p className="font-mono text-xl font-bold">1234567890</p>
                  <p className="text-sm text-gray-200">a.n. 3B Ministry</p>
                </div>

                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-sm text-gray-200 mb-1">Bank Mandiri</p>
                  <p className="font-mono text-xl font-bold">0987654321</p>
                  <p className="text-sm text-gray-200">a.n. 3B Ministry</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-semibold text-center">Langkah Donasi:</h3>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-gray-100">Transfer ke salah satu rekening di atas</li>
                <li className="text-gray-100">Sertakan nama dan tujuan donasi di berita transfer</li>
                <li className="text-gray-100">Konfirmasi via WhatsApp: +62 811-8331-111</li>
                <li className="text-gray-100">Kami akan mengirimkan tanda terima donasi</li>
              </ol>
            </div>

            <button className="bg-[#ff7e28] hover:bg-[#e6711f] text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Donasi Sekarang
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d5e96] mb-6">
              Pertanyaan tentang Donasi?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Tim kami siap membantu Anda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/628118331111"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp Kami
              </a>
              <a
                href="mailto:info@3bcreative.org"
                className="bg-[#0d5e96] hover:bg-[#0a4a72] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Email Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0d5e96] to-[#0a4a72] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-semibold italic">
            "Tiap-tiap orang harus memberikan menurut kerelaan hatinya, jangan dengan sedih hati atau karena paksaan, sebab Allah mengasihi orang yang memberi dengan sukacita."
          </p>
          <p className="text-xl text-gray-200 mt-4">2 Korintus 9:7</p>
        </div>
      </section>
    </div>
  );
}
