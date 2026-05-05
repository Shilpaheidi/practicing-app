
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-offer-letter',
  templateUrl: './offer-letter.component.html',
  styleUrls: ['./offer-letter.component.scss']
})
export class OfferLetterComponent {
  fileblob: string='../../';
  headerForm!: FormGroup;
  annexureForm!: FormGroup;
  signatoryForm!: FormGroup;
  footerForm!: FormGroup;
  generatedTemplate: SafeHtml = '';
  letterContent: string = '';
  letterId: any;
  formattedDate: any;
  loader!: boolean;

  constructor(private sanitizer: DomSanitizer,

    private fb: FormBuilder,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef,

  ) {}

 ngOnInit(): void {
  this.initializeForms(); 
const employeeName = "shilpa";
    this.letterContent = `
         <p class="mt-2"><strong>Sub:</strong> Job offer</p>

       <p>Dear ${employeeName},</p>
       <p>
          This has reference to your application and subsequent interviews you
          have had with <strong>JESPER APPS SOFTWARE SERVICES PRIVATE LIMITED </strong>, we are pleased to
          appoint you as <strong>Software Developer</strong>. Your employment will be
          governed by the following terms and conditions:
        </p>

       <p>
          As discussed and agreed with you, you will be eligible to receive the
          following beginning on your joining date:
        </p>

      <ul class="custom-ul">
          <li>
            <strong>Salary:</strong> Annual gross salary of
            <strong>CTC: ₹5,00,000</strong> effective your date of joining.
          </li>
          <li>
            <strong>Incentive:</strong> As per the prevailing company scheme
          </li>
          <li>
            <strong>Business Travel:</strong> Allowance and reimbursements as
            per company policy.
          </li>
        </ul>
    <p>
          This offer letter is valid until <strong>07/07/2025</strong>.
          Please send a signed copy of this letter indicating your acceptance to
          join and resignation acceptance letter from your current employer to
          our HR.
        </p>

        <p>
          Your Appointment Letter will be issued on the
          <strong>07-07-2025</strong>. The joining formalities and
          induction will be carried out in our JESPER APPS, Hosur office.
        </p>

        <p>
          Please submit the following documents to HR at the time of joining:
          (1) Photocopies of your degree certificates, (2) certifications, if
          any, (3) Experience & Relieving letters (4) Two Color passport-size
          photos, (5) Latest salary slip from your previous organization and (6)
          Proof of Address.
        </p>

        <p>
          You are requested to send your entire document scanned copy to the
          mail id
          <a href="mailto:hr@jesperapps.com">hr&#64;jesperapps.com</a>
        </p>

        <p>
          Your employment is scheduled from <strong>07-07-2025</strong>.
          You need to report at <strong>9:00AM</strong>.
        </p>

        <p class="mt-2">We look forward to welcome you aboard.</p>
        <p>Sincerely,</p>
    `;

  this.updateTemplate(); // ✅ Now it will use the correct content
}

