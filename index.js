const sections = document.querySelectorAll('.section');
const submit = document.querySelector('#submit');

function getVal(e) {
  e.preventDefault();
  let state = 1;
  const name = document.getElementById('name').value;
  const num = document.getElementById('num').value;
  const mm = document.getElementById('month').value;
  const yy = document.getElementById('year').value;
  const cvc = document.getElementById('cvc').value;

  if (state) {
    let person = [name, num, mm, yy, cvc];
    console.log(person);
    return true;
  } else return false;
}

function page() {
  submit.addEventListener('click', (e) => {
    console.log(e);
    const id = e.target.dataset.id;
    //remove selected sections
    if (id) {
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      const now = document.getElementById(id);
      now.classList.add('active');
    }
  });
}
page();
