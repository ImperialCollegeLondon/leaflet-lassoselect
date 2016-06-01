# leaflet-lassoselect
A lasso selection plug-in for Leaflet.js maps

## Usage
1. Install the plug-in:
  ```
  npm install github:imperialcollegelondon/leaflet-lassoselect
  ```
  
2. Import the plug-in
  ```javascript
  import 'leaflet-lassoselect';
  ```
  
3. Create a Leaflet map
  ```javascript
  const map = L.map('map').setView([51.505, -0.09], 13);
  ```
  
4. Add a lasso to the map
  ```javascript
  const lasso = L.lassoSelect({ /* see options below */ }).addTo(map);
  ```

5. Listen to `pathchange` event
  ```javascript
  lasso.on('pathchange', () => {
    // get selected path (an array of LatLng positions)
    const path = lasso.getPath();
    
    // or check if a point is inside the selected path
    if (this.lasso.contains(someMarker.getLatLng())) {
      // ...
    }
  });
  ```
  
6. Activate the lasso tool
  ```javascript
  lasso.enable();
  ```

## Options

A list of available options:
* `activeTooltip`: A string to be displayed as the map tooltip when the lasso drawing is active.
* `startedTooltip`: A string to be displayed as the map tooltip after the first point has been drawn.
* `readyTooltip`: A string to be displayed as the map tooltip when the path is ready to be completed (after three points have been drawn).
* `finishedTooltip`: A string to be displayed as the map tooltip after the path has been completed.

## Events
A `pathchange` event is fired when the path is completed or modified.
