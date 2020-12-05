    var lMarginSM=25; //left margin in mm
    var rMarginSM=25; //right margin in mm
    var pdfInMMSM=220;  // width of A4 in mm
	function SMPDF(){
		var docSM = new jsPDF("p","mm","A4");
		var namaSM = document.getElementById("namaSM").value;
		var npmSM = document.getElementById("npmSM").value;
		var jurusanSM = document.getElementById("jurusanSM").value;
		var perusahaanSM = document.getElementById("perusahaanSM").value;
		var alamatSM = document.getElementById("alamatSM").value;
		var tujuanSM = document.getElementById("tujuanSM").value;
		var konsentrasiSM = document.getElementById("konsentrasiSM").value;
		var tanggalSuratSM = document.getElementById("tanggalSuratSM").value;
		var kotaSuratSM = document.getElementById("kotaSuratSM").value;
    	var linesSM = docSM.splitTextToSize(`

Kepada Yth.

Bapak Dr. Hendro Sasongko, Ak., M.M., CA.
Dekan Fakultas Ekonomi Universitas Pakuan
Di Tempat
\n
Dengan hormat,
\n
Yang bertanda tangan di bawah ini:
\n
`, (pdfInMMSM-lMarginSM-rMarginSM))
    	docSM.setFontSize(11);
		docSM.text(lMarginSM,25,linesSM);

		docSM.autoTable({
		columnStyles: { 
		0: { halign: 'left', fillColor: [255, 255, 255], textColor: [false], cellWidth: 30, minCellWidth: 30 }, 
		1: { halign: 'left', fillColor: [255, 255, 255], textColor: [false], cellWidth: 4 },
		2: { halign: 'left', fillColor: [255, 255, 255], textColor: [false] },
		},
		margin: { top: 85, right: 25, left: 24 },
  		body: [
    			['Nama', ':', `${namaSM}`],
    			['NPM', ':', `${npmSM}`],
    			['Jurusan', ':', `${jurusanSM}`],
  			  ],
		});

		var linesTwoSM = docSM.splitTextToSize(`Dengan  ini  saya  mengajukan  permohonan  agar  kiranya  Bapak  dapat   memberikan   surat permohonan magang untuk:`,(pdfInMMSM-lMarginSM-rMarginSM));
		docSM.autoTable({
		columnStyles: { 
		0: { halign: 'left', fillColor: [255, 255, 255], textColor: [false], cellWidth: 30, minCellWidth: 30 }, 
		1: { halign: 'left', fillColor: [255, 255, 255], textColor: [false], cellWidth: 4 },
		2: { halign: 'left', fillColor: [255, 255, 255], textColor: [false] },
		},
		margin: { top: 180, right: 25, left: 24 },
  		body: [
    			['\n', '\n', `\n`],
    			['Perusahaan', ':', `${perusahaanSM}`],
    			['Alamat', ':', `${alamatSM}`],
    			['Tujuan', ':', `${tujuanSM}`],
    			['Konsentrasi', ':', `${konsentrasiSM}`],
  			  ],
		});
		docSM.text(lMarginSM,115,linesTwoSM);


		var linesThreeSM = docSM.splitTextToSize(`Demikian  surat  permohonan  ini  saya  buat,  besar  harapan  saya,  Bapak  dapat   membantu memberikan surat permohonan Magang tersebut.\nDemikian surat permohonan ini saya buat dengan sebenar-benarnya, atas bantuan Bapak saya
ucapkan terima kasih.
`,(pdfInMMSM-lMarginSM-rMarginSM));
		docSM.text(lMarginSM,165,linesThreeSM);

    	var linesFourSM = docSM.splitTextToSize(`${kotaSuratSM}, ${tanggalSuratSM}\n\n\n\n\n\n\n(${namaSM})`,(pdfInMMSM-lMarginSM-rMarginSM))
    	docSM.text(120,190,linesFourSM);
    	
// Save the PDF
	docSM.save(`Pengajuan Surat Magang ${namaSM}.pdf`);
	};