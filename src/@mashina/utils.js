import { readFile } from 'node:fs/promises'
import path from 'path'

export function getFilenameWithoutExtension(fileName) {
    return fileName.substr(0, fileName.lastIndexOf('.'))
}

export async function getBlogPostTemplate() {
    const blogPostTemplatePath = path.join(process.cwd(), 'src', 'pages', 'blog-post.html')

    return await readFile(blogPostTemplatePath, 'utf-8', (error, content) => content)
}