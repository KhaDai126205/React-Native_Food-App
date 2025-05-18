import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors, parameters, title} from '../../global/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // đúng thư viện
import Header from '../../components/Header';
import {TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Button, SocialIcon} from 'react-native-elements';

const SignInScreen = ({navigation}) => {
  const [textInput2Password, setTextInput2Password] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" navigation={navigation} />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign-In</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>Register with your account</Text>
      </View>

      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Password ? '' : 'fadeInLeft'}
            duration={400}>
            <MaterialCommunityIcons
              name="lock"
              color={colors.grey3}
              size={24}
            />
          </Animatable.View>
          <TextInput
            placeholder="Password"
            style={{flex: 1, marginLeft: 10}}
            ref={textInput2}
            onFocus={() => {
              setTextInput2Password(false);
            }}
            onBlur={() => {
              setTextInput2Password(true);
            }}
          />
          <Animatable.View
            animation={textInput2Password ? '' : 'fadeInLeft'}
            duration={400}>
            <MaterialIcons
              name="visibility-off"
              color={colors.grey3}
              size={24}
              style={{marginRight: 10}}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <Button
          title={'SIGN IN'}
          buttonStyle={parameters.styleButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Forgot Password ?
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
      </View>

      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign in with Facebook"
          button
          type="facebook"
          iconSize={24}
          fontStyle={{fontWeight: 'bold'}}
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Sign in with Google"
          button
          type="google"
          iconSize={24}
          fontStyle={{fontWeight: 'bold'}}
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginTop: 25, marginLeft: 20}}>
        <Text style={{...styles.text1}}>New on ExpressFood ?</Text>
      </View>

      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          title={'Create an account'}
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e', // Dùng mã màu chuẩn
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },

  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e', // Mã màu giống với TextInput1
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center', // → Không được áp dụng cho View theo chiều ngang, nên dùng alignItems
    alignItems: 'center',
    paddingLeft: 15,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },
  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
});
