import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import {colors} from '../global/styles';
import {Icon} from 'react-native-elements';

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View>
          {/* Delivery vs Pick Up */}
          <View style={styles.switchContainer}>
            <TouchableOpacity onPress={() => setDelivery(true)}>
              <View
                style={[
                  styles.deliveryButton,
                  {
                    backgroundColor: delivery ? colors.buttons : colors.grey5,
                  },
                ]}>
                <Text
                  style={[
                    styles.deliveryText,
                    {color: delivery ? 'white' : 'black'},
                  ]}>
                  Delivery
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setDelivery(false)}>
              <View
                style={[
                  styles.deliveryButton,
                  {
                    backgroundColor: delivery ? colors.grey5 : colors.buttons,
                  },
                ]}>
                <Text
                  style={[
                    styles.deliveryText,
                    {color: delivery ? 'black' : 'white'},
                  ]}>
                  Pick Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {/* Address */}
          <View style={styles.filterView}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors.grey5,
                alignItems: 'center',
                borderRadius: 15,
                paddingVertical: 3,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  type="material-community"
                  name="map-marker"
                  color={colors.grey1}
                  size={26}
                />
                <Text style={styles.addressText}>14 Trinh Van Bo</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10,
                }}>
                <Icon
                  type="material-community"
                  name="clock-time-four"
                  color={colors.grey1}
                  size={26}
                />
                <Text style={styles.addressText}>Now</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
              }}>
              <Icon
                type="material-community"
                name="tune"
                color={colors.grey1}
                size={26}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  switchContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  deliveryButton: {
    paddingHorizontal: 25,
    borderRadius: 15,
    paddingVertical: 8,
    elevation: 2,
  },
  deliveryText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  addressText: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.grey1,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
