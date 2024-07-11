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
    phoneScreen: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    designText: {
      marginTop: 20,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    designCircle: {
      width: 210,
      height: 237,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    button: {
      marginTop: 100,
      backgroundColor: '#45C9E4',
      paddingVertical: 20,
      paddingHorizontal: 110,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    }
  });

  export default styles;