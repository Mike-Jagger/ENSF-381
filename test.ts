type size = [length: number, width: number];

type tag = [tagName: string, tagSize: size, content?: string, otherDetails?: string[]];

interface div {
    elements: tag[],
    divSize: size,
    flexDirection: string
}

interface section {
    sectionContent: div[],
    sectionContentOrder: number[],
    sectionOrder: number,
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
    getMainContent(): () => section[],
    setMainContent(): void,

    getContentSpacing: () => size,
    setContentSpacing: void,

    getHeader: () => header,
    setHeader: void,

    getFooter: () => footer,
    setFooter: void
}


class Body implements Partial<body> {
    private pageMainContent: section[];
    private contentSpacing: size;

    public constructor(givenContent: section[], givenContentSpacing: size) {
        this.pageMainContent = givenContent;
        this.contentSpacing = givenContentSpacing;
    }

    public getPageMainContent(): section[] {
        return this.pageMainContent;
    }

    public getContentSpacing(): size {
        return this.contentSpacing;
    }
}

