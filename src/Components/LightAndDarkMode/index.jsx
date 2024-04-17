import React from 'react'
import useLocalStorage from './useLocalStorage'
import './styles.css'

const LightAndDarkMode = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    function handleToggleTheme() {
        setTheme(
            theme === 'light'
            ? 'dark'
            : 'light'
        )
    }

    console.log(theme)

  return (
    <div 
        className = 'light-dark-mode'
        data-theme = {theme}
    >
        <div className="light-dark-container">
            <p>Hello World!</p>
            <button onClick = {handleToggleTheme}>
                Change Theme
            </button>
        </div>
    </div>
  )
}

export default LightAndDarkMode