/**
 * Created by Polona-PC on 22.5.2015.
 */

var page_navigator = new breadcrumb();

function getParameterByName(page) {
    page = page.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + page + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));


}

if(typeof MenuLinks == 'undefined'){ var MenuLinks = {}; }

$(function() {
    MenuLinks.mainDivs = ['index-intro', 'more-info', 'basic-expressions', 'osciloscope', 'light-bulb', 'solar-cell', 'sound-speed', 'instruments-sound', 'osciloscope-desc',
                          'light-bulb-desc', 'solar-cell-desc', 'sound-speed-desc', 'sound-of-instruments-desc', 'osciloscope-app', 'light-bulb-app', 'solar-cell-app',
                          'sound-speed-app', 'sound-of-instruments-app', 'about-us', 'osciloscope-hard', 'osciloscope-medium', 'osciloscope-easy', 'solar-cell-hard',
                          'solar-cell-medium', 'solar-cell-easy', 'light-bulb-hard', 'light-bulb-medium', 'light-bulb-easy', 'team', 'press', 'cooperation', 'questionnaire', 'login-form', 'quiz', 'red-pitaya'];
    MenuLinks.ShowDivs = function(showDivs) {
        var mainDivs = MenuLinks.mainDivs;
        for (var c=0; c<mainDivs.length; c++) {
            var hide = true;
            if (showDivs) {
                for (var d=0; d<showDivs.length; d++) {
                    if(showDivs[d] == mainDivs[c]) {
                        $('#'+mainDivs[c]).show();
                        hide = false;
                        break;
                    }
                }
            }
            if(hide) {
                $('#'+mainDivs[c]).hide();
            }
        }
    };
});


/* Show specific divs on a web pages */
MenuLinks.Home = function() {               /* HOME PAGE */
    page_navigator.clearAll();
    page_navigator.addLi('Domov');

    MenuLinks.ShowDivs(['index-intro', 'more-info']);

};

MenuLinks.BasicExpressions = function() {               /* BASIC EXPRESSIONS */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Osnovni pojmi');

    MenuLinks.ShowDivs(['basic-expressions']);
};

MenuLinks.RedPitaya = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Red Pitaya');

    MenuLinks.ShowDivs(['breadcrumb-redpitaya']);
};

MenuLinks.Experiments = function() {               /* EXPERIMENTS */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti');

    MenuLinks.ShowDivs(['osciloscope', 'light-bulb', 'solar-cell', 'sound-speed', 'instruments-sound']);
};

MenuLinks.Sensors = function() {               /* SENSORS */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Uporaba senzorjev');

    MenuLinks.ShowDivs(['']);
};

MenuLinks.OsciloscopeApp = function() {                      /* OSCILOSCOPE APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Osciloskop – aplikacija');

    MenuLinks.ShowDivs(['osciloscope-desc']);
};

MenuLinks.LightBulbApp = function() {                      /* LIGHT BULB APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Žarnica – aplikacija');

    MenuLinks.ShowDivs(['light-bulb-desc']);
};

MenuLinks.SolarCellApp = function() {                      /* SOLAR CELL APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Sončna celica – aplikacija');

    MenuLinks.ShowDivs(['solar-cell-desc']);
};

MenuLinks.SoundSpeedApp = function() {                      /* SPEED SOUND APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Hitrost zvoka – opis', 'index.html?page=hitrost-zvoka-aplikacija');
    page_navigator.addLi('Hitrost zvoka – aplikacija');

    MenuLinks.ShowDivs(['sound-speed-desc']);
};

MenuLinks.SoundOfInstrumentsApp = function() {                      /* SOUND OF INSTRUMENTS APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Zvok inštrumentov – opis', 'index.html?page=zvok-instrumentov-aplikacija');
    page_navigator.addLi('Zvok inštrumentov – aplikacija');

    MenuLinks.ShowDivs(['sound-of-instruments-desc']);
};

MenuLinks.Osciloscope = function() {               /* OSCILOSCOPE  DESC */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis');

    MenuLinks.ShowDivs(['osciloscope-desc']);
};

MenuLinks.LightBulb = function() {               /* LIGHT BULB DESC */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis');

    MenuLinks.ShowDivs(['light-bulb-desc']);
};

MenuLinks.SolarCell = function() {               /* SOLAR CELL DESC */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis');

    MenuLinks.ShowDivs(['solar-cell-desc']);
};

MenuLinks.SoundSpeed = function() {               /* SOUND SPEED DESC */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Hitrost zvoka – opis');

    MenuLinks.ShowDivs(['sound-speed-desc']);
};

MenuLinks.SoundOfInstruments = function() {               /* SOUND OF INSTRUMENTS DESC */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Zvok inštrumentov – opis');

    MenuLinks.ShowDivs(['sound-of-instruments-desc']);
};

MenuLinks.AboutUs = function() {               /* ABOUT US */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('O nas');

    MenuLinks.ShowDivs(['about-us']);
};

