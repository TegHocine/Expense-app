import { StyleSheet } from 'react-native'

import { GlobalStyles } from '../../constants/style'

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 2
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: GlobalStyles.colors.accent2,
    margin: 6
  },
  inputsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputWrapper: {
    margin: 6
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: GlobalStyles.colors.primary800
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.gray900,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent2
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  btnWrapper: {
    marginVertical: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    borderColor: GlobalStyles.colors.error500,
    backgroundColor: GlobalStyles.colors.error50
  }
})

export default styles
