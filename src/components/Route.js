import { useEffect } from "react"
import { useState } from "react"

function Route({path, children}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
      console.log('cambio')
    }

    window.addEventListener('popstate', onLocationChange)
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }

  }, [])

  return currentPath === path ? children : null
}

export default Route