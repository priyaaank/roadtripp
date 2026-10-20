// Home page tabs + trip map. Configured by _data/trip_map.yml (see that file).
(function () {
  'use strict';

  var ICONS = { stay: '🛏️', food: '🍴', sight: '📷', stop: '📍', start: '🚩' };
  var OSRM = 'https://router.project-osrm.org/route/v1/driving/';
  var map = null;
  var layers = {};
  var only = null;   // trip slug from ?trip=..., when the map should show just that trip

  function store(key, value) {
    try {
      if (value === undefined) { return JSON.parse(window.localStorage.getItem(key)); }
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { /* storage unavailable: ignore */ }
    return null;
  }

  // Ask OSRM for a road-following line. Falls back to the straight line on any failure.
  function snapRoute(waypoints, line) {
    var coords = waypoints.map(function (p) { return p[1] + ',' + p[0]; }).join(';');
    var cacheKey = 'tripmap:' + coords;
    var cached = store(cacheKey);
    if (cached) { line.setLatLngs(cached); return; }
    fetch(OSRM + coords + '?overview=full&geometries=geojson')
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d.routes || !d.routes[0]) { return; }
        var pts = d.routes[0].geometry.coordinates.map(function (c) { return [c[1], c[0]]; });
        line.setLatLngs(pts);
        store(cacheKey, pts);
      })
      .catch(function () { /* keep the straight line */ });
  }

  function popup(pin, tripCfg, meta) {
    var el = document.createElement('div');
    el.className = 'trip-map-popup';
    var h = document.createElement('strong');
    h.textContent = pin.name;
    el.appendChild(h);
    if (pin.day || pin.note) {
      var p = document.createElement('p');
      p.textContent = (pin.day ? 'Day ' + pin.day : '') + (pin.day && pin.note ? ' - ' : '') + (pin.note || '');
      el.appendChild(p);
    }
    if (meta) {
      var a = document.createElement('a');
      a.href = meta.url;
      a.textContent = meta.title + ' →';
      el.appendChild(a);
    }
    return el;
  }

  function pinIcon(type, color) {
    return L.divIcon({
      className: 'trip-map-pin',
      html: '<span style="background:' + color + '">' + (ICONS[type] || ICONS.stop) + '</span>',
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -14]
    });
  }

  function fitTo(bounds) {
    if (bounds.length) { map.fitBounds(bounds, { padding: [40, 40] }); }
  }

  function buildPanel(data, bounds) {
    var list = document.getElementById('trip-map-list');
    var boxes = [];

    function setVisible(i, on) {
      if (on) { layers[i].addTo(map); } else { map.removeLayer(layers[i]); }
    }

    data.trips.forEach(function (t, i) {
      if (t.hidden) { return; }
      var meta = data.meta[t.trip] || { title: t.trip };
      var li = document.createElement('li');
      li.className = 'trip-map-item';

      var box = document.createElement('input');
      box.type = 'checkbox';
      box.checked = !only || t.trip === only;
      li.classList.toggle('off', !box.checked);
      box.setAttribute('aria-label', 'Show ' + meta.title);
      box.addEventListener('change', function () {
        setVisible(i, box.checked);
        li.classList.toggle('off', !box.checked);
      });
      boxes.push({ box: box, li: li, i: i });

      var dot = document.createElement('span');
      dot.className = 'trip-map-dot';
      dot.style.background = t.color || '#2E8B57';

      // Clicking the name zooms to that trip (and shows it if hidden).
      var name = document.createElement('button');
      name.type = 'button';
      name.className = 'trip-map-name';
      name.textContent = meta.title;
      name.addEventListener('click', function () {
        if (!box.checked) { box.checked = true; li.classList.remove('off'); setVisible(i, true); }
        fitTo(bounds[i] || []);
      });

      li.appendChild(box); li.appendChild(dot); li.appendChild(name);
      if (meta.url) {
        var open = document.createElement('a');
        open.className = 'trip-map-open';
        open.href = meta.url;
        open.title = 'Read the trip';
        open.textContent = '→';
        li.appendChild(open);
      }
      list.appendChild(li);
    });

    function setAll(on) {
      boxes.forEach(function (b) {
        b.box.checked = on;
        b.li.classList.toggle('off', !on);
        setVisible(b.i, on);
      });
    }
    document.getElementById('trip-map-all').addEventListener('click', function () { setAll(true); });
    document.getElementById('trip-map-none').addEventListener('click', function () { setAll(false); });

    var panel = document.getElementById('trip-map-panel');
    var toggle = document.getElementById('trip-map-toggle');
    toggle.addEventListener('click', function () {
      var collapsed = panel.classList.toggle('collapsed');
      toggle.textContent = collapsed ? 'Show' : 'Hide';
      toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    });
    // Start collapsed on small screens so the map is visible.
    if (window.matchMedia && window.matchMedia('(max-width: 600px)').matches) { toggle.click(); }
  }

  function initMap() {
    var data = JSON.parse(document.getElementById('trip-map-data').textContent);
    var s = data.settings || {};
    map = L.map('trip-map', { zoomControl: false }).setView(s.center || [20.5, 78.9], s.zoom || 5);
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    L.tileLayer(s.tile_url || 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: s.tile_attribution || '&copy; OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);

    var params = new URLSearchParams(window.location.search);
    var wanted = params.get('trip');
    if (wanted && data.trips.some(function (t) { return t.trip === wanted && !t.hidden; })) { only = wanted; }
    var all = [];
    var bounds = {};
    data.trips.forEach(function (t, i) {
      if (t.hidden) { return; }
      var color = t.color || '#2E8B57';
      var meta = data.meta[t.trip];
      var group = L.layerGroup();
      bounds[i] = [];
      (t.routes || []).forEach(function (r) {
        var pts = r.waypoints || [];
        var line = L.polyline(pts, {
          color: r.color || color, weight: 4, opacity: 0.8,
          dashArray: r.dashed ? '8 8' : null
        }).addTo(group);
        if (r.name) { line.bindTooltip(r.name, { sticky: true }); }
        if (r.snap && pts.length > 1) { snapRoute(pts, line); }
        all = all.concat(pts);
        bounds[i] = bounds[i].concat(pts);
      });
      (t.pins || []).forEach(function (p) {
        L.marker(p.coords, { icon: pinIcon(p.type, color), title: p.name })
          .bindPopup(popup(p, t, meta)).addTo(group);
        all.push(p.coords);
        bounds[i].push(p.coords);
      });
      if (!only || t.trip === only) { group.addTo(map); }
      layers[i] = group;
    });
    buildPanel(data, bounds);
    var focus = all;
    if (only) {
      data.trips.forEach(function (t, i) { if (t.trip === only) { focus = bounds[i]; } });
    }
    fitTo(focus);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('trip-map')) { initMap(); }
  });
})();
