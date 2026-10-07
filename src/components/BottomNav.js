import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

const TABS = [
  { key: 'home', label: 'หน้าแรก', icon: 'compass' },
  { key: 'fav', label: 'รายการโปรด', icon: 'heart-outline' },
  { key: 'booking', label: 'การจอง', icon: 'receipt-outline' },
  { key: 'profile', label: 'โปรไฟล์', icon: 'person-outline' },
];

export default function BottomNav() {
  const insets = useSafeAreaInsets();
  const [active, setActive] = useState('home');

  return (
    <View style={[styles.bar, { paddingBottom: insets.bottom + 8 }]}>
      {TABS.map((tab) => {
        const isActive = tab.key === active;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => setActive(tab.key)}
          >
            <Ionicons
              name={tab.icon}
              size={22}
              color={isActive ? COLORS.primary : COLORS.textMuted}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    paddingTop: 10,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -3 },
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    color: COLORS.textMuted,
  },
  labelActive: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});
