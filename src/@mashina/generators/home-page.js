import path from 'path'
import { readdir, writeFile, readFile } from 'node:fs/promises'

import { convertToHTML } from '../markdown.js'
import { render } from '../templating.js'
import { getFilenameWithoutExtension, getFormattedPostTitle } from '../utils.js'
import { getPostsFileNames } from './blog-posts.js'

const OUTPUT_FILE = 'index.html'
const TEMPLATE_FILE = 'src/pages/index.html'
const CURR_DIR = process.cwd()

export async function generateHomePage() {
    const homeTemplateContent = await getTemplateContent();

    const postsFileNames = await getPostsFileNames()

    const postsListHtml = postsFileNames.reduce((list, fileName) => {
        const fileNoExtension = getFilenameWithoutExtension(fileName)
        const postTitle = getFormattedPostTitle(fileNoExtension)
    
        return list + `\n<li><a href='blog/${fileNoExtension}.html'>${postTitle}</a></li>`
    }, '')

    const renderedInTemplate = render(homeTemplateContent, { posts: postsListHtml })

    await writeFile(path.join(CURR_DIR, OUTPUT_FILE), renderedInTemplate)
}

async function getTemplateContent() {
    const templatePath = path.join(CURR_DIR, TEMPLATE_FILE)
    return await readFile(templatePath, 'utf-8', (error, content) => content)
}