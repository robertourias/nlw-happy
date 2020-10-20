import React from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../images/map-marker.png';

export default function OrphanageDetails() {
    return (
        <View style={styles.container}>
            <Text>Olá</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
  });