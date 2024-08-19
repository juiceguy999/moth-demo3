// Table popup 

const tableDatas = document.querySelectorAll('.table__data');
const tablePopup = document.querySelector('#popup');
const tablePopupClose = document.querySelector('#popup-close');

const popupGallery = document.querySelector('.popup__gallery');
const popupInfo = document.querySelector('.popup__info');
const popupDescr = document.querySelector('.popup__descr-wrapper');

const popupGalleryBtn = document.querySelector('#gallery-btn');
const popupInfoBtn = document.querySelector('#info-btn');

const bookmarkBtn = document.querySelector('#bookmark-btn');

bookmarkBtn.addEventListener('click', () => {
  bookmarkBtn.classList.toggle('popup__bookmark--active');
})

tableDatas.forEach((tableData) => {
    
  tableData.addEventListener('click', () => {
      tablePopup.style.display = 'flex';
  })

})

tablePopupClose.addEventListener('click', () => {
  tablePopup.style.display = 'none';
})

document.addEventListener('click', (e) => {
  if(e.target == tablePopup) {
    tablePopup.style.display = 'none'
  }
})

popupGalleryBtn.addEventListener('click', (e) => {
  popupGalleryBtn.classList.toggle('popup__action-btn--active');
  popupGallery.classList.toggle('popup__gallery--active')
})

popupInfoBtn.addEventListener('click', () => {
  popupInfoBtn.classList.toggle('popup__action-btn--active');
  popupInfo.classList.toggle('popup__info--active');
  popupDescr.classList.toggle('popup__descr-wrapper--active');
})


