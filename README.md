# punk_api_app
JS beer app using APIs - weekend homework week 7

Initially the aim of this project was to request and return data from an API, using JavaScript to build the program. This naturally lead to a large focus on CSS once this primary aim was acheived.
I enjoyed arranging the CSS in this project, though there are still things I would like to change, such as integrating a grid to accommodate varying sizes of images.

The next task to complete is the modify the detailed information for each beer. 

Errors:
The click listener is based on a parent container, thus a click on the child container does not have the desired affect.

I faced a larger issue over the weekend with the term 'id' using the index of the beers. This lead to the 'next' beer being displayed when specific data was requested, as the 'id' taken (1-25) when, in some cases in the software, the id is assigned to the 'index' (1-24), thus they do not line up in some cases. The current fix has yet to be fully tested.
