var result = document.getElementById('result-data');
var conference = document.getElementById('conference-data');

var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");

function drawResultTable(data) {
  for(var i = 0; i < data.length; i++) {
    var item = document.createElement('li');

    var date = document.createElement('div');
    var w = document.createElement('div');
    var l = document.createElement('div');
    date.innerText = data[i].year;
    w.innerText = data[i].w
    l.innerText = data[i].l

    data[i].w_touch ? w.classList.add('touch') : w.classList.add('notouch');
    data[i].l_touch ? l.classList.add('touch') : l.classList.add('notouch');

    if (data[i].year === 2005) {
      w.classList.add('lockout');
      l.classList.add('lockout');
    }

    item.appendChild(date);
    item.appendChild(w);
    item.appendChild(l);

    result.appendChild(item);
  }
}

function drawConferenceTable(data) {
  for(var i = 0; i < data.length; i++) {
    var item = document.createElement('li');

    var date = document.createElement('div');
    var e = document.createElement('div');
    var w = document.createElement('div');
    date.innerText = data[i].year;

    if(data[i].w_conf === 'east') {
      e.innerText = data[i].w
      data[i].w_touch ? e.classList.add('touch') : e.classList.add('notouch');
      w.innerText = data[i].l
      data[i].l_touch ? w.classList.add('touch') : w.classList.add('notouch');
    } else {
      e.innerText = data[i].l
      data[i].l_touch ? e.classList.add('touch') : e.classList.add('notouch');
      w.innerText = data[i].w
      data[i].w_touch ? w.classList.add('touch') : w.classList.add('notouch');
    }

    if (data[i].year === 2005) {
      e.classList.add('lockout');
      w.classList.add('lockout');
    }

    item.appendChild(date);
    item.appendChild(e);
    item.appendChild(w);

    conference.appendChild(item);
  }
}

xhr.onreadystatechange = () => {
  if (xhr.readyState == XMLHttpRequest.DONE) {
  	var json = JSON.parse(xhr.responseText);
  	var res = json.data;

    drawResultTable(res);
    drawConferenceTable(res);
  }
}

xhr.open('GET', 'data.json');

xhr.send();