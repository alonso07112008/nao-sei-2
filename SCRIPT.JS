document.addEventListener('DOMContentLoaded', function() {
  const campoSection = document.getElementById('campo');
  const cidadeSection = document.getElementById('cidade');

  campoSection.addEventListener('mouseenter', function() {
    campoSection.style.backgroundColor = '#e7f5e7';
  });

  campoSection.addEventListener('mouseleave', function() {
    campoSection.style.backgroundColor = '#fff';
  });

  cidadeSection.addEventListener('mouseenter', function() {
    cidadeSection.style.backgroundColor = '#e7f7ff';
  });

  cidadeSection.addEventListener('mouseleave', function() {
    cidadeSection.style.backgroundColor = '#fff';
  });
});
