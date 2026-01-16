// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import LoginScreen from './src/Screens/LoginScreen/LoginScreen'
// const App = () => {
//   return (
//     <View>

//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({

// })

// -------------------------------
// for login screen



// import React from 'react';
// import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
// const App = () => {
//   return (
//     // Hum sirf LoginScreen ko call kar rahe hain
//     <LoginScreen />
//   );
// };
// export default App;
// ------------------------------------------------------------------------------------------



// for register page
// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import Register from './src/Screens/Register/Register';

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}><Register />
//     </SafeAreaView>
//   );
// };
// export default App;



//--------------------------------------------------------------------------------------------
// for dashboard 
// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import Dashboard from './src/Screens/Dashboard/Dashboard';

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
//       <Dashboard />
//     </SafeAreaView>
//   );
// };

// export default App;


//--------------------------------------------------------------------------------------------
// for CricketIndoorsList
// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import Dashboard from './src/Screens/CricketIndoorsList/CricketIndoorsList';

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
//       <Dashboard />
//     </SafeAreaView>
//   );
// };

// export default App;


//--------------------------------------------------------------------------------------------

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import VenueDetails from './src/Screens/VenueDetails/VenueDetails';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VenueDetails />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default App;

