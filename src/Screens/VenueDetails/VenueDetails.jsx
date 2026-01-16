
// import React from 'react';
// import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const VenueDetails = () => {
//     // Slots ka data (Practice ke liye abhi simple array)
//     const slots = ['9:00-10:00 AM', '10:00-11:00 AM', '11:00-12:00 AM', '10:00-1:00 AM', '11:00-2:00 AM', '12:00-3:00 AM'];

//     return (
//         <SafeAreaView style={styles.container}>
//             <ScrollView showsVerticalScrollIndicator={false}>

//                 {/* 1. Header Image with Back Button */}
//                 <ImageBackground
//                     source={require('../../assets/cric1.jpg')}
//                     style={styles.headerImage}
//                     imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
//                 >
//                     <TouchableOpacity style={styles.backButton}>
//                         <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
//                     </TouchableOpacity>
//                 </ImageBackground>

//                 {/* 2. Content Section */}
//                 <View style={styles.content}>
//                     <Text style={styles.title}>Cricket Booking</Text>

//                     <Text style={styles.label}>Description</Text>
//                     <Text style={styles.description}>
//                         Cricket ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     </Text>

//                     {/* Location and Price Chips */}
//                     <View style={styles.infoContainer}>
//                         <View style={styles.infoBox}>
//                             <MaterialCommunityIcons name="map-marker-outline" size={24} color="#2ecc71" />
//                             <View style={{ marginLeft: 10 }}>
//                                 <Text style={styles.infoLabel}>Location</Text>
//                                 <Text style={styles.infoValue}>Downtown Sports</Text>
//                             </View>
//                         </View>
//                         <View style={styles.infoBox}>
//                             <MaterialCommunityIcons name="tag-outline" size={24} color="#2ecc71" />
//                             <View style={{ marginLeft: 10 }}>
//                                 <Text style={styles.infoLabel}>Price</Text>
//                                 <Text style={styles.infoValue}>$50 per hour</Text>
//                             </View>
//                         </View>
//                     </View>

//                     {/* 3. Time Slots Grid */}
//                     <Text style={styles.label}>Time Slots</Text>
//                     <View style={styles.slotsGrid}>
//                         {slots.map((slot, index) => (
//                             <TouchableOpacity
//                                 key={index}
//                                 style={[styles.slotItem, index === 0 && styles.activeSlot]}
//                             >
//                                 <Text style={[styles.slotText, index === 0 && styles.activeSlotText]}>[{slot}]</Text>
//                             </TouchableOpacity>
//                         ))}
//                     </View>
//                 </View>
//             </ScrollView>

//             {/* Sticky Book Button */}
//             <TouchableOpacity style={styles.bookButtonMain}>
//                 <Text style={styles.bookButtonText}>Book Slots</Text>
//             </TouchableOpacity>
//         </SafeAreaView>
//     );
// };

// export default VenueDetails;
// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: '#000' },
//     headerImage: { width: '100%', height: 300 },
//     backButton: {
//         margin: 20,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//         width: 40, height: 40,
//         borderRadius: 20,
//         justifyContent: 'center', alignItems: 'center'
//     },
//     content: { padding: 20 },
//     title: { color: 'white', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
//     label: { color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 15 },
//     description: { color: '#888', fontSize: 14, marginTop: 5, lineHeight: 20 },

//     infoContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
//     infoBox: {
//         flexDirection: 'row',
//         backgroundColor: '#1A1A1A',
//         padding: 15, borderRadius: 15,
//         width: '48%', alignItems: 'center'
//     },
//     infoLabel: { color: '#888', fontSize: 12 },
//     infoValue: { color: 'white', fontSize: 13, fontWeight: 'bold' },

//     slotsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 },
//     slotItem: {
//         width: '31%',
//         backgroundColor: '#1A1A1A',
//         paddingVertical: 12,
//         borderRadius: 8,
//         marginBottom: 10,
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#333'
//     },
//     activeSlot: { backgroundColor: 'rgba(46, 204, 113, 0.2)', borderColor: '#2ecc71' },
//     slotText: { color: '#888', fontSize: 10 },
//     activeSlotText: { color: '#2ecc71' },

//     bookButtonMain: {
//         backgroundColor: '#2ecc71',
//         margin: 20,
//         padding: 15,
//         borderRadius: 30,
//         alignItems: 'center'
//     },
//     bookButtonText: { color: 'black', fontWeight: 'bold', fontSize: 18 }
// });



import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

const VenueDetails = () => {
    return (
         <ScrollView style={styles.container}>
      <View style={styles.imageBox} />

      <Text style={styles.heading}>Cricket Booking</Text>
      <Text style={styles.desc}>
        Book indoor cricket easily with Slot2Play. Choose your time slot and enjoy.
      </Text>

      <View style={styles.infoRow}>
        <Text style={styles.info}>📍 {venue.name}</Text>
        <Text style={styles.price}>{venue.price}</Text>
      </View>

      <Text style={styles.slotTitle}>Time Slots</Text>

      <View style={styles.slots}>
        {['9-10 AM','10-11 AM','11-12 PM','12-1 PM'].map(slot => (
          <View key={slot} style={styles.slot}>
            <Text style={styles.slotText}>{slot}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.bookBtn}>
        <Text style={styles.bookText}>Book Slots</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default VenueDetails
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  imageBox: {
    height: 180,
    backgroundColor: '#1a0833',
    borderRadius: 20,
    marginBottom: 16,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  desc: {
    color: '#aaa',
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  info: {
    color: 'white',
  },
  price: {
    color: '#2ecc71',
    fontWeight: 'bold',
  },
  slotTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  slots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  slot: {
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  slotText: {
    color: 'white',
  },
  bookBtn: {
    backgroundColor: '#2ecc71',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  bookText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});