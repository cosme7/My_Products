import React, {useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themeStyle';
import * as S from './themeStyle'

export default function Theme({children}) {

    const [theme, setTheme] = useState('light')
    const [checkMount, setCheckMount] = useState(false)

    const setMode = mode => {
      window.localStorage.setItem('theme', mode)
      setTheme(mode)
    };

    const toggleTheme = () => {
      theme === 'light' ? setMode('dark') : setMode('light');
    }

    useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      if (localTheme) {
        setTheme(localTheme);
      } else {
        setMode('light');
      }

      setCheckMount(true)
    }, []);

    if(!checkMount){
      return <div/> 
    }

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <S.ToggleBtn aria-label='Change Theme' onClick={() => {toggleTheme()}}>
              <span></span>
            </S.ToggleBtn>   
                {children}
            </ThemeProvider>    
        </>
    );
}