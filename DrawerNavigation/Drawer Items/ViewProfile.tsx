import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const ViewProfile = () => {
  const [name, setName] = useState('');
  const [membershipID, setMembershipID] = useState('');
  const [reraNo, setReraNo] = useState('ABC123');
  const [city, setCity] = useState('');
  const [zones, setZones] = useState('');
  const [area, setArea] = useState('');
  const [company, setCompany] = useState('');
  const [workingArea, setWorkingArea] = useState('');
  const [dealIn, setDealIn] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [endDate, setEndDate] = useState('');
  const [profileImage, setProfileImage] = useState(require('../../assets/h.jpg'));
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedName = await AsyncStorage.getItem('userName');
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPhone = await AsyncStorage.getItem('userPhone');
      const storedMembershipID = await AsyncStorage.getItem('membershipId');
      const storedImage = await AsyncStorage.getItem('profileImage');
      if (storedName) setName(storedName);
      if (storedEmail) setEmail(storedEmail);
      if (storedPhone) setPhone(storedPhone);
      if (storedMembershipID) setMembershipID(storedMembershipID);
      if (storedImage) setProfileImage({ uri: storedImage });
    };

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('user_id', membershipID);
      formData.append('name', name);
      formData.append('rera_no', reraNo);
      formData.append('city', city);
      formData.append('zones', zones);
      formData.append('area', area);
      formData.append('company', company);
      formData.append('working_area', workingArea);
      formData.append('deal_in', dealIn);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('end_date', endDate);

      if (profileImage.uri) {
        const localUri = profileImage.uri;
        const filename = localUri.split('/').pop();
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : `image`;

        formData.append('image', { uri: localUri, name: filename, type });
      }

      const response = await fetch('https://textcode.co.in/propertybazar/public/api/user/update/41', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        Alert.alert('Success', 'User details updated successfully');
        await AsyncStorage.setItem('profileImage', profileImage.uri);
      } else {
        throw new Error('Failed to update user details');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while updating user details');
    } finally {
      setIsLoading(false);
    }
  };

  const chooseImageFromGallery = async () => {
    // Simulated implementation for choosing an image from the gallery
    setProfileImage({ uri: 'https://example.com/selected-image.jpg' });
    setModalVisible(false);
  };

  const takeImage = async () => {
    // Simulated implementation for taking an image
    setProfileImage({ uri: 'https://example.com/taken-image.jpg' });
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.boxcontainer1}>
        <View style={styles.imageContainer}>
          <Image
            source={profileImage}
            style={styles.image}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.membership}>Membership ID: {membershipID}</Text>
        </View>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Change Profile Picture</Text>
            <TouchableOpacity style={styles.modalButton} onPress={chooseImageFromGallery}>
              <Text style={styles.modalButtonText}>Choose from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={takeImage}>
              <Text style={styles.modalButtonText}>Take Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.boxcontainer2}>
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Membership ID:</Text>
          <Text style={[styles.input, styles.nonEditable]}>{membershipID}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>RERA No:</Text>
          <TextInput style={styles.input} value={reraNo} onChangeText={setReraNo} />
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>City:</Text>
          <TextInput style={styles.input} value={city} onChangeText={setCity} />
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Zones:</Text>
          <TextInput style={styles.input} value={zones} onChangeText={setZones} />
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Area:</Text>
          <TextInput style={styles.input} value={area} onChangeText={setArea} />
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Company:</Text>
          <TextInput style={styles.input} value={company} onChangeText={setCompany} />
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Working Area:</Text>
          <TextInput style={styles.input} value={workingArea} onChangeText={setWorkingArea} />
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Deal In:</Text>
          <TextInput style={styles.input} value={dealIn} onChangeText={setDealIn} />
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={[styles.input, styles.nonEditable]}>{phone}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.boxContainer}>
          <Text style={styles.label}>End Date:</Text>
          <TextInput style={styles.input} value={endDate} onChangeText={setEndDate} />
        </View>
        <View style={styles.line1} />
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate} disabled={isLoading}>
          {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.updateButtonText}>Update Details</Text>}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#Fdd700',
    borderRadius: 15,
    padding: 5,
  },
  editButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileInfo: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  membership: {
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginTop: 5,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  line1: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 0,
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: moderateScale(13),
    color: 'black',
  },
  input: {
    flex: 1,
    height: verticalScale(40),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    color: 'black',
    alignSelf: 'center',
    marginLeft: 3,
  },
  nonEditable: {
    backgroundColor: '#e9ecef',
    color: 'black',
  },
  updateButton: {
    width: '100%',
    height: verticalScale(50),
    backgroundColor: '#Fdd700',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    marginTop: 10,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  boxcontainer1: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
  },
  boxcontainer2: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    width: '100%',
    padding: 10,
    backgroundColor: '#Fdd700',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ViewProfile;
