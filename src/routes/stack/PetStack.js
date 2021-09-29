import React from 'react';

import {Text, TouchableOpacity, Platform} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import PetList from '../../pages/PetList/PetList';
import PetDetails from '../../pages/PetDetails/PetDetails';

import ArrowLeftIcon from '~/assets/svg/arrow-left.svg';

const Stack = createStackNavigator();

export const PetStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="PetList"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F6F2F8'},
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="PetList"
        component={PetList}
        options={({route, navigation}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: '#FFFFFF',
            elevation: 1,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
          headerTitleContainerStyle: {
            left: 50,
            width: '50%',
            justifyContent: 'center',
          },

          headerTitle: () => (
            <Text
              style={{
                color: '#666666',
                fontSize: 16,
                fontFamily: 'Roboto-Medium',
              }}>
              Pet List
            </Text>
          ),
          headerTitleAlign: 'left',
        })}
      />

      <Stack.Screen
        name="PetDetails"
        component={PetDetails}
        options={({route, navigation}) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: '#FFFFFF',
            elevation: 1,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
          headerTitleContainerStyle: {
            left: 50,
            width: '50%',
            justifyContent: 'center',
          },
          headerBackImage: () => (
            <TouchableOpacity
              style={{
                ...Platform.select({
                  ios: {
                    marginLeft: 20,
                  },
                  android: {
                    marginLeft: 10,
                  },
                }),
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.goBack()}>
              <ArrowLeftIcon />
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
          headerTitle: () => (
            <Text
              style={{
                color: '#666666',
                fontSize: 16,
                fontFamily: 'Roboto-Medium',
              }}>
              Pet Details
            </Text>
          ),
          headerTitleAlign: 'left',
        })}
      />
    </Stack.Navigator>
  );
};
