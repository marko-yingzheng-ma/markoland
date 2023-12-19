import { useGameStore } from '@/stores/useGameStore';
import './Interface.css';
import { CloseButton } from '@/components';
import { useKeyboardControls } from '@react-three/drei';

function Interface() {
  const isCloseButtonShowing = useGameStore(state => state.closeButtonState.isShowing)
  const closeButtonCallback = useGameStore(state => state.closeButtonState.callback)
  const isInteractionReady = useGameStore(state => state.isInteractionReady)

  const forward = useKeyboardControls((state) => state.forward)
  const backward = useKeyboardControls((state) => state.back)
  const leftward = useKeyboardControls((state) => state.left)
  const rightward = useKeyboardControls((state) => state.right)
  const jump = useKeyboardControls((state) => state.jump)

  const onCloseButtonClick = () => {
    if (closeButtonCallback) {
      closeButtonCallback()
    }
  }

  return <div
    className="interface__container"
    style={(isInteractionReady || isCloseButtonShowing) ? { pointerEvents: 'auto' } : null}
  >
    {isCloseButtonShowing && <CloseButton label='CLOSE' onClick={onCloseButtonClick} />}

    <div className="controls">
      <div className="raw">
        <div className={`key ${forward ? 'active' : ''}`}></div>
      </div>
      <div className="raw">
        <div className={`key ${leftward ? 'active' : ''}`}></div>
        <div className={`key ${backward ? 'active' : ''}`}></div>
        <div className={`key ${rightward ? 'active' : ''}`}></div>
      </div>
      <div className="raw">
        <div className={`key large ${jump ? 'active' : ''}`}></div>
      </div>
    </div>
  </div>
}

export { Interface }