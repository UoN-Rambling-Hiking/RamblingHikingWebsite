mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuLWxlZTc2IiwiYSI6ImNsaXJ4d3N3azE3M3Mza28xdnVmdGxwczcifQ.j0THIt59Yt7D6qG1WKXTPg';
const colors = ['#443c90', '#d40058', '#33691f', '#ffc108', '#0298ce'];
var i = 0;
var start;
let map;

function createMap(lng, lat, zoom) {
    start = [lng, lat]
    map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/dan-lee76/cliry1gm600nw01qv1p9f20fm', // style URL,
        center: start, // starting position [lng, lat]
        zoom: zoom, // starting zoom
    }).addControl(new mapboxgl.FullscreenControl()).addControl(new mapboxgl.NavigationControl()).addControl(new mapboxgl.ScaleControl());
    const marker = new mapboxgl.Marker({ color: "#065434", })
        .setLngLat(start)
        .addTo(map);
}

function createRoute(data, title, walkId) {
    walkId = walkId.toString()
    map.on('load', function () {
        map.addSource(walkId, {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': data[0]
                }
            }
        });

        map.addLayer({
            'id': walkId,
            'type': 'line',
            'source': walkId,
            layout: {
                'line-cap': 'round',
                'line-join': 'round',

            },
            'paint': {
                'line-color': colors[i++],
                'line-width': 4,
                'line-opacity': 0.5
            }
        });

        map.on('click', walkId, function (e) {
            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML('<h4>' + title + '</h4><p>Distance: ' + (data[1] / 100).toFixed(2) + 'km</p><p>Elevation: ' + (data[2]).toFixed(2) + 'm</p>')
                .addTo(map);
        });

        map.on('mouseenter', walkId, function () {
            map.getCanvas().style.cursor = 'pointer';
            map.setPaintProperty(walkId, 'line-width', 6);
            map.moveLayer(walkId);
            map.setPaintProperty(walkId, 'line-opacity', 1);
        });
        map.on('mouseleave', walkId, function () {
            map.getCanvas().style.cursor = '';
            map.setPaintProperty(walkId, 'line-width', 4);
            map.setPaintProperty(walkId, 'line-opacity', 0.5);
        });

    })
}

function pills() {
    const pilEls = document.querySelectorAll('button[data-bs-toggle="pill"]')
    pilEls.forEach(function (elem) {
        elem.addEventListener('shown.bs.tab', event => {
            map.flyTo({
                center: start,
                zoom: 11
            });
            id = event.target.id.split('-')[1]
            if (id != "home") {
                map.setPaintProperty(id, 'line-width', 6);
                map.setPaintProperty(id, 'line-opacity', 1);
                map.moveLayer(id);
            }
            previousId = event.relatedTarget.id.split('-')[1]
            if (previousId != "home") {
                map.setPaintProperty(previousId, 'line-width', 4);
                map.setPaintProperty(previousId, 'line-opacity', 0.5);
            }

        })
    })
}