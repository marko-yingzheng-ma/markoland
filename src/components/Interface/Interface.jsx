import { useGameStore } from '@/stores/useGameStore';
import './Interface.css';
import { CloseButton } from '@/components';

function Interface() {
  const isCloseButtonShowing = useGameStore(state => state.closeButtonState.isShowing)
  const closeButtonCallback = useGameStore(state => state.closeButtonState.callback)
  const isInteractionReady = useGameStore(state => state.isInteractionReady)

  const onCloseButtonClick = () => {
    if (closeButtonCallback) {
      closeButtonCallback()
    }
  }

  return <div className="interface__container" style={isInteractionReady ? { width: '100%', height: '100%' } : null}>
    {isCloseButtonShowing && <CloseButton label='CLOSE' onClick={onCloseButtonClick} />}
  </div>
}

export { Interface }