  initializeForms() {
    // this.headerForm = this.fb.group({
    //   employeeName: [''],
    //   address: [''],
    //   city: [''],
    //   state: [''],
    //   pincode: ['']
    // });
    if (!this.letterId) {
      this.headerForm = this.fb.group({
        // logo: [null],
        issueDate: ['05/07/2025'],
        employeeName: ['Keerthana Ravi'],
        employeeId: ['12345'],
        address: ['Hosur'],
        city: ['Hosur'],
        state: ['Tamil Nadu'],


      });
    } else {
      this.headerForm = this.fb.group({
        // logo: [null],
        issueDate: [''],
        employeeName: [''],
        employeeId: [''],
        address: [''],
        city: [''],
        state: ['']
      });
    }

    // this.annexureForm = this.fb.group({
    //   basic: [''],
    //   hra: [''],
    //   variablePay: [''],
    //   allowances: [''],
    //   employerPf: [''],
    //   deductions: [''],
    //   otherBenefits: ['']
    // });

    if (!this.letterId) {
      this.annexureForm = this.fb.group({
        basic: ['30000'],
        hra: ['12000'],
        variablePay: ['5000'],
        allowances: ['2000'],
        employerPf: ['3600'],
        deductions: ['1500'],
        otherBenefits: ['1000']
      });
    } else {
      this.annexureForm = this.fb.group({
        basic: [''],
        hra: [''],
        variablePay: [''],
        allowances: [''],
        employerPf: [''],
        deductions: [''],
        otherBenefits: ['']
      });
    }


    // this.signatoryForm = this.fb.group({
    //   signatoryName: [''],
    //   signatoryDesignation: ['']
    // });

    if (!this.letterId) {

      this.signatoryForm = this.fb.group({
        signatoryName: ['Vaishnavi Rao'],
        signatoryDesignation: ['HR Manager'],
        companyName: ['TechNova Solutions Pvt. Ltd.'],
        place: ['Bangalore']
      });

    } else {
      this.signatoryForm = this.fb.group({
        signatoryName: [''],
        signatoryDesignation: [''],
        companyName: [''],
        place: ['']
      });

    }


    // this.footerForm = this.fb.group({
    //   companyName: [''],
    //   addressLine1: [''],
    //   addressLine2: [''],
    //   cin: [''],
    //   phone: [''],
    //   email: [''],
    //   website: ['']
    // });
    if (!this.letterId) {
      this.footerForm = this.fb.group({
        companyName: ['VisionTech Solutions Pvt. Ltd.'],
        addressLine1: ['123, Tech Park Road'],
        addressLine2: ['Whitefield, Bangalore - 560066'],
        cin: ['U12345KA2010PTC098765'],
        phone: ['+91 98765 43210'],
        email: ['info@visiontech.com'],
        website: ['www.visiontech.com']
      });
    } else {
      this.footerForm = this.fb.group({
        companyName: [''],
        addressLine1: [''],
        addressLine2: [''],
        cin: [''],
        phone: [''],
        email: [''],
        website: ['']
      });

    }
  }

//   updateTemplate() {


//     const { employeeName, address, city, state } = this.headerForm.value;


//     const { issueDate } = this.headerForm.value;
//     this.formattedDate = this.datePipe.transform(issueDate, 'dd-MM-yyyy')!;

//     const company = this.footerForm.controls['companyName'].value || 'JESPER APPS SOFTWARE SERVICES PRIVATE LIMITED ';



//     const {
//       basic = 0,
//       hra = 0,
//       variablePay = 0,
//       allowances = 0,
//       employerPf = 0,
//       deductions = 0,
//       otherBenefits = 0,
//     } = this.annexureForm.value;

//     const totalMonthlyGross =
//       +basic + +hra + +variablePay + +allowances + +employerPf;

//     const annualCTC =
//       (totalMonthlyGross - +deductions + +otherBenefits) * 12;
//     const { signatoryName, signatoryDesignation, companyName, place } = this.signatoryForm.value;
//     const {

//       addressLine1,
//       addressLine2,
//       cin,
//       phone,
//       email,
//       website
//     } = this.footerForm.value;

//     const templateHtml = `
//   <style>

//  body {
//   margin: 0;
//   padding: 0;
//   font-family: Arial, sans-serif;
//   background-color: #f5f5f5;
//   font-size: 10px; 
// }

// .letter-container {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   // padding: 15px 20px 0 20px;
//   padding: 0px 0px 0 0px;
//   margin: 0 auto;
//   width: 520px;
//   border: 1px solid #ccc;
//   background: #fff;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
// }
// .letter-container-space {
//   padding: 20px 20px 15px 20px;
// }


// .header {
//   display: flex;
//   align-items: center;
//   border-bottom: 3px solid #1a3e68; 
//   padding-bottom: 4px;
//   margin-bottom: 10px;
//   margin-top: 22px;
// }

// .brand {
//   height: 24px;
//   margin-right: 8px;
// }

// .title-section {
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   margin-bottom: 12px;
// }

// .letter-title {
//   text-align: center;
//   font-weight: bold;
//   font-size: 15px; 
// }

// .issue-date {
//   font-size: 9px;
//   font-weight: bold;
// }

// .content p {
//   margin: 3px 0; 
//   font-size: 10px;
// }

// .signature {
//   margin-top: 10px;
//   font-size: 10px;
// }

// strong {
//   font-weight: bold;
// }

// .letter-footer {
//   margin-top: 20px; 
//   font-size: 12px;
// }

// .letter-footer hr {
//   border: none;
//   height: 1.5px;
//   background-color: #003366;
//   margin-bottom: 4px;
// }

// .company-footer {
//   text-align: center;
//   font-size: 7.5px;
//   line-height: 1.3;
// }

// .company-footer a {
//   color: #000;
//   text-decoration: underline;
// }

// .tbs {
//   border-bottom: 15px solid #0066cc !important;
//   width: 100%;
//   margin: 0;
//   padding: 0;
// }
// .employee-address p {
//   margin: 0;
//   line-height: 1.3; 
// }

// .icon-circle {
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background-color: #87ceeb;
//   color: white;
//   font-size: 12px;
//   font-weight: bold;
// }




//   </style>

 
//  <div class="templates-component template-font">
//   <div class="letter-container">
//    <div class="header">
//         <img src="${this.fileblob}" class="brand" />
//       </div>
//     <div class="letter-container-space">
//       <div class="title-section row">
//         <div class="col-12 text-center">
//           <div class="letter-title fw-bold">Relieving Order</div>
//         </div>
//       </div>
//       <div class="title-section row">
//         <div class="col-12 text-end">
//           <div class="issue-date">${this.formattedDate}</div>
//         </div>
//       </div>

//       <div class="content">
//         <div class="employee-address">
//           <p><strong>${employeeName},</strong></p>
//           <p>${address},</p>
//           <p>${city}, ${state}.</p>
//         </div>

//         <br />

//         <p>Dear ${employeeName},</p>
//           ${this.letterContent}
       

//         <div class="signature mt-5">
//           <p><strong>${signatoryName}</strong></p>
//           <p>${signatoryDesignation}</p>
//           <p>${companyName}</p>
//           <p>${place}.</p>
//         </div>
//       </div>
//     </div>

//     <div>
//       <div class="letter-footer">
//         <hr />
//         <p class="company-footer">
//   <strong class="text-extra-dark">${company}</strong><br />
//   ${addressLine1}, ${addressLine2}<br />
//   CIN: ${cin} • 📞: ${phone} • ✉ :
//   <a href="mailto:${email}">${email}</a> • 🌐:
//   <a href="${website}" target="_blank">${website}</a>
// </p>
//       </div>
//       </div>
//       <div class="tbs "></div>
//       </div>
// </div>

  
//   <div class="page-break"></div>

  
//   `;
//     this.generatedTemplate = this.sanitizer.bypassSecurityTrustHtml(templateHtml);
//   }

//   printPdf() {
//   const element = document.getElementById('pdfContent');
//   if (!element) {
//     console.error('pdfContent not found');
//     return;
//   }

//   this.loader = true;

//   const scale = 4;

//   // Detect if zoom is 100%
//   const isZoom100 = Math.abs(window.devicePixelRatio - 1) < 0.01;

//   // Default values
//   let trimLeft = 0;
//   let trimRight = 0;
//   let trimBottom = 0;
//   let customWidth = 210;
//   let customHeight = 297;

//   if (isZoom100) {
//     // Apply these only at 100% zoom
//     trimLeft = 147;
//     trimRight = 147;
//     trimBottom = 15;

//     customWidth = 140;
//     customHeight = 160;
//   }

//   html2canvas(element, {
//     scale: scale,
//     useCORS: true,
//     backgroundColor: '#ffffff',
//     scrollY: -window.scrollY
//   }).then(canvas => {
//     const trimmedWidth = canvas.width - trimLeft - trimRight;
//     const trimmedHeight = canvas.height - trimBottom;

//     const croppedCanvas = document.createElement('canvas');
//     croppedCanvas.width = trimmedWidth;
//     croppedCanvas.height = trimmedHeight;

//     const ctx = croppedCanvas.getContext('2d');
//     if (ctx) {
//       ctx.drawImage(
//         canvas,
//         trimLeft, 0,
//         trimmedWidth, trimmedHeight,
//         0, 0,
//         trimmedWidth, trimmedHeight
//       );
//     }

//     const imgData = croppedCanvas.toDataURL('image/png');

//     const pdf = new jsPDF('p', 'mm', [customWidth, customHeight]);

//     const imgProps = pdf.getImageProperties(imgData);
//     const imgWidth = customWidth;
//     const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

//     const finalHeight = imgHeight > customHeight ? customHeight : imgHeight;

//     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, finalHeight);
//     pdf.save(`${this.headerForm.value.employeeName || 'OfferLetter'}.pdf`);

//     this.loader = false;
//   }).catch(error => {
//     console.error('Error generating PDF:', error);
//     this.loader = false;
//   });
// }

// printPdf() {
//   const element = document.getElementById('pdfContent');
//   if (!element) {
//     console.error('pdfContent not found');
//     return;
//   }

//   this.loader = true;

//   const scale = 3;

//   html2canvas(element, {
//     scale: scale,
//     useCORS: true,
//     backgroundColor: '#ffffff',
//     scrollY: -window.scrollY
//   }).then(canvas => {
//     const ctx = canvas.getContext('2d');
//     const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
//     if (!ctx || !imageData) {
//       this.loader = false;
//       return;
//     }

//     // Detect non-white pixel bounds
//     const isWhite = (r: number, g: number, b: number, a: number) =>
//       r > 240 && g > 240 && b > 240 && a > 0;

//     let top = canvas.height, bottom = 0, left = canvas.width, right = 0;

//     for (let y = 0; y < canvas.height; y++) {
//       for (let x = 0; x < canvas.width; x++) {
//         const i = (y * canvas.width + x) * 4;
//         const r = imageData.data[i];
//         const g = imageData.data[i + 1];
//         const b = imageData.data[i + 2];
//         const a = imageData.data[i + 3];

//         if (!isWhite(r, g, b, a)) {
//           if (x < left) left = x;
//           if (x > right) right = x;
//           if (y < top) top = y;
//           if (y > bottom) bottom = y;
//         }
//       }
//     }

//     const trimmedWidth = right - left + 1;
//     const trimmedHeight = bottom - top + 1;

//     const croppedCanvas = document.createElement('canvas');
//     croppedCanvas.width = trimmedWidth;
//     croppedCanvas.height = trimmedHeight;

//     const croppedCtx = croppedCanvas.getContext('2d');
//     if (croppedCtx) {
//       croppedCtx.drawImage(canvas, left, top, trimmedWidth, trimmedHeight, 0, 0, trimmedWidth, trimmedHeight);
//     }

//     const imgData = croppedCanvas.toDataURL('image/png');

//     // Convert px to mm (1px ≈ 0.264583 mm)
//     const mmWidth = trimmedWidth * 0.264583;
//     const mmHeight = trimmedHeight * 0.264583;

//     const pdf = new jsPDF('p', 'mm', [mmWidth, mmHeight]);
//     pdf.addImage(imgData, 'PNG', 0, 0, mmWidth, mmHeight);
//     pdf.save(`${this.headerForm.value.employeeName || 'OfferLetter'}.pdf`);

//     this.loader = false;
//   }).catch(error => {
//     console.error('Error generating PDF:', error);
//     this.loader = false;
//   });
// }

// resposive for 100% 110%

// printPdf() {
//   const element = document.getElementById('pdfContent');
//   if (!element) {
//     console.error('pdfContent not found');
//     return;
//   }

//   this.loader = true;

//   const scale = 3;

//   html2canvas(element, {
//     scale: scale,
//     useCORS: true,
//     backgroundColor: '#ffffff',
//     scrollY: -window.scrollY
//   }).then(canvas => {
//     // Optional: Remove outer white space
//     const ctx = canvas.getContext('2d');
//     const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
//     if (!ctx || !imageData) {
//       this.loader = false;
//       return;
//     }

//     const isWhite = (r: number, g: number, b: number, a: number) =>
//       r > 240 && g > 240 && b > 240 && a > 0;

//     let top = canvas.height, bottom = 0, left = canvas.width, right = 0;

//     for (let y = 0; y < canvas.height; y++) {
//       for (let x = 0; x < canvas.width; x++) {
//         const i = (y * canvas.width + x) * 4;
//         const r = imageData.data[i];
//         const g = imageData.data[i + 1];
//         const b = imageData.data[i + 2];
//         const a = imageData.data[i + 3];

//         if (!isWhite(r, g, b, a)) {
//           if (x < left) left = x;
//           if (x > right) right = x;
//           if (y < top) top = y;
//           if (y > bottom) bottom = y;
//         }
//       }
//     }

//     const trimmedWidth = right - left + 1;
//     const trimmedHeight = bottom - top + 1;

//     const croppedCanvas = document.createElement('canvas');
//     croppedCanvas.width = trimmedWidth;
//     croppedCanvas.height = trimmedHeight;

//     const croppedCtx = croppedCanvas.getContext('2d');
//     if (croppedCtx) {
//       croppedCtx.drawImage(canvas, left, top, trimmedWidth, trimmedHeight, 0, 0, trimmedWidth, trimmedHeight);
//     }

//     const imgData = croppedCanvas.toDataURL('image/png');

//     // Fixed A4 size
//     const pageWidth = 210;
//     const pageHeight = 297;

//     const pdf = new jsPDF('p', 'mm', [pageWidth, pageHeight]);

//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfImgWidth = pageWidth - 20; // 10mm margin on left/right
//     const pdfImgHeight = (imgProps.height * pdfImgWidth) / imgProps.width;

//     let posY = 10;
//     if (pdfImgHeight > pageHeight - 20) {
//       // Resize to fit inside page height if needed
//       const adjustedHeight = pageHeight - 20;
//       const adjustedWidth = (imgProps.width * adjustedHeight) / imgProps.height;
//       posY = 10;
//       pdf.addImage(imgData, 'PNG', (pageWidth - adjustedWidth) / 2, posY, adjustedWidth, adjustedHeight);
//     } else {
//       // Center vertically
//       posY = (pageHeight - pdfImgHeight) / 2;
//       pdf.addImage(imgData, 'PNG', 10, posY, pdfImgWidth, pdfImgHeight);
//     }

//     pdf.save(`${this.headerForm.value.employeeName || 'OfferLetter'}.pdf`);
//     this.loader = false;
//   }).catch(error => {
//     console.error('Error generating PDF:', error);
//     this.loader = false;
//   });
// }

//Perfect Responsive code 

 updateTemplate() {




    const { employeeName, employeeId, address, city, state, zip } = this.headerForm.value;


    console.log('headerForm..', this.headerForm.controls['employeeName'].value);
    const { issueDate } = this.headerForm.value;
    this.formattedDate = this.datePipe.transform(issueDate, 'dd-MM-yyyy');

    const company = this.footerForm.controls['companyName'].value || 'JESPER APPS SOFTWARE SERVICES PRIVATE LIMITED ';



    const {
      basic = 0,
      hra = 0,
      variablePay = 0,
      allowances = 0,
      employerPf = 0,
      deductions = 0,
      otherBenefits = 0,
    } = this.annexureForm.value;

    const totalMonthlyGross =
      +basic + +hra + +variablePay + +allowances + +employerPf;

    const annualCTC =
      (totalMonthlyGross - +deductions + +otherBenefits) * 12;
    const { signatoryName, signatoryDesignation } = this.signatoryForm.value;
    const {
      companyName,
      addressLine1,
      addressLine2,
      cin,
      phone,
      email,
      website
    } = this.footerForm.value;


    const templateHtml = `
  <style>

 body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  font-size: 7.5px;
}

.letter-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto 15px auto;
  width: 100%;
  max-width: 540px; /* Increased width */
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.letter-container-space {
  padding: 16px 24px; /* Added more padding around content */
}

.header {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #1a3e68;
  padding-bottom: 3px;
  margin-bottom: 6px;
  margin-top: 16px;
}

.brand {
  height: 18px;
  margin-right: 6px;
}

.title-section {
  margin-bottom: 6px;
}

.letter-title {
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
}

.issue-date {
  font-size: 0.8em;
  font-weight: bold;
}

.content {
  padding: 8px 0; /* Optional: inner content spacing */
}

.content p {
  margin: 2px 0;
  font-size: 0.9em;
}

.signature {
  margin-top: 6px;
  font-size: 0.9em;
}

strong {
  font-weight: bold;
}

.letter-footer {
  margin-top: 12px;
  font-size: 0.8em;
}

.company-footer {
  text-align: center;
  font-size: 10px;
  line-height: 1.2;
}

.company-footer a {
  color: #000;
  text-decoration: underline;
}

.tbs {
  border-bottom: 17px solid #204a7a !important;
  width: 100%;
  margin: 0;

  padding: 0;
}

.employee-address p {
  margin: 0;
  line-height: 1.2;
}

.text-extra-dark {
  color: #000;
}

.salary-table {
  width: 100%;
  border-collapse: collapse;
  margin: 6px 0 10px 0;
  font-size: 0.8em;
}

.salary-table th,
.salary-table td {
  border: 1px solid black;
  padding: 1.5px 3px;
  text-align: left;
}

.salary-table .highlight td {
  font-weight: bold;
}

.page-break {
  page-break-before: always;
  break-before: page;
}

.apply-margin {
  margin-left: -25px;
}

/* Small screen and print adjustments */
@media screen and (max-width: 600px), print {
  .letter-container {
    width: 95%;
    max-width: 100%;
  }

  .letter-title {
    font-size: 1em;
  }

  .company-footer {
    font-size: 0.6em;
  }
}
#pdfContent {
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
}

#pdfContent {
  margin: 0;
  padding: 0;
  background: #fff;
  width: 794px; /* A4 at 96dpi */
}


#pdfContent {
  font-size: 12px !important; /* Increased font size */
  line-height: 1.4 !important;
  margin: 0 !important;
  padding: 0 !important;
}


  </style>

 
  <div class="templates-component template-font">
    <div class="letter-container" id="pdfContent">
      <div class="header">
        <img src="${this.fileblob}" class="brand" />
      </div>
      <div class="letter-container-space">
        <div class="title-section row">
          <div class="col-12 text-center">
            <div class="letter-title text-extra-dark ">
             LETTER OF OFFER 
            </div>
          </div>
        </div>
        <div class="title-section row">
          <div class="col-12 text-end">
            <div class="issue-date">Issue Date: ${this.formattedDate}</div>
          </div>  
        </div>
        <div class="content">
          <div class="employee-address">
<p class="text-extra-dark"><strong>${employeeName},</strong></p>
            <p class="text-extra-dark"><strong>${address},</strong></p>
            <p>${city}, ${state}, ${zip}</p>
   
          </div>
          <br />
          ${this.letterContent}
    <div class="row mb-5">
  <div class="col-12 d-flex justify-content-start mt-5">
    <div class="signature" style="text-align: left;">
      <p style="margin: 0 0;">${signatoryName}</p>
      ${signatoryDesignation ? `<p style="margin: 0 0;">${signatoryDesignation}</p>` : ''}
      <p style="margin: 0 0;">${companyName}</p>
         <p style="margin: 0 0;">${address}</p>
    </div>
  </div>
</div>

        </div>
      </div>
      <div>
      

        <div class="letter-footer">
       <p class="company-footer">
  <strong class="text-extra-dark">${company}</strong><br />
  ${addressLine1}, ${addressLine2}<br />
  CIN: ${cin} • 📞: ${phone} • ✉ :
  <a href="mailto:${email}">${email}</a> • 🌐:
  <a href="${website}" target="_blank">${website}</a>
</p>
      </div>
        <div class="tbs mt-3"></div>
      </div>
    </div>
  </div>

  
  <div class="page-break"></div>

  
  `;
    this.generatedTemplate = this.sanitizer.bypassSecurityTrustHtml(templateHtml);
  }

printPdf() {
  const element = document.getElementById('pdfContent');
  if (!element) {
    console.error('pdfContent not found');
    return;
  }

  this.loader = true;

  const scale = 3;

  html2canvas(element, {
    scale: scale,
    useCORS: true,
    backgroundColor: '#ffffff',
    scrollY: -window.scrollY
  }).then(canvas => {
    const ctx = canvas.getContext('2d');
    const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
    if (!ctx || !imageData) {
      this.loader = false;
      return;
    }

    const isWhite = (r: number, g: number, b: number, a: number) =>
      r > 240 && g > 240 && b > 240 && a > 0;

    let top = canvas.height, bottom = 0, left = canvas.width, right = 0;

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const i = (y * canvas.width + x) * 4;
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        const a = imageData.data[i + 3];

        if (!isWhite(r, g, b, a)) {
          if (x < left) left = x;
          if (x > right) right = x;
          if (y < top) top = y;
          if (y > bottom) bottom = y;
        }
      }
    }

    const trimmedWidth = right - left + 1;
    const trimmedHeight = bottom - top + 1;

    const croppedCanvas = document.createElement('canvas');
    croppedCanvas.width = trimmedWidth;
    croppedCanvas.height = trimmedHeight;

    const croppedCtx = croppedCanvas.getContext('2d');
    if (croppedCtx) {
      croppedCtx.drawImage(canvas, left, top, trimmedWidth, trimmedHeight, 0, 0, trimmedWidth, trimmedHeight);
    }

    const imgData = croppedCanvas.toDataURL('image/png');

    // A4 size
    const pageWidth = 210;
    const pageHeight = 297;

    const pdf = new jsPDF('p', 'mm', [pageWidth, pageHeight]);
    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight); // full edge-to-edge

    pdf.save(`${this.headerForm.value.employeeName || 'OfferLetter'}.pdf`);
    this.loader = false;
  }).catch(error => {
    console.error('Error generating PDF:', error);
    this.loader = false;
  });
}

}
