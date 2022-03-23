// rating number clicked
(numbers => {
  numbers.forEach((num, i) => {
   num.addEventListener('click', ()=> {
     
     document.querySelector('.submit-btn').style.pointerEvents = 'all'
     numbers.forEach(num => num.classList.remove('active'));
     num.classList.add('active');
     
   });
  });
})(document.querySelectorAll('.number'));
// submit button clicked
(submit => {
  submit.addEventListener('click', (e)=> {
    
    e.preventDefault();
    const rating = document.querySelector('.active').textContent;
    document.querySelector('.selected span').textContent = rating;
    document.querySelector('.thank-box').classList.add('active');
    document.querySelectorAll('.thank-letter').forEach(letter => letter.style.opacity = 1);
    
  });
})(document.querySelector('.submit-btn'));
// animation thank you
(thankText => {
  
  const thankArr = thankText.textContent.split('');
  thankText.textContent = '';
  thankArr.forEach(letter => thankText.innerHTML += `<span class='thank-letter'>${letter}</span>`);
  
  const thankLetters = document.querySelectorAll('.thank-letter');
  thankLetters.forEach((letter, i) => {
    letter.style.transition = `.35s ${.03 * i}s`;
  });
  
})(document.querySelector('.thank-txt'));
