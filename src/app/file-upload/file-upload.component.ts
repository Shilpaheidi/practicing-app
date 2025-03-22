import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
previewUrl:string | ArrayBuffer | null =  null;
fileInfo:{name:string,size:number} | null =  null;
errorMessage:string | null =  null;


onFileSelected(event:Event):void{
    const file = (event.target as HTMLInputElement).files?.[0];
    if(file){
      if(!file.type.startsWith('image/')){
        this.errorMessage = 'only Images are Allowed';
        this.clearFile()
      }

      
    const maxSizeInBites = 2 * 1024 * 1024;
    if (file.size  > maxSizeInBites) {
      this.errorMessage = 'File size should not exceed 2 MB!';
      this.clearFile();
      return;
    }


    this.errorMessage = null;
    this.fileInfo = {name:file.name, size:file.size};

    const reader = new FileReader();
    reader.onload = ()=>(this.previewUrl =  reader.result);
    reader.readAsDataURL(file);
    }

}
clearFile(): void {
  this.previewUrl = null;
  this.fileInfo = null;
  this.errorMessage = null;
}

submitFile(): void {
  if (this.fileInfo) {
    console.log('File submitted:', this.fileInfo);
    alert('File submitted successfully!');
  }
}


}
