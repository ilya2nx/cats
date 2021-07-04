import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('closeModal') private closeModal: any;
  title = 'test-frontend';
  toggle = false
  warnings: any = {}
  newItem: any = {
    name: '',
    image: '',
    description: '',
    liked: false
  }
  objs = [
    {image: 'http://html.ftpes.ru/FrontEndTest/Shironeko.jpg' , name: 'Shironeko', description: 'Самый счастливый и сонный кот в мире', id: 1, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Garfi.jpg', name: 'Garfi', description: 'Самый злой кот в мире', id: 2, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Sam.jpg', name: 'Sam', description: 'У кота Сэма есть потрясающие брови', id: 3, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Snoopy.jpg', name: 'Snoopy', description: 'Самый очаровательный котик', id: 4, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Venus.jpg', name: 'Venus', description: 'Кошка с двумя лицами', id: 5, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Maru.jpg', name: 'Maru', description: 'Повелитель коробок', id: 6, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Lil_Bub.jpg', name: 'Lil Bub', description: 'Вечный котёнок', id: 7, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Banye.jpg', name: 'Banye', description: 'Всегда удивлённый кот', id: 8, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Grumpy_Cat.jpg', name: 'Grumpy Cat', description: 'Сердитый котик', id: 9, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Hamilton.jpg', name: 'Hamilton', description: 'Кот-хипстер', id: 10, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Nala.jpg', name: 'Nala', description: 'Кошка, которая всегда в шоке', id: 11, liked: false},
    {image: 'http://html.ftpes.ru/FrontEndTest/Colonel_Meow.jpg', name: 'Colonel Meow', description: 'Кот с самой длинной шерстью', id: 12, liked: false}
  ]

  resetNewItem() {
    this.newItem = {
      name: '',
      image: '',
      description: '',
      liked: false
    }
    this.warnings = {}
  }

  onLike(id: any) {
    this.objs.map((el: any) => {
      if (el.id === id) {
        el.liked = !el.liked
      }
    })
  }

  onInput(field: string, $event: any) {
    this.newItem[field] = $event.target.value
    if ($event.target.value === '') this.warnings[field] = true
    else delete this.warnings[field]
  }

  onAdd() {
    const reqFields = ['name', 'image', 'description']
    let canPost = true
    for (let field in this.newItem) {
      if (reqFields.includes(field) && this.newItem[field].length === 0) {
        this.warnings[field] = true
        canPost = false
      }
    }
    if (canPost && Object.keys(this.newItem).length !== 0) {
      this.newItem.id = this.objs[this.objs.length]
      this.objs.push(this.newItem)
      this.closeModal.nativeElement.click()
      this.resetNewItem()
    }
  }
  
}
