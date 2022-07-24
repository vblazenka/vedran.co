import showdown from 'showdown'

export function convertToHTML(markdownContent) {
    const converter = new showdown.Converter();
    return converter.makeHtml(markdownContent);
}
