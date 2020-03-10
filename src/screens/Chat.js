import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import firebaseSvc from '../config/Firebase';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    messages: [],
  };

  get user() {
    console.log(this.props);
    return {
      email: this.props.route.params.email,
      _id: firebaseSvc.uid,
    };
  }
  componentDidMount() {
    firebaseSvc.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      })),
    );
  }
  componentWillUnmount() {
    firebaseSvc.refOff();
  }

  render() {
    console.log('dalam render', this.props.route);
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSvc.send}
        user={this.user}
      />
    );
  }
}
