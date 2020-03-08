import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Item, Input, Form, Button, Thumbnail, Text} from 'native-base';
import Icons from 'react-native-vector-icons';
import Bgimage from '../image/cerah.jpg';
import Logo from '../image/tele.jpg';

class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.BgimageStyle} source={Bgimage} />
        <View style={styles.logoStyle}>
          <Thumbnail square large source={Logo} />
          <Text styles={styles.textLogoStyle}>React Native App</Text>
        </View>
        <Form style={styles.formRegisterStyle}>
          <Item style={styles.itemStyle}>
            <Icons
              name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
              size={26}
              color={'white'}
            />
            <Input style={styles.inputStyle} />
          </Item>
          <Item style={styles.itemStyle}>
            <Icons
              name={Platform.OS === 'ios' ? 'ios-lock' : 'md-lock'}
              size={26}
              color={'white'}
            />
            <Input style={styles.inputStyle} secureTextEntry={true} />
          </Item>
          <Item style={styles.itemStyle}>
            <Icons
              name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
              size={26}
              color={'white'}
            />
            <Input style={styles.inputStyle} />
          </Item>
        </Form>
        <Button block info style={styles.footerBottomStyle}>
          <Text>Register</Text>
        </Button>
        <View style={styles.footersignUpStyle}>
          <TouchableOpacity>
            <Text style={styles.signUpStyle}>
              Already have an account? Sign In Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  BgimageStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoStyle: {
    marginTop: 70,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogoStyle: {
    fontSize: 18,
    color: 'white',
  },
  formRegisterStyle: {
    marginTop: -30,
    paddingLeft: 10,
    paddingRight: 30,
  },
  itemStyle: {
    marginTop: 5,
  },
  inputStyle: {
    color: 'white',
    marginBottom: 1,
    marginLeft: 5,
    fontSize: 14,
  },
  footerBottomStyle: {
    marginTop: 26,
    paddingTop: 10,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 10,
  },
  footersignUpStyle: {
    marginTop: 25,
    alignItems: 'center',
  },
  signUpStyle: {
    color: 'black',
    fontSize: 14,
  },
});
export default Register;
