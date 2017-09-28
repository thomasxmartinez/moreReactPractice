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

  componentWillMount() {
    fetch('http://localhost:3000/todos', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(todos => this.setState({ todos }));
  }

  handleChange(text) {
    this.setState({ newTodo: text });
  }

  handlePress() {
    const newtodo = {
      name: this.state.newTodo
    };

    fetch('http://localhost:3000/todos/', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newtodo)
    })
      .then(data => data.json())
      .then(json => {
        const todos = [newtodo, ...this.state.todos];
        this.setState({ todos, newTodo: '' });
      });
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
              <Text style={styles.todoText}>{todo.name}</Text>
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
    marginBottom: 8
  },
  todo: {
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000000'
  },
  todoText: {
    fontSize: 24,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#A2AAAD',
    fontSize: 24
  }
});
