const emoji = require('node-emoji');

if (process.argv[2]) {
  if (emoji.hasEmoji(process.argv[2])) {
    console.log(emoji.get(process.argv[2]));
  } else {
    console.log('Emoji doesnt exists');
  }
} else {
  console.log(emoji.random().emoji);
}

// console.log(emoji.random());

//to have just the emoji:
// console.log(emoji.random().emoji);

// console.log(emoji.get('coffee'));
