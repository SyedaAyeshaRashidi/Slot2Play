


import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

const GamingZonesList = () => {
    return (
    <ImageBackground
      source={require('../../assets/dashboard bg.png')}
      style={styles.background}
      resizeMode="cover"
    >

        <View style={styles.container}>
            <View style={styles.header}>
                <View><Text style={styles.greetingText}>Gaming Arena</Text></View>
                <TouchableOpacity style={styles.notificationBtn}>
                    <MaterialCommunityIcons name="bell-outline" size={28} color="#edaf42" />
                </TouchableOpacity>
            </View>
            <Text style={styles.middleSection}>Choose your Gaming Zone venue</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.venueCard}>
                    <Image source={require('../../assets/gaming1.jpeg')}
                        style={styles.venueImage} />

                    <View style={styles.cardInfo}>
                        <View>
                            <Text style={styles.venueName}>GameHub</Text>
                            <Text style={styles.venuePrice}>Rs 2500/hr</Text>
                        </View>

                        <TouchableOpacity style={styles.bookBtn}>
                            <Text style={styles.bookBtnText}>Book</Text>
                        </TouchableOpacity>
                    
                    </View>
                    
                </View> 
                {/* 2nd card  */}

                <View style={styles.venueCard}>
                    <Image source={require('../../assets/gaming2.jpg')}
                        style={styles.venueImage} />


                    <View style={styles.cardInfo}>
                        <View>
                            <Text style={styles.venueName}>eSports Zone</Text>
                            <Text style={styles.venuePrice}>Rs 1800/hr</Text>
                        </View>

                        <TouchableOpacity style={styles.bookBtn}>
                            <Text style={styles.bookBtnText}>Book</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 3rd card  */}

                <View style={styles.venueCard}>
                    <Image source={require('../../assets/gaming3.jpg')}
                        style={styles.venueImage} />

                    <View style={styles.cardInfo}>
                        <View>
                            <Text style={styles.venueName}>Arcade Planet</Text>
                            <Text style={styles.venuePrice}>Rs 2000/hr</Text>
                        </View>

                        <TouchableOpacity style={styles.bookBtn}>
                            <Text style={styles.bookBtnText}>Book</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
        </ImageBackground>
    )
}

export default GamingZonesList

const styles = StyleSheet.create({
    background: {
        // backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: 20,
        marginTop: -50,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        marginBottom: 20,
        alignItems: 'center',
    },

    greetingText: {
        fontSize: 32,
        marginTop: 160,
        marginLeft: 78,
        fontWeight: 'bold',
        color: 'white',
    },
    icon: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        Color: '#4b106d',
    },
    middleSection: {
        color: '#d0caca',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: -10,
        marginLeft: 35,
        marginBottom: 15,
        
    },
   venueCard: {
  backgroundColor: 'rgba(255, 255, 255, 0.09)',
  borderRadius: 20,
  marginBottom: 10,   // cards ke beech halka gap
  marginTop: 0,      // 70 hata kar normal gap
  overflow: 'hidden',
  borderWidth: 1,
  height: 170,
  borderColor: '#333',
},

venueImage: {
  width: '100%',
  height: 100,
},

cardInfo: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 15,  // vertical padding kam
  paddingVertical: 10,
  alignItems: 'center',
  height: 70,
},

venueName: {
  fontSize: 17,
  color: 'white',
  fontWeight: 'bold',
},

venuePrice: {
  color: '#eba542',
  marginTop: 2,   // thoda compact
},

    bookBtn: {
        backgroundColor: '#2b0b3d',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    bookBtnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    notificationBtn: {
        padding: 5,
        marginTop: 90,
        marginRight: -15,
        
        
    },
})






















