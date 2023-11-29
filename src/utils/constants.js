import { Resume, ResumeContent, ResumeSection } from '../models'

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
          'A self-reliant Full Stack Software Engineer who takes ownership of projects, I am committed to continuous learning and adept at resolving complex problems. With over 5 years of experience in full stack web and mobile development.'
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
          '• Led the end-to-end architecture, development, and deployment of a highly scalable React Single Page Application (SPA) utilizing Node.js, resulting in a successful MVPs that is now widely adopted by thousands of employees as a go-to project repository.'
        ),
        new ResumeContent(
          '• Led a team of 3 developers in a collaborative effort with the Sync 4 (Ford new infotainment technology) team to test, benchmark, and debug gaming and productivity applications, resulting in the deployment of these applications on over 2,000,000 Ford vehicles.'
        ),
        new ResumeContent(
          '• Designed and implemented a cutting-edge, immersive multiplayer trivia game SPA using React.js and Node.js, integrated within the Sync 4 platform. Streamlined user experience by developing an embedded host app with a QR code scanning feature, enabling seamless participation for riders through a mobile web app. Resulted in increased engagement and enhanced social interaction among users.'
        ),
        new ResumeContent(
          '• Developed an iOS driver application using Swift 4 as part of a First Mile, Last Mile MVP program, resulting in 22,875 fulfilled rides and an impressive average rating of 4.6/5.0.'
        ),
        new ResumeContent(
          '• Introduced and evangelized TDD with CI/CD Jenkins pipelines in dev team of 4, reducing deployment time by 95% from 1 hour to 5 minutes, and increasing deployment frequency from once per week to an average of 4 times a day.'
        ),
        new ResumeContent(
          '• Completed 15 diverse Proof Of Concepts (PoC) and Minimum Viable Products (MVP), including full stack Node.js and React.js, iOS (Swift, SwiftUI), and Android (Kotlin) applications, simultaneously managing an average of 2 projects at a time. Recognized as a ”top achiever,” an honor bestowed upon only 5% of employees.'
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
          'Frontend - Web: JavaScript, TypeScript, React.js, Redux.js, HTML5/CSS3, UI/UX, Atomic Design'
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