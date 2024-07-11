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
    header: {
        flex: 2.1,
        backgroundColor: '#63E4FF',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        marginTop: 158,
        width: 124,
        height: 124,
        borderRadius: 50,
        marginHorizontal:20,
    },
    welcomeText: {
        marginTop: 10,
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content: {
        flex: 3,
        alignItems: 'center',
        paddingVertical: 20,
    },
    clockImage: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    greetingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    todoContainer: {
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 15,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    todoTitle: {
        marginHorizontal: 15,
        marginVertical: 12,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    todoItem: {
        fontSize: 14,
        marginVertical: 15,
    },
  });

  export default styles;