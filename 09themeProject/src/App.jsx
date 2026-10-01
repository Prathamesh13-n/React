import { useState, useEffect } from 'react'
import './App.css'
import ThemeBtn from './compents/Theme'
import Card from './compents/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // Check and apply the theme
  useEffect(() => {
    const html = document.querySelector('html')

    html.classList.remove('light', 'dark')
    html.classList.add(themeMode)
  }, [themeMode])

  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">

        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>

      </div>
    </div>
  )
}

export default App