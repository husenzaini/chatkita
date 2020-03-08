import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Item, Input, Form, Label, Button, Thumbnail, Text} from 'native-base';
import Bgimage from '../image/cerah.jpg';
import Logo from '../image/tele.jpg';

class Login extends Component {
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
        <Form style={styles.formLoginStyle}>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle} />
              Phone Number
              <Text />
            </Label>
            <Input style={styles.inputStyle} />
          </Item>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle} />
              Password
              <Text />
            </Label>
            <Input style={styles.inputStyle} secureTextEntry={true} />
          </Item>
        </Form>
        <Button
          block
          info
          style={styles.footerBottomStyle}
          onPress={() => this.props.navigation.navigate('Navigation')}>
          <Text>Sign In</Text>
        </Button>
        <View style={styles.footersignUpStyle}>
          <TouchableOpacity>
            <Text style={styles.signUpStyle}>
              Don't have an account? Register Now
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
  formLoginStyle: {
    marginTop: -30,
    paddingLeft: 10,
    paddingRight: 30,
  },
  inputStyle: {
    color: 'white',
    marginBottom: 6,
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

export default Login;
