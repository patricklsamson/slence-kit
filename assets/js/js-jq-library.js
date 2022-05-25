/**
 * Contents:
 * - PLUGINS
 *   - ENQUIRE
 *   - JQUERY MATCH HEIGHT
 *   - OWL CAROUSEL
 *   - SELECT2
 *   - AOS
 * - GLOBAL DOM SELECTORS
 *   - WINDOW JS_JQ
 *   - HTML JS
 *   - HEAD JS
 *   - BODY JS
 * - VARIABLES
 *   - i, j, k
 * - UTILITY JS
 *   - doc_ready
 *   - id
 *   - qsel
 *   - qsel_all
 *   - add_event
 *   - remove_event
 *   - add_events
 *   - remove_events
 *   - add_att
 *   - has_class
 *   - add_class
 *   - remove_class
 *   - toggle_class
 *   - OPTIONAL
 *     - tload
 *     - async function
 *     - body
 *     - match_media
 *     - delay
 *     - match_height JS_JQ
 *     - create_el
 *     - inner_trim
 *     - rand
 *     - num_only
 *     - no_num
 *     - num_commas
 *     - num_space
 *     - localStorage_space
 *     - dataset
 *     - extend_obj
 *     - nav_bar
 *     - fixed_el
 *     - scroll_class
 *     - search_sel
 *     - click_copy
 *     - pw_match
 *     - first_char
 *     - negative_char
 *     - type_comma
 *     - dec_add_zero
 *     - caro
 * - UTILITY JS USAGE
 *   - DOCUMENT READY JS_JQ
 *   - ID SELECTOR JS_JQ
 *   - QUERY SELECTOR JS_JQ
 *   - QUERY SELECTOR ALL JS_JQ
 *   - ADD EVENT JS_JQ
 *   - REMOVE EVENT JS
 *   - ADD MULTI EVENTS JS
 *   - REMOVE MULTI EVENTS JS
 *   - ADD ATTRIBUTE JS_JQ
 *   - HAS CLASS JS_JQ
 *   - ADD CLASS JS_JQ
 *   - REMOVE CLASS JS_JQ
 *   - TOGGLE CLASS JS_JQ
 *   - OPTIONAL
 *     - RUBY ON RAILS JQUERY TURBOLINKS LOAD
 *     - BODY ID JS
 *     - MATCH MEDIA JS
 *     - MATCH HEIGHT JS_JQ
 *     - CREATE ELEMENT JS
 *     - INNER SANITATION & TRIM WHITE SPACES AROUND JS
 *     - RANDOM NUMBER JS
 *     - NUMBER INPUT ONLY JS_JQ
 *     - NO NUMBER INPUT JS
 *     - NUMBER WITH COMMAS JS
 *     - NUMBER WITH SPACE JS
 *     - LOCAL STORAGE SPACE JS
 *     - DATASET JS
 *     - EXTEND OBJECT JS
 *     - NAVBAR JS
 *     - FIXED ELEMENT JS
 *     - SCROLL TOGGLE CLASS JS
 *     - SEARCH SELECT JS
 *     - CLICK COPY JS
 *     - PASSWORD MATCH JS
 *     - FIRST CHARACTER NOT A NUMBER JS
 *     - NEGATIVE CHARACTER JS
 *     - TYPE COMMA JS
 *     - DECIMAL ADD ZERO JS
 *     - CAROUSEL JS
 * - MAIN JS
 *   - CLICK TOGGLE CLASS JS_JQ
 *   - CLOSE JS_JQ
 *   - PERMANENT INPUT VALUE JS_JQ
 *   - WINDOW SCROLL ADD CLASS REMOVE CLASS JS_JQ
 *   - WINDOW SCROLL OUTSIDE REMOVE CLASS JS_JQ
 *   - WINDOW CLICK OUTSIDE REMOVE CLASS JS_JQ
 * - SDWRESUMETHEME JS
 */

// --------------------------------------------------
// PLUGINS - ENQUIRE
// --------------------------------------------------

enquire.register("only screen and (min-width: 992px)", {
  match: function () {
    // CODE
  },
  unmatch: function () {
    // CODE
  },
});

// --------------------------------------------------
// PLUGINS - JQUERY MATCH HEIGHT
// --------------------------------------------------

$(".mh").matchHeight({
  byRow: false,
  property: "height",
  target: null,
  remove: false,
});

enquire.register("only screen and (min-width: 992px)", {
  match: function () {
    $(".mh").matchHeight({
      byRow: false,
      property: "height",
      target: null,
      remove: false,
    });
  },
  unmatch: function () {
    $(".mh").matchHeight({
      remove: true,
    });
  },
});

match_media(
  "(min-width: <media>px)",
  function match() {
    $(".mh").matchHeight({
      byRow: false,
      property: "height",
      target: null,
      remove: false,
    });
  },
  function unmatch() {
    $(".mh").matchHeight({
      remove: true,
    });
  }
);

// --------------------------------------------------
// PLUGINS - OWL CAROUSEL
// --------------------------------------------------

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fas fa-angle-right'></i>",
  ],
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
  },
});

// --------------------------------------------------
// PLUGINS - SELECT2
// --------------------------------------------------

$("#id").select2();

