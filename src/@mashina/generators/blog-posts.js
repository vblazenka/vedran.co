import path from 'path'
import { readdir, writeFile, readFile } from 'node:fs/promises'

import { convertToHTML } from '../markdown.js'
import { render } from '../templating.js'
import { getFilenameWithoutExtension } from '../utils.js'

const OUTPUT_DIR = 'blog'
const INPUT_DIR = 'src/content'
const TEMPLATE_FILE = 'src/pages/blog-post.html'
const CURR_DIR = process.cwd()
const filesInputPath = path.join(CURR_DIR, INPUT_DIR);

export async function generateBlogPosts() {
    const blogPostTemplate = await getTemplate();
    const fileNames = await getPostsFileNames();

    for (const fileName of fileNames) {
       const filePath = path.join(filesInputPath, fileName)

       const postContent = await readFile(filePath, 'utf-8')
       const htmlContent = convertToHTML(postContent)

        const fileNameNoExtension = getFilenameWithoutExtension(fileName)
        const renderedInTemplate = render(blogPostTemplate, { content: htmlContent })

        await writeFile(path.join(CURR_DIR, OUTPUT_DIR, `${fileNameNoExtension}.html`), renderedInTemplate)
    }
}

export async function getPostsFileNames() {
    return await readdir(filesInputPath, (err, files) => files);
}

async function getTemplate() {
    const templatePath = path.join(CURR_DIR, TEMPLATE_FILE)
    return await readFile(templatePath, 'utf-8', (error, content) => content)
}