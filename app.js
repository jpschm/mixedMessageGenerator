
console.log(buildMessage());


function buildMessage() {
  const subject = capitalize(getRandomString(getSubjects()));
  const activity = getRandomString(getActivities());
  const affix = fiftyFifty() ? getRandomString(getModalities()) : 'with ' + getRandomString(getSubjects());
  return `${subject} ${activity} ${affix}`;
}

function capitalize(s)  {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function fiftyFifty(){
    return Math.random() > 0.5;
}

function getRandomString(stringArr) {
  const randomIndex = Math.floor(Math.random() * stringArr.length);
  return stringArr[randomIndex];
}

function getSubjects(){
    return [
      'Harry Potter',
    'Mussolini',
    'Roger Rabbit',
    'a cat',
    'Snape',
    'Dumbledore',
    'Gandalf',
    'Frodo',
    'Bowser',
    'Chuck Norris'
  ]
}

function getActivities(){
    return [
        'plays ball',
    'dances',
    'is dabbing',
    'exhales',
    'moves',
    'sleeps',
    'kills',
    'butchers',
    'snorts'
  ]    
}

function getModalities() {
  return [
        'like a boss!',
    'with joy',
    'in silence',
    'like an elephant',
    'peacefully',
    'when the sun goes down',
    'POGGERS!',
  ]
}
