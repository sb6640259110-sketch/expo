export const CATEGORIES = [
  { id: 'all', label: 'ทั้งหมด', icon: 'apps-outline' },
  { id: 'hotel', label: 'โรงแรม', icon: 'business-outline' },
  { id: 'resort', label: 'รีสอร์ท', icon: 'sunny-outline' },
  { id: 'villa', label: 'วิลล่า', icon: 'home-outline' },
  { id: 'homestay', label: 'โฮมสเตย์', icon: 'leaf-outline' },
];

const img = (id) => `https://images.unsplash.com/${id}?w=800&q=80`;

export const HOTELS = [
  { id: '1', name: 'Sea Breeze Resort', location: 'กระบี่', category: 'resort', price: 2890, rating: 4.8, reviews: 320, featured: true, image: img('photo-1566073771259-6a8506099945') },
  { id: '2', name: 'The Riverside Hotel', location: 'กรุงเทพฯ', category: 'hotel', price: 1950, rating: 4.6, reviews: 512, featured: true, image: img('photo-1582719478250-c89cadb4d9b0') },
  { id: '3', name: 'Mountain Mist Villa', location: 'เชียงใหม่', category: 'villa', price: 4500, rating: 4.9, reviews: 188, featured: true, image: img('photo-1584132967334-10e028bd69f7') },
  { id: '4', name: 'Lagoon Paradise', location: 'ภูเก็ต', category: 'resort', price: 3690, rating: 4.7, reviews: 410, featured: true, image: img('photo-1520250497591-112f2f40a3f4') },
  { id: '5', name: 'Baan Suan Homestay', location: 'น่าน', category: 'homestay', price: 890, rating: 4.8, reviews: 96, featured: false, image: img('photo-1600596542815-ffad4c1539a9') },
  { id: '6', name: 'City Loft Hotel', location: 'ขอนแก่น', category: 'hotel', price: 1290, rating: 4.4, reviews: 230, featured: false, image: img('photo-1542314831-068cd1dbfeeb') },
  { id: '7', name: 'Palm Garden Villa', location: 'หัวหิน', category: 'villa', price: 5200, rating: 4.8, reviews: 145, featured: false, image: img('photo-1571896349842-33c89424de2d') },
  { id: '8', name: 'Green Valley Homestay', location: 'เขาใหญ่', category: 'homestay', price: 1100, rating: 4.5, reviews: 77, featured: false, image: img('photo-1551882547-ff40c63fe5fa') },
];

export const formatPrice = (n) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
