import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-revision-letter',
  templateUrl: './revision-letter.component.html',
  styleUrls: ['./revision-letter.component.scss']
})
export class RevisionLetterComponent {
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
  annexureData: any;

  constructor(private sanitizer: DomSanitizer,

    private fb: FormBuilder,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef,

  ) {}

 ngOnInit(): void {
  this.initializeForms(); 

  this.letterContent = `
     <p class="mt-2">
      This is to inform you that your resignation has been accepted and you
      are relieved from <strong>Company Name</strong> on the close of
      working hours on <strong>Relieving Date</strong>.
    </p>

    <p class="mt-2">
      Thank you so much for all your contribution. We wish you all success
      in your future endeavors.
    </p>

    <p class="mt-2">Thank you.</p>
    <p class="mt-2">Best regards,</p>
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

  updateTemplate() {





    const { issueDate, employeeName, employeeId, designation } = this.headerForm.value;
    // const companyName = this.imageResultData?.organizationName || 'Company Name';
    const company = this.footerForm.controls['companyName'].value || 'JESPER APPS SOFTWARE SERVICES PRIVATE LIMITED ';
    // const issueDate = new Date().toLocaleDateString();
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
//     this.annexureData = `  <table class="salary-table small-centered-table mt-5">
//             <thead>
//               <tr>
//                 <th></th>
//                 <th class="text-extra-dark text-center">Per Month</th>
//                 <th class="text-extra-dark text-center">Per Annum</th>
//               </tr>
//             </thead>
          

//             <tbody>
//   <tr><td>Basic Salary</td><td>${basic}</td><td>${(basic * 12).toFixed(2)}</td></tr>
//   <tr><td>HRA</td><td>${hra}</td><td>${(hra * 12).toFixed(2)}</td></tr>
//   <tr><td>Variable Pay</td><td>${variablePay}</td><td>${(variablePay * 12).toFixed(2)}</td></tr>
//   <tr><td>Special / Other allowances</td><td>${allowances}</td><td>${(allowances * 12).toFixed(2)}</td></tr>
//   <tr><td>Employer PF</td><td>${employerPf}</td><td>${(employerPf * 12).toFixed(2)}</td></tr>
//   <tr class="highlight">
//     <td><strong class="text-extra-dark">Total Gross Salary</strong></td>
//     <td>${totalMonthlyGross}</td>
//     <td>${(totalMonthlyGross * 12).toFixed(2)}</td>
//   </tr>
//   <tr><td>Deductions (PF & TDS)</td><td>${deductions}</td><td>${(deductions * 12).toFixed(2)}</td></tr>
//   <tr><td>Other benefits</td><td>${otherBenefits}</td><td>${(otherBenefits * 12).toFixed(2)}</td></tr>
//   <tr class="highlight">
//     <td><strong class="text-extra-dark">Annual CTC</strong></td>
//     <td>-</td>
//     <td>${annualCTC}</td>
//   </tr>
// </tbody>

//           </table>`;
   
this.annexureData = `
  <style>
    .salary-table {
      border-collapse: collapse;
      width: 100%;
      font-family: Arial, sans-serif;
      font-size: 14px;
    }

    .salary-table th,
    .salary-table td {
      border-top: 1px solid #333;
      border-bottom: 1px solid #333;
      height: 36px;
      line-height: 36px;
      text-align: center;
      padding: 0 8px;
    }

    /* First column: left-aligned and left border */
    .salary-table th:first-child,
    .salary-table td:first-child {
      text-align: left;
      border-left: 1px solid #333;
    }

    /* Last column: right border */
    .salary-table th:last-child,
    .salary-table td:last-child {
      border-right: 1px solid #333;
    }

    /* Remove middle vertical borders by default (between columns) */
    .salary-table th:not(:first-child):not(:last-child),
    .salary-table td:not(:first-child):not(:last-child) {
      border-left: none;
      border-right: none;
    }

    /* Header bold */
    .salary-table th {
      font-weight: bold;
    }

    /* Row highlight (for total rows) */
    .salary-table .highlight td {
      font-weight: bold;
    }
  </style>

  <table class="salary-table">
    <thead>
      <tr>
        <th></th>
        <th>Per Month</th>
        <th>Per Annum</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Basic Salary</td><td>${basic}</td><td>${(basic * 12).toFixed(2)}</td></tr>
      <tr><td>HRA</td><td>${hra}</td><td>${(hra * 12).toFixed(2)}</td></tr>
      <tr><td>Variable Pay</td><td>${variablePay}</td><td>${(variablePay * 12).toFixed(2)}</td></tr>
      <tr><td>Special / Other allowances</td><td>${allowances}</td><td>${(allowances * 12).toFixed(2)}</td></tr>
      <tr><td>Employer PF</td><td>${employerPf}</td><td>${(employerPf * 12).toFixed(2)}</td></tr>
      <tr class="highlight">
        <td>Total Gross Salary</td>
        <td>${totalMonthlyGross}</td>
        <td>${(totalMonthlyGross * 12).toFixed(2)}</td>
      </tr>
      <tr><td>Deductions (PF & TDS)</td><td>${deductions}</td><td>${(deductions * 12).toFixed(2)}</td></tr>
      <tr><td>Other benefits</td><td>${otherBenefits}</td><td>${(otherBenefits * 12).toFixed(2)}</td></tr>
      <tr class="highlight">
        <td>Annual CTC</td><td>-</td><td>${annualCTC}</td>
      </tr>
    </tbody>
  </table>
`;



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
  font-size: 1em;
}

.issue-date {
  font-size: 0.8em;
  font-weight: bold;
}

.content {
  padding: 8px 0; 
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
  font-size: 0.65em;
  line-height: 1.2;
}

.company-footer a {
  color: #000;
  text-decoration: underline;
}

.tbs {
  border-bottom: 12px solid #204a7a !important;
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


.page-block {
  page-break-after: always;
  margin-bottom: 40px;
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






  </style>
<div class="page-block">
 
<div class="templates-component template-font">
  <div class="letter-container"  id="pdfContent">
    <!-- Header Section -->
    <div class="header">
      <img src="${this.fileblob}" class="brand" />
    </div>

    <!-- Main Content Section -->
    <div class="letter-container-space">
      <!-- Title -->
      <div class="title-section row">
        <div class="col-12 text-center">
          <div class="letter-title text-extra-dark text-decoration-underline">
            SALARY REVISION LETTER
          </div>
        </div>
      </div>

      <!-- Issue Date -->
      <div class="title-section row">
        <div class="col-12 text-end">
          <div class="issue-date">Issue Date: ${issueDate}</div>
        </div>
      </div>

      <!-- Letter Content -->
      <div class="content">
        <!-- Employee Details -->
        <div class="employee-address">
          <p class="text-extra-dark"><strong>To</strong></p>
          <p class="text-extra-dark"><strong>${employeeName},</strong></p>
          <p>${employeeId},</p>
          <p>${designation}.</p>
        </div>

        <br />

        <!-- Dynamic Letter Content -->
        ${this.letterContent}

        <!-- Company Footer Signature -->
        <div class="d-flex mt-5">
          <div class="ms-auto text-end mt-2">
            <p>For the <strong class="text-extra-dark">${companyName}</strong></p>
          </div>
        </div>

        <!-- Signature Block -->
        <div class="row mb-5">
          <div class="col-12 d-flex justify-content-end mt-5">
            <div class="signature" style="text-align: left;">
              <p><strong>${signatoryName}</strong></p>
              ${signatoryDesignation ? `<p>${signatoryDesignation}</p>` : ''}
              <p>Authorized Signatory</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
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

</div>
  
  <div class="page-break"></div>

  <!-- Page 2: Salary Annexure -->
  <div class="page-block">
  <div class="templates-component template-font">
    <div class="letter-container" #annexureSection>
      <div class="header">
        <img src="${this.fileblob}" class="brand" />
      </div>
      <div class="letter-container-space">
        <div class="title-section row">
          <div class="col-12 text-center">
            <div class="letter-title text-extra-dark text-decoration-underline">
              Salary Annexure
            </div>
          </div>
        </div>
        <div class="content">
         ${this.annexureData}
 <div class="d-flex mt-5">
            <div class="ms-auto text-end mt-2">
              <p>For the <strong class="text-extra-dark">${companyName}</strong></p>
            </div>
          </div>


<div class="row mb-5">
  <div class="col-12 d-flex justify-content-end mt-5">
    <div class="signature" style="text-align: left;">
      <p><strong>${signatoryName}</strong></p>
      ${signatoryDesignation ? `<p>${signatoryDesignation}</p>` : ''}
      <p>Authorized Signatory</p>
    </div>
  </div>
</div>


  </div>
  <div class="letter-footer">
         <p class="company-footer">
  <strong class="text-extra-dark">${company}</strong><br />
  ${addressLine1}, ${addressLine2}<br />
  CIN: ${cin} • 📞: ${phone} • ✉ :
  <a href="mailto:${email}">${email}</a> • 🌐:
  <a href="${website}" target="_blank">${website}</a>
</p>
      </div>
      </div>
      <div class="tbs"></div>
      </div>

  `;
    this.generatedTemplate = this.sanitizer.bypassSecurityTrustHtml(templateHtml);
  }


// printPdf() {
//   const element = document.getElementById('pdfContent');
//   if (!element) {
//     console.error('pdfContent not found');
//     return;
//   }

//   this.loader = true;
//   const pageWidth = 210;
//   const pageHeight = 297;
//   const scale = 3;

//   const pageBlocks = element.querySelectorAll('.page-block');
//   if (!pageBlocks || pageBlocks.length === 0) {
//     console.error('No .page-blocks found');
//     this.loader = false;
//     return;
//   }

//   const pdf = new jsPDF('p', 'mm', [pageWidth, pageHeight]);

//   const renderPage = (index: number) => {
//     if (index >= pageBlocks.length) {
//       pdf.save(`${this.headerForm.value.employeeName || 'OfferLetter'}.pdf`);
//       this.loader = false;
//       return;
//     }

//     const block = pageBlocks[index] as HTMLElement;

//     html2canvas(block, {
//       scale: scale,
//       useCORS: true,
//       backgroundColor: '#ffffff',
//       scrollY: -window.scrollY
//     }).then(canvas => {
//       const imgData = canvas.toDataURL('image/png');

//       if (index > 0) pdf.addPage();
//       pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);

//       renderPage(index + 1); // render next
//     }).catch(error => {
//       console.error('Error rendering block:', error);
//       this.loader = false;
//     });
//   };

//   renderPage(0);
// }

// perfect for 100 110
// printPdf() {
//   const element = document.getElementById('pdfContent');

//   if (!element) {
//     console.error('pdfContent not found');
//     return;
//   }

//   this.loader = true;
//   const scale = 3;
//   const pageWidth = 210;
//   const pageHeight = 297;

//   const blocks = element.querySelectorAll('.page-block');
//   if (!blocks || blocks.length === 0) {
//     console.error('No .page-block elements found inside #pdfContent');
//     this.loader = false;
//     return;
//   }

//   const pdf = new jsPDF('p', 'mm', [pageWidth, pageHeight]);

//   const isWhite = (r: number, g: number, b: number, a: number) =>
//     r > 240 && g > 240 && b > 240 && a > 0;

//   const processBlock = (block: Element, index: number) => {
//     return html2canvas(block as HTMLElement, {
//       scale: scale,
//       useCORS: true,
//       backgroundColor: '#ffffff',
//       scrollY: -window.scrollY
//     }).then(canvas => {
//       const ctx = canvas.getContext('2d');
//       const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
//       if (!ctx || !imageData) return;

//       let top = canvas.height, bottom = 0, left = canvas.width, right = 0;

//       for (let y = 0; y < canvas.height; y++) {
//         for (let x = 0; x < canvas.width; x++) {
//           const i = (y * canvas.width + x) * 4;
//           const r = imageData.data[i];
//           const g = imageData.data[i + 1];
//           const b = imageData.data[i + 2];
//           const a = imageData.data[i + 3];

//           if (!isWhite(r, g, b, a)) {
//             if (x < left) left = x;
//             if (x > right) right = x;
//             if (y < top) top = y;
//             if (y > bottom) bottom = y;
//           }
//         }
//       }

//       const trimmedWidth = right - left + 1;
//       const trimmedHeight = bottom - top + 1;

//       const croppedCanvas = document.createElement('canvas');
//       croppedCanvas.width = trimmedWidth;
//       croppedCanvas.height = trimmedHeight;

//       const croppedCtx = croppedCanvas.getContext('2d');
//       if (croppedCtx) {
//         croppedCtx.drawImage(canvas, left, top, trimmedWidth, trimmedHeight, 0, 0, trimmedWidth, trimmedHeight);
//       }

//       const imgData = croppedCanvas.toDataURL('image/png');

//       if (index > 0) pdf.addPage();
//       pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
//     });
//   };

//   Promise.all(Array.from(blocks).map((block, i) => processBlock(block, i)))
//     .then(() => {
//       pdf.save(`${this.headerForm.value.employeeName || 'OfferLetter'}.pdf`);
//       this.loader = false;
//     })
//     .catch(err => {
//       console.error('PDF generation error:', err);
//       this.loader = false;
//     });
// }

//100 125

// printPdf() {
//   const element = document.getElementById('pdfContent');
//   if (!element) {
//     console.error('pdfContent not found');
//     return;
//   }

//   this.loader = true;
//   const scale = 3;
//   const pageWidth = 210;
//   const pageHeight = 297;

//   // Temporarily scale root to 100% zoom (simulate zoom reset)
//   const originalTransform = document.body.style.transform;
//   const originalTransformOrigin = document.body.style.transformOrigin;

//   document.body.style.transform = 'scale(1)';
//   document.body.style.transformOrigin = 'top left';

//   const blocks = element.querySelectorAll('.page-block');
//   if (!blocks || blocks.length === 0) {
//     console.error('No .page-block elements found inside #pdfContent');
//     this.loader = false;
//     return;
//   }

//   const pdf = new jsPDF('p', 'mm', [pageWidth, pageHeight]);

//   const isWhite = (r: number, g: number, b: number, a: number) =>
//     r > 240 && g > 240 && b > 240 && a > 0;

//   const processBlock = (block: Element, index: number) => {
//     return html2canvas(block as HTMLElement, {
//       scale: scale,
//       useCORS: true,
//       backgroundColor: '#ffffff',
//       scrollY: -window.scrollY
//     }).then(canvas => {
//       const ctx = canvas.getContext('2d');
//       const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
//       if (!ctx || !imageData) return;

//       let top = canvas.height, bottom = 0, left = canvas.width, right = 0;

//       for (let y = 0; y < canvas.height; y++) {
//         for (let x = 0; x < canvas.width; x++) {
//           const i = (y * canvas.width + x) * 4;
//           const r = imageData.data[i];
//           const g = imageData.data[i + 1];
//           const b = imageData.data[i + 2];
//           const a = imageData.data[i + 3];

//           if (!isWhite(r, g, b, a)) {
//             if (x < left) left = x;
//             if (x > right) right = x;
//             if (y < top) top = y;
//             if (y > bottom) bottom = y;
//           }
//         }
//       }

//       const trimmedWidth = right - left + 1;
//       const trimmedHeight = bottom - top + 1;

//       const croppedCanvas = document.createElement('canvas');
//       croppedCanvas.width = trimmedWidth;
//       croppedCanvas.height = trimmedHeight;

//       const croppedCtx = croppedCanvas.getContext('2d');
//       if (croppedCtx) {
//         croppedCtx.drawImage(canvas, left, top, trimmedWidth, trimmedHeight, 0, 0, trimmedWidth, trimmedHeight);
//       }

//       const imgData = croppedCanvas.toDataURL('image/png');

//       if (index > 0) pdf.addPage();
//       pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
//     });
//   };

//   Promise.all(Array.from(blocks).map((block, i) => processBlock(block, i)))
//     .then(() => {
//       // Restore original zoom/transform
//       document.body.style.transform = originalTransform;
//       document.body.style.transformOrigin = originalTransformOrigin;

//       pdf.save(`${this.headerForm.value.employeeName || 'OfferLetter'}.pdf`);
//       this.loader = false;
//     })
//     .catch(err => {
//       console.error('PDF generation error:', err);

//       // Restore zoom even on error
//       document.body.style.transform = originalTransform;
//       document.body.style.transformOrigin = originalTransformOrigin;

//       this.loader = false;
//     });
// }

//110 125

// printPdf() {
//   const element = document.getElementById('pdfContent');
//   if (!element) {
//     console.error('pdfContent not found');
//     return;
//   }

//   this.loader = true;
//   const scale = 2; // Optimal scale for clarity and performance
//   const pageWidth = 210;
//   const pageHeight = 297;

//   const zoomRatio = window.devicePixelRatio || 1;

//   const pdf = new jsPDF('p', 'mm', [pageWidth, pageHeight]);

//   const blocks = element.querySelectorAll('.page-block');
//   if (!blocks.length) {
//     console.error('No .page-block elements found inside #pdfContent');
//     this.loader = false;
//     return;
//   }

//   const isWhite = (r: number, g: number, b: number, a: number) =>
//     r > 240 && g > 240 && b > 240 && a > 0;

//   const processBlock = async (block: Element, index: number) => {
//     const canvas = await html2canvas(block as HTMLElement, {
//       scale: scale * zoomRatio, // accounts for browser zoom
//       useCORS: true,
//       backgroundColor: '#ffffff',
//       scrollY: -window.scrollY
//     });

//     const ctx = canvas.getContext('2d');
//     const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
//     if (!ctx || !imageData) return;

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

//     if (index > 0) pdf.addPage();
//     pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
//   };

//   Promise.all(Array.from(blocks).map(processBlock))
//     .then(() => {
//       pdf.save(`${this.headerForm.value.employeeName || 'OfferLetter'}.pdf`);
//       this.loader = false;
//     })
//     .catch(err => {
//       console.error('PDF generation error:', err);
//       this.loader = false;
//     });
// }


//perfect for all
printPdf() {
  const element = document.getElementById('pdfContent');
  if (!element) {
    console.error('pdfContent not found');
    return;
  }

  this.loader = true;
  const scale = 3;
  const pageWidth = 210;
  const pageHeight = 297;

  const blocks = element.querySelectorAll('.page-block');
  if (!blocks || blocks.length === 0) {
    console.error('No .page-block elements found inside #pdfContent');
    this.loader = false;
    return;
  }

  const pdf = new jsPDF('p', 'mm', [pageWidth, pageHeight]);

  // Backup original styles
  const originalTransform = element.style.transform;
  const originalTransformOrigin = element.style.transformOrigin;

  // Neutralize browser zoom
  element.style.transform = 'scale(1)';
  element.style.transformOrigin = 'top left';

  const isWhite = (r: number, g: number, b: number, a: number) =>
    r > 240 && g > 240 && b > 240 && a > 0;

  const processBlock = (block: Element, index: number) => {
    return html2canvas(block as HTMLElement, {
      scale: scale,
      useCORS: true,
      backgroundColor: '#ffffff',
      scrollY: -window.scrollY
    }).then(canvas => {
      const ctx = canvas.getContext('2d');
      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
      if (!ctx || !imageData) return;

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

      if (index > 0) pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
    });
  };

  Promise.all(Array.from(blocks).map((block, i) => processBlock(block, i)))
    .then(() => {
      // Restore original styles
      element.style.transform = originalTransform;
      element.style.transformOrigin = originalTransformOrigin;

      pdf.save(`${this.headerForm.value.employeeName || 'OfferLetter'}.pdf`);
      this.loader = false;
    })
    .catch(err => {
      console.error('PDF generation error:', err);
      element.style.transform = originalTransform;
      element.style.transformOrigin = originalTransformOrigin;
      this.loader = false;
    });
}



}
