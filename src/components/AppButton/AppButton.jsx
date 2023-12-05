import './AppButton.css';

function AppButton({
  title,
  style,
  ...rest
}) {
  return (
    <button
      className='appButton'
      style={style}
      {...rest}
    >
      {title}
    </button>
  )
}

export { AppButton }