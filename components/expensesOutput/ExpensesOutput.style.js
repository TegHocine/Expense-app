import { StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/style'

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  summary: {
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8
  },
  period: {
    fontSize: 13,
    color: GlobalStyles.colors.primary700
  },
  total: {
    fontSize: 16,
    color: GlobalStyles.colors.primary800,
    fontWeight: 'semibold'
  },

  expenseItem: {
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8
  },
  description: {
    marginBottom: 8,
    fontSize: 16,
    color: GlobalStyles.colors.primary800,
    fontWeight: 'semibold'
  },
  date: {
    fontSize: 12,
    color: GlobalStyles.colors.primary600
  },
  amount: {
    padding: 8,
    borderRadius: 5,
    fontSize: 12,
    backgroundColor: 'white',
    color: GlobalStyles.colors.gray900,
    minWidth: 70,
    textAlign: 'center'
  },
  pressed: { opacity: 0.7 },
  fallBackText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: GlobalStyles.colors.primary600,
    marginVertical: 10
  }
})
export default styles
