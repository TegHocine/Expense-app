import axios from 'axios'

const BACKEND_URL =
  'https://react-native-cours-c75f4-default-rtdb.europe-west1.firebasedatabase.app/'

export const addExpenseFb = (expenseData) => {
  axios.post(BACKEND_URL + 'expenses.json', expenseData)
}

export const fetchExpense = () => {
  axios.get(BACKEND_URL + 'expenses.json')
}
