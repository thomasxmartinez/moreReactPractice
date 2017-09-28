import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Switch } from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleChange(text) {
    this.setState({ newTodo: text });
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./hongZhou.png')} />
        <View style={styles.form}>
          <TextInput style={styles.input} value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} />
          <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
            <Text style={styles.buttonText}>Hire the guy who made this</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo, i) => (
            <View key={i} style={styles.todo}>
              <Text style={styles.todoText}>{todo}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    top: 15,
    height: 20,
    width: 300
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#0069B1'
  },
  form: {
    flexDirection: 'row',
    top: 5
  },
  input: {
    flex: 0.7,
    fontSize: 24,
    marginTop: 1
  },
  button: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#A2AAAD',
    borderColor: '#0069B1',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110,
    right: 75
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 0,
    marginBottom: 5
  },
  todo: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000000'
  },
  todoText: {
    fontSize: 24,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
