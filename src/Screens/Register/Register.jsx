import { StyleSheet, Text, View, TextInput, TouchableOpacity , ImageBackground} from 'react-native'
import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        alert("Account Created!");
    }

    return (
        <ImageBackground source={require('../../assets/bg.png')}
            style={styles.background}
        >
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Create Account</Text>
                
            </View>

            <View style={styles.form}>
                <TextInput
        placeholder="Full Name"
        placeholderTextColor="#ccc"
        style={styles.input}
      />

      <TextInput
        placeholder="Email Address"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="#ccc"
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        style={styles.input}
      />

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.linkText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ImageBackground>
    )
}

export default Register


const styles = StyleSheet.create({
    background: {
        flex: 1,
       
    },
    header: {
        marginTop: 80,
        marginBottom: 40,
        // flexDirection: 'row',
        // justifyContent: 'center',
        
    },
    title: {
        color: 'rgb(198, 198, 198)',
        fontSize: 32,
        marginTop: 30,
        fontWeight: 'bold',
        marginLeft:90,
      
    },
    // subtitle: {
    //     color: '#aaa',
    //     fontSize: 16,
    //     //  marginLeft:90,
    //     marginTop: 115,
    //     marginBottom: 30
    // },
    form: {
        width: '100%',
    },

    input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 20,
    height: 60,
    width: 370,
    marginLeft: 10,
    },

    button: {
        // backgroundColor: '#2b1551ff',
        // height: 60,
        // borderRadius: 0,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 60,

        backgroundColor: '#290642', // midnight purple
        paddingVertical: 15,
        borderRadius: 14,
        alignItems: 'center',
        width: 350,
        marginLeft: 20,
        marginTop: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    footerText: {
        fontSize: 18,
        color: '#c4c0c0ff',
    },
    linkText: {
        color: 'rgb(152, 70, 187)',
        fontSize: 18,
        fontWeight: 'bold',
    },
})