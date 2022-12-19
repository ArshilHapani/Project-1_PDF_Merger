const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');
const { mergePDFs } = require('./mergePDF');
const upload = multer({ dest: 'uploads/' });
app.use('/static', express.static('public'));
const port = 3000;
const bodyParser = require("body-parser");
const formData = require("express-form-data");
const os = require("os");




app.use(
    bodyParser.json({
        limit: "50mb",
    })
);
// for parsing application/xwww-form-urlencoded
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
    })
);

const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
};

// parse data with connect-multiparty. 
// app.use(formData.parse(options));
// delete from the request all empty files (size == 0)
// app.use(formData.format());
// union the body and the files
// app.use(formData.union());


app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "Templates/index.html"))
    res.sendFile(path.join(__dirname, "Templates/failed.html"))
})



let pdfCount

app.post('/merge', upload.array('pdfs', pdfCount = 2), async (req, res, next) => {
    // console.log(req.files)
    console.table(req.files[0]);
    console.table(req.files[1]);
    console.log(`Form Data ${JSON.stringify(req.body)}`);
    pdfCount = req.body.pdf_counts;
    var temp = pdfCount;
    exports.temp = { temp };
    console.log("PDf Counts " + pdfCount);
    // await Arshil.arrignVars();

    {
        function getPages() {
            let pdfcnt = req.body.pdf_counts;
            let a, b, c, d, e, f, g, h, i, j
            if (pdfcnt == 1) {
                a = req.body.pdf_page_1;
                let pages = [a]
                console.log("PDF Pages.  " + pages)
                exports.pages = { pages }
            }
            else if (pdfcnt == 2) {
                a = req.body.pdf_page_1;
                b = req.body.pdf_page_2;
                let pages = [a, b]
                console.log("PDF Pages.  " + pages)
                exports.pages = { pages }
            }
            else if (pdfcnt == 3) {
                a = req.body.pdf_page_1;
                b = req.body.pdf_page_2;
                c = req.body.pdf_page_3;
                let pages = [a, b, c]
                console.log("PDF Pages.  " + pages)
                exports.pages = { pages }
            }
            else if (pdfcnt == 4) {
                a = req.body.pdf_page_1;
                b = req.body.pdf_page_2;
                c = req.body.pdf_page_3;
                d = req.body.pdf_page_4;
                let pages = [a, b, c, d]
                console.log("PDF Pages.  " + pages)
                exports.pages = { pages }
            }
            else if (pdfcnt == 5) {

                a = req.body.pdf_page_1;
                b = req.body.pdf_page_2;
                c = req.body.pdf_page_3;
                d = req.body.pdf_page_4;
                e = req.body.pdf_page_5;
                let pages = [a, b, c, d, e]
                console.log("PDF Pages.  " + pages)
                exports.pages = { pages }
            }
            else if (pdfcnt == 6) {

                a = req.body.pdf_page_1;
                b = req.body.pdf_page_2;
                c = req.body.pdf_page_3;
                d = req.body.pdf_page_4;
                e = req.body.pdf_page_5;
                f = req.body.pdf_page_6;
                let pages = [a, b, c, d, e, f]
                console.log("PDF Pages.  " + pages)
                exports.pages = { pages }
            }
            else if (pdfcnt == 7) {

                a = req.body.pdf_page_1;
                b = req.body.pdf_page_2;
                c = req.body.pdf_page_3;
                d = req.body.pdf_page_4;
                e = req.body.pdf_page_5;
                f = req.body.pdf_page_6;
                g = req.body.pdf_page_7;
                let pages = [a, b, c, d, e, f, g]
                console.log("PDF Pages.  " + pages)
                exports.pages = { pages }
            }
            else if (pdfcnt == 8) {

                a = req.body.pdf_page_1;
                b = req.body.pdf_page_2;
                c = req.body.pdf_page_3;
                d = req.body.pdf_page_4;
                e = req.body.pdf_page_5;
                f = req.body.pdf_page_6;
                g = req.body.pdf_page_7;
                h = req.body.pdf_page_8;
                let pages = [a, b, c, d, e, f, g, h]
                console.log("PDF Pages.  " + pages)
                exports.pages = { pages }
            }
            else if (pdfcnt == 9) {

                a = req.body.pdf_page_1;
                b = req.body.pdf_page_2;
                c = req.body.pdf_page_3;
                d = req.body.pdf_page_4;
                e = req.body.pdf_page_5;
                f = req.body.pdf_page_6;
                g = req.body.pdf_page_7;
                h = req.body.pdf_page_8;
                i = req.body.pdf_page_9;
                let pages = [a, b, c, d, e, f, g, h, i]
                console.log("PDF Pages.  " + pages)
                exports.pages = { pages }

            }
            else if (pdfcnt == 10) {

                a = req.body.pdf_page_1;
                b = req.body.pdf_page_2;
                c = req.body.pdf_page_3;
                d = req.body.pdf_page_4;
                e = req.body.pdf_page_5;
                f = req.body.pdf_page_6;
                g = req.body.pdf_page_7;
                h = req.body.pdf_page_8;
                i = req.body.pdf_page_9;
                j = req.body.pdf_page_10;
                let pages = [a, b, c, d, e, f, g, h, i, j]
                console.log("PDF Pages.  " + pages)
                exports.pages = { pages }
            }

        }
    }
    // getPages()


    {
        let d;
        try {

            d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
            if (pdfCount == 2) {
            } else if (pdfCount == 3) {
                d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path))
            } else if (pdfCount == 4) {
                d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path))
            } else if (pdfCount == 5) {
                d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path))
            } else if (pdfCount == 6) {
                d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path))
            } else if (pdfCount == 7) {
                d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path))
            } else if (pdfCount == 8) {
                d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path), path.join(__dirname, req.files[7].path))
            } else if (pdfCount == 9) {
                d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path), path.join(__dirname, req.files[7].path), path.join(__dirname, req.files[8].path))
            } else if (pdfCount == 10) {
                d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), path.join(__dirname, req.files[2].path), path.join(__dirname, req.files[3].path), path.join(__dirname, req.files[4].path), path.join(__dirname, req.files[5].path), path.join(__dirname, req.files[6].path), path.join(__dirname, req.files[7].path), path.join(__dirname, req.files[8].path), path.join(__dirname, req.files[9].path))
            }

            res.redirect(`http://localhost:${port}/static/${d}.pdf`)
        } catch (error) {
            res.send(`<h2 style="color:red;">Error 35 <br> Failed to merge pdfs due to   ${error}  <br> Abe theek se PDF Upload kr na ..... upto 2 pdf hi merge kr sakta hai tu <br> Na 1 Na 2 <br> condition apply <br><br><hr><h4> ---Arshil</h4> </h2>`)
        }
    }
    // res.send({data: req.files})
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
})

