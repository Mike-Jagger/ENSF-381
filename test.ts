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
    pageMainContent: section[],
    contentSpacing?: size | null,
    header?: header | null,
    footer?: footer | null
}


class Body implements body {
    header?: header | null | undefined;
    footer?: footer | null | undefined;
    contentSpacing?: size | null | undefined;
    pageMainContent: section[] = [];

    public getPageMainContent(): section[] | null {
        return this.pageMainContent;
    }

    public getContentSpacing(): size | null | undefined {
        return this.contentSpacing;
    }
}

