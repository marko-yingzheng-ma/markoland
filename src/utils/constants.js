import { ResumeContent, ResumeSection } from '../models'

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

const ResumeSectionNames = {
  ABOUT: 'ABOUT',
  WORK: 'WORK',
  SKILLS: 'SKILLS',
  EDUCATION: 'EDUCATION'
}

const ResumeSections = {
  [ResumeSectionNames.ABOUT]: [
    new ResumeSection(
      'ABOUT',
      null,
      null,
      null,
      [
        new ResumeContent(
          'Seasoned Full Stack Engineer with a robust 5-year track record in diverse technology domains, adeptly blending expertise in frontend web development using React, backend proficiency in Node.js, along with mastery in iOS Swift and Android Java/Kotlin. Demonstrated success in spearheading 15 Proof of Concepts (PoCs) and Minimum Viable Products (MVPs), coupled with hands-on involvement in large-scale system implementations. Recognized as a self-starter and quick learner, driven by an innate attention to detail, ensuring precision in all facets of development.'
        )
      ]
    ),
  ],
  [ResumeSectionNames.WORK]: [
    new ResumeSection(
      'WORK',
      'Full Stack Software Engineer',
      'Ford Greenfield Labs, Ford Motor Company',
      'Palo Alto, CA, Mar 2018 — Sep 2022',
      [
        new ResumeContent(
          '• Led the engineering of a scalable web application repository using React and Node.js, seamlessly integrating Azure AD authentication, Elastic search, and GCP services, resulting in a highly successful MVP embraced by a vast user base of over 100,000 employees.'
        ),
        new ResumeContent(
          '• Led a team of 3 developers to test, benchmark, and debug gaming and productivity infotainment applica- tions, resulting in the deployment of these applications on over 2,000,000 Ford vehicles.'
        ),
        new ResumeContent(
          '• Engineered a synchronized multiplayer trivia game using React and Node. Integrated a voice-controlled host role within the vehicle’s HMI screen and a mobile-adaptive player role accessible via browsers. Estab- lished seamless communication between players and the host via socket connections, ensuring impeccable synchronization throughout gameplay.'
        ),
        new ResumeContent(
          '• Developed an iOS driver application using Swift 4 as part of a First Mile, Last Mile MVP program, resulting in 22,875 fulfilled rides and an average rating of 4.6/5.0.'
        ),
        new ResumeContent(
          '• Introduced and evangelized TDD with CI/CD Jenkins pipelines in team of 6, reducing deployment time by 95% from 1 hour to 5 minutes, and increasing deployment frequency from once per week to an average of 4 times a day.'
        ),
        new ResumeContent(
          '• Executed 15 varied PoCs and MVPs across multiple tech stacks (Node.js, React.js, iOS, Android). Managed 2+ projects concurrently and earned the ”top achiever” distinction among just 5% of employees.'
        ),
      ]
    ),
    new ResumeSection(
      null,
      'Android Engineer Internship',
      'SMount Health Tech',
      'San Jose, CA, Sep 2017 — Dec 2017',
      [
        new ResumeContent(
          '• Architected a decentralized mobile health Android application for caregivers to keep track of patients’ health status in real - time while keeping data distributed across all devices.'
        ),
        new ResumeContent(
          '• Retrieved JSON health data from Bluetooth Low Energy (BLE) wearable devices and alert caregivers about patient health condition changes through RabbitMQ messaging broker.'
        )
      ]
    ),
  ],
  [ResumeSectionNames.SKILLS]: [
    new ResumeSection(
      'SKILLS',
      null,
      null,
      null,
      [
        new ResumeContent(
          'Frontend - Web: JavaScript, TypeScript, React.js, Redux.js, HTML5/CSS, UI/UX, Atomic Design'
        ),

        new ResumeContent(
          'Frontend - Web 3D: three.js, WebGL, React Three Fiber/Drei, GLSL, Blender'
        ),

        new ResumeContent(
          'Frontend - Mobile: Swift, SwiftUI, Objective C, React Native, Java, Kotlin'
        ),

        new ResumeContent(
          'Backend: Node.js, Express.js, Python, Java Spring Boot, MySQL, PostgreSQL, MongoDB'
        ),

        new ResumeContent(
          'Testing: TDD/BDD, Jest, Mocha, Chai, Quick, Nimble'
        ),

        new ResumeContent(
          'DevOps: GCP, Azure, AWS, CI/CD, Jenkins, Terraform, Docker'
        ),
      ]
    ),
  ],
  [ResumeSectionNames.EDUCATION]: [
    new ResumeSection(
      'EDUCATION',
      'Drury University',
      'Bachelor of Science, Software Engineering',
      'Aug 2015 — Aug 2017',
      [
        new ResumeContent(
          '• GPA 3.72/4.0'
        )
      ]
    ),
    new ResumeSection(
      null,
      'The Ohio State University',
      'Bachelor of Science, Computer Science',
      'Aug 2012 — May 2015',
      [
        new ResumeContent(
          '• GPA 3.5/4.0 (Transferred)'
        )
      ]
    )
  ]
}

export { Controls, AnimationAction, ResumeSections, ResumeSectionNames }