// import stuff
import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

// Inline Style: {flex: 1, alignItems: "center", justifyContent: "center"}
// create stuff 
class App extends React.Component{
  state = {
    // way of having localized variables to change stuff in the state
    text: "",
    todo: []
  }
  // es6 functions
  addToDo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }

  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }

  renderToDos = () =>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text 
            style={styles.todo}
            onPress={()=>{this.deleteTodo(t)}}
            >{t}
          </Text>
        </TouchableOpacity>
      )
    })
  }

  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Notes App</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
            // as the text is changed on input, then the state of the text in the bottom mirrors the changes
          />
          <Button
            title="Add Todo"
            color="#00BCD4"
            shadowColor="#BDBDBD"
            onPress={this.addToDo}
          />
          <View style={{marginTop: 20}}/> 
          {this.renderToDos()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    flex: 1,
    backgroundColor: "#03A9F4"
  },

  viewStyle: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10
  },

  inputStyle: {
    height: 40,
    borderColor: "#B3E5FC",
    borderWidth: 1,
    width:250,
    color: "black",
    backgroundColor: "white",
    marginBottom: 20,
    textAlign: "center"
  },

  header: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 20
  },

  todo: {
    fontSize: 24,
    color: "white"
  }
}

// export stuff
export default App;

// Js arrays and maps


// create a seperate stylesheet and link it on the top
// comment this code to see what everything does
// wrap the this.renderToDos in a scrollView component because if the notes get filled up, they automatically move up
// add a "Created by SaberMDAbir" at the bottom
// upload to github repo
// Sign-up for student github
// Trash object --> Store removed tasks in case of accidental deletions
// Dictionary --> Store note and time of deletion
