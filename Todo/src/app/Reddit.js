import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {ADD_POST} from './reducers';

const _Reddit = props => (
  <View>
    <View>{props.posts.map(post => <Text>{props.post.data.body}</Text>)}</View>
  </View>
);

const mapActionsToProps = (dispatch) => {
  addRedditPost(post={name: 'new Post'}){
    dispatch({type: ADD_POST, payload: post})
  }
}
const mapStateToProps = state => ({
  posts: state.reddit
});

export const Reddit = connect(mapStateToProps, null)(_Reddit);
