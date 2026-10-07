import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../theme/colors';
import { CATEGORIES, HOTELS } from '../theme/data/hotels';
import SearchBar from '../components/SearchBar';
import CategoryChip from '../components/CategoryChip';
import FeaturedCard from '../components/FeaturedCard';
import HotelCard from '../components/HotelCard';
import BottomNav from '../components/BottomNav';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const filtered = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return HOTELS.filter((hotel) => {
      const matchCategory = category === 'all' || hotel.category === category;
      const matchSearch =
        !keyword ||
        hotel.name.toLowerCase().includes(keyword) ||
        hotel.location.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  const featured = filtered.filter((hotel) => hotel.featured);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.hello}>สวัสดีตอนเย็น</Text>
            <Text style={styles.title}>วันนี้อยากพักที่ไหนดี?</Text>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="notifications-outline" size={22} color={COLORS.text} />
              <View style={styles.dot} />
            </TouchableOpacity>

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80',
              }}
              style={styles.avatar}
            />
          </View>
        </View>

        <SearchBar value={search} onChangeText={setSearch} />

        <LinearGradient
          colors={[COLORS.primary, COLORS.primaryDark]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.bookingCard}
        >
          <View style={styles.bookingRow}>
            <View style={styles.bookingItem}>
              <Ionicons name="calendar-outline" size={18} color="#fff" />
              <View style={styles.bookingTextWrap}>
                <Text style={styles.bookingLabel}>เช็คอิน - เช็คเอาท์</Text>
                <Text style={styles.bookingValue}>12 - 14 ต.ค.</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.bookingItem}>
              <Ionicons name="people-outline" size={18} color="#fff" />
              <View style={styles.bookingTextWrap}>
                <Text style={styles.bookingLabel}>ผู้เข้าพัก</Text>
                <Text style={styles.bookingValue}>2 ผู้ใหญ่, 1 ห้อง</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.bookingBtn} activeOpacity={0.85}>
            <Text style={styles.bookingBtnText}>ค้นหาที่พักว่าง</Text>
          </TouchableOpacity>
        </LinearGradient>

        <FlatList
          data={CATEGORIES}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chips}
          renderItem={({ item }) => (
            <CategoryChip
              item={item}
              active={category === item.id}
              onPress={() => setCategory(item.id)}
            />
          )}
        />

        <SectionHeader title="ที่พักแนะนำ" />
        {featured.length > 0 ? (
          <FlatList
            data={featured}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: SIZES.padding }}
            renderItem={({ item }) => (
              <FeaturedCard
                item={item}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            )}
          />
        ) : (
          <Text style={styles.empty}>ไม่มีที่พักแนะนำในหมวดนี้</Text>
        )}

        <LinearGradient
          colors={[COLORS.accent, '#FF5F6D']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.promo}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.promoTitle}>ลด 20% จองครั้งแรก</Text>
            <Text style={styles.promoText}>ใช้โค้ด FIRSTSTAY ภายในเดือนนี้</Text>
          </View>
          <Ionicons name="gift-outline" size={40} color="#fff" />
        </LinearGradient>

        <SectionHeader title="ยอดนิยม" />
        <View style={{ paddingHorizontal: SIZES.padding }}>
          {filtered.map((item) => (
            <HotelCard
              key={item.id}
              item={item}
              isFavorite={favorites.includes(item.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
          {filtered.length === 0 && (
            <Text style={styles.emptyList}>ไม่พบที่พักที่ค้นหา</Text>
          )}
        </View>
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

function SectionHeader({ title }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>ดูทั้งหมด</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  content: {
    paddingTop: 10,
    paddingBottom: 110,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginBottom: 16,
  },
  hello: {
    fontSize: 14,
    color: COLORS.textMuted,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 4,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
    backgroundColor: COLORS.card,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  dot: {
    position: 'absolute',
    top: 10,
    right: 11,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accent,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  bookingCard: {
    marginHorizontal: SIZES.padding,
    marginTop: 16,
    borderRadius: 20,
    padding: 18,
  },
  bookingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingTextWrap: {
    marginLeft: 8,
  },
  bookingLabel: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 12,
  },
  bookingValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 10,
  },
  bookingBtn: {
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  bookingBtnText: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 15,
  },
  chips: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: 18,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  seeAll: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  promo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    marginVertical: 24,
    borderRadius: 20,
    padding: 18,
  },
  promoTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  promoText: {
    color: 'rgba(255,255,255,0.9)',
    marginTop: 4,
  },
  empty: {
    color: COLORS.textMuted,
    paddingHorizontal: SIZES.padding,
    paddingVertical: 12,
  },
  emptyList: {
    color: COLORS.textMuted,
    paddingVertical: 12,
  },
});
