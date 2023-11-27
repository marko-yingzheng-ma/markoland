import { Html } from "@react-three/drei"

function Annotation({ title, onClick, ...props }) {
  const onUserClicked = () => {
    // TODO: spring animation
    onClick(title)
  }

  return (
    <Html
      {...props}
      center
      transform
    >
      <div className="annotation" onClick={onUserClicked}>
        {title}
      </div>
    </Html>
  )
}

export { Annotation }