import { useProgress } from "@react-three/drei"
import './ProgressLoader.css'
import { useEffect, useState } from "react"

function ProgressLoader({
  onEnded,
  style
}) {
  const { loaded } = useProgress()
  const [ended, setEnded] = useState(false)

  const loadingProgress = loaded / 14.0
  const hasLoaded = loadingProgress === 1

  useEffect(() => {
    if (hasLoaded) {
      let endedTimeout;

      const loadedTimeout = setTimeout(() => {
        setEnded(true)
        endedTimeout = setTimeout(() => {
          onEnded()
        }, 2000)
      }, 500);
      return () => {
        clearTimeout(loadedTimeout)
        clearTimeout(endedTimeout)
      }
    }
  }, [hasLoaded, onEnded])

  return <div className="loadingBar__container" style={style}>
    <div className={`loadingBar ${ended ? 'ended' : ''}`} style={ended ? null : { transform: `scaleX(${loadingProgress})`, }}></div>
    {/* <h1>{Math.round(loadingProgress * 100)} %</h1> */}
  </div>
}

export { ProgressLoader }