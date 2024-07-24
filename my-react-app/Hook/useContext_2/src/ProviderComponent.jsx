import React, { useState } from 'react'
import ThemeContext from './CreateComponent';
import ConsumerComponent from './ConsumerComponent';

export default function ProviderComponent() {

    const [theme, setTheme] = useState('light');

    const handleTheme = ()=>{
        setTheme((prevTheme) =>(prevTheme === 'light' ? 'dark' : 'light'))
    }

  return (
    <ThemeContext.Provider value={theme}>
        <button onClick={handleTheme}>Toggle Theme</button>
        <ConsumerComponent/>
    </ThemeContext.Provider>
  )
}
