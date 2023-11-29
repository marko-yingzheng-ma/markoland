import { useGameStore } from '@/stores/useGameStore';
import './Interface.css';
import { CloseButton } from '@/components';

function Interface() {
  const isCloseButtonShowing = useGameStore(state => state.closeButtonState.isShowing)
  const closeButtonCallback = useGameStore(state => state.closeButtonState.callback)

  const onCloseButtonClick = () => {
    if (closeButtonCallback) {
      closeButtonCallback()
    }
  }

  return <div className="interface__container">
    {isCloseButtonShowing && <CloseButton label='CLOSE' onClick={onCloseButtonClick} />}
  </div>
}

export { Interface }