import { Html } from "@react-three/drei"
import './Annotation.css';

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