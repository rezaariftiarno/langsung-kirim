    var lMarginSKL=25; //left margin in mm
    var rMarginSKL=25; //right margin in mm
    var pdfInMMSKL=220;  // width of A4 in mm
	function sklPDF(){
		var docSKL = new jsPDF("p","mm","A4");
		var namaSKL = document.getElementById("namaSKL").value;
		var npmSKL = document.getElementById("npmSKL").value;
		var ttlSKL = document.getElementById("ttlSKL").value;
		var jurusanSKL = document.getElementById("jurusanSKL").value;
		var judulSkripsiSKL = document.getElementById("judulSkripsiSKL").value;
		var matkulSKL = document.getElementById("matkulSKL").value;
		var tanggalLulusSKL = document.getElementById("tanggalLulusSKL").value;
		var kompreLastSKL = document.getElementById("kompreLastSKL").value;
		var tanggalSuratSKL = document.getElementById("tanggalSuratSKL").value;
		var kotaSuratSKL = document.getElementById("kotaSuratSKL").value;
    	var linesSKL = docSKL.splitTextToSize(`Perihal: Permohonan Surat Keterangan Lulus

\n
Kepada Yth.

Bapak Dr. Hendro Sasongko, Ak., M.M., CA.
Dekan Fakultas Ekonomi Universitas Pakuan
Di Tempat
\n
Yang bertanda tangan di bawah ini:
\n
`, (pdfInMMSKL-lMarginSKL-rMarginSKL))
    	docSKL.setFontSize(11);
		docSKL.text(lMarginSKL,25,linesSKL);

		docSKL.autoTable({
		columnStyles: { 
		0: { halign: 'left', fillColor: [255, 255, 255], textColor: [false], cellWidth: 30, minCellWidth: 30 }, 
		1: { halign: 'left', fillColor: [255, 255, 255], textColor: [false], cellWidth: 4 },
		2: { halign: 'left', fillColor: [255, 255, 255], textColor: [false] },
		},
		margin: { top: 80, right: 25, left: 24 },
  		body: [
    			['Nama', ':', `${namaSKL}`],
    			['NPM', ':', `${npmSKL}`],
    			['Tempat/Tanggal lahir', ':', `${ttlSKL}`],
    			['Jurusan', ':', `${jurusanSKL}`],
    			['Judul Skripsi', ':', `${judulSkripsiSKL}`],
    			['Mata Kuliah', ':', `${matkulSKL}`],
    			['Tanggal Lulus Ujian', ':', `${tanggalLulusSKL}`],
    			['Kompre Terakhir', ':', `${kompreLastSKL}`],
  			  ],
		});

		var linesTwoSKL = docSKL.splitTextToSize(`Bermaksud mengajukan permohonan Surat Keterangan Lulus  (SKL)  atas  nama  permohonan karena SKL akan digunakan sebagai pengganti sementara ijazah yang belum diterima. Dengan adanya SKL, maka pemohon bermaksud menggunakannya untuk melamar pekerjaan.\nDemikian surat permohonan ini saya buat dengan sebenar-benarnya, atas bantuan Bapak saya ucapkan terima kasih.`,(pdfInMMSKL-lMarginSKL-rMarginSKL))
		docSKL.text(lMarginSKL,165,linesTwoSKL);
    	var linesThreeSKL = docSKL.splitTextToSize(`${kotaSuratSKL}, ${tanggalSuratSKL}\n\n\n\n\n\n\n(${namaSKL})`,(pdfInMMSKL-lMarginSKL-rMarginSKL))
    	docSKL.text(120,200,linesThreeSKL);
    	
// Save the PDF
	docSKL.save(`Pengajuan SKL ${namaSKL}.pdf`);
	};