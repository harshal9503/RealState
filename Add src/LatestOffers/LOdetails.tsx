import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LOdetails = ({ route }) => {
  const { offer } = route.params;
  const [phone, setPhone] = useState('');
  const [propertyDetails, setPropertyDetails] = useState(offer);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPhoneNumber = async () => {
      const storedPhone = await AsyncStorage.getItem('userPhone');
      if (storedPhone) {
        setPhone(`+91${storedPhone}`);
      }
    };

    fetchPhoneNumber();
  }, []);

  const parseImages = (images) => {
    const baseURL = 'https://textcode.co.in/propertybazar/public/';
    if (typeof images === 'string') {
      images = images.replace(/[\[\]"]+/g, '').split(',').map(image => baseURL + image.trim());
    }
    return images;
  };

  const handleCallPress = () => {
    if (phone) {
      Linking.openURL(`tel:${phone}`);
    }
  };

  const fetchPDFs = async () => {
    try {
      const response = await fetch('https://textcode.co.in/propertybazar/public/api/add-offers');
      if (!response.ok) {
        console.error('Network response was not ok', response.statusText);
        return [];
      }
      const data = await response.json();
      return data.pdfs || [];
    } catch (error) {
      console.error('Failed to fetch PDFs:', error);
      return [];
    }
  };

  const handleAction = async (label) => {
    switch (label) {
      case 'Location':
        navigation.navigate('Location');
        break;
      case 'eBrochure':
        const pdfs = await fetchPDFs();
        navigation.navigate('EBrochure', { pdfs });
        break;
      case 'Gallery':
        navigation.navigate('Gallery', { images: parseImages(propertyDetails.thumbnail_image) });
        break;
      case 'Video':
        if (Array.isArray(propertyDetails.videos)) {
          const videoUrls = JSON.parse(propertyDetails.videos).map(video => video.replace(/\\/g, ''));
          navigation.navigate('Video', { videoUrls });
        } else {
          console.error('Videos are not available');
        }
        break;
      case 'Site Visit':
        navigation.navigate('SiteVisit');
        break;
      default:
        break;
    }
  };

  if (!propertyDetails) {
    return <Text>Loading...</Text>;
  }

  const images = parseImages(propertyDetails.thumbnail_image || []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          {images[0] ? (
            <Image
              source={{ uri: images[0] }}
              style={styles.mainImage1}
            />
          ) : (
            <Text style={styles.imageError}>Image 1 not available</Text>
          )}
          <View style={styles.imageCon}>
            {images[1] ? (
              <Image
                source={{ uri: images[1] }}
                style={styles.mainImage}
              />
            ) : (
              <Text style={styles.imageError}>Image 2 not available</Text>
            )}
            <Text style={styles.headerTitle}>₹ {propertyDetails.price}</Text>
          </View>
          <View style={styles.actionsContainer}>
            {actionButtons.map((button, index) => (
              <TouchableOpacity key={index} style={styles.actionButton} onPress={() => handleAction(button.label)}>
                <View style={styles.actionButtonCircle}>
                  <Image source={button.image} style={styles.actionButtonIcon} />
                </View>
                <Text style={styles.actionButtonText}>{button.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.propertyTitle}>{propertyDetails.name}</Text>
          <Text style={styles.propertySubtitle}>{propertyDetails.location}</Text>
          <Text style={styles.brokerOffer}>View Broker Offer</Text>
          <Text style={styles.propertyDescription}>
            {propertyDetails.description}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LOReadMore', { propertyDetails })}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={[styles.footerButton, styles.interestedButton]}>
          <Image source={require('../../assets/star.png')} style={[styles.footerButtonIcon, styles.interestedButtonIcon]} />
          <Text style={[styles.footerButtonText, styles.interestedButtonText]}>I'm Interested</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleCallPress}>
          <Image source={require('../../assets/call.png')} style={styles.footerButtonIcon} />
          <Text style={styles.footerButtonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Gallery', { images })}>
          <Image source={require('../../assets/share.png')} style={styles.footerButtonIcon} />
          <Text style={styles.footerButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const actionButtons = [
  { label: 'Location', image: require('../../assets/location.png') },
  { label: 'eBrochure', image: require('../../assets/brochure.png') },
  { label: 'Gallery', image: require('../../assets/gallery.png') },
  { label: 'Video', image: require('../../assets/vidio.png') },
  { label: 'Site Visit', image: require('../../assets/Visits.png') },
];

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#28282B',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 19,
  },
  imageCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
    marginLeft: -300,
  },
  mainImage: {
    width: 120,
    height: 100,
  },
  mainImage1: {
    width: '70%',
    height: 150,
    marginBottom: 250,
  },
  imageError: {
    color: 'red',
  },
  infoContainer: {
    padding: 16,
    borderRadius: 8,
    marginTop: -100,
  },
  priceText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  propertyTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  propertySubtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  brokerOffer: {
    color: '#1E90FF',
    marginBottom: 8,
  },
  propertyDescription: {
    fontSize: 14,
    color: 'white',
  },
  readMore: {
    fontSize: 14,
    color: '#1E90FF',
    marginTop: 10,
  },
  actionsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  actionButton: {
    alignItems: 'center',
    marginVertical: 8,
  },
  actionButtonCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fdd700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#28282B',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
  footerButtonIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  footerButtonText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
  },
  interestedButton: {
    backgroundColor: 'white',
    borderColor: 'black',
  },
  interestedButtonText: {
    color: 'black',
  },
  interestedButtonIcon: {
    tintColor: 'black',
  },
});

export default LOdetails;
