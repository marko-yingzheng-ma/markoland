/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/



import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useGameStore } from '../stores/useGameStore';
import { RigidBody, quat, useRapier } from "@react-three/rapier";
import { Controls, AnimationAction } from '../utils/constants';
import * as THREE from "three";

/**
 * 
 * Action types: 
 *  sit to stand
    sit to type
    siting idle
    stand to sit
    stand_to_type
    standing idle
    type to sit
    type_to_stand/
    typing
    walk
 */
export function Avatar() {
  const group = useRef();
  const body = useRef()
  const currentCameraPosition = useRef(new THREE.Vector3())
  const currentCameraLookAt = useRef(new THREE.Vector3())
  const isOnTheGround = useRef(true)

  const { nodes, materials, animations } = useGLTF("/model/avatar.glb");
  const { actions } = useAnimations(animations, group);

  const [currentAction, setCurrentAction] = useState('standing idle')

  const { controls, camera } = useThree()
  const [subscribeKeys, getKeys] = useKeyboardControls()

  const { world, rapier } = useRapier()

  useEffect(() => {
    actions[currentAction].reset().fadeIn(0.5).play()

    return () => {
      actions[currentAction].fadeOut(0.5)
    }
  }, [currentAction, actions])

  useEffect(() => {
    if (controls && camera) {
      const bodyPosition = body.current.translation();

      const cameraPosition = new THREE.Vector3(
        bodyPosition.x - 5.0,
        bodyPosition.y + 3.0,
        bodyPosition.z
      )
      const target = new THREE.Vector3(
        bodyPosition.x,
        bodyPosition.y + 2.0,
        bodyPosition.z
      )

      camera.position.copy(cameraPosition)
      controls.target.copy(target)

    }
  }, [controls, camera])


  useFrame((state, delta) => {
    const keysPressed = getKeys()

    if (body.current) {
      updateCameraControls(state, body.current.translation(), body.current.rotation(), delta)
    }

    updateAvatarMovement(keysPressed, delta)
  })

  const calculateIdealLookAt = (bodyPosition, bodyRotation) => {
    const idealLookAt = new THREE.Vector3(0.0, 2.0, 0)
    idealLookAt.applyQuaternion(bodyRotation)
    idealLookAt.add(bodyPosition)
    return idealLookAt
  }

  const calculateIdealOffSet = (bodyPosition, bodyRotation) => {
    const idealOffSet = new THREE.Vector3(0, 3, -5)
    idealOffSet.applyQuaternion(bodyRotation)
    idealOffSet.add(bodyPosition)
    return idealOffSet
  }

  const updateCameraControls = (state, bodyPosition, bodyRotation, delta) => {
    const idealOffSet = calculateIdealOffSet(bodyPosition, bodyRotation)
    const idealLookAt = calculateIdealLookAt(bodyPosition, bodyRotation)

    const t = 1.0 - Math.pow(0.001, delta)
    currentCameraPosition.current.lerp(idealOffSet, t)
    currentCameraLookAt.current.lerp(idealLookAt, t)

    state.camera.position.copy(currentCameraPosition.current)
    state.controls.target.copy(currentCameraLookAt.current)
  }

  const move = (keysPressed, delta) => {
    const { forward, left, right, back } = keysPressed

    const axisYOfRotation = new THREE.Vector3(0, 1, 0);

    // horizontal move
    const walkDirection = new THREE.Vector3()
    camera.getWorldDirection(walkDirection)
    walkDirection.y = 0
    walkDirection.normalize()
    const impluseStrength = 10.0 * delta
    const impulse = new THREE.Vector3(impluseStrength * walkDirection.x, 0, impluseStrength * walkDirection.z)

    if (forward) {
      body.current.applyImpulse(impulse)
    } else if (back) {
      body.current.applyImpulse(impulse.negate())
    }

    // rotation
    let avatarRotation = quat(body.current.rotation())
    let rotationStrength = 0.3 * delta

    if (left) {
      let quartenionRotation = new THREE.Quaternion().setFromAxisAngle(axisYOfRotation, Math.PI * rotationStrength)
      avatarRotation = avatarRotation.multiply(quartenionRotation)
      body.current.setRotation(avatarRotation)
    } else if (right) {
      let quartenionRotation = new THREE.Quaternion().setFromAxisAngle(axisYOfRotation, - Math.PI * rotationStrength)
      avatarRotation = avatarRotation.multiply(quartenionRotation)
      body.current.setRotation(avatarRotation)
    }
  }

  const updateAvatarMovement = (keysPressed, delta) => {
    const isDirectionPressed = (Object.keys(Controls).some(key => keysPressed[key] && key !== Controls.jump.name))

    if (isOnTheGround.current) {
      // check jump 
      if (keysPressed.jump) {
        isOnTheGround.current = false
        body.current.applyImpulse({ x: 0, y: 10.0, z: 0 })
      }

      // check move
      if (isDirectionPressed) {
        setCurrentAction(AnimationAction.walk)
        move(keysPressed, delta)
      } else {
        setCurrentAction(AnimationAction.standing_idle)
      }
    } else {
      // allow horizontal move
      setCurrentAction(AnimationAction.jump)
      if (isDirectionPressed) move(keysPressed, delta)
    }
  }

  const updateOnTheGroundStatus = (maxContactForceDirection) => {
    console.log(maxContactForceDirection);
    if (maxContactForceDirection.y > maxContactForceDirection.x && maxContactForceDirection.y > maxContactForceDirection.z) {
      isOnTheGround.current = true
    }
  }

  return (
    <RigidBody
      ref={body}
      colliders='hull'
      type='dynamic'
      position={[-2.789, 3.465, -4.411]}
      rotation={[0, 1.408, 0]}
      lockRotations
      enabledRotations={[false, true, false]}
      linearDamping={5.0}
      angularDamping={5.0}
      gravityScale={1.0}
      canSleep={false}
      onContactForce={(payload) => updateOnTheGroundStatus(payload.maxForceDirection)}
    >
      <group
        ref={group}
        name="Character"
      >
        <skinnedMesh
          name="Wolf3D_Avatar"
          geometry={nodes.Wolf3D_Avatar.geometry}
          material={materials.Wolf3D_Avatar}
          skeleton={nodes.Wolf3D_Avatar.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Avatar_Transparent"
          geometry={nodes.Wolf3D_Avatar_Transparent.geometry}
          material={materials.Wolf3D_Avatar_Transparent}
          skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton}
        />
        <primitive object={nodes.Hips} />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/model/avatar.glb");
