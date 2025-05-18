import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, parameters} from '../global/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({title, type, navigation}) {
  return (
    <View style={styles.header}>
      <View>
        <MaterialCommunityIcons
          name={type}
          size={28}
          color={colors.headerText}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center', // Căn giữa icon và text theo chiều dọc
    backgroundColor: colors.buttons,
    height: parameters.headerWeight,
    paddingHorizontal: 15, // Thêm padding trái/phải cho đẹp
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15, // Khoảng cách giữa icon và text
  },
});
