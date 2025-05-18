import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/styles';
import {Icon, withBadge} from 'react-native-elements';

const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      {/* Icon Menu 3 gạch bên trái */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardBackground}
          size={32}
        />
      </TouchableOpacity>

      {/* Tiêu đề chính giữa (tùy chọn) */}
      <Text style={styles.headerTitle}>EXPRESS APP</Text>

      {/* Placeholder để giữ cân đối bên phải (nếu chưa có gì) */}
      <View>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={colors.cardBackground}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerWeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightSpace: {
    width: 32, // Đảm bảo cân đối với icon bên trái
  },
});
