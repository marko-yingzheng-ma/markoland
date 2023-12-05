import { Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Flex, Box } from '@react-three/flex'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { splitStringIntoLines } from '@/utils/helpers'
import { fonts } from '@/assets';

const textMaterial = new THREE.MeshNormalMaterial()

const axesX = new THREE.Vector3(1, 0, 0)
const axesY = new THREE.Vector3(0, 1, 0)

const xRotation = new THREE.Quaternion().setFromAxisAngle(axesX, -Math.PI / 2)
const yRotation = new THREE.Quaternion().setFromAxisAngle(axesY, -Math.PI / 2)
yRotation.multiply(xRotation)


function Text({ children, ...rest }) {
  return <Text3D
    font={fonts.resumeFont}
    material={textMaterial}
    quaternion={yRotation}
    {...rest}
  >
    {children}
  </Text3D>
}

function TextContent({
  lines = [],
  ...rest
}) {

  return <Box
    justifyContent='flex-start'
    alignItems='center'
    flexDirection='row-reverse'
    plane="xz"
    marginRight={1}
    marginLeft={1}
    {...rest}
  >
    {
      lines.map((line, index) => (
        <Box key={index} centerAnchor margin={0.2}>
          <Text>{line}</Text>
        </Box>
      ))
    }
  </Box>
}

function TextSection({
  title = "",
  subtitle1 = '',
  subtitle2 = '',
  subtitle3 = '',
  sectionContents = []
}) {

  return <>
    {title &&
      <Box centerAnchor marginRight={2}>
        <Text position-y={0.5}>{title}</Text>
      </Box>
    }

    {subtitle1 &&
      <Box centerAnchor marginRight={1}>
        <Text>{subtitle1}</Text>
      </Box>
    }

    {subtitle2 &&
      <Box centerAnchor marginRight={0.5}>
        <Text>{subtitle2}</Text>
      </Box>
    }

    {subtitle3 &&
      <Box centerAnchor marginRight={0.5} marginLeft={0.5}>
        <Text>{subtitle3}</Text>
      </Box>
    }

    {
      sectionContents.map((sectionContent, index) => {
        return <TextContent key={index} lines={splitStringIntoLines(sectionContent.content, 35)} />
      })
    }

  </>
}

function TextPage({
  isActive,
  defaultPosition,
  sections,
  ...rest
}) {
  const pageRef = useRef()

  useFrame((_, delta) => {
    if (isActive) {
      pageRef.current.position.x += 1.2 * delta
    }
  })

  useEffect(() => {
    if (!isActive) {
      const [x, y, z] = defaultPosition;
      pageRef.current.position.set(x, y, z);
    }
  }, [isActive, defaultPosition])

  return <Flex
    ref={pageRef}
    justifyContent='flex-start'
    alignItems='center'
    flexDirection='row-reverse'
    plane="xz"
    {...rest}
  >
    {
      sections && sections.map((section, index) => (
        <TextSection
          key={index}
          title={section.title}
          subtitle1={section.subtitle1}
          subtitle2={section.subtitle2}
          subtitle3={section.subtitle3}
          sectionContents={section.sectionContent}
        />
      ))
    }
  </Flex>
}

export { TextPage }