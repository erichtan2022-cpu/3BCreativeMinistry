import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    const defaultTitle = '3B Ministry – Pelayanan Media Kristen Modern';
    const defaultDescription = 'Pelayanan media Kristen yang memperlengkapi gereja, komunitas, dan generasi muda melalui kreativitas, pelatihan media, podcast, renungan, dan radio streaming.';
    const defaultKeywords = 'pelayanan media Kristen, creative ministry, konten rohani, podcast Kristen, renungan Kristen, radio rohani, produksi media gereja, yayasan Kristen, donasi pelayanan Kristen';

    document.title = title || defaultTitle;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || defaultDescription);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords || defaultKeywords);
  }, [title, description, keywords]);

  return null;
}
