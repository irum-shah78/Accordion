const accData = [
  {
    id: '1',
    question: 'What is a Frontend Mentor, how will it help me?',
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with prijects in HTML,CSS and JavaScript. It's suitable for all levels and ideal for portfolio building."
  },
  {
    id: '2',
    question: 'Is Frontend Mentor free?',
    answer: "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference."
  },
  {
    id: '3',
    question: 'Can I use these projects in my portfolio?',
    answer: "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!"
  },
  {
    id: '4',
    question: "How can I get help if I'm stuck on a challenge?",
    answer: `The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel! If you haven't joined yet, you can get an invite to our Discord server here.`
  }
];

const accContent = document.querySelector('.content');

function createAccData() {
  accContent.innerHTML = accData.map(dataItemm => `
  <div class="acc-item">
  <div class="acc-title">
  <h5>${dataItemm.question}</h5>
  <img class="toggle-icon plus" src="Assets/icon-plus.svg">
  </div>
  <div class="acc-contents">
  <p>${dataItemm.answer}</p>
  </div>
  <hr>
  </div>`
  ).join(" ");

  const toggleIcons = document.querySelectorAll('.toggle-icon');
  toggleIcons.forEach(icon => {
    icon.addEventListener('click', function () {
      const contents = this.parentElement.nextElementSibling;
      if (contents.style.display === 'none') {
        this.setAttribute('src', 'Assets/icon-minus.svg');
        contents.style.display = 'block';
      } else {
        this.setAttribute('src', 'Assets/icon-plus.svg');
        contents.style.display = 'none';
      }
    });
  });
}

createAccData();