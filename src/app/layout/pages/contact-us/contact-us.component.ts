import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { Product } from '../../../models/contact-us';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog';
import { EditProductDialogComponent } from '../../components/edit-product-dialog/edit-product-dialog.component';
import { TokenStorageService } from 'src/app/shared/token-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {

  listProduct!:Product[];

  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'image_link', 'description', 'price', 'action'];

  fetchProducts(){
    this.api.getProducts().subscribe((data) => {
      this.listProduct = data.data
      this.dataSource = new MatTableDataSource(this.listProduct)
      console.log('list of Products', this.listProduct)
    })
  }

  deleteProduct(id: number){
    this.api.deleteProduct(id).subscribe(((data) =>{
      console.log(data)
      this.fetchProducts()
    }));
  }

  onSubmit(product: NgForm){
    console.log(product);
    this.api.addProduct(product).subscribe((product) => {
      this.fetchProducts()
      console.log(product)
    })
  }

  updateProduct(row: any){
    this.editDialog.open(EditProductDialogComponent,{
      data: row
    }).afterClosed().subscribe((val) => {
      if( val === 'update'){
        this.fetchProducts()
      }
    })
  }

  constructor(private api: ApiService, 
    private editDialog: MatDialog,
    private token: TokenStorageService) { }

  ngOnInit(): void {
    this.fetchProducts()
    this.token.getUser
  }
}
