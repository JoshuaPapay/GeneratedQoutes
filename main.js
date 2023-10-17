const changeQoute = document.querySelector(".new-qoute");
const authorNames = document.querySelector(".names");
const btn = document.querySelector(".btn-generate");

const ArrayQoutes = [
  {
    qoute:
      "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”",
    names: "John Green",
  },
  {
    qoute: "“Loved you yesterday, love you still, always have, always will.”",
    names: "Elaine Davis",
  },
  {
    qoute:
      "“I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.”",
    names: "Angelita Lim",
  },
  {
    qoute:
      "“I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out.”",
    names: "Elizabeth Barrett Browning",
  },
  {
    qoute:
      "“The real lover is a man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.”",
    names: "Marilyn Monroe",
  },
  {
    qoute:
      "“In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.”",
    names: "Maya Angelou",
  },
  {
    qoute: "“I’ll be loving you, always with a love that’s true.”",
    names: "Patsy Cline",
  },
  {
    qoute:
      "“Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.”",
    names: "Unknown",
  },
  {
    qoute: "“I need you like a heart needs a beat.”",
    names: "One Republic",
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * ArrayQoutes.length);

  changeQoute.innerText = ArrayQoutes[random].qoute;
  authorNames.innerText = ArrayQoutes[random].names;
});
