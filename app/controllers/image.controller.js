import PDFDocument from 'pdfkit'
import fs from 'fs'

export const ImageController = async(req, res) => {

    const doc = new PDFDocument()

    const outputFileStream = `output/${req.body.name}.pdf`

    const writeStream = fs.createWriteStream(outputFileStream)

    doc.pipe(writeStream);

    const images = req.files;
    for(let i = 0; i < images.length; i++){
        const path = `${images[i].destination}${images[i].filename}`
        doc.image(path, 0, 0, {align: 'center', width: doc.page.width, height: doc.page.height})
        if(i < images.length -1)doc.addPage()
        fs.unlink(path, (err) => {
            if (err) {
                console.error(`Error removing file: ${err}`);return;
            }
        })
    }

    doc.end()

    writeStream.on('finish', function () {
        return res.status(200).download(outputFileStream, (err) => {
            if(err){
                console.log(err)
                console.log(res.headersSent)
            }
            fs.unlink(outputFileStream, (err) => {
                if (err) {
                    console.error(`Error removing file: ${err}`);return;
                }
            })
        })
    });
}