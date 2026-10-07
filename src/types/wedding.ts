export interface WishMessage {
  id: string;
  name: string;
  attendance: 'hadir' | 'tidak_hadir' | 'ragu';
  message: string;
  timestamp: string;
  giftRoseCount?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'prewedding' | 'sakral' | 'detail' | 'semua';
  image: string;
  description: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  location: string;
  description: string;
  iconName: string;
}

export interface CatalogDetailItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  image?: string;
  colorHex?: string;
}
