import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-barra-superior',
    templateUrl: './barra-superior.component.html',
})
export class BarraSuperiorComponent {
    sidebarVisible2 = false
    products: [] | any;
    items: MenuItem[] | undefined;

    ngOnInit(): void {

        this.products = this.retornaProdutos()
        this.items = [
            {
                label: 'File',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            }
                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            // {
            //     label: 'Edit',
            //     icon: 'pi pi-fw pi-pencil',
            //     items: [
            //         {
            //             label: 'Left',
            //             icon: 'pi pi-fw pi-align-left'
            //         },
            //         {
            //             label: 'Right',
            //             icon: 'pi pi-fw pi-align-right'
            //         },
            //         {
            //             label: 'Center',
            //             icon: 'pi pi-fw pi-align-center'
            //         },
            //         {
            //             label: 'Justify',
            //             icon: 'pi pi-fw pi-align-justify'
            //         }
            //     ]
            // },
            // {
            //     label: 'Users',
            //     icon: 'pi pi-fw pi-user',
            //     items: [
            //         {
            //             label: 'New',
            //             icon: 'pi pi-fw pi-user-plus',
            //             className: 'text-green-500',
            //         },
            //         {
            //             label: 'Delete',
            //             icon: 'pi pi-fw pi-user-minus'
            //         },
            //         {
            //             label: 'Search',
            //             icon: 'pi pi-fw pi-users',
            //             items: [
            //                 {
            //                     label: 'Filter',
            //                     icon: 'pi pi-fw pi-filter',
            //                     items: [
            //                         {
            //                             label: 'Print',
            //                             icon: 'pi pi-fw pi-print'
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     icon: 'pi pi-fw pi-bars',
            //                     label: 'List'
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     label: 'Events',
            //     icon: 'pi pi-fw pi-calendar',
            //     items: [
            //         {
            //             label: 'Edit',
            //             icon: 'pi pi-fw pi-pencil',
            //             items: [
            //                 {
            //                     label: 'Save',
            //                     icon: 'pi pi-fw pi-calendar-plus'
            //                 },
            //                 {
            //                     label: 'Delete',
            //                     icon: 'pi pi-fw pi-calendar-minus'
            //                 }
            //             ]
            //         },
            //         {
            //             label: 'Archieve',
            //             icon: 'pi pi-fw pi-calendar-times',
            //             items: [
            //                 {
            //                     label: 'Remove',
            //                     icon: 'pi pi-fw pi-calendar-minus'
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     label: 'Quit',
            //     icon: 'pi pi-fw pi-power-off'
            // }
        ];

    }



    retornaProdutos(){
        return  [
              {
                  "id": "1000",
                  "code": "f230fh0g3",
                  "name": "Bamboo Watch",
                  "description": "Product Description",
                  "image": "bamboo-watch.jpg",
                  "price": 65,
                  "category": "Accessories",
                  "quantity": 24,
                  "inventoryStatus": "INSTOCK",
                  "rating": 5
              },
              {
                  "id": "1001",
                  "code": "nvklal433",
                  "name": "Black Watch",
                  "description": "Product Description",
                  "image": "black-watch.jpg",
                  "price": 72,
                  "category": "Accessories",
                  "quantity": 61,
                  "inventoryStatus": "OUTOFSTOCK",
                  "rating": 4
              },
              {
                  "id": "1002",
                  "code": "zz21cz3c1",
                  "name": "Blue Band",
                  "description": "Product Description",
                  "image": "blue-band.jpg",
                  "price": 79,
                  "category": "Fitness",
                  "quantity": 2,
                  "inventoryStatus": "LOWSTOCK",
                  "rating": 3
              },
              {
                  "id": "1003",
                  "code": "244wgerg2",
                  "name": "Blue T-Shirt",
                  "description": "Product Description",
                  "image": "blue-t-shirt.jpg",
                  "price": 29,
                  "category": "Clothing",
                  "quantity": 25,
                  "inventoryStatus": "INSTOCK",
                  "rating": 5
              },
              {
                  "id": "1004",
                  "code": "h456wer53",
                  "name": "Bracelet",
                  "description": "Product Description",
                  "image": "bracelet.jpg",
                  "price": 15,
                  "category": "Accessories",
                  "quantity": 73,
                  "inventoryStatus": "INSTOCK",
                  "rating": 4
              },
              {
                  "id": "1005",
                  "code": "av2231fwg",
                  "name": "Brown Purse",
                  "description": "Product Description",
                  "image": "brown-purse.jpg",
                  "price": 120,
                  "category": "Accessories",
                  "quantity": 0,
                  "inventoryStatus": "OUTOFSTOCK",
                  "rating": 4
              },
              {
                  "id": "1006",
                  "code": "bib36pfvm",
                  "name": "Chakra Bracelet",
                  "description": "Product Description",
                  "image": "chakra-bracelet.jpg",
                  "price": 32,
                  "category": "Accessories",
                  "quantity": 5,
                  "inventoryStatus": "LOWSTOCK",
                  "rating": 3
              },
              {
                  "id": "1007",
                  "code": "mbvjkgip5",
                  "name": "Galaxy Earrings",
                  "description": "Product Description",
                  "image": "galaxy-earrings.jpg",
                  "price": 34,
                  "category": "Accessories",
                  "quantity": 23,
                  "inventoryStatus": "INSTOCK",
                  "rating": 5
              },
              {
                  "id": "1008",
                  "code": "vbb124btr",
                  "name": "Game Controller",
                  "description": "Product Description",
                  "image": "game-controller.jpg",
                  "price": 99,
                  "category": "Electronics",
                  "quantity": 2,
                  "inventoryStatus": "LOWSTOCK",
                  "rating": 4
              },
              {
                  "id": "1009",
                  "code": "cm230f032",
                  "name": "Gaming Set",
                  "description": "Product Description",
                  "image": "gaming-set.jpg",
                  "price": 299,
                  "category": "Electronics",
                  "quantity": 63,
                  "inventoryStatus": "INSTOCK",
                  "rating": 3
              }
          ]
      }

      getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return ""
        }
        
    }


}
