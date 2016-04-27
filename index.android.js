/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View, 
  Image 
} from 'react-native';

var english_german  = require('./english_german.json');

var Dictionary = React.createClass({
  getInitialState: function() {
      return {
          input: '',
          output: '', 
          counter : 0
      };
  },

  showMeaning  : function(){
    var meaning = this.state.input in english_german? 
    english_german[this.state.input] : "Not found";
    this.setState({
      output:meaning
    });
  },
   render: function() {
      var layout =
          <React.Image style = { styles.parent } source={require('./img/bg_login.png')}>

          <React.Text style = {styles.titlex}>
            MyDictionary
          </React.Text>
   
              <React.Text style = { styles.germanLabel } >
                  Type something in English:
              </React.Text>
   
              <React.TextInput  
                  text = { this.state.input } 
                  onChangeText={(e) => this.setState({input: e})}
                  onSubmitEditing={this.showMeaning}
                  />
   
              <React.Text style = { styles.germanLabel } >
                  Its German equivalent is:
              </React.Text>
   
              <React.Text style = { styles.germanWord } >                
               { this.state.output }
              </React.Text>


              <React.Text style = { styles.counter } >                
               { this.state.counter }
              </React.Text>
             


          </React.Image>
      ;
      return layout;
  },
});
var styles  = React.StyleSheet.create({
  titlex: {
    fontSize:20, 
    fontFamily:'Raleway-Medium', 
    color:"#ffffff",
    marginBottom:25,
     
     

  },

  parent : {
    padding:16,
    flex: 1, 
  },
   // For the Text label
    germanLabel: {
        marginTop: 20,
        fontFamily:'Raleway-Medium', 
        color:"#ffffff",
    },
 
    // For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic',
        fontFamily:'Raleway-Medium', 
        color:"#ffffff",
    },
    counter:{
      marginTop:50,
      fontSize:20

    }

}); 
React.AppRegistry.registerComponent('Dictionary', () => Dictionary);
