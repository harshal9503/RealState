import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const HomeLoan = () => {
  const navigation = useNavigation();
  const [fabMenuVisible, setFabMenuVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef(null);

  const handleAddClient = () => {
    navigation.navigate('Add Home Loan');
  };

  const toggleFabMenu = () => {
    setFabMenuVisible(!fabMenuVisible);
  };

  const handleSharePress = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this home loan offer!',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to share the offer');
    }
  };

  const handleAddRequirementInventory = () => {
    navigation.navigate('Rq1');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} ref={scrollViewRef}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/LoanBG.jpg')}
          style={styles.image}
        />
        <View style={styles.boxContainer}>
          <Text style={styles.heading}>Get a quick loan for your client</Text>
          <View style={styles.bulletContainer}>
            <View style={styles.bullet}>
              <Image source={require('../../assets/circle.jpg')} style={styles.logo} />
              <Text style={styles.bulletText}>Add client Name and Mobile Number</Text>
            </View>
            <View style={styles.bullet}>
              <Image source={require('../../assets/circle.jpg')} style={styles.logo} />
              <Text style={styles.bulletText}>Auto-Generated SMS approval goes to Client for verification</Text>
            </View>
            <View style={styles.bullet}>
              <Image source={require('../../assets/circle.jpg')} style={styles.logo} />
              <Text style={styles.bulletText}>Client approves the SMS verification</Text>
            </View>
            <View style={styles.bullet}>
              <Image source={require('../../assets/circle.jpg')} style={styles.logo} />
              <Text style={styles.bulletText}>Client onboarded at TU Home Loans</Text>
            </View>
            <View style={styles.bullet}>
              <Image source={require('../../assets/circle.jpg')} style={styles.logo} />
              <Text style={styles.bulletText}>Loan Processed with multiple banks for best deal</Text>
            </View>
            <View style={styles.bullet}>
              <Image source={require('../../assets/circle.jpg')} style={styles.logo} />
              <Text style={styles.bulletText}>Sit back and relax</Text>
            </View>
            <View style={styles.bullet}>
              <Image source={require('../../assets/circle.jpg')} style={styles.logo} />
              <Text style={styles.bulletText}>Earn Additional Commission on Disbursed loan amount *</Text>
            </View>
            <View style={styles.bullet}>
              <Image source={require('../../assets/circle.jpg')} style={styles.logo} />
              <Text style={styles.bulletText}>The client gets Exciting Cashback on the Disbursed loan amount *</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddClient}>
          <Image
            source={require('../../assets/plus1.png')}
            style={styles.plusIcon}
          />
          <Text style={styles.addButtonText}>Add Client</Text>
        </TouchableOpacity>
        <View style={styles.fabContainer}>
          <TouchableOpacity style={styles.fab} onPress={toggleFabMenu}>
            <Text style={styles.fabText}>+</Text>
          </TouchableOpacity>
          {fabMenuVisible && (
            <View style={styles.fabOptionsContainer}>
              <TouchableOpacity style={styles.fabOption} onPress={handleSharePress}>
                <Image source={require('../../assets/share.png')} style={styles.optionIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.fabOption} onPress={handleAddRequirementInventory}>
                <Image source={require('../../assets/hotel.png')} style={styles.optionIcon} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 380,
    height: 200,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  bulletContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  bullet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bulletText: {
    color: 'black',
    marginLeft: 10,
  },
  logo: {
    width: 10,
    height: 10,
    marginRight: 0,
    tintColor: '#ffd700',
    borderRadius: 50,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffd700',
    paddingVertical: 10,
    paddingHorizontal: 130,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
    width: '100%',
  },
  addButtonText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 15,
  },
  plusIcon: {
    width: 20,
    height: 20,
  },
  boxContainer: {
    backgroundColor: '#FAF9F6',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    alignItems: 'center',
  },
  fab: {
    backgroundColor: '#28282B',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  fabText: {
    color: '#fdd700',
    fontSize: 24,
    fontWeight: 'bold',
  },
  fabOptionsContainer: {
    position: 'absolute',
    bottom: 70,
    right: 0,
    alignItems: 'center',
  },
  fabOption: {
    backgroundColor: '#282828',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    marginBottom: 10,
    marginLeft: -60,
  },
  optionIcon: {
    width: 23,
    height: 23,
    tintColor: '#fdd700',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default HomeLoan;
