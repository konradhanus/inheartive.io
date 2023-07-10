import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    fontSize: 20,
    lineHeight: 20,
  },
  title: {
    width: '40%',
  },
});
