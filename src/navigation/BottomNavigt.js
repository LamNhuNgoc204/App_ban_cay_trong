import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home'
import FindProduct from '../screen/FindProduct'
import Profile from '../screen/Profile'
import Notifycation from '../screen/Notifycation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HandBook from '../screen/handbook/HandBook'
import HandBookDetail from '../screen/handbook/HandBookDetail'
import History from '../screen/histories/History'
import HistoryDetails from '../screen/histories/HistoryDetails'
import Cart from '../screen/Cart'
import Categories from '../screen/Categories'
import CheckBill from '../screen/CheckBill'
import ProductDetail from '../screen/ProductDetail'
import Questions from '../screen/Questions'
import UpdateInfo from '../screen/UpdateInfo'
import Login from '../screen/Login'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#fff',
      }
    }}>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => <Image source={focused ? require('../assets/images/iconNavi/homeS.png') : require('../assets/images/iconNavi/home.png')} />
      }} />
      <Tab.Screen name='FindProducts' component={FindProduct} options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => <Image source={focused ? require('../assets/images/iconNavi/findS.png') : require('../assets/images/iconNavi/find.png')} />
      }} />
      <Tab.Screen name='Notifycation' component={Notifycation} options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => <Image source={focused ? require('../assets/images/iconNavi/notifyS.png') : require('../assets/images/iconNavi/notify.png')} />
      }} />
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => <Image source={focused ? require('../assets/images/iconNavi/profileS.png') : require('../assets/images/iconNavi/profile.png')} />
      }} />
    </Tab.Navigator>
  )
}

const BottomNavigt = () => {
  return (
    <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='BottomTab' component={BottomTab} />
      <Stack.Screen name='HandBook' component={HandBook} />
      <Stack.Screen name='HandBookDetail' component={HandBookDetail} />
      <Stack.Screen name='History' component={History} />
      <Stack.Screen name='HistoryDetail' component={HistoryDetails} />
      <Stack.Screen name='Cart' component={Cart} />
      <Stack.Screen name='Categories' component={Categories} />
      <Stack.Screen name='CheckBill' component={CheckBill} />
      <Stack.Screen name='FindProducts' component={FindProduct} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Notifycation' component={Notifycation} />
      <Stack.Screen name='ProductDetail' component={ProductDetail} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Questions' component={Questions} />
      <Stack.Screen name='UpdateInfo' component={UpdateInfo} />
    </Stack.Navigator>
  )
}

export default BottomNavigt