// function callMe() {

//     app.post('/few', (req, res) => {
//         console.table(`Form Data ${JSON.stringify(req.body)}`);
//         console.log("PDf Counts " + req.body.pdf_counts);
// let pdfcnt = req.body.pdf_counts;
// if (pdfcnt == 1)
//     console.log(req.body.pdf_page_1);
// else if (pdfcnt == 2) {
//     console.log(req.body.pdf_page_1);
//     console.log(req.body.pdf_page_2);
// }
// else if (pdfcnt == 3) {
//     console.log(req.body.pdf_page_1);
//     console.log(req.body.pdf_page_2);
//     console.log(req.body.pdf_page_3);
// }
// else if (pdfcnt == 4) {
//     console.log(req.body.pdf_page_1);
//     console.log(req.body.pdf_page_2);
//     console.log(req.body.pdf_page_3);
//     console.log(req.body.pdf_page_4);
// }
// else if (pdfcnt == 5) {
//     console.log(req.body.pdf_page_1);
//     console.log(req.body.pdf_page_2);
//     console.log(req.body.pdf_page_3);
//     console.log(req.body.pdf_page_4);
//     console.log(req.body.pdf_page_5);
// }
// else if (pdfcnt == 6) {
//     console.log(req.body.pdf_page_1);
//     console.log(req.body.pdf_page_2);
//     console.log(req.body.pdf_page_3);
//     console.log(req.body.pdf_page_4);
//     console.log(req.body.pdf_page_5);
//     console.log(req.body.pdf_page_6);
// }
// else if (pdfcnt == 7) {
//     console.log(req.body.pdf_page_1);
//     console.log(req.body.pdf_page_2);
//     console.log(req.body.pdf_page_3);
//     console.log(req.body.pdf_page_4);
//     console.log(req.body.pdf_page_5);
//     console.log(req.body.pdf_page_6);
//     console.log(req.body.pdf_page_7);
// }
// else if (pdfcnt == 8) {
//     console.log(req.body.pdf_page_1);
//     console.log(req.body.pdf_page_2);
//     console.log(req.body.pdf_page_3);
//     console.log(req.body.pdf_page_4);
//     console.log(req.body.pdf_page_5);
//     console.log(req.body.pdf_page_6);
//     console.log(req.body.pdf_page_7);
//     console.log(req.body.pdf_page_8);
// }
// else if (pdfcnt == 9) {
//     console.log(req.body.pdf_page_1);
//     console.log(req.body.pdf_page_2);
//     console.log(req.body.pdf_page_3);
//     console.log(req.body.pdf_page_4);
//     console.log(req.body.pdf_page_5);
//     console.log(req.body.pdf_page_6);
//     console.log(req.body.pdf_page_7);
//     console.log(req.body.pdf_page_8);
//     console.log(req.body.pdf_page_9);
// }
// else if (pdfcnt == 10) {
//     console.log(req.body.pdf_page_1);
//     console.log(req.body.pdf_page_2);
//     console.log(req.body.pdf_page_3);
//     console.log(req.body.pdf_page_4);
//     console.log(req.body.pdf_page_5);
//     console.log(req.body.pdf_page_6);
//     console.log(req.body.pdf_page_7);
//     console.log(req.body.pdf_page_8);
//     console.log(req.body.pdf_page_9);
//     console.log(req.body.pdf_page_10);
// }

//         res.redirect(`http://localhost:${port}/merge`)
//         // res.send(req.body)
//     })

// }
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})