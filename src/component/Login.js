import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Item, Input, Form, Label, Button, Thumbnail, Text} from 'native-base';
import Bgimage from '../image/cerah.jpg';
import Logo from '../image/tele.jpg';
import firebaseSvc from '../config/Firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  onPressLogin = async () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    firebaseSvc.login(user, this.loginSuccess, this.loginFailed);
  };
  loginSuccess = () => {
    console.log('login successful, navigate to chat.');
    this.props.navigation.navigate('Chat', {
      email: this.state.email,
    });
  };
  loginFailed = () => {
    alert('Login failure. Please tried again.');
  };
  onChangeTextEmail = email => {
    this.setState({email});
  };
  onChangeTextPassword = password => {
    this.setState({password});
  };
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
              Email
              <Text />
            </Label>
            <Input
              style={styles.inputStyle}
              onChangeText={e => this.onChangeTextEmail(e)}
            />
          </Item>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle} />
              Password
              <Text />
            </Label>
            <Input
              style={styles.inputStyle}
              secureTextEntry={true}
              onChangeText={e => this.onChangeTextPassword(e)}
            />
          </Item>
        </Form>
        <Button
          block
          info
          style={styles.footerBottomStyle}
          onPress={() => this.onPressLogin()}>
          <Text>Sign In</Text>
        </Button>
        <View style={styles.footersignUpStyle}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}>
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
