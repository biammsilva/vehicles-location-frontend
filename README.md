# Vehicle Locations

Project to show the vehicles locations.

## Technologies:

### Angular

I've choosen Angular because is the framework that I'm more fammiliar with. Also, it has the library to manage google maps only passing some parameters.

### Agm - Angular google maps

I've choosen google maps library to show the vehicles and plot a line in the map. I'm using:

* agm-map: to show the map;
* agm-marker: to show the last vehicle location;
* agm-polyline: to show the path that the vehicle had took;

I've tested two resources: agm-direction and agm-polyline. But agm-direction sets the route based in one destination, one origin and a list of waypoint limited to 25.
Because of that limit, I've changed to agm-polyline, that only draws a line in the path that the vehicle was.

Production url: https://vehicles-location.herokuapp.com/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
