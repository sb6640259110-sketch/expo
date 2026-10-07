import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { formatPrice } from '../theme/data/hotels';

export default function HotelCard({ item, isFavorite, onToggleFavorite }) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>

        <View style={styles.row}>
          <Ionicons name="location-outline" size={13} color={COLORS.textMuted} />
          <Text style={styles.location}>{item.location}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="star" size={13} color={COLORS.star} />
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.reviews}> ({item.reviews} รีวิว)</Text>
        </View>

        <Text style={styles.price}>
          ฿{formatPrice(item.price)}
          <Text style={styles.night}> /คืน</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.heart}
        onPress={() => onToggleFavorite(item.id)}
      >
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={22}
          color={isFavorite ? COLORS.heart : COLORS.textMuted}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 10,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    marginLeft: 4,
    color: COLORS.textMuted,
    fontSize: 13,
  },
  rating: {
    marginLeft: 4,
    fontWeight: '600',
    color: COLORS.text,
    fontSize: 13,
  },
  reviews: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
  },
  night: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.textMuted,
  },
  heart: {
    padding: 4,
    alignSelf: 'flex-start',
  },
});
