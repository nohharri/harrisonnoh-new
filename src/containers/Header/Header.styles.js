
import { fonts } from '../../constants';

const HEADER_PADDING = 10;

const styles = {
   container: {
      display: 'flex',
      alignItems: 'center',
      background: '1890ff',
      height: 50,
      paddingTop: HEADER_PADDING,
      paddingBottom: HEADER_PADDING,
      fontWeight: 'bold',
   },
   logo: {
      flex: 1,
      marginLeft: 20,
      textAlign: 'left',
      textTransform: 'uppercase',
      color: '#404040',
      fontSize: 30,
      cursor: 'pointer',
   },
   navigation: {
      flex: 0,
      marginRight: 20,
      fontSize: 25,
   },
   navigationLink: {
      marginRight: 20,
      cursor: 'pointer',
      fontFamily: fonts.rubik,
   }
}

export default styles;