import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ManageExpense from './screens/managerExpenses/ManageExpenses'
import AllExpense from './screens/allExpenses/AllExpenses'
import RecentExpense from './screens/recentExpenses/RecentExpenses'
import Btn from './components/UI/Btn'

import Icon from 'react-native-vector-icons/Ionicons'

import ExpensesProvider from './context/expensesContext'

import { GlobalStyles } from './constants/style'

const { Screen, Navigator } = createNativeStackNavigator()
const bottomNavigator = createBottomTabNavigator()

const BottomRoute = () => {
  return (
    <bottomNavigator.Navigator
      screenOptions={({ navigation }) => ({
        headerTintColor: GlobalStyles.colors.primary600,
        tabBarActiveTintColor: GlobalStyles.colors.primary600,
        tabBarInactiveTintColor: GlobalStyles.colors.gray400,
        headerRight: ({ tintColor }) => (
          <Btn
            name={'add'}
            size={20}
            color={tintColor}
            bgColor={GlobalStyles.colors.accent2}
            onPress={() => navigation.navigate('manageExpense')}
            icon
          />
        )
      })}>
      <bottomNavigator.Screen
        name='recentExpense'
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color }) => (
            <Icon
              name='calendar'
              color={color}
              size={20}
            />
          )
        }}
      />
      <bottomNavigator.Screen
        name='allExpense'
        component={AllExpense}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color }) => (
            <Icon
              name='hourglass'
              color={color}
              size={20}
            />
          )
        }}
      />
    </bottomNavigator.Navigator>
  )
}

export default function App() {
  return (
    <ExpensesProvider>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerTintColor: GlobalStyles.colors.primary600
          }}>
          <Screen
            name='expenseView'
            component={BottomRoute}
            options={{ headerShown: false }}
          />
          <Screen
            name='manageExpense'
            component={ManageExpense}
            options={{
              presentation: 'modal'
            }}
          />
        </Navigator>
      </NavigationContainer>
    </ExpensesProvider>
  )
}
