export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  type: 'podcast' | 'video' | 'article';
  thumbnail?: string;
  url?: string;
  date: string;
}

export interface DonationType {
  id: string;
  title: string;
  description: string;
  icon: string;
}
