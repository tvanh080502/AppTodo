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
      fontSize: 20,
      color: '#000',
      paddingHorizontal: 20,
    },
    imageContainer: {
      marginTop: 20,
      width: 204,
      height: 161,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 40,
    },
    input: {
      width: '80%',
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 25,
      paddingHorizontal: 20,
      marginVertical: 10,
      backgroundColor: '#63E4FF',
      color: '#000',
      fontSize: 16,
      opacity: 0.8,
    },
    resetText: {
      color: '#03A9F4',
      marginTop: 5,
      fontSize: 15,
    },
    button: {
      width: '80%',
      backgroundColor: '#45C9E4',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });

  export default styles;