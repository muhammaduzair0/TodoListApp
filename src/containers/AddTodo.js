import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
class AddTodo extends Component {
  state = {
    text: '',
  };

  addTodo = text => {
    //redux store
    this.props.dispatch({type: 'ADD_TODO', text});
    this.setState({text: ''});
  };

  render() {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
          placeholderTextColor={'gray'}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
          placeholder="Eg. Create New Video"
          style={{
            color:'#333',
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: '#eaeaea',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="md-add"
              size={30}
              style={{color: '#de9595', padding: 10}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
