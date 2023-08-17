
document.addEventListener('DOMContentLoaded', () => {

    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        cards = require('./modules/cards'),
        calc = require('./modules/calc'),
        form = require('./modules/form'),
        slider = require('./modules/slider');

        tabs();
        modal();
        timer();
        cards();
        calc();
        form();
        slider();


});


// npx json-server db.json - команда для запуска json сервера



