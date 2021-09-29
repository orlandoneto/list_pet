import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, View, StyleSheet, Text, StatusBar} from 'react-native';

import {useRoute} from '@react-navigation/native';

import Api from '../../Api';

const PetDetails = () => {
  const route = useRoute();

  const [pet, setPet] = useState({});

  const handlegetPetList = async () => {
    try {
      const result = await Api.getPetById(route?.params?.petId);
      if (result) {
        setPet(result);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    handlegetPetList();
  }, [route]);

  const AuthorInfo = useCallback(
    () => (
      <View style={styles.petInfoArea}>
        <View style={styles.item}>
          <Text style={styles.title}>{'Name : ' + pet?.name}</Text>
          <Text style={styles.title}>{'Bred for : ' + pet?.bred_for}</Text>
          <Text style={styles.title}>{'Breed Group : ' + pet?.bred_for}</Text>
          <Text style={styles.title}>{'Life Span : ' + pet?.breed_group}</Text>
          <Text style={styles.title}>{'Temperament : ' + pet?.life_span}</Text>
          <Text style={styles.title}>{'Origin : ' + pet?.temperament}</Text>
        </View>
      </View>
    ),
    [pet],
  );

  return (
    <SafeAreaView style={styles.container}>
      <AuthorInfo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    padding: 5,
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'plum',
    paddingTop: 2,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  footer: {
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  petInfoArea: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  petImageArea: {
    justifyContent: 'center',
  },
  petImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

export default PetDetails;
