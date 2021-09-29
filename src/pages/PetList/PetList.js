import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Api from '../../Api';

const PetList = () => {
  const navigation = useNavigation();
  const [pets, setPets] = useState([]);

  const handlegetPetList = async () => {
    try {
      const result = await Api.getPets();
      if (result) {
        setPets(result);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    handlegetPetList();
  }, []);

  const PetInfo = ({id, name, book, image}) => (
    <TouchableOpacity
      style={styles.petInfoArea}
      onPress={() => navigation.navigate('PetDetails', {petId: id})}>
      <View style={styles.petImageArea}>
        <Image style={styles.petImage} source={{uri: image?.url}} />
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>{'Name : ' + name}</Text>
        <Text style={styles.title}>{'Bred for : ' + book}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <PetInfo
      id={item.id}
      name={item.name}
      book={item.bred_for}
      image={item.image}
    />
  );

  const SeparatorComponent = () => {
    return <View style={styles.separatorLine} />;
  };

  const HeaderComponent = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>Our List of Pets!!</Text>
      </View>
    );
  };

  const FooterComponent = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>
          All rights reserved by Adhithi Ravichandran 2020.
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pets}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
      />
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
    fontSize: 17,
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

export default PetList;
