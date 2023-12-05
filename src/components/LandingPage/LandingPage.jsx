import './LandingPage.css';
import { ProgressLoader } from '../ProgressLoader';
import { AppButton } from '../AppButton';
import { useState } from 'react';

function LandingPage() {
  const [isReady, setIsReady] = useState(false)
  const [hidden, setHidden] = useState(false)

  const onLoadingEnded = () => {
    setIsReady(true)
  }

  const onEnterClick = () => {
    setHidden(true)
  }

  return (
    <div className={`landingPage__container ${hidden ? 'hidden' : ''}`} >
      <h1 className='landingPage__title'>MARKO_LAND</h1>
      <div className='landingPage__content'>
        {
          !isReady &&
          <ProgressLoader
            onEnded={onLoadingEnded}
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50 %)'
            }}
          />
        }

        <div className={`landingPage__actions-container ${isReady ? 'visible' : ''}`}>
          <AppButton title='Enter' onClick={onEnterClick} />
        </div>
      </div>

    </div>
  )
}

export { LandingPage }