// --------------------------------------------------
// PLUGINS - AOS
// --------------------------------------------------

AOS.init();

// --------------------------------------------------
// GLOBAL DOM SELECTORS - WINDOW JS_JQ
// --------------------------------------------------

window;

// JQ VERSION

$(window);

// --------------------------------------------------
// GLOBAL DOM SELECTORS - HTML JS
// --------------------------------------------------

document.documentElement;

// --------------------------------------------------
// GLOBAL DOM SELECTORS - HEAD JS
// --------------------------------------------------

document.head;

// --------------------------------------------------
// GLOBAL DOM SELECTORS - BODY JS
// --------------------------------------------------

document.body;

// --------------------------------------------------
// VARIABLES
// --------------------------------------------------

var i;
var j;
var k;

// --------------------------------------------------
// UTILITY JS
// --------------------------------------------------

function doc_ready(callback) {
  if (document.readyState != "loading") {
    callback();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState == "complete") callback();
    });
  }
}

function id(element) {
  return document.getElementById(element);
}

function qsel(element) {
  return document.querySelector(element);
}

function qsel_all(element) {
  return document.querySelectorAll(element);
}

function add_event(element, e, fn) {
  if (element.addEventListener) {
    element.addEventListener(e, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + e, fn);
  }
}

function remove_event(element, e, fn) {
  if (element.removeEventListener) {
    element.removeEventListener(e, fn, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + e, fn);
  }
}

function add_events(element, events, fn) {
  events.split(" ").forEach(function (e) {
    return add_event(element, e, fn);
  });
}

function remove_events(element, events, fn) {
  events.split(" ").forEach(function (e) {
    return remove_event(element, e, fn);
  });
}

function add_att(element, attribute, val) {
  if (element.setAttribute) {
    element.setAttribute(attribute, val);
  } else {
    var att = document.createAttribute(attribute);
    att.value = val;
    element.setAttributeNode(att);
  }
}

function has_class(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  } else {
    return new RegExp("(^| )" + className + "( |$)", "gi").test(
      element.className
    );
  }
}

function add_class(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += " " + className;
  }
}

function remove_class(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(
      new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
      " "
    );
  }
}

function toggle_class(element, className) {
  if (element.classList) {
    element.classList.toggle(className);
  } else {
    var classes = element.className.split(" "),
      i = classes.indexOf(className);

    if (i >= 0) classes.splice(i, 1);
    else {
      classes.push(className);
      element.className = classes.join(" ");
    }
  }
}

// --------------------------------------------------
// UTILITY JS - OPTIONAL
// --------------------------------------------------

function tload(callback) {
  add_event(document, "turbolinks:load", callback);

  // JQ VERSION

  $(document).on("turbolinks:load", callback);
}

// ASYNC FUNCTION - FIRST FUNCTION EXECUTION FIRST THEN EXECUTES SECOND FUNCTION
(function (next) {
  // FIRST REGULAR FUNCTION TO EXECUTE
  if (condition) {
    next(); // SECOND FUNCTION EXECUTION
  }

  // OR

  for (loop_condition; loop_condition; loop_condition) {
    // FIRST LOOPING FUNCTION TO EXECUTE
    if (loop_condition_ends) {
      next(); // SECOND FUNCTION EXECUTION
    }
  }
})(function () {
  // SECOND FUNCTION - "next();" FUNCTION EXECUTION
});

function body(id) {
  return document.body.id == id;
}

function match_media(media, match, unmatch) {
  if (window.matchMedia) {
    function matcher(param) {
      if (param.matches) {
        if (match) {
          match();
        }
      } else {
        if (unmatch) {
          unmatch();
        }
      }
    }

    matcher(window.matchMedia("only screen and (min-width: " + media + "px"));

    add_event(
      window.matchMedia("only screen and (min-width: " + media + "px"),
      "change",
      matcher
    );
  } else {
    if (screen.width >= media) {
      if (match) {
        match();
      }
    } else {
      if (unmatch) {
        unmatch();
      }
    }
  }
}

