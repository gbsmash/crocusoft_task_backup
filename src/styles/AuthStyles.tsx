import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  img: {
    width: '100%',
  },
  title:{
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#000',
    marginBottom: 7,
  },
  subtitle:{
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#000',
    marginBottom: 60,
  },
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    flex:1,
  },
  inputWrapper: {
    flexDirection: 'row',
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000',
  },
  termsText: {
    fontSize: 14,
  },
  errorText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: 'red',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 40,
  },
  submitButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 12,
    color: '#000',
  },
});

export default authStyles;
