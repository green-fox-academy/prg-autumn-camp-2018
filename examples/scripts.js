$('#form1').on('submit', event => {
  event.preventDefault();
  $('ul').append(
    `
    <li>${$('#ola1').val()}</li>
    <li>${$('#ola2').val()}</li>
    `
  )
  let path = "posts/1";
  let dataToSave = {
    title: $('#ola1').val(),
    text: $('#ola2').val()
  };
  fb.ref(path).set(dataToSave);
})


let myVariable = 5;
console.log(myVariable);
console.log("Hello, world!");
let colors = ['orange', 'blue', 'white'];
colors.push('green');
colors.forEach(oneColor => {
  if(oneColor === 'orange') {
    console.log(`Ooh ${oneColor}, thats my favourite color`);
  } else {
    console.log('Just another color:' + oneColor);
  }
});

$('ul').append('<li class="aze">hello</li>');

let names = ['Aze', 'Alex', 'Lucie'];
names.forEach(name => {
  $('ul').append(`<li class="Lucie">${name}</li>`)
  if(name === 'Lucie') {
    
  }
})
// This part is done. Below
$('.unicorn').css('font-weitht', 'bold')

// Start saving something

let path = `pony/something/else/1`;
let dataToSave = {
  title: "My second saved blog post",
  text: "Some hilarious content, which proves how awesome I am.",
  image: "https://img.cncenter.cz/img/11/normal510/2826710-img-baracnicka-rychta-v0.jpg?v=0"
};

fb.ref(path).set(dataToSave);

let initialData = [
  {
    title: "First Post",
    text: "Text of the first one"
  },
  { 
    title: "Second",
    text: "second post's text"
  }
];

fb.ref("posts").once('value').then(data => {
  let savedPosts = data.val();
  
});


