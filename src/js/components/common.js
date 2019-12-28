import easing from './easing';

const defSize = {
  width: 0,
  height: 0
};

function transitionEvent() {
  const el = document.createElement('fakeelement');
  const transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
  };

  let transition = '';

  Object.keys(transitions).forEach((t) => {
    if (el.style[t] !== undefined) {
      transition = transitions[t];
    }
  });

  return transition;
}

function animationEvent() {
  const el = document.createElement('fakeelement');
  const animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  let animation = '';

  Object.keys(animations).forEach((a) => {
    if (el.style[a] !== undefined) {
      animation = animations[a];
    }
  });

  return animation;
}

export const tranEv = transitionEvent();
export const animEv = animationEvent();
export const isIE = navigator.userAgent.indexOf('MSIE') !== -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
export const isMS = isIE || navigator.userAgent.indexOf('Edge') !== -1;
export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|CriOS/i.test(navigator.userAgent);
export const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window).MSStream;
export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
export const isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1;
export const unibody = document.documentElement || document.body.parentNode || document.body;

export function scrollTo(where, timing = 500, element = unibody) {
  const header = document.querySelector('header, .header');
  const newTop = where - (header ? header.offsetHeight : 0);
  const currentTop = element.scrollTop;
  const change = newTop - currentTop;
  const increment = timing / 60;

  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const currentChange = change * (currentTime / timing);
    const percent = easing.easeInOutQuint(currentChange / change);
    element.scrollTop = currentTop + change * percent;

    if (currentTime < timing) {
      setTimeout(animateScroll, increment);
    } else {
      element.scrollTop = newTop;
    }
  };

  animateScroll();
}

export function triggerChange(input) {
  let evt;

  if (input.getAttribute('min') || input.getAttribute('max')) {
    if (parseFloat(input.getAttribute('min')) > parseFloat(input.value)) {
      input.value = input.getAttribute('min');
      triggerChange(input);
      return false;
    }

    if (parseFloat(input.getAttribute('max')) < parseFloat(input.value)) {
      input.value = input.getAttribute('max');
      triggerChange(input);
      return false;
    }
  }

  if (isMS) {
    evt = document.createEvent('CustomEvent');
    evt.initCustomEvent('change', true, true, window);
  } else {
    evt = new Event('change', { bubbles: true });
  }

  input.dispatchEvent(evt);

  return true;
}

export function containSize(obj, native, wrap, minus = defSize) {
  const objHeightToWidth = native.height / native.width;
  const objWidthToHeight = native.width / native.height;

  const wrapHeight = wrap.height - minus.height;
  const wrapWidth = wrap.width - minus.width;

  if (wrapHeight * objWidthToHeight > wrapWidth) {
    obj.style.width = `${wrapWidth}px`;
    obj.style.height = `${wrapWidth * objHeightToWidth}px`;
  } else {
    obj.style.width = `${wrapHeight * objWidthToHeight}px`;
    obj.style.height = `${wrapHeight}px`;
  }
}

export function coverSize(obj, native, wrap, minus = defSize) {
  const objHeightToWidth = native.height / native.width;
  const objWidthToHeight = native.width / native.height;

  const wrapHeight = wrap.height - minus.height;
  const wrapWidth = wrap.width - minus.width;

  if (wrapHeight * objWidthToHeight > wrapWidth) {
    obj.style.width = `${wrapHeight * objWidthToHeight}px`;
    obj.style.height = `${wrapHeight}px`;
  } else {
    obj.style.width = `${wrapWidth}px`;
    obj.style.height = `${wrapWidth * objHeightToWidth}px`;
  }
}
export function svgSize(obj, native, wrap) {
  const nativeToWrap = native.width / wrap.width;
  obj.style.width = `${wrap.width}px`;
  obj.style.height = `${nativeToWrap * native.height}px`;
}

export function getUrlParameter(url, parameterd) {
  const parameter = parameterd.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?|&]${parameter.toLowerCase()}=([^&#]*)`);
  const resultsExecArray = regex.exec(`?${url.toLowerCase().split('?')[1]}`);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export function setUrlParameter(url, keyd, valued) {
  const key = encodeURIComponent(keyd);
  const value = encodeURIComponent(valued);

  const baseUrl = url.split('?')[0];
  const newParam = `${key}=${value}`;
  let params = `?${newParam}`;

  let urlQueryString;

  if (url.split('?')[1] === undefined) {
    urlQueryString = '';
  } else {
    urlQueryString = `?${url.split('?')[1]}`;
  }

  if (urlQueryString) {
    const updateRegex = new RegExp(`([\?&])${key}[^&]*`);
    const removeRegex = new RegExp(`([\?&])${key}=[^&;]+[&;]?`);

    if (typeof value === 'undefined' || value === null || value === '') {
      params = urlQueryString.replace(removeRegex, '$1');
      params = params.replace(/[&;]$/, '');
    } else if (urlQueryString.match(updateRegex) !== null) {
      params = urlQueryString.replace(updateRegex, `$1${newParam}`);
    } else if (urlQueryString === '') {
      params = `?${newParam}`;
    } else {
      params = `${urlQueryString}&${newParam}`;
    }
  }

  params = params === '?' ? '' : params;
  return baseUrl + params;
}
