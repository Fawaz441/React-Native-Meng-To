import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen'
import SectionScreen from '../screens/SectionScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CoursesScreen from '../screens/CoursesScreen'
import ProjectsScreen from '../screens/ProjectsScreen'


const activeColor = "#4775f2"
const inactiveColor = "#b8bece" 


const HomeStack = createStackNavigator({
    Home:HomeScreen,
    Section:SectionScreen
},{
    mode:"modal"
})

HomeStack.navigationOptions = ({navigation}) => {
    var tabBarVisible = true;
    const routeName = navigation.state.routes[navigation.state.index].routeName
    if(routeName == "Section"){
        tabBarVisible = false
    }
    return {
        tabBarVisible,
        tabBarLabel:"Home",
        tabBarIcon:({focused}) => (<Ionicons name='ios-home' size={26} color={focused ? activeColor:inactiveColor}/>)
    }
}

const CoursesStack = createStackNavigator({
    Courses:CoursesScreen,
})

CoursesStack.navigationOptions = {
    tabBarLabel:"Courses",
    tabBarIcon:({focused}) => (<Ionicons name='ios-albums' size={26} color={focused ? activeColor:inactiveColor}/>)
}


const ProjectStack = createStackNavigator({
    Projects:ProjectsScreen
})

ProjectStack.navigationOptions = {
    tabBarLabel:"Projects",
    tabBarIcon:({focused}) => (<Ionicons name='ios-folder' size={26} color={focused ? activeColor:inactiveColor}/>)
}

const TabNavigator = createBottomTabNavigator({
    ProjectStack,HomeStack,CoursesStack
})

export default TabNavigator