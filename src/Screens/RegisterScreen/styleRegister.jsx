import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerCircle: {
      position: 'absolute',
      top: -48,
      left: 45,
      width: 200,
      height: 200,
      backgroundColor: '#A8FEEF',
      borderRadius: 100,
      opacity: 0.4,
    },
    headerCircle1: {
      position: 'absolute',
      top: -48,
      left: -55,
      width: 200,
      height: 200,
      backgroundColor: '#A8FEEF',
      borderRadius: 100,
      opacity: 0.56,
    },
    headerText: {
      marginTop: 60,
      fontSize: 18,
      color: '#000',
    },
    input: {
      width: '80%',
      height: 50,
      borderColor: '#ccc',
      borderWidth: 2,
      borderRadius: 25,
      paddingHorizontal: 25,
      marginVertical: 10,
      backgroundColor: '#63E4FF',
      color: '#000',
      fontSize: 16,
      opacity: 0.8,
    },
    button: {
      width: '80%',
      height: 50,
      backgroundColor: '#45C9E4',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    footerText: {
      marginTop: 20,
      fontSize: 16,
      color: '#000',
    },
    signInText: {
      color: '#03A9F4',
    },
  });

  export default styles;