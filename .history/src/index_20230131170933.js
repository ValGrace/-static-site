import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import mkdirp from 'mkdirp'
import glob from 'glob'
//read the markdown file
// - process the headers
//   - read the content
//  - return as object
// inject into template (html)
// save file

const readFile = filename => {
    const rawFile = fs.readFileSync(filename, 'utf8')
    const parsed= matter(rawFile) 
    const html = marked(parsed.content)
    
    return {...parsed, html}
}

const templatize = (template, { date, title, content}) => template.replace(/<!-- CONTENT -->/, content)
       .replace(/<!-- TITLE -->/, title)
       .replace(/<!-- PUBLISH_DATE -->/, publishDate)

const saveFile = (filename, contents) => {
    const dir = path.dirname(filename)
    mkdirp.sync(dir)
     fs.writeFileSync(filename, contents)
}

const getOutputFilename = (filename, outPath) => {
    const basename = path.basename(filename)
    const newFilename = basename.substring(0, basename.length - 3)   + '.html'
    const outfile = path.join(outPath, newFilename)
    return outfile
}


const processFile = (filename, template, outPath) => {
   
    const outFilename = getOutputFilename(filename, outPath)
    const file = readFile(path.join(path.resolve(), 'src/pages/index.md'))
    
    const templatized = templatize(template, {
        date: file.data.date,
        title: file.data.title,
        content: file.html, 
       })
   
   saveFile(outFilename, templatized)
}


const main = async () => {
    const srcPath = path.join(path.resolve(), 'src')
    const outPath = path.join(path.resolve(), 'dist')
    const template = fs.readFileSync(path.join(path.resolve(), 'src/template.html'), 'utf8')
    const filesnames = glob.sync(srcPath + '/pages/**/*.md') 
    filesnames.forEach(filename => {
        processFile(filename, template, outPath)

        
    })
    // const filename = path.join(srcPath, 'src/pages/index.md')
    
    
}

main()

