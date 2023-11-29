class Resume {
  constructor(name = "Marko Ma", sections = []) {
    this.name = name
    this.sections = sections
  }
}

class ResumeSection {
  constructor(
    title = "",
    subtitle1 = "",
    subtitle2 = "",
    subtitle3 = "",
    sectionContent = []
  ) {
    this.title = title
    this.subtitle1 = subtitle1
    this.subtitle2 = subtitle2
    this.subtitle3 = subtitle3
    this.sectionContent = sectionContent
  }
}

class ResumeContent {
  constructor(content = "") {
    this.content = content
  }
}

export { Resume, ResumeSection, ResumeContent }