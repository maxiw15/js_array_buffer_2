export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  load(buffer) {
    return this.buffer;
  }

  toString(buffer) {
    let text = '';
    const testData = new Uint16Array(buffer);
    for (let i = 0; i < testData.length; i += 1) {
      text += String.fromCharCode(testData[i]);
    }
    return text;
  }
}

/*   У вас есть функция getBuffer(), которая эмулирует создание объекта типа ArrayBuffer. 
  Вам необходимо реализовать класс ArrayBufferConverter с методом load(), 
  который может загружать данные (сигнатура load(buffer)), и методом toString, 
  который умеет переводить содержимое загруженного ArrayBuffer в строку.
*/