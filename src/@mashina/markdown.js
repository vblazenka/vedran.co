import showdown from 'showdown'

export function convertToMarkdown(markdownContent) {
    const converter = new showdown.Converter();
    return converter.makeHtml(markdownContent);
}
