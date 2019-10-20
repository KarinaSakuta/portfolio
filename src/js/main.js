function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  })
}

loadData()
.then(() => {
  let preloaderEl = document.getElementById('preloader');
  preloaderEl.classList.add('header_hidden');
  preloaderEl.classList.remove('header_visible');
});

function getDate() {
  var AM = ' AM', PM = ' PM';
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours > 11 ? PM : AM;

  if(minutes < 10)
  {
      minutes = '0' + minutes;
  }
  if(hours < 10)
  {
      hours = '0' + hours;
  }
  document.getElementById('timedisplay').innerHTML = hours + ':' + minutes + ampm;
}
setInterval(getDate, 1000);

var educationSections = document.getElementsByClassName('education');

for (var index = 0; index <= educationSections.length - 1; index++) {
  var educationSection = educationSections[index];
  var educationHideButton = educationSection.querySelector('.education__run-button');

  var clickHandler = function () {
    var educationUl = educationSection.querySelector('.education__run-panel-list');

    if (educationUl.classList.contains('education__run-panel-list_expanded')) {
      educationUl.classList.remove('education__run-panel-list_expanded');
    } else {
      educationUl.classList.add('education__run-panel-list_expanded');
    }
  };

  educationHideButton.addEventListener('click', clickHandler);
}

var footersSections = document.getElementsByClassName('footer');

var headersSections = document.getElementsByClassName('header');

for (var index = 0; index <= headersSections.length - 1; index++) {
  var headersSection = headersSections[index];
  var headersHideButton = headersSection.querySelector('.header__paint-close');

  var clickHandler2 = function () {
    headersSection.classList.add('header_hidden-paint');
  };

  headersHideButton.addEventListener('click', clickHandler2);
}

var namesSections = document.getElementsByClassName('name');

for (var index = 0; index <= namesSections.length - 1; index++) {
  var namesSection = namesSections[index];
  var namesHideButton = namesSection.querySelector('.name__notepad-close');

  var clickHandler3 = function () {
    namesSection.classList.add('name_hidden');
  };

  namesHideButton.addEventListener('click', clickHandler3);
}



var projectsSections = document.getElementsByClassName('projects');

for (var index = 0; index <= projectsSections.length - 1; index++) {
  var projectsSection = projectsSections[index];
  var projectsHideButton = projectsSection.querySelector('.projects__notepad_close');

  var clickHandler = function () {
    projectsSection.classList.add('projects_hidden');
  };

  projectsHideButton.addEventListener('click', clickHandler);
}



var educationsSections = document.getElementsByClassName('education');

for (var index = 0; index <= educationsSections.length - 1; index++) {
  var educationsSection = educationsSections[index];
  var educationsHideButton = educationsSection.querySelector('.education__run-close');

  var clickHandler1 = function () {
    educationsSection.classList.add('education_hidden');
  };

  educationsHideButton.addEventListener('click', clickHandler1);
}

// Slider

var slider = {
  slides:['assets/img/repair.jpg','assets/img/theyalow.jpg'],
  links:['projects/repair-design-project/index.html', 'projects/theyalow/index.html'],
  texts:['Repair-design-project - HTML, CSS, JS', 'Theyalow - HTML, CSS, JS'],
  frame:0,
  set: function(frame) {
    var image = this.slides[frame];
    var link = this.links[frame];
    var text = this.texts[frame];

    document.getElementById("sliderImg").style.backgroundImage = "url("+image+")";
    document.getElementById("sliderLink").href = link;
    document.getElementById("sliderDiv").innerHTML = text;
  },
  init: function() {
    this.set(this.frame);
  },
  left: function() {
    this.frame--;
    if(this.frame < 0) this.frame = this.slides.length-1;
    this.set(this.frame);
  },
  right: function() {
    this.frame++;
    if(this.frame == this.slides.length) this.frame = 0;
    this.set(this.frame);      
  }
};

slider.init();
var sliderInterval = setInterval(function() {
  slider.right();
}, 10000);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches || evt.originalEvent.touches;
}                                                     

function handleTouchStart(evt) {
  var firstTouch = getTouches(evt)[0];                                      
  xDown = firstTouch.clientX;                                      
  yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;                                    
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    clearInterval(sliderInterval);
    if (xDiff > 0) {
      slider.left();
    } else {
      slider.right();
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;

  setTimeout(function () {
    isDragging = false;
  }, 100);                                             
};

for (var index = 0; index <= projectsSections.length - 1; index++) {
  var projectsSection = projectsSections[0];

  projectsSection.addEventListener('touchstart', handleTouchStart, true);        
  projectsSection.addEventListener('touchmove', handleTouchMove, true);
}

