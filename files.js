import fs from 'node:fs/promises'

class FileManager {
    async writeFile(fileName, fileData) {
        try {
            fileData = JSON.stringify(fileData, null, 2)
            return fs.writeFile(fileName, fileData)
        } catch {
            throw new Error('Failed to write file.')
        }
    }

    async readFile(fileName) {
        try {
            const fileData = await fs.readFile(fileName, 'utf8');
            return JSON.parse(fileData)
        } catch(error) {
            console.log('read error >>', error)
            return []
        }
    }
}

export const fileManager = new FileManager()