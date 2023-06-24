import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },

  area: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center'
  },

  control: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginVertical: 40,
    marginHorizontal: 20
  },

  controlText: {
    color: '#fff'
  },

  controlButton: {
    flex: 1,
    height: 100,
    backgroundColor: '#555',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  controlButtonText: {
    color: '#fff',
    fontSize: 20
  },

})
