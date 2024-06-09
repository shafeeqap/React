import React, { useContext } from 'react'
import ThemeContext from './CreateComponent';


export default function ConsumerComponent() {

    const theme = useContext(ThemeContext);

    const styles = {
        light: {
          backgroundColor: 'white',
          color: 'black',
          padding: '20px',
          border: '1px solid black'
        },
        dark: {
          backgroundColor: 'black',
          color: 'white',
          padding: '20px',
          border: '1px solid white'
        }
      };
    

  return (
    <div style={theme === 'light' ? styles.light : styles.dark}>
        The current theme is {theme}.
    </div>
  )
}
