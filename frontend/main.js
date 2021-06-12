import React from 'react'; // import potrzebnych bibliotek
import ReactDOM from 'react-dom';  // import potrzebnych bibliotek

import amazonMain from './1/amazonMain.jsx';



ReactDOM.render(<div>
    <amazonMain/>
</div>, document.getElementById('app')); // renderowanie powyzszych elementów do elementu 'app' w pliku index.html
// CO WAZNE -- MOZNA RENDEROWAĆ TYLKO JEDEN ELEMENT, dlatego jest pojedynczy div, który posiada dzieci

