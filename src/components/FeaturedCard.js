import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { formatPrice } from '../theme/data/hotels';

export default function FeaturedCard({ item, isFavorite, onToggleFavorite }) {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.75)']}
          style={styles.overlay}
        >
          <TouchableOpacity
            style={styles.heart}
            onPress={() => onToggleFavorite(item.id)}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={20}
              color={isFavorite ? COLORS.heart : '#fff'}
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.name}>{item.name}</Text>

            <View style={styles.row}>
              <Ionicons name="location-outline" size={14} color="#fff" />
              <Text style={styles.location}>{item.location}</Text>
            </View>

            <View style={[styles.row, styles.bottom]}>
              <Text style={styles.price}>
                ฿{formatPrice(item.price)}
                <Text style={styles.night}> /คืน</Text>
              </Text>

              <View style={styles.rating}>
                <Ionicons name="star" size={12} color={COLORS.star} />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 300,
    marginRight: 16,
  },
  image: {
    flex: 1,
  },
  imageRadius: {
    borderRadius: 20,
  },
  overlay: {
    flex: 1,
    borderRadius: 20,
    padding: 14,
    justifyContent: 'space-between',
  },
  heart: {
    alignSelf: 'flex-end',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  bottom: {
    justifyContent: 'space-between',
    marginTop: 10,
  },
  location: {
    color: '#fff',
    marginLeft: 4,
    fontSize: 13,
  },
  price: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  night: {
    fontSize: 12,
    fontWeight: '400',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  ratingText: {
    color: '#fff',
    marginLeft: 4,
    fontWeight: '600',
    fontSize: 12,
  },
});
