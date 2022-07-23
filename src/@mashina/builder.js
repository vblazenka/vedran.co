import path from 'path'
import { readdir, writeFile } from 'node:fs/promises'
import { readFile } from 'node:fs'

import { convertToMarkdown } from './markdown.js'
import { render } from './templating.js'
import { outputFolder, inputFolder } from './config.js'
import { getFilenameWithoutExtension, getBlogPostTemplate } from './utils.js'

const blogPostTemplate = await getBlogPostTemplate();
const postsPath = path.join(process.cwd(), 'src', inputFolder);

const postsFileNames = await readdir(postsPath, (err, files) => files)

postsFileNames.forEach(async (fileName) => {
    const filePath = path.join(postsPath, fileName);

    readFile(filePath, 'utf-8',  async (err, content) => {
        const htmlContent = convertToMarkdown(content);
        const fileNameNoExtension = getFilenameWithoutExtension(fileName)

        const postContentInTemplate = render(blogPostTemplate, { content: htmlContent })

        await writeFile(path.join(process.cwd(), outputFolder, `${fileNameNoExtension}.html`), postContentInTemplate, err => {})
    })
})