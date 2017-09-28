import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14ccb0',
    padding: 40
  },
  box: {
    backgroundColor: '#ef235f',
    width: 300,
    height: 10,
    position: 'absolute',
    top: 500,
    left: 100
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold'
  }
});
