const PDFMerger = require('pdf-merger-js');
const view = require('./server')
let PDFCounts, PDFPages = []
let mergePDFs;

function arrignVars() {
  PDFCounts = view.temp.temp;
  console.log('PDFCounts :>> ', PDFCounts);  
}
module.exports = {arrignVars}
var merger = new PDFMerger();
{
  if (PDFCounts == 2) {
    mergePDFs = async (p1, p2) => {

      await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
      await merger.add(p2);

      let D = new Date().getTime();
      await merger.save(`Public/${D}.pdf`); //save under given name and reset the internal document
      return D;
      module.exports = { mergePDFs }
    }

  } else if (PDFCounts == 3) {
    mergePDFs = async (p1, p2, p3) => {

      await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
      await merger.add(p2);
      await merger.add(p3);
      let D = new Date().getTime();
      await merger.save(`Public/${D}.pdf`); //save under given name and reset the internal document
      return D;
      module.exports = { mergePDFs }
    }
  }
  else if (PDFCounts == 4) {
    mergePDFs = async (p1, p2, p3, p4) => {

      await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
      await merger.add(p2);
      await merger.add(p3);
      await merger.add(p4);
      let D = new Date().getTime();
      await merger.save(`Public/${D}.pdf`); //save under given name and reset the internal document
      return D;
      module.exports = { mergePDFs }
    }
  }
  else if (PDFCounts == 5) {
    mergePDFs = async (p1, p2, p3, p4, p5) => {

      await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
      await merger.add(p2);
      await merger.add(p3);
      await merger.add(p4);
      await merger.add(p5);
      let D = new Date().getTime();
      await merger.save(`Public/${D}.pdf`); //save under given name and reset the internal document
      return D;
      module.exports = { mergePDFs }
    }
  }

  else if (PDFCounts == 6) {
    mergePDFs = async (p1, p2, p3, p4, p5, p6) => {

      await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
      await merger.add(p2);
      await merger.add(p3);
      await merger.add(p4);
      await merger.add(p5);
      await merger.add(p6);
      let D = new Date().getTime();
      await merger.save(`Public/${D}.pdf`); //save under given name and reset the internal document
      return D;
      module.exports = { mergePDFs }
    }
  }
  else if (PDFCounts == 7) {
    mergePDFs = async (p1, p2, p3, p4, p5, p6, p7) => {

      await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
      await merger.add(p2);
      await merger.add(p3);
      await merger.add(p4);
      await merger.add(p5);
      await merger.add(p6);
      await merger.add(p7);
      let D = new Date().getTime();
      await merger.save(`Public/${D}.pdf`); //save under given name and reset the internal document
      return D;
      module.exports = { mergePDFs }
    }
  }
  else if (PDFCounts == 8) {
    mergePDFs = async (p1, p2, p3, p4, p5, p6, p7, p8) => {

      await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
      await merger.add(p2);
      await merger.add(p3);
      await merger.add(p4);
      await merger.add(p5);
      await merger.add(p6);
      await merger.add(p7);
      await merger.add(p8);
      let D = new Date().getTime();
      await merger.save(`Public/${D}.pdf`); //save under given name and reset the internal document
      return D;
      module.exports = { mergePDFs }
    }
  }
  else if (PDFCounts == 9) {
    mergePDFs = async (p1, p2, p3, p4, p5, p6, p7, p8, p9) => {

      await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
      await merger.add(p2);
      await merger.add(p3);
      await merger.add(p4);
      await merger.add(p5);
      await merger.add(p6);
      await merger.add(p7);
      await merger.add(p8);
      await merger.add(p9);
      let D = new Date().getTime();
      await merger.save(`Public/${D}.pdf`); //save under given name and reset the internal document
      return D;
      module.exports = { mergePDFs }
    }
  }
  else if (PDFCounts == 10) {
    mergePDFs = async (p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) => {

      await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
      await merger.add(p2);
      await merger.add(p3);
      await merger.add(p4);
      await merger.add(p5);
      await merger.add(p6);
      await merger.add(p7);
      await merger.add(p8);
      await merger.add(p9);
      await merger.add(p10);
      let D = new Date().getTime();
      await merger.save(`Public/${D}.pdf`); //save under given name and reset the internal document
      return D;
      module.exports = { mergePDFs }
    }
  }
}
// module.exports = { mergePDFs }