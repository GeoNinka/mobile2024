import { StyleSheet } from "react-native";

export let styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#312e2b',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column'
    },
    link__pair: {
        display: 'flex',
        flexDirection: "column",
        paddingLeft: '15px',
    },  
    link: {
        backgroundColor: '#414141',
        padding: '15px',
        borderRadius: '5px',
        color: 'white',
        width: '80%',
        marginTop: '15px',
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        maxHeight: '80px',
    },
    link__heading: {
        fontSize: '20px',
        opacity: '0.9',
        margin: 0,
    },
    link__text: {
        padding: 0,
        margin: 0,
    },
    icon: {
        width: '40px',
        height: '40px',
        opacity: '0.9',
    },
    icon__bishop: {
        width: '40px',
        height: '62px',
        opacity: '0.9',
    },
    btnNormal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 100,

    },
    btnPress: {
        borderColor: 'green',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 100,
    },
    lesson__wrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: "center",
        marginTop: '50px',
    },
    lesson__image: {
        objectFit: 'fit',
        width: '320px',
        height: '320px',
    },
    lesson__round: {
        width: '8px',
        height: '8px',
        backgroundColor: 'gray',
        borderRadius: '100%',
    },
    lesson__round_active: {
        width: '8px',
        height: '8px',
        backgroundColor: 'orange',
        borderRadius: '100%',
    },
    lesson__rounds: {
        display: 'flex',
        flexDirection: "row",
        width: '30%',
        justifyContent: "space-around",
        alignItems: "center",
    },  
    lesson__buttons: {
        marginTop: '20px',
        width: '320px',
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
})