import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { ImageService } from 'src/app/services/image.service';
import { ToastrService } from 'ngx-toastr';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-post-button',
  templateUrl: './post-button.component.html',
  styleUrls: ['./post-button.component.css'],
})
export class PostButtonComponent implements OnInit {
  post?: Post;
  file?: File;
  isLoading = false;

  constructor(private imageService: ImageService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    console.log(event);

    const file: File = event.target.files[0];
    this.file = file;
    console.log('file', file);
  }

  onSubmit(data: any, postForm: any) {
    this.isLoading = true;

    this.post = {
      file: this.file,
      postedBy: 'b9b99493-da37-42f0-9bf7-b2d52673acfd',
      caption: data.caption,
      searchTerm: data.searchTerm,
    };

    const formData = new FormData();
    formData.append('file', this.post.file as File);
    formData.append('postedBy', this.post.postedBy as string);
    formData.append('caption', this.post.caption as string);
    formData.append('searchTerm', this.post.searchTerm as string);

    console.log('form data', formData);

    this.imageService.postPost(formData).subscribe((res) => {
      console.log('response', res);
      if (res.status === 200) {
        this.isLoading = false;
        this.toastr.success('Post uploaded successfully', 'Success');
        postForm.reset();
      }
    });
  }
}
