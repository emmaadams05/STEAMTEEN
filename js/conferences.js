// buttons ids
let scienceBtn = document.getElementById('scienceBtn');
let techBtn = document.getElementById('technologyBtn');
let engBtn = document.getElementById('engineeringBtn');
let artBtn = document.getElementById('artBtn');
let mathBtn = document.getElementById('mathematicsBtn');

// timeline variable
let scienceTimeline = document.getElementById('scienceTimeline');
let techTimeline = document.getElementById('techTimeline');
let engTimeline = document.getElementById('engTimeline');
let artTimeline = document.getElementById('artTimeline');
let mathTimeline = document.getElementById('mathTimeline');

scienceBtn.addEventListener('click', () => {
  scienceTimeline.classList.remove('hiddenTimeline');
  techTimeline.classList.add('hiddenTimeline');
  engTimeline.classList.add('hiddenTimeline');
  artTimeline.classList.add('hiddenTimeline');
  mathTimeline.classList.add('hiddenTimeline');
});

techBtn.addEventListener('click', () => {
  scienceTimeline.classList.add('hiddenTimeline');
  techTimeline.classList.remove('hiddenTimeline');
  engTimeline.classList.add('hiddenTimeline');
  artTimeline.classList.add('hiddenTimeline');
  mathTimeline.classList.add('hiddenTimeline');
});

engBtn.addEventListener('click', () => {
  scienceTimeline.classList.add('hiddenTimeline');
  techTimeline.classList.add('hiddenTimeline');
  engTimeline.classList.remove('hiddenTimeline');
  artTimeline.classList.add('hiddenTimeline');
  mathTimeline.classList.add('hiddenTimeline');
});

artBtn.addEventListener('click', () => {
  scienceTimeline.classList.add('hiddenTimeline');
  techTimeline.classList.add('hiddenTimeline');
  engTimeline.classList.add('hiddenTimeline');
  artTimeline.classList.remove('hiddenTimeline');
  mathTimeline.classList.add('hiddenTimeline');
});

mathBtn.addEventListener('click', () => {
  scienceTimeline.classList.add('hiddenTimeline');
  techTimeline.classList.add('hiddenTimeline');
  engTimeline.classList.add('hiddenTimeline');
  artTimeline.classList.add('hiddenTimeline');
  mathTimeline.classList.remove('hiddenTimeline');
});