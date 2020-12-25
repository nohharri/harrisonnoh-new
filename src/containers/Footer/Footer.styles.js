import { findByLabelText } from "@testing-library/react";

const FOOTER_PADDING = 10;

const styles = {
   footer: {
      display:'flex',
      height: 50,
      fontSize: 30,
      paddingLeft: FOOTER_PADDING,
      paddingRight: FOOTER_PADDING,
      paddingTop: FOOTER_PADDING,
      paddingBottom: FOOTER_PADDING,
      backgroundColor: '#c4c4c4',
      alignItems: 'center',
      justifyContent:'center',         
   }
}

export default styles;