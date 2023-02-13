import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import mkdirp from 'mkdirp'
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


const processFile = (fileName, template, outPath) => {
   
    const outFilename = getOutputFilename(filename, outPath)
    const file = readFile(path.join(path.resolve(), 'src/pages/index.md'))
    
    const templatized = templatize(template, {
        date: file.data.date,
        title: file.data.title,
        contents: file.content, 
       })
   
   saveFile(outFilename, templatized)
}


const main = () => {
    const outPath = path.join(path.resolve(), 'dist')
    const template = fs.readFileSync(path.join(path.resolve(), 'src/template.html'), 'utf8')
    
    const filename = path.join(path.resolve(), 'src/pages/index.md')
    
    processFile(filename, template, outPath)
}

