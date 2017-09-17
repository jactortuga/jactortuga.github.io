document.addEventListener('DOMContentLoaded', function() {
  var randomContainer   = document.getElementById('randomWordContainer');
  var randomVocabulary  = ['Hello.', 'Ciao.', 'Hej.', 'Hallo.', 'Salut.', 'Ola.', 'Hi.', 'Servus.', 'Aloha.', 'Kia Ora.', 'Namaste.'];
  var randomMin         = Math.ceil(0);
  var randomMax         = Math.floor(randomVocabulary.length);
  var randomIndex       = Math.floor(Math.random() * (randomMax - randomMin)) + randomMin;
  var randomWord        = randomVocabulary[randomIndex];

  randomContainer.innerHTML = randomWord;

});
