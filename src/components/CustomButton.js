import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';


export default class ButtonCustom extends React.Component{


    render(){
        
        return <TouchableOpacity activeOpacity = {0.8} onPress={this.props.onPress}
        style={[{
          width: '50%',
          alignSelf: 'center',
          borderRadius: 20,
          borderWidth:0.2,
          backgroundColor:"#1432A2"
         
        }, {...this.props.style}]}>
        <Text
          style={{
            alignSelf: 'center',
            padding: 10,
            fontSize: 13,
            fontWeight:'bold',
            color :'white'
          
          }}>
        {this.props.btnTxt}
        </Text>
      </TouchableOpacity>

    }
}
