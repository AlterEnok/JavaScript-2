export function manageClasses() {
  const elementOne = document.querySelector('.one');
  elementOne.classList.add('selected');

  const elementTwo = document.querySelector('.two');
  elementTwo.classList.remove('selected');

  const elementThree = document.querySelector('.three');
  elementThree.classList.toggle('three_done');

  const elementFour = document.querySelector('.four');
  if (elementFour.classList.contains('some-class')) {
    elementFour.classList.add('another-class');
  }
}
