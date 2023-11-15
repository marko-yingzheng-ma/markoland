
const Controls = {
  forward: {
    name: 'forward',
    keys: ['ArrowUp', 'KeyW']
  },
  back: {
    name: 'back',
    keys: ['ArrowDown', 'KeyS']
  },
  left: {
    name: 'left',
    keys: ['ArrowLeft', 'KeyA']
  },
  right: {
    name: 'right',
    keys: ['ArrowRight', 'KeyD']
  },
  jump: {
    name: 'jump',
    keys: ['Space']
  },
}

const AnimationAction = {
  walk: 'walk',
  standing_idle: 'standing idle',
  jump: 'jump',
  typing: 'typing',
  type_to_stand: 'type_to_stand'
}

export { Controls, AnimationAction }