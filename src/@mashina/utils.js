import { readFile } from 'node:fs/promises'
import path from 'path'

export function getFilenameWithoutExtension(fileName) {
    return fileName.substr(0, fileName.lastIndexOf('.'))
}

// https://titleconsole.com/capitalization-in-blog-post-titles
export function getFormattedPostTitle(title) {
    const capitalizationBlacklist = ['a', 'an', 'the', 'in', 'to', 'on', 'to', 'of', 'up', 'by', 'via']

    return title.split("-").map(str => {
        const isBlacklisted = capitalizationBlacklist.find(s => s === str)

        if (isBlacklisted) {
            return str
        }

        // uppercase first character
        return str.charAt(0).toUpperCase() + str.slice(1)
    }).join(" ")
}