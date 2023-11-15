import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

// const Stack = createNativeStackNavigator(); 
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigation(){
  return <Drawer.Navigator>
    <Drawer.Screen name='Categories' component={CategoriesScreen}/>
    <Drawer.Screen name='Favorites' component={FavoritesScreen}/>
  </Drawer.Navigator>;
}

export default function App(){
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle:{backgroundColor:'#351401'},
            headerTintColor:'white',
            contentStyle: {backgroundColor: '#3f2f25'}
          }}
        >
        {/* You can therefore change the initial screen by changing the <Stack.Screen> order. Alternatively, there also is an initialRouteName prop that can be set on the navigator component */}
        {/* Or setting default screen */}
        {/* <Stack.Navigator  initialRouteName="MealsCategories"> */}
          <Stack.Screen 
              name='Drawer' 
              // name='MealsCategories' 
              component={DrawerNavigation}
              // component={CategoriesScreen}
              options={{
                title:'All Categories',
              }}
          />
          <Stack.Screen 
              name='MealsOverview'
              component={MealsOverviewScreen}
              // options={({route, navigation}) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
          />
          <Stack.Screen
            name='MealDetail' 
            component={MealDetailScreen}
           
          />
        </Stack.Navigator>
        {/* <CategoriesScreen/> */}
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})