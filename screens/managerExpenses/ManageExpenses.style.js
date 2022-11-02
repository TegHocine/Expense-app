import { StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/style'
const styles = StyleSheet.create({
  btnWrapper: {
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 26
  },
  deleteWrapper: {
    paddingTop: 15,
    marginTop: 26,
    marginHorizontal: 26,
    borderColor: GlobalStyles.colors.primary800,
    borderTopWidth: 2
  }
})
export default styles
