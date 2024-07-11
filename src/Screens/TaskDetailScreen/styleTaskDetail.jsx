import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f4f7'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subtaskCard: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    subtaskTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'skyblue',
        justifyContent: 'space-between',
        marginTop: 10,
        borderColor: 'deepblue',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    textbutton: {
        fontSize: 15,
        fontWeight: 'black',
    },
    progressBar: {
        height: 20,
        width: '100%',
        backgroundColor: '#e0e0e0'
    },
    addwork: {
        paddingVertical: 8,
        backgroundColor: '#63E4FF',
        justifyContent: 'space-between',
        marginTop: 20,
        borderColor: 'deepblue',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    textaddwork: {
        fontSize: 18,
        fontWeight: 'black',
    }

  });


  export default styles;