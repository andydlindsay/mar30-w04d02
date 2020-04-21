// const ul = document.getElementById('main-list');

// const node = document.createElement("li");
// const textnode = document.createTextNode("Water");

// node.appendChild(textnode);

// ul.appendChild(node); // ul === null

const content = 'Water';
const $li = $(`<li>${content}</li>`);
// $li.text('Water');
const $li2 = $('<li>').text('Gravy');

const $ul = $('#main-list');
$ul.append($li);
$ul.prepend($li2);
// $li.appendTo($ul);
// $ul.prepend($li);

const $h1 = $('h1');
$h1.on('click', (event) => {
  console.log('h1 clicked');
  console.log(event);
});

const $button = $('button');
$button.click(() => {
  const $input = $('#new-num');
  const value = $input.val();
  const $newLi = $(`<li>${value}</li>`);
  $ul.prepend($newLi);
  $input.val('').focus();
});

