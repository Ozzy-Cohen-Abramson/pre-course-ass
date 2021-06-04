let myLocation = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53875.12437213324!2d34.95883617417197!3d32.440707542990715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d124252d125bb%3A0x3abe13857b8fe43d!2z15fXk9eo15Q!5e0!3m2!1siw!2sil!4v1615730341782!5m2!1siw!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.53177901634!2d35.24539967384971!3d31.7964453336441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2z15nXqNeV16nXnNeZ150!5e0!3m2!1siw!2sil!4v1615730317216!5m2!1siw!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.2533334749!2d-6.105620230790594!3d53.32444313865466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2z15PXkdec15nXnywg15DXmdeo15zXoNeT!5e0!3m2!1siw!2sil!4v1615730273292!5m2!1siw!2sil",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355649487!2d-118.13153675828482!3d34.0207304948886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z15zXldehINeQ16DXkifXnNehLCDXp9ec15nXpNeV16jXoNeZ15QsINeQ16jXpteV16og15TXkdeo15nXqg!5e0!3m2!1siw!2sil!4v1615730149542!5m2!1siw!2sil"
];

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let mapNumb = 0;



function nextFunction() {
    mapNumb++;
    document.getElementById('map').src = myLocation[mapNumb];

    prevBtn.disabled = false;

    if (mapNumb === 3) {
        nextBtn.disabled = true;
    }
}

function prevFunction() {
    mapNumb--;
    document.getElementById('map').src = myLocation[mapNumb];

    if (mapNumb === 0) {
        prevBtn.disabled = true;
    }

    if (mapNumb !== "3") {
        nextBtn.disabled = false;
    }
}