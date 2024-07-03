// EBrochure.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const EBrochure = ({ route }) => {
  const { pdfs } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pdfs.length > 0 ? (
        pdfs.map((pdf, index) => (
          <WebView
            key={index}
            source={{ uri: pdf }}
            style={styles.pdf}
          />
        ))
      ) : (
        <Text style={styles.noDataText}>No brochures available</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#28282B',
  },
  pdf: {
    height: 500,
    marginVertical: 8,
  },
  noDataText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default EBrochure;
