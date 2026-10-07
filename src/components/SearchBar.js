import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../theme/colors';

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.row}>
      <View style={styles.box}>
        <Ionicons name="search" size={20} color={COLORS.textMuted} />
        <TextInput
          style={styles.input}
          placeholder="ค้นหาจังหวัด หรือชื่อที่พัก"
          placeholderTextColor={COLORS.textMuted}
          value={value}
          onChangeText={onChangeText}
        />
      </View>

      <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
        <Ionicons name="options-outline" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: COLORS.card,
    borderRadius: 14,
    paddingHorizontal: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: COLORS.text,
  },
  filter: {
    width: 50,
    height: 50,
    borderRadius: 14,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
