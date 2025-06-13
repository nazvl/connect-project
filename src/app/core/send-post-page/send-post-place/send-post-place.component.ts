import { Component } from '@angular/core';
import { ProfilePhotoComponent } from '../../profile-photo/profile-photo.component';

@Component({
  selector: 'app-send-post-place',
  standalone: true,
  imports: [ProfilePhotoComponent],
  templateUrl: './send-post-place.component.html',
  styleUrls: ['./send-post-place.component.scss']
})
export class SendPostPlaceComponent {

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];
    console.log('Выбран файл:', file);
    // Здесь можно отправить на сервер
  }
  sendMessage() {
    const textarea = document.getElementById('text-area-with-new-post') as HTMLTextAreaElement;

    if (textarea) {
      const content = textarea.value.trim(); // trim убирает лишние пробелы в начале и конце

      if (content !== "") {
        // Здесь логика отправки сообщения
        console.log("Отправка сообщения:", content);
      } else {
        console.warn("Сообщение не может быть пустым.");
      }
    }
  }

  protected readonly document = document;
}
