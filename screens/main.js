import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './home'
import Order from './order'
import Details from './details'
import React from 'react'
import {OrderContext,OrderProvider} from '../context/listOrderContext'

const Tab = createBottomTabNavigator()

const Main = (props)=>{
    const listOrders = []
    return (
        <OrderProvider>
            <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name= 'home' component={Home}/>
                <Tab.Screen name= 'details' component={Details} />
                <Tab.Screen name= 'order' component={Order}/>
            </Tab.Navigator>
        </OrderProvider>
    )
}

export default Main;