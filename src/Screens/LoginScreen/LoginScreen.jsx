


//--------------------------------------------------------------------------------------------
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'


function LoginScreen() {
    return (
        <ImageBackground source={require('../../assets/bg.png')}
            style={styles.background}
        >
            <View style={styles.overlay}>
                {/* <Text style={styles.LogoText}>Slot2Play</Text> */}
                <Image source={require('../../assets/logoo newww.png')} style={styles.mainLogo} />
                {/* <Text style={styles.tagLine}>Book your slot, Own the game</Text> */}
              <TextInput
                placeholder="Email or Student ID"
                 placeholderTextColor="#ffffffd2"
                style={styles.input}
/>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#ffffffd2"
                style={styles.input}
/>  <TouchableOpacity
                    style={styles.loginButton} >
                    <Text style={styles.buttonText}>Let's Play</Text>
                </TouchableOpacity>
                <Text style={styles.bottomline}>Don't have an account?
                    <Text style={styles.signupText}> Sign Up</Text>
                </Text>
            </View>
        </ImageBackground>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    mainLogo: {
        width: 500,
        height: 200,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0)',

    },
    
    input: {
        width: '90%',
        height: 60,
        backgroundColor:'rgba(255, 255, 255, 0.16)',
        borderRadius: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        fontWeight: 'bold',
        color: 'white', 
        fontSize: 17
        

    },
    loginButton: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        marginTop: 60,
        backgroundColor: 'rgba(67, 16, 82, 0.45)',
        height: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    bottomline: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    signupText: {
        color: 'rgb(127, 18, 174)',
        fontWeight: 'bold'
    }
})
