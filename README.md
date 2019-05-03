# Weather_Broadcast
- [ ] Replace "WEB system" with your system name

## Description
- [ ] Provide WEB system description in few sentences - its purpose, users, etc.
The main aim of this system is to show what the weather is like in a certain area that a user is searching for. You can type a name of the city or a zip code in the search box and it returns a box that displays the temperature, weather description, wind speed, humidity.


## Entity definition
city
    city.id City ID(number(length=1000000)) 
    city.name City name(string(length(50))
temperature
    temperature.value Temperature(number(length=300))
    temperature.unit Unit of measurements. Possilbe valure is Celsius, Kelvin, Fahrenheit.(string(length=50))
humidity
    humidity.value Humidity value(number(length=100))
    humidity.unit %(string(length=20))
wind
    wind.speed
    wind.speed.value Wind speed, mps
clouds
    clouds.value Cloudiness (string)
    clouds.name Name of the cloudiness (string)
weather
    weather.number Weather condition id (number)
    weather.value Weather condition name (string)
    weather.icon Weather icon id (number)

q city name and country code divided by comma, use ISO 3166 country codes

- [ ] Define the entity ("object" that will be manipulated) of WEB system
- [ ] Entity should have a name
- [ ] Entity should have 3 mandatory attributes:
    - [ ] ID - depending on specific service this could be a number or string
    - [ ] Creation date - (if applicable for specific service) ISO 8601 format date string
    - [ ] Modification date - (if applicable for specific service) ISO 8601 format date string
- [ ] Entity should have at least 5 custom attributes
    - [ ] Each attribute should have a type defined: number, string, ISO 8601 date string, boolean, object, array or other
    - [ ] Each attribute should have restrictions defined: list of constants, or number range, or string length, or string format, or object schema, or array schema or other. For example, you can use `joi` language to define restrictions: https://github.com/hapijs/joi/blob/v13.1.2/API.md

## API definition
Failed to load recource: the http://api.openweathermap.org/data/2.5/weather?q=belekas&APPID=de411aae5b9451c85c25d4dd42326856&units=metric server responded with a status of 404 (Not Found)

Uncaught (in promise) TypeError: Cannot read property '0' of undefined

API call:
GET api.openweathermap.org/data/2.5/weather?q={city name}
metric: api.openweathermap.org/data/2.5/find?q=London&units=metric
imperial: api.openweathermap.org/data/2.5/find?q=London&units=imperial
standard: api.openweathermap.org/data/2.5/find?q=London

Get weather icon: GET "http://openweathermap.org/img/w/"400 - {error:404 'Not Found'}
Delete: 
Post: api.openweathermap.org/data/2.5/weather?q={city name} -{error:404 'Not found'}



- [ ] Define specific service (konkrečios paslaugos) API methods that WEB system is going to use
- [ ] Optionally define additional API methods that WEB system is going to expose
- [ ] API should have at least 4 methods
    - [ ] A method to return entity by ID. Should not have request body
    - [ ] A method to return multiple entities (Array) by ID. This method should support at least one header value to:
        - [ ] Return only entities that match pattern in one of its attributes
        - [ ] Return 10 entities starting provided index
        - [ ] Return sorted entities by one of its attributes (both ascending and descending)
        - [ ] Other (should be approved by Product Owner (PO))
    - [ ] A method to remove entity by ID. Returns removed entity. Should not have request body
    - [ ] A method to update entity by ID. Accepts entity to update and returns updated entity
- [ ] Each method should have HTTP method defined
- [ ] Each method should have URI defined (use {id} as entity ID placeholder)
- [ ] Should return all 4xx errors in unified format. Define format using `joi` language
- [ ] Should return all 5xx errors in unified format. Define format using `joi` language

## UI definition
https://wireframe.cc/iNWOd7

- [ ] Define the structure of how visually the WEB system is going to look like
- [ ] Should have at least one view defined with https://wireframe.cc (or other wireframe tool):
- [ ] The view should have a title
- [ ] The view should have a description of a service provided by web system
- [ ] The view should include at least 2 UI components:
    - [ ] A component to display multiple entities with all their attribute values visible. It should be posible to remove and edit selected entity.
        - [ ] Depending on chosen header of API method that returns multiple entities, it should be posible to select specific 10 entities starting index, sort entities by attribute, filter entities by attribute pattern, or other (should be approved by Product Owner (PO))
    - [ ] A component to create a new entity/edit existing entity. It should be posbile to create new entity and edit selected entity
        - [ ] Each attribute should have a dedicated editor field: text box for string or number, checkbox or radio buttons for boolean, date picker for date, etc.
