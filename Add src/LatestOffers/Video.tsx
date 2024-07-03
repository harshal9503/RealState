import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const VideoScreen = ({ route }) => {
  const { videoUrls } = route.params;

  return (
    <View style={styles.container}>
      {videoUrls.length > 0 ? (
        <FlatList
          data={videoUrls}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.videoContainer}
              onPress={() => Linking.openURL(item)}
            >
              <Text style={styles.videoText}>Watch Video</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noVideosText}>No videos available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  videoContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  videoText: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  noVideosText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
  },
});

export default VideoScreen;
