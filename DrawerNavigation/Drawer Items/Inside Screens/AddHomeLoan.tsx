import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const AddHomeLoan = () => {
  const navigation = useNavigation(); // Initialize navigation hook

  const [clientName, setClientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [emailId, setEmailId] = useState('');
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const fetchUserId = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      setUserId(storedUserId);
    };
    fetchUserId();
  }, []);

  const handleAddClient = async () => {
    if (!clientName || !mobileNumber) {
      Alert.alert('Error', 'Client Name and Mobile Number are required. Please fill them in!');
      return;
    }

    if (!termsAccepted) {
      Alert.alert('Error', 'You must accept the terms and conditions to proceed.');
      return;
    }

    const formData = {
      client_name: clientName,
      mobile_number: mobileNumber,
      loan_amount: loanAmount,
      email_id: emailId,
      user_id: userId,
    };

    setLoading(true);

    try {
      const response = await fetch(`https://textcode.co.in/propertybazar/public/api/homeloan/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Alert.alert('Success ✅', 'Client added successfully');
        console.log('User ID:', userId);
        console.log(formData);

        // Navigate to Home screen after successful addition
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Failed to add client. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Text style={styles.heading}>ADD CLIENT</Text>
        <TextInput
          style={styles.input}
          placeholder="Client Name"
          value={clientName}
          onChangeText={setClientName}
          placeholderTextColor={'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Loan Amount (Optional)"
          value={loanAmount}
          onChangeText={setLoanAmount}
          keyboardType="numeric"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Email ID (Optional)"
          value={emailId}
          onChangeText={setEmailId}
          keyboardType="email-address"
          placeholderTextColor={'black'}
        />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)} style={styles.checkbox}>
            {termsAccepted && <View style={styles.checked} />}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            <Text style={{ color: 'black', fontSize: 16 }}>I accept to the</Text>
            <Text style={{ color: '#fdd700', fontSize: 16, textDecorationLine: 'underline', fontWeight: 'bold' }}> Terms & Conditions</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddClient} disabled={loading}>
        {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Submit</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'smokewhite',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 40,
    color: 'black',
  },
  button: {
    backgroundColor: '#fdd700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
    borderColor: 'black',
    marginBottom: 120,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center'
  },
  boxContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#fdd700',
  },
  checkboxLabel: {
    marginLeft: 10,
    color: 'black',
  },
});

export default AddHomeLoan;
