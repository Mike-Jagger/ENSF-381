type size = [length: number, width: number];

type tag = [tagName: string, tagSize: size, content?: string, otherDetails?: string[]];

interface div {
    elements: tag[],
    divSize: size,
    flexDirection: string
}

interface section {
    sectionContent: div[],
    sectionOrder: number,
    sectionSize: size,
    contentSpacing: size
}

interface header {
    headerContent: div[]
}

interface footer {
    footerContent: div[]
}


interface page {
    pageMainContent: section[],
    contentSpacing: size,
    header: header
}