const clock = document.getElementById('clock');

let isMouseDown = false;
let initialX, initialY;

clock.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  initialX = e.clientX;
  initialY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

document.addEventListener('mousemove', (e) => {
  if (isMouseDown) {
    const diffX = e.clientX - initialX;
    const diffY = e.clientY - initialY;
    const rotationX = (diffY / 5);
    const rotationY = (-diffX / 5);
    clock.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  }
});

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  document.getElementById('hoursFace').textContent = hours;
  document.getElementById('minutesFace').textContent = minutes;
  document.getElementById('secondsFace').textContent = seconds;
}

setInterval(updateClock, 1000);