MenuLinks.OsciloscopeHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Zahtevnejši način izvajanja');

    MenuLinks.ShowDivs(['osciloscope-hard']);
};

MenuLinks.OsciloscopeMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Srednje zahteven način izvajanja');

    MenuLinks.ShowDivs(['osciloscope-medium']);
};

MenuLinks.OsciloscopeEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Lažji način izvajanja');

    MenuLinks.ShowDivs(['osciloscope-easy']);
};

MenuLinks.SolarCellHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Zahtevnejši način izvajanja');

    MenuLinks.ShowDivs(['solar-cell-hard']);
};

MenuLinks.SolarCellMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Srednje zahteven način izvajanja');

    MenuLinks.ShowDivs(['solar-cell-medium']);
};


MenuLinks.SolarCellEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Lažji način izvajanja');

    MenuLinks.ShowDivs(['solar-cell-easy']);
};

MenuLinks.LightBulbHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Težji način izvajanja');

    MenuLinks.ShowDivs(['light-bulb-hard']);
};

MenuLinks.LightBulbMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Srednje težek način izvajanja');

    MenuLinks.ShowDivs(['light-bulb-medium']);
};

MenuLinks.LightBulbEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Lažji način izvajanja');

    MenuLinks.ShowDivs(['light-bulb-easy']);
};

MenuLinks.Team = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Ekipa');

    MenuLinks.ShowDivs(['team']);
};

MenuLinks.Press = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Za medije');

    MenuLinks.ShowDivs(['press']);
};

MenuLinks.Cooperation = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Želite sodelovati?');

    MenuLinks.ShowDivs(['cooperation']);
};

MenuLinks.Questionnaire = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Kratka anketa');

    MenuLinks.ShowDivs(['questionnaire']);
};

MenuLinks.LoginForm = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Prijava');

    MenuLinks.ShowDivs(['login-form']);
};


MenuLinks.Quiz = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Kviz');

    MenuLinks.ShowDivs(['quiz']);
};


MenuLinks.RedPitaya = function() {               /* HOME PAGE */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Red Pitaya');

    MenuLinks.ShowDivs(['red-pitaya']);

};

$(function() {
    var page = getParameterByName('page');
    //alert(page);

    if (page == null || page == '' || page == 'domov') {
        MenuLinks.Home();
    }
    else {
        switch (page) {
            case 'osnovni-pojmi':
                MenuLinks.BasicExpressions();
                break;
            case 'redpitaya':
                MenuLinks.RedPitaya();
                break;
            case 'eksperimenti':
                MenuLinks.Experiments();
                break;
            case 'uporaba-senzorjev':
                MenuLinks.Sensors();
                break;
            case 'onas':
                MenuLinks.AboutUs();
                break;
            case 'osciloskop-aplikacija':
                MenuLinks.Osciloscope();
                break;
            case 'zarnica-aplikacija':
                MenuLinks.LightBulb();
                break;
            case 'soncna-celica-aplikacija':
                MenuLinks.SolarCell();
                break;
            case 'hitrost-zvoka-aplikacija':
                MenuLinks.SoundSpeed();
                break;
            case 'zvok-instrumentov-aplikacija':
                MenuLinks.SoundOfInstruments();
                break;
            case 'osciloskop':
                MenuLinks.OsciloscopeApp();
                break;
            case 'zarnica':
                MenuLinks.LightBulbApp();
                break;
            case 'soncna-celica':
                MenuLinks.SolarCellApp();
                break;
            case 'hitrost-zvoka':
                MenuLinks.SoundSpeedApp();
                break;
            case 'zvok-instrumentov':
                MenuLinks.SoundOfInstrumentsApp();
                break;
            case 'osciloskop-tezji':
                MenuLinks.OsciloscopeHard();
                break;
            case 'osciloskop-srednji':
                MenuLinks.OsciloscopeMedium();
                break;
            case 'osciloskop-lazji':
                MenuLinks.OsciloscopeEasy();
                break;
            case 'soncna-celica-tezji':
                MenuLinks.SolarCellHard();
                break;
            case 'soncna-celica-srednji':
                MenuLinks.SolarCellMedium();
                break;
            case 'soncna-celica-lazji':
                MenuLinks.SolarCellEasy();
                break;
            case 'zarnica-tezji':
                MenuLinks.LightBulbHard();
                break;
            case 'zarnica-srednji':
                MenuLinks.LightBulbMedium();
                break;
            case 'zarnica-lazji':
                MenuLinks.LightBulbEasy();
                break;
            case 'ekipa':
                MenuLinks.Team();
                break;
            case 'za-medije':
                MenuLinks.Press();
                break;
            case 'zelite-sodelovati':
                MenuLinks.Cooperation();
                break;
            case 'kratka-anketa':
                MenuLinks.Questionnaire();
                break;
            case 'prijava':
                MenuLinks.LoginForm();
                break;
            case 'kviz':
                MenuLinks.Quiz();
                break;
            case 'red-pitaja':
                MenuLinks.RedPitaya();
                break;
        }
    }

    $("#body").css("display", "block");
});
