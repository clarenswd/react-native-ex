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
  View
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
          <React.View style = { styles.parent } >

          <React.Text style = {styles.titlex}>
            MyDictionary
          </React.Text>
   
              <React.Text>
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
             


          </React.View>
      ;
      return layout;
  },
});
var styles  = React.StyleSheet.create({
  titlex: {
    fontSize:20, 
    fontFamily:'Raleway-Medium' 

  },

  parent : {
    padding:16,
    
  },
   // For the Text label
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },
 
    // For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    },
    counter:{
      marginTop:50,
      fontSize:20

    }

}); 
React.AppRegistry.registerComponent('Dictionary', () => Dictionary);
