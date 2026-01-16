// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Dashboard = () => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.childern}>
//                 <Text style={styles.textStyle}>Hello, Username</Text>
//                 <View style={styles.icon}></View>
//             </View>
//             <View style={styles.cardsContainer}>

//                 <View style={styles.card1}>
//                     <View style={styles.card1_Child}><Text>🏏</Text></View>
//                     <Text style={styles.cricketCard}>Cricket</Text>
//                 </View>

//                 <View style={styles.card2}>
//                     <View style={styles.card1_Child}></View>
//                     <Text style={styles.cricketCard}>Football</Text>
//                 </View>

//                 <View style={styles.card3}>
//                     <View style={styles.card1_Child}></View>
//                     <Text style={styles.cricketCard}>Gamming Zone</Text>
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default Dashboard

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'black',

//     },

//     textStyle: {
//         color: 'white',
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     childern: {
//         flexDirection: 'row',
//         marginTop: 40,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 10,
//     },
//     icon: {
//         height: 50,
//         width: 50,
//         borderRadius: 25,
//         backgroundColor: '#333',
//         padding: 10,

//     },

//     cardsContainer: {
//         alignItems: 'center',
//         width: '100%',
//     },
//     card1: {
//         width: '80%',
//         height: 100,
//         borderWidth: 4,
//         borderColor: 'blue',
//         borderRadius: 15,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         backgroundColor: 'black',
//         marginBottom: 20,
//     },
//     card2: {
//         width: '80%',
//         height: 100,
//         borderWidth: 4,
//         borderColor: '#e60000ff',
//         borderRadius: 15,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         backgroundColor: 'black',
//         marginBottom: 20,
//     },
//     card3: {
//         width: '80%',
//         height: 100,
//         borderWidth: 4,
//         borderColor: 'purple',
//         borderRadius: 15,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         backgroundColor: 'black',
//         marginBottom: 20,
//     },
//     card1_Child: {
//         width: '30%',
//         height: 30,
//         borderRadius: 15,
//         backgroundColor: 'green',
//     },
//     cricketCard: {
//         color: 'white',
//         fontSize: 15,
//         fontWeight: 'bold',
//         marginTop: 5,
//     },


// })

// import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
// import React from 'react'

// const Dashboard = () => {
//     return (
//         <ImageBackground 
//         source={require('../../assets/login bg.png')}
//             style={styles.background}
//         resizeMode="cover"
//          >        


//         <View style={styles.container}>
//             <View style={styles.headerBox}>
//                 <View>
//                     <Text style={styles.helloText}>Hello,</Text>
//                     <Text style={styles.usernameText}>Username</Text>
//                 </View>
//                 <View style={styles.profileIconBox}>
//                     <Image
//                         source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
//                         style={styles.profileImage}
//                     />
//                 </View>
//             </View>

//             <View style={styles.cardsContainer}>
//                 <View style={[styles.card, { borderColor: '#2ecc71' }]}>
//                     <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5353/5353981.png' }} style={styles.cardLogo} />
//                     <Text style={styles.cardLabel}>Cricket</Text>
//                 </View>

//                 <View style={[styles.card, { borderColor: '#3498db' }]}>
//                     <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/33/33736.png' }} style={styles.cardLogo} />
//                     <Text style={styles.cardLabel}>Football</Text>
//                 </View>

//                 <View style={[styles.card, { borderColor: '#9b59b6' }]}>
//                     <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/686/686589.png' }} style={styles.cardLogo} />
//                     <Text style={styles.cardLabel}>Gaming Zone</Text>
//                 </View>
//             </View>
//         </View>
//          </ImageBackground>
//     )
// }


// export default Dashboard

// const styles = StyleSheet.create({
//     // // container: {
//     // //     flex: 1,
//     // //     backgroundColor: '#000',
//     // //     paddingHorizontal: 20,
//     // },
//     headerBox: {
//         flexDirection: 'row',
//         marginTop: 50,
//         backgroundColor: '#1a1a1a',
//         padding: 25,
//         borderRadius: 20,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     helloText: {
//         color: '#aaa',
//         fontSize: 18,
//     },
//     usernameText: {
//         color: 'white',
//         fontSize: 28,
//         fontWeight: 'bold',
//     },
//     profileIconBox: {
//         height: 60,
//         width: 60,
//         borderRadius: 30,
//         backgroundColor: '#333',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     profileImage: {
//         width: 45,
//         height: 45,
//     },
//     cardsContainer: {
//         flex: 1,
//         marginTop: 30,
//         justifyContent: 'space-evenly',
//         paddingBottom: 20,
//     },
//     card: {
//         width: '70%',
//         height: 150,
//         borderWidth: 2,
//         borderRadius: 25,      
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#111',
//         margintop: '50'
//     },
//     cardLogo: {
//         width: 70,
//         height: 70,
//         marginBottom: 10,
//     },
//     cardLabel: {
//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     background: {
//         width: '100%',
//         height: '100%'
        
//     }
// })
















import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ImageBackground,
  TouchableOpacity 
} from 'react-native'


const Dashboard = () => {
  return (
    <ImageBackground
      source={require('../../assets/dashboard bg.png')}
      style={styles.background}
      resizeMode="cover"
    >

      {/* WELCOME TEXT */}
      <Text style={styles.welcome}>Welcome Back!</Text>
      <Text style={styles.subtitle}>
        What would you take to play today?
      </Text>

      {/* CARDS */}
      <View style={styles.cardRow}>

        {/* Cricket */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/d cric.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.playText}>Play</Text>
          <Text style={[styles.cardTitle,{ color: '#28911fff' }]}>Cricket</Text>
        </TouchableOpacity>

        {/* Football */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/football bg.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.playText}>Play</Text>
          <Text style={[styles.cardTitle, { color: '#a71c1cff' }]}>
            Football
          </Text>
        </TouchableOpacity>

        {/* Gaming Zone */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/gaming.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.playText}>Gaming</Text>
          <Text style={[styles.cardTitle, { color: '#2727f4ff' }]}>Zone</Text>
        </TouchableOpacity>

      </View>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <Text style={styles.navActive}>Home</Text>
        <Text style={styles.navText}>Bookings</Text>
        {/* <Text style={styles.navText}>Offers</Text> */}
        <Text style={styles.navText}>Profile</Text>
      </View>

    </ImageBackground>
  )
}



export default Dashboard

const styles = StyleSheet.create({

    background: {
    flex: 1,
    paddingTop: 210,
    alignItems: 'center',
  },
//   logo: {
//     width: 180,
//     height: 60,
//     marginBottom: 20,
//   },
  welcome: {
    fontSize: 28,
    color: '#ffffffff',
    fontWeight: 'bold',
    marginTop: 50
  },
  subtitle: {
    color: '#ccc',
    marginBottom: 30,
    fontWeight: 'bold'
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 120,
    height: 220,
    backgroundColor: '#1b0b2e',
    borderRadius: 20,
    marginHorizontal: 6,
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '70%',
  },
  playText: {
    color: '#fff',
    marginTop: 6,
    fontSize: 14,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    height: 60,
    backgroundColor: '#2a0e3f',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navText: {
    color: '#c2b9b9ff',
  },
  navActive: {
    color: '#9735d8ff',
    fontWeight: 'bold',
  },
});