var delay = (function () {
  var timer = 0;

  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

function match_height(element) {
  var i;
  var heights = [];

  for (i = 0; i < qsel_all(element).length; i++) {
    qsel_all(element)[i].style.height = "auto";
    heights.push(qsel_all(element)[i].offsetHeight);
  }

  var max = heights[0];

  for (i = 0; i < heights.length; i++) {
    if (heights[i] > max) {
      max = heights[i];
    }
  }

  for (i = 0; i < qsel_all(element).length; i++) {
    qsel_all(element)[i].style.height = max + "px";
  }
}

$.fn.match_height = function () {
  var max_height = 0;

  $(this).each(function () {
    max_height = Math.max($(this).height(), max_height);
  });

  $(this).each(function () {
    $(this).height(max_height);
  });
};

function create_el(element) {
  return document.createElement(element);
}

function inner_trim(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/\'/g, "&#39;")
    .replace(/\//g, "&#x2F;")
    .replace(/\s+/g, " ")
    .trim();
}

function rand(number) {
  return Math.floor(Math.random() * number);
}

function num_only(e) {
  var char = e.which || e.keyCode;

  return !(char > 31 && (char < 48 || char > 57));
}

function no_num(e) {
  var char = e.which || e.keyCode;

  return char > 31 && (char < 48 || char > 57);
}

function num_commas(number) {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function num_space(number) {
  return number.toString().replace(/\d{4}(?=.)/g, "$& ");
}

function localStorage_space() {
  var data = "";

  console.log("Current local storage: ");

  for (var key in window.localStorage) {
    if (window.localStorage.hasOwnProperty(key)) {
      data += window.localStorage[key];

      console.log(
        key +
          " = " +
          ((window.localStorage[key].length * 16) / (8 * 1024)).toFixed(2) +
          " KB"
      );
    }
  }

  console.log(
    data
      ? "\n" +
          "Total space used: " +
          ((data.length * 16) / (8 * 1024)).toFixed(2) +
          " KB"
      : "Empty (0 KB)"
  );

  console.log(
    data
      ? "Approx. space remaining: " +
          (5120 - ((data.length * 16) / (8 * 1024)).toFixed(2)) +
          " KB"
      : "5 MB"
  );
}

function dataset(element, value) {
  if (element.dataset) {
    return element.dataset.value;
  } else {
    return element.getAttribute("data-" + value);
  }
}

function extend_obj(obj, addons) {
  if (typeof addons !== "undefined") {
    for (var prop in obj) {
      if (addons[prop] != undefined) {
        obj[prop] = addons[prop];
      }
    }
  }
}

function nav_bar(callback) {
  add_event(id("nav-btn"), "click", function () {
    toggle_class(this, "active");
  });

  add_event(window, "click", function (e) {
    if (
      !e.target.closest("#nav-btn") ||
      !id("nav-btn").contains(e.target || e.srcElement)
    ) {
      if (has_class(id("nav-btn"), "active")) {
        remove_class(id("nav-btn"), "active");
      }
    }
  });

  if (callback) {
    callback();
  }
}

function fixed_el(
  fixed_element,
  neg_margin_top_element,
  padding_top_element = null,
  to_fixed_element = null,
  calc_vh_element = null
) {
  var i;
  var topHeight = 0;
  var height = 0;

  (function (next) {
    if (to_fixed_element) {
      for (i = 0; i < qsel_all(to_fixed_element).length; i++) {
        topHeight += qsel_all(to_fixed_element)[i].offsetHeight;
      }

      add_event(window, "scroll", function () {
        if (
          window.pageYOffset > topHeight ||
          document.documentElement.scrollTop > topHeight
        ) {
          for (i = 0; i < qsel_all(fixed_element).length; i++) {
            qsel_all(fixed_element)[i].style.position = "fixed";
            qsel_all(fixed_element)[i].style.top = "0";
          }
        } else {
          for (i = 0; i < qsel_all(fixed_element).length; i++) {
            qsel_all(fixed_element)[i].style.position = null;
            qsel_all(fixed_element)[i].style.top = null;
          }
        }
      });
    }

    for (i = 0; i < qsel_all(fixed_element).length; i++) {
      height += qsel_all(fixed_element)[i].offsetHeight;

      if (i == qsel_all(fixed_element).length - 1) {
        next();
      }
    }
  })(function () {
    var normalHeight = height;
    var doubleHeight = height * 2;

    if (padding_top_element) {
      qsel(padding_top_element).style.paddingTop = height + "px";
    }

    if (to_fixed_element) {
      for (i = 0; i < qsel_all(neg_margin_top_element).length; i++) {
        qsel_all(neg_margin_top_element)[i].style.marginTop =
          "-" + doubleHeight + "px";
      }

      add_event(window, "scroll", function () {
        if (
          window.pageYOffset > topHeight ||
          document.documentElement.scrollTop > topHeight
        ) {
          for (i = 0; i < qsel_all(neg_margin_top_element).length; i++) {
            qsel_all(neg_margin_top_element)[i].style.marginTop =
              "-" + normalHeight + "px";
          }
        } else {
          for (i = 0; i < qsel_all(neg_margin_top_element).length; i++) {
            qsel_all(neg_margin_top_element)[i].style.marginTop =
              "-" + doubleHeight + "px";
          }
        }
      });
    } else {
      for (i = 0; i < qsel_all(neg_margin_top_element).length; i++) {
        qsel_all(neg_margin_top_element)[i].style.marginTop =
          "-" + normalHeight + "px";
      }
    }

    if (calc_vh_element) {
      for (i = 0; i < qsel_all(calc_vh_element).length; i++) {
        qsel_all(calc_vh_element)[i].style.minHeight =
          "calc(100vh - " + height + "px)";
      }
    }
  });
}

function scroll_class(element, className) {
  add_event(window, "scroll", function () {
    if (
      window.pageYOffset > element.offsetTop ||
      document.documentElement.scrollTop > element.offsetTop
    ) {
      add_class(element, className);
    } else {
      remove_class(element, className);
    }
  });
}

function search_sel() {
  var i;

  add_event(qsel(".selected"), "click", function () {
    toggle_class(this, "active");
    qsel(".search-box input").value = "";

    setTimeout(function () {
      for (i = 0; i < qsel_all(".option").length; i++) {
        remove_class(qsel_all(".option")[i], "hide");
      }
    }, 500);

    if (has_class(this, "active")) {
      qsel(".search-box input").focus();
    }
  });

  for (i = 0; i < qsel_all(".option").length; i++) {
    add_event(qsel_all(".option")[i], "click", function () {
      qsel(".selected").innerHTML = this.querySelector("label").innerHTML;
      remove_class(qsel(".selected"), "active");
      qsel(".search-box input").value = "";

      setTimeout(function () {
        remove_class(qsel_all(".option")[i], "hide");
      }, 500);
    });
  }

  add_event(qsel(".search-box input"), "keyup", function () {
    for (i = 0; i < qsel_all(".option").length; i++) {
      if (qsel_all(".option")[i].querySelector("label")) {
        if (
          qsel_all(".option")
            [i].querySelector("label")
            .innerHTML.toLowerCase()
            .indexOf(this.value.toLowerCase()) > -1
        ) {
          remove_class(qsel_all(".option")[i], "hide");
        } else {
          add_class(qsel_all(".option")[i], "hide");
        }
      }
    }
  });
}

function click_copy(element) {
  add_event(element, "click", function () {
    document.execCommand("copy");
  });

  add_event(element, "copy", function (e) {
    e.preventDefault();

    if (e.clipboardData) {
      e.clipboardData.setData("text/plain", element.innerHTML);
    }

    return false;
  });
}

function pw_match(password, confirmPassword, message) {
  add_event(password, "keyup", function () {
    if (this.value == confirmPassword.value && this.value.length != 0) {
      remove_class(message, "fa-times");
      add_class(message, "fa-check");
    } else if (
      this.value != confirmPassword.value &&
      confirmPassword.value.length >= 1
    ) {
      remove_class(message, "fa-check");
      add_class(message, "fa-times");
    } else if (this.value.length == 0) {
      remove_class(message, "fa-check");
      remove_class(message, "fa-times");
    }
  });

  add_event(confirmPassword, "keyup", function () {
    if (this.value == password.value && this.value.length != 0) {
      remove_class(message, "fa-times");
      add_class(message, "fa-check");
    } else if (this.value != password.value && password.value.length >= 1) {
      remove_class(message, "fa-check");
      add_class(message, "fa-times");
    } else if (this.value.length == 0) {
      remove_class(message, "fa-check");
      remove_class(message, "fa-times");
    }
  });
}

function first_char(input, callback) {
  add_event(input, "keyup", function () {
    if (
      input.value.length > 0 &&
      !(
        input.value.charCodeAt(0) > 31 &&
        (input.value.charCodeAt(0) < 48 || input.value.charCodeAt(0) > 57)
      )
    ) {
      callback();
    }
  });
}

function negative_char(input, callback) {
  add_event(input, "keyup", function (e) {
    if ((e.which || e.keyCode) == 189) {
      callback();
    }
  });
}

function type_comma(input) {
  add_event(input, "keyup", function (e) {
    if (
      (e.which >= 37 && e.which <= 40) ||
      (e.keyCode >= 37 && e.keyCode <= 40)
    ) {
      return;
    }

    input.value = input.value
      .replace(/,/gi, "")
      .split(/(?=(?:\d{3})+$)/)
      .join(",");
  });
}

function dec_add_zero(input) {
  add_event(input, "change", () => {
    if (!isNaN(input.value) && input.value.length == 1) {
      input.value = "0" + input.value;
    }
  });
}

var caro = window.caro || {};

caro = (function () {
  var caro = function caro(settings) {
    var self = this;

    self.def = {
      target: qsel(".caro"),
      dotsWrapper: qsel(".caro-dots"),
      arrowLeft: qsel(".caro-prev"),
      arrowRight: qsel(".caro-next"),
      autoplay: {
        on: false,
        interval: 5000,
      },
      transition: {
        speed: 300,
        easing: "",
      },
      swipe: true,
      autoHeight: true,
      afterChangeSlide: function afterChangeSlide() {},
    };

    extend_obj(self.def, settings);

    self.init();
  };

  caro.prototype.buildDots = function () {
    var self = this;

    for (var i = 0; i < self.totalSlides; i++) {
      var dot = document.createElement("span");

      add_att(dot, "data-slide", i + 1);
      self.def.dotsWrapper.appendChild(dot);
    }

    add_event(self.def.dotsWrapper, "click", function (e) {
      if (
        (e.target && e.target.nodeName == "SPAN") ||
        (e.srcElement && e.srcElement.nodeName == "SPAN")
      ) {
        self.curSlide = e.target.getAttribute("data-slide");
        self.gotoSlide();
      }
    });
  };

  caro.prototype.getCurLeft = function () {
    var self = this;

    self.curLeft = parseInt(self.sliderInner.style.left.split("px")[0]);
  };

  caro.prototype.gotoSlide = function () {
    var self = this;

    self.sliderInner.style.transition =
      "left " +
      self.def.transition.speed / 1000 +
      "s " +
      self.def.transition.easing;
    self.sliderInner.style.left = -self.curSlide * self.slideW + "px";

    add_class(self.def.target, "isAnimating");

    setTimeout(function () {
      self.sliderInner.style.transition = "";
      remove_class(self.def.target, "isAnimating");
    }, self.def.transition.speed);

    self.setDot();

    if (self.def.autoHeight) {
      self.def.target.style.height =
        self.allSlides[self.curSlide].offsetHeight + "px";
    }

    self.def.afterChangeSlide(self);
  };

  caro.prototype.init = function () {
    var self = this;

    function on_resize(c, t) {
      onresize = function () {
        clearTimeout(t);
        t = setTimeout(c, 100);
      };
      return onresize;
    }

    function loadedImg(el) {
      var loaded = false;

      function loadHandler() {
        if (loaded) {
          return;
        }

        loaded = true;
        self.loadedCnt++;

        if (self.loadedCnt >= self.totalSlides + 2) {
          self.updateSliderDimension();
        }
      }

      var img = el.querySelector("img");

      if (img) {
        img.onload = loadHandler;
        img.src = dataset(img, "src");
        img.style.display = "block";

        if (img.complete) {
          loadHandler();
        }
      } else {
        self.updateSliderDimension();
      }
    }

    add_event(
      window,
      "resize",
      on_resize(function () {
        self.updateSliderDimension();
      })
    );

    var nowHTML = self.def.target.innerHTML;
    self.def.target.innerHTML = '<div class="caro-inner">' + nowHTML + "</div>";

    self.allSlides = 0;
    self.curSlide = 0;
    self.curLeft = 0;
    self.totalSlides = self.def.target.querySelectorAll(".slide").length;

    self.sliderInner = self.def.target.querySelector(".caro-inner");
    self.loadedCnt = 0;

    var cloneFirst = self.def.target
      .querySelectorAll(".slide")[0]
      .cloneNode(true);
    self.sliderInner.appendChild(cloneFirst);

    var cloneLast = self.def.target
      .querySelectorAll(".slide")
      [self.totalSlides - 1].cloneNode(true);
    self.sliderInner.insertBefore(cloneLast, self.sliderInner.firstChild);

    self.curSlide++;
    self.allSlides = self.def.target.querySelectorAll(".slide");

    self.sliderInner.style.width = (self.totalSlides + 2) * 100 + "%";

    for (var i = 0; i < self.totalSlides + 2; i++) {
      self.allSlides[i].style.width = 100 / (self.totalSlides + 2) + "%";
      loadedImg(self.allSlides[i]);
    }

    self.buildDots();
    self.setDot();
    self.initArrows();

    if (self.def.swipe) {
      add_events(self.sliderInner, "mousedown touchstart", startSwipe);
    }

    self.isAnimating = false;

    function startSwipe(e) {
      var touch = e;

      self.getCurLeft();

      if (!self.isAnimating) {
        if (e.type == "touchstart") {
          touch = e.targetTouches[0] || e.changedTouches[0];
        }

        self.startX = touch.clientX;
        self.startY = touch.clientY;

        add_events(self.sliderInner, "mousemove touchmove", swipeMove);
        add_events(document.body, "mouseup touchend", swipeEnd);
      }
    }

    function swipeMove(e) {
      var touch = e;

      if (e.type == "touchmove") {
        touch = e.targetTouches[0] || e.changedTouches[0];
      }

      self.moveX = touch.clientX;
      self.moveY = touch.clientY;

      if (Math.abs(self.moveX - self.startX) < 40) return;

      self.isAnimating = true;
      add_class(self.def.target, "isAnimating");
      e.preventDefault();

      if (self.curLeft + self.moveX - self.startX > 0 && self.curLeft == 0) {
        self.curLeft = -self.totalSlides * self.slideW;
      } else if (
        self.curLeft + self.moveX - self.startX <
        -(self.totalSlides + 1) * self.slideW
      ) {
        self.curLeft = -self.slideW;
      }
      self.sliderInner.style.left =
        self.curLeft + self.moveX - self.startX + "px";

      return false;
    }

    function swipeEnd() {
      self.getCurLeft();

      if (Math.abs(self.moveX - self.startX) === 0) return;

      self.stayAtCur =
        Math.abs(self.moveX - self.startX) < 40 ||
        typeof self.moveX === "undefined"
          ? true
          : false;
      self.dir = self.startX < self.moveX ? "left" : "right";

      if (self.stayAtCur) {
      } else {
        self.dir == "left" ? self.curSlide-- : self.curSlide++;
        if (self.curSlide < 0) {
          self.curSlide = self.totalSlides;
        } else if (self.curSlide == self.totalSlides + 2) {
          self.curSlide = 1;
        }
      }

      self.gotoSlide();

      delete self.startX;
      delete self.startY;
      delete self.moveX;
      delete self.moveY;

      self.isAnimating = false;
      remove_class(self.def.target, "isAnimating");
      remove_events(self.sliderInner, "mousemove touchmove", swipeMove);
      remove_events(document.body, "mouseup touchend", swipeEnd);
    }
  };

  caro.prototype.initArrows = function () {
    var self = this;

    if (self.def.arrowLeft != "") {
      add_event(self.def.arrowLeft, "click", function () {
        if (!has_class(self.def.target, "isAnimating")) {
          if (self.curSlide == 1) {
            self.curSlide = self.totalSlides + 1;
            self.sliderInner.style.left = -self.curSlide * self.slideW + "px";
          }

          self.curSlide--;

          setTimeout(function () {
            self.gotoSlide();
          }, 20);
        }
      });
    }

    if (self.def.arrowRight != "") {
      add_event(self.def.arrowRight, "click", function () {
        if (!has_class(self.def.target, "isAnimating")) {
          if (self.curSlide == self.totalSlides) {
            self.curSlide = 0;
            self.sliderInner.style.left = -self.curSlide * self.slideW + "px";
          }

          self.curSlide++;

          setTimeout(function () {
            self.gotoSlide();
          }, 20);
        }
      });
    }

    if (self.def.autoplay.on) {
      setInterval(function () {
        if (!has_class(self.def.target, "isAnimating")) {
          if (self.curSlide == self.totalSlides) {
            self.curSlide = 0;
            self.sliderInner.style.left = -self.curSlide * self.slideW + "px";
          }

          self.curSlide++;

          setTimeout(function () {
            self.gotoSlide();
          }, 500);
        }
      }, self.def.autoplay.interval);
    }
  };

  caro.prototype.setDot = function () {
    var self = this;
    var tardot = self.curSlide - 1;

    for (var j = 0; j < self.totalSlides; j++) {
      remove_class(self.def.dotsWrapper.querySelectorAll("span")[j], "active");
    }

    if (self.curSlide - 1 < 0) {
      tardot = self.totalSlides - 1;
    } else if (self.curSlide - 1 > self.totalSlides - 1) {
      tardot = 0;
    }

    add_class(self.def.dotsWrapper.querySelectorAll("span")[tardot], "active");
  };

  caro.prototype.updateSliderDimension = function () {
    var self = this;

    self.slideW = parseInt(
      self.def.target.querySelectorAll(".slide")[0].offsetWidth
    );
    self.sliderInner.style.left = -self.slideW * self.curSlide + "px";

    if (self.def.autoHeight) {
      self.def.target.style.height =
        self.allSlides[self.curSlide].offsetHeight + "px";
    } else {
      for (var i = 0; i < self.totalSlides + 2; i++) {
        if (self.allSlides[i].offsetHeight > self.def.target.offsetHeight) {
          self.def.target.style.height = self.allSlides[i].offsetHeight + "px";
        }
      }
    }

    self.def.afterChangeSlide(self);
  };

  return caro;
})();

// --------------------------------------------------
// UTILITY JS USAGE - DOCUMENT READY JS_JQ
// --------------------------------------------------

doc_ready(function () {
  // CODE
});

// JQ VERSION

$(document).ready(function () {
  // CODE
});

// LATEST JQ VERSION

$(function () {
  // CODE
});

// --------------------------------------------------
// UTILITY JS USAGE - ID SELECTOR JS_JQ
// --------------------------------------------------

id("id");

// JQ VERSION

$("#id");

// --------------------------------------------------
// UTILITY JS USAGE - QUERY SELECTOR JS
// --------------------------------------------------

qsel(".class");
qsel("element");

// JQ VERSION

$(".class");
$("element");

// --------------------------------------------------
// UTILITY JS USAGE - QUERY SELECTOR ALL JS
// --------------------------------------------------

qsel_all(".class");
qsel_all("element");

// JQ VERSION

$(".class");
$("element");

// --------------------------------------------------
// UTILITY JS USAGE - ADD EVENT JS_JQ
// --------------------------------------------------

add_event(id("id"), "click", function () {
  // CODE
});

// CHANGE "fn" TO A JAVASCRIPT FUNCTION

add_event(id("id"), "click", fn);

/**
 * JQ VERSION
 *
 * CHANGE "event" TO A JQUERY EVENT
 */

$("#id").click(function () {
  // CODE
});

// --------------------------------------------------
// UTILITY JS USAGE - REMOVE EVENT JS
// --------------------------------------------------

remove_event(id("id"), "click", function () {
  // CODE
});

// CHANGE "fn" TO A JAVASCRIPT FUNCTION

remove_event(id("id"), "click", fn);

// --------------------------------------------------
// UTILITY JS USAGE - ADD MULTI EVENTS JS
// --------------------------------------------------

add_events(id("id"), "<event> <event>", function () {
  // CODE
});

// CHANGE "fn" TO A JAVASCRIPT FUNCTION

add_events(id("id"), "click keyup", fn);

// --------------------------------------------------
// UTILITY JS USAGE - REMOVE MULTI EVENTS JS
// --------------------------------------------------

removeEvents(id("id"), "click keyup", function () {
  // CODE
});

// CHANGE "fn" TO A JAVASCRIPT FUNCTION

removeEvents(id("id"), "click keyup", fn);

// --------------------------------------------------
// UTILITY JS USAGE - HAS CLASS JS_JQ
// --------------------------------------------------

has_class(id("id"), "class");

// JQ VERSION

$("#id").hasClass("class");

// --------------------------------------------------
// UTILITY JS USAGE - ADD CLASS JS_JQ
// --------------------------------------------------

add_class(id("id"), "class");

// JQ VERSION

$("#id").addClass("class");

// --------------------------------------------------
// UTILITY JS USAGE - REMOVE CLASS JS_JQ
// --------------------------------------------------

remove_class(id("id"), "class");

// JQ VERSION

$("#id").removeClass("class");

// --------------------------------------------------
// UTILITY JS USAGE - TOGGLE CLASS JS_JQ
// --------------------------------------------------

toggle_class(id("id"), "class");

// JQ VERSION

$("#id").toggleClass("class");

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - RUBY ON RAILS JQUERY TURBOLINKS LOAD
// --------------------------------------------------

tload(function () {
  // CODE
});

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - BODY ID JS
// --------------------------------------------------

body("body-id");

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - MATCH MEDIA JS
// --------------------------------------------------

match_media(
  "only screen and (min-width: 992px)",
  992,
  function match() {
    // CODE
  },
  function unmatch() {
    // CODE
  }
);

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - MATCH HEIGHT JS_JQ
// --------------------------------------------------

// BASIC USAGE
match_height(".mh");

// MATCH MEDIA
match_media(
  992,
  function match() {
    match_height(".mh");
  },
  function unmatch() {
    return match_height(".mh");
    // OTHER CODE
  }
);

// ENQUIRE
enquire.register("only screen and (min-width: 992px)", {
  match: function () {
    match_height(".mh");
  },
  unmatch: function () {
    return match_height(".mh");
  },
});

// JQ VERSION

// BASIC USAGE
$(".mh").match_height();

// MATCH MEDIA
match_media(
  "only screen and (min-width: 992>px)",
  function match() {
    $(".mh").match_height();
  },
  function unmatch() {
    return $(".mh").match_height();
  }
);

// ENQUIRE
enquire.register("only screen and (min-width: 992px)", {
  match: function () {
    $(".mh").match_height();
  },
  unmatch: function () {
    return $(".mh").match_height();
  },
});

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - CREATE ELEMENT JS
// --------------------------------------------------

create_el("element");

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - INNER SANITATION & TRIM WHITE SPACES AROUND JS
// --------------------------------------------------

inner_trim("string");

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - RANDOM NUMBER JS
// --------------------------------------------------

rand(12345);

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - NUMBER INPUT ONLY JS_JQ
// --------------------------------------------------

add_att(id("input-id"), "onkeypress", "return num_only(event)");

// JQ VERSION

$("#id").keydown(function (e) {
  if (e.keyCode == 46 || e.keyCode == 8) {
  } else if (e.keyCode < 48 || e.keyCode > 57) {
    e.preventDefault();
    return false;
  }
});

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - NO NUMBER INPUT JS
// --------------------------------------------------

add_att(id("input-id"), "onkeypress", "return no_num(event)");

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - NUMBER WITH COMMAS JS
// --------------------------------------------------

num_commas(12345);

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - NUMBER WITH SPACE JS
// --------------------------------------------------

num_space(12345);

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - LOCAL STORAGE SPACE JS
// --------------------------------------------------

localStorage_space();

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - DATASET JS
// --------------------------------------------------

dataset(id("element-id-with-data-attribute"), "<value>");

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - EXTEND OBJECT JS
// --------------------------------------------------

extend_obj(object, addons);

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - NAV BAR JS
// --------------------------------------------------

nav_bar();

nav_bar(function () {
  // CODE
});

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - NEGATIVE MARGIN JS
// --------------------------------------------------

fixed_el(".h-add", ".nmt", null, null, ".cvh");

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - SCROLL TOGGLE CLASS JS
// --------------------------------------------------

scroll_class(id("id"), "class");

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - SEARCH SELECT JS
// --------------------------------------------------

search_sel();

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - CLICK COPY JS
// --------------------------------------------------

click_copy(element);

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - PASSWORD MATCH JS
// --------------------------------------------------

pw_match(id("password-id"), id("confirm-password-id"), id("message-id"));

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - FIRST CHARACTER NOT A NUMBER JS
// --------------------------------------------------

first_char(id("input-id"), function () {
  alert("Invalid input!");
});

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - NEGATIVE CHARACTER JS
// --------------------------------------------------

negative_char(id("input-id"), function () {
  alert("Cannot be negative!");
});

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - TYPE COMMA JS
// --------------------------------------------------

type_comma(id("input-id"));

// --------------------------------------------------
// UTILITY JS USAGE - OPTIONAL - DECIMAL ADD ZERO JS
// --------------------------------------------------

dec_add_zero(id("input-id"));

// --------------------------------------------------
// UTILITY JS USAGE - CAROUSEL JS
// --------------------------------------------------

var carousel = new caro({
  autoplay: {
    on: true,
    interval: 5000,
  },
});

// --------------------------------------------------
// MAIN JS - CLICK TOGGLE CLASS JS_JQ
// --------------------------------------------------

// BASIC USAGE

add_event(id("id"), "click", function () {
  toggle_class(id("id"), "class");
});

// IF SAME ELEMENT

add_event(id("id"), "click", function () {
  toggle_class(this, "class");
});

// PREVENT DEFAULT

add_event(id("id"), "click", function (e) {
  e.preventDefault();
  toggle_class(id("id"), "class");
  return false;
});

// IF SAME ELEMENT

add_event(id("id"), "click", function (e) {
  e.preventDefault();
  toggle_class(this, "class");
  return false;
});

// JQ VERSION

// BASIC USAGE

$("#id").click(function () {
  $("#id").toggleClass("class");
});

// IF SAME ELEMENT

$("#id").click(function () {
  $(this).toggleClass("class");
});

// PREVENT DEFAULT

$("#id").click(function (e) {
  e.preventDefault();
  $("#id").toggleClass("<.>");
  return false;
});

// IF SAME ELEMENT

$("#id").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("<.>");
  return false;
});

// --------------------------------------------------
// MAIN JS - CLOSE JS_JQ
// --------------------------------------------------

/**
 * THERE ARE OTHER MORE POSSIBILITIES
 * LIKE ADDING CLASS TO THE PARENT'S DECLARED ID TO CLOSE IT
 */

add_event(id("close-btn-id"), "click", function () {
  id("close-btn-id").parentNode.style.display = "none";
});

// JQ VERSION

$("#close-btn-id").click(function () {
  $(this).parent().css("display", "none");
});

// --------------------------------------------------
// MAIN JS - PERMANENT INPUT VALUE JS_JQ
// --------------------------------------------------

/**
 * FOR JS AND JQ
 * CHANGE "3" TO NUMBER OF VALUE CHARACTERS
 * EXCLUDING THE SPACE AT THE END
 */

add_event(id("id"), "keydown", function () {
  if (this.value == "" || this.value.length <= 3) {
    this.value = "+63 ";
  }
});

// JQ VERSION

$("#id").keydown(function () {
  if ($(this).val() == "" || $(this).val().length <= 3) {
    $(this).val("+63 ");
  }
});

// --------------------------------------------------
// MAIN JS - WINDOW SCROLL ADD CLASS REMOVE CLASS JS_JQ
// --------------------------------------------------

add_event(window, "scroll", function () {
  if (
    window.pageYOffset > id("id").offsetTop ||
    document.documentElement.scrollTop > id("id").offsetTop
  ) {
    add_class(id("id"), "class");
  } else {
    remove_class(id("id"), "class");
  }
});

// JQ VERSION

$(window).scroll(function () {
  if ($(window).scrollTop() > $("#id").offset().top) {
    $("#id").addClass("class");
  } else {
    $("#id").removeClass("class");
  }
});

// --------------------------------------------------
// MAIN JS - WINDOW SCROLL OUTSIDE REMOVE CLASS JS_JQ
// --------------------------------------------------

add_event(window, "scroll", function () {
  if (window.pageYOffset >= 0 || document.documentElement.scrollTop >= 0) {
    if (has_class(id("id"), "class")) {
      remove_class(id("id"), "class");
    }
  }
});

// JQ VERSION

$(window).scroll(function () {
  if ($(window).scrollTop() >= 0) {
    if ($("#id").hasClass("class")) {
      $("#id").removeClass("class");
    }
  }
});

// --------------------------------------------------
// MAIN JS - WINDOW CLICK OUTSIDE REMOVE CLASS JS_JQ
// --------------------------------------------------

// WIDER SUPPORT
add_event(window, "click", function (e) {
  if ((e.target.id || e.srcElement.id) != id("<#object>")) {
    if (has_class(id("id"), "class")) {
      remove_class(id("id"), "class");
    }
  }
});

// PARENT CONTAINER OR OBJECT FOR OLDER BROWSERS
add_event(window, "click", function (e) {
  if (
    !e.target.closest("#parent-or-object-id") ||
    !id("parent-or-object-id").contains(e.target || e.srcElement)
  ) {
    if (has_class(id("container-or-object-id"), "class")) {
      remove_class(id("container-or-object-id"), "class");
    }
  }
});

// BUTTON OR OBJECT FOR MODERN BROWSERS
add_event(window, "click", function (e) {
  if (!e.target.matches("#btn-or-object-id")) {
    if (has_class(id("container-or-object-id"), "class")) {
      remove_class(id("container-or-object-id"), "class");
    }
  }
});

// JQ VERSION

// CONTAINER
$(window).click(function (e) {
  if (!$(e.target).closest("#parent-or-object-id").length) {
    if ($("#container-or-object-id").hasClass("class")) {
      $("#container-or-object-id").removeClass("class");
    }
  }
});

// BUTTON
$(window).click(function (e) {
  if ($("#btn-or-object-id") !== e.target) {
    if ($("#container-or-object-id").hasClass("class")) {
      $("#container-or-object-id").removeClass("class");
    }
  }
});

// --------------------------------------------------
// SDWRESUMETHEME JS
// --------------------------------------------------

var i;

for (i = 0; i < qsel_all(".wrap-paper").length; i++) {
  if (
    qsel_all(".wrap-paper")[i].innerHTML == null ||
    qsel_all(".wrap-paper")[i].innerHTML == ""
  ) {
    qsel_all(".wrap-paper")[i].innerHTML = "Page" + " " + (i + 1);
  }
}

for (i = 0; i < qsel_all(".nav-span").length; i++) {
  add_event(qsel_all(".nav-span")[i], "click", function () {
    for (i = 0; i < qsel_all(".nav-span").length; i++) {
      remove_class(qsel_all(".nav-span")[i], "active");
      remove_class(qsel_all(".wrap-paper")[i], "active");
    }

    add_class(this, "active");
    add_class(qsel("." + this.innerHTML), "active");
    document.title = document.title.split("-").slice(0, 3).join("-");
    document.title += "-" + this.innerHTML.split("e")[1];
  });
}
