import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    TextInput,
} = ReactNative;

class AppContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    performLogin() {
        this.props.logIn(this.state.username, this.state.password);
    }
    
    render() {

        if (this.props.isLoggedIn) {
            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to Redux.
                    </Text>     
                </View>
            )
        } else {
            return (
                <View style={styles.loginView}>
                    <Image source={require('../img/LoginBackgroundImage.jpg')} style={styles.backgroundImage}>
                      <View>
                        <Text style={styles.text}>Redux Login</Text>
                        <View style={styles.textInputView}>
                          <TextInput placeholder="Username" keyboardType='email-address' 
                            placeholderTextColor='#888' 
                            style={styles.textInput}
                            onChangeText={(username)=> this.setState({username})}
                            value={this.state.username}
                            />
                        </View>
                        <View style={styles.textInputView}>
                          <TextInput placeholder="Password" keyboardType='default' 
                            placeholderTextColor='#888' 
                            style={styles.textInput}
                            ref="password"
                            secureTextEntry={true}
                            onChangeText={(password)=> this.setState({password})}
                            value={this.state.password}
                            />
                        </View>
                      </View>
                      <TouchableHighlight style={styles.buttonContainer} onPress={()=>{this.performLogin()}}>
                        <Text style = {styles.loginButton}>
                          Login
                        </Text>
                      </TouchableHighlight>
                    </Image>
              </View>
            )
        }
        
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  loginView: {
    flex: 1, 
    flexDirection:'row'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  },
  text: {
    textAlign:'center', 
    alignItems:'center',
    justifyContent: 'center', 
    backgroundColor: 'rgba(255,0,0,0)',
    fontSize: 44, 
    color: 'white'
  },
  textInput: {
    height:40, 
    width:300,
    backgroundColor : 'rgba(255,0,0,0)', 
    textAlign: 'center',
    backgroundColor: '#EEE'
  },
  textInputView: {
    marginTop: 10,
    borderWidth: 1,
    height: 40,
    borderColor: '#EEE',
    borderRadius: 5
  },
  loginButton: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    height: 40,
    width: 300,
    backgroundColor: '#227622',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#227622',
    borderRadius: 5,
    borderWidth: 1,
  },
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { 
    return {
        isLoggedIn: state.isLoggedIn
    } 
}, mapDispatchToProps)(AppContainer);
