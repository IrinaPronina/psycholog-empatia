const moreBtn = document.querySelector('.profi__btn');

if (moreBtn) {
  moreBtn.addEventListener('click', function (e) {
    const item = moreBtn.closest('.profi__item');
    item.classList.toggle('open');
    changeText();
  })
}

function changeText() {
  const item = moreBtn.closest('.profi__item');
  if (item.classList.contains("open")) {
    moreBtn.innerHTML = 'Информация';
  } else {
    moreBtn.innerHTML = 'Подробнее';
  }
}

/*--Price--*/


const priceBtn = document.querySelectorAll('.price__btn');

if (priceBtn) {

  for (let i = 0; i < priceBtn.length; i++) {
    const el = priceBtn[i];
    el.addEventListener('click', function (e) {
      const item = el.closest('.price__item');
      item.classList.toggle('open');
      if (item.classList.contains("open")) {
        console.log(el.closest(".price__btn"))
        el.closest(".price__btn").innerHTML = 'Информация';
      } else {
        el.closest(".price__btn").innerHTML = 'Подробнее';
      }
    })
  }
}
