const typing = function (boxText, text, waitingTime) {
    this.boxText = boxText;
    this.text = text;
    this.tu = '';
    this.location_index_text = 0;
    this.waitingTime = parseInt(waitingTime, 10);
    this.function_typing_text();
    this.erasing_text = false;
}

typing.prototype.function_typing_text = function() {

    // Vị Trí chỉ mục của từ hiện tại
    const index_current_letter = this.location_index_text % this.text.length;
    //Lấy tất cả cả từ của chữ hiện tại
    const current_letter = this.text[index_current_letter]
    if(this.erasing_text) {
        this.tu = current_letter.substring(0, this.tu.length - 1)
    } else {
        this.tu = current_letter.substring(0, this.tu.length + 1)
    }


    this.boxText.innerHTML = `<span class="tu">${this.tu}</span>`


    let typing_speed = 300;
    if(this.erasing_text) {
        typing_speed = typing_speed /2
    }


    if(!this.erasing_text && this.tu === current_letter) {
        toc_do_typingtext = this.waitingTime;
        console.log(this.waitingTime)
        this.erasing_text = true;
    } else if (this.erasing_text && this.tu === ''){
        this.erasing_text = false;
        this.location_index_text++;
        typing_speed = 10
    }

    setTimeout(() => this.function_typing_text(), typing_speed)
}

document.addEventListener('DOMContentLoaded', run_function);

function run_function() {
    const boxText = document.querySelector('.typing-text');
    const text = JSON.parse(boxText.getAttribute('data-text'));
    const waitingTime = boxText.getAttribute('data-waitingTime');

    //Thiết Lập hàm hieu_ung _typing-text
    new typing(boxText, text, waitingTime)
}