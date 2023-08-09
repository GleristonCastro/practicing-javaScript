const imgBox = document.getElementById('imgBox');
const qrImage = document.getElementById('qrImage');
const qrText = document.getElementById('qrText');
const BtngenerateQr = document.getElementById('generateQr');

function generateQr() {
  if (qrText.value.length > 0) {
    qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    imgBox.classList.add('show-img');
  } else {
    qrText.classList.add('error');
    setTimeout(()=>{
      qrText.classList.remove('error');
    },1000)
  }
}

BtngenerateQr.addEventListener('click', generateQr);