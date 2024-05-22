type size = [length: number, width: number];

type tag = [tagName: string, tagSize: size, content?: string, otherDetails?: string[]];

type div {
    elements: tag[],
    divSize: size,
    flexDirection: string
}

interface section {
    sectionContent: div[],
    sectionContentOrder: number[],
    sectionOrder: number | 1,
    sectionSize: size,
    contentSpacing: size
}

interface header {
    headerContent: section
}

interface footer {
    footerContent: section
}


interface body {
    pageMainContent: section[],
    contentSpacing: size,
    header?: header | null,
    footer?: footer | null
}


class Body implements body {
}

