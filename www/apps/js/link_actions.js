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
    MenuLinks.mainDivs = ['index-intro', 'more-info', 'basic-expressions', 'osciloscope', 'light-bulb', 'solar-cell', 'circuit-el-remote', 'circuit-el', 'osciloscope-desc',
                          'light-bulb-desc', 'solar-cell-desc', 'circuit-el-remote-desc', 'circuit-el-desc', 'osciloscope-app', 'light-bulb-app', 'solar-cell-app',
                          'circuit-el-app', 'about-us', 'osciloscope-hard', 'osciloscope-medium', 'osciloscope-easy', 'solar-cell-hard',
                          'solar-cell-medium', 'solar-cell-easy', 'light-bulb-hard', 'light-bulb-medium', 'light-bulb-easy', 'circuit-el-remote-hard', 'circuit-el-remote-medium',
                          'circuit-el-remote-easy', 'circuit-el-hard', 'circuit-el-medium', 'circuit-el-easy', 'team', 'press', 'cooperation', 'questionnaire',
                          'login-form', 'quiz', 'red-pitaya', 'sensors', 'faq'];
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

    MenuLinks.ShowDivs(['osciloscope', 'light-bulb', 'solar-cell', 'circuit-el', 'circuit-el-remote']);
};

MenuLinks.Sensors = function() {               /* SENSORS */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Uporaba senzorjev');

    MenuLinks.ShowDivs(['sensors']);
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

MenuLinks.CircuitElRemoteApp = function() {                      /* SPEED SOUND APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – aplikacija');

    MenuLinks.ShowDivs(['circuit-el-remote-desc']);
};

MenuLinks.CircuitElApp = function() {                      /* SOUND OF INSTRUMENTS APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij2');
    page_navigator.addLi('Lastnosti elementov vezij – aplikacija');

    MenuLinks.ShowDivs(['circuit-el-desc']);
};


/* DESCRIPTION */

MenuLinks.Osciloscope = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis');

    MenuLinks.ShowDivs(['osciloscope-desc']);
};

MenuLinks.LightBulb = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis');

    MenuLinks.ShowDivs(['light-bulb-desc']);
};

MenuLinks.SolarCell = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis');

    MenuLinks.ShowDivs(['solar-cell-desc']);
};

MenuLinks.CircuitElRemote = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis');

    MenuLinks.ShowDivs(['circuit-el-remote-desc']);
};

MenuLinks.CircuitEl = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Lastnosti elementov vezij – opis');

    MenuLinks.ShowDivs(['circuit-el-desc']);
};


MenuLinks.AboutUs = function() {               /* ABOUT US */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('O nas');

    MenuLinks.ShowDivs(['about-us']);
};


/* HARD, MEDIUM, EASY */
MenuLinks.OsciloscopeHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Zahtevnejši način izvajanja – osciloskop');

    MenuLinks.ShowDivs(['osciloscope-hard']);
};

MenuLinks.OsciloscopeMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Srednje zahteven način izvajanja – osciloskop');

    MenuLinks.ShowDivs(['osciloscope-medium']);
};

MenuLinks.OsciloscopeEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Enostaven način izvajanja – osciloskop');

    MenuLinks.ShowDivs(['osciloscope-easy']);
};

MenuLinks.SolarCellHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Zahtevnejši način izvajanja – sončna celica');

    MenuLinks.ShowDivs(['solar-cell-hard']);
};

MenuLinks.SolarCellMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Srednje zahteven način izvajanja - sončna celica');

    MenuLinks.ShowDivs(['solar-cell-medium']);
};


MenuLinks.SolarCellEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Enostaven način izvajanja – sončna celica');

    MenuLinks.ShowDivs(['solar-cell-easy']);
};

MenuLinks.LightBulbHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Zahtevnejši način izvajanja – žarnica');

    MenuLinks.ShowDivs(['light-bulb-hard']);
};

MenuLinks.LightBulbMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Srednje težek način izvajanja – žarnica');

    MenuLinks.ShowDivs(['light-bulb-medium']);
};

MenuLinks.LightBulbEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Enostaven način izvajanja – žarnica');

    MenuLinks.ShowDivs(['light-bulb-easy']);
};

MenuLinks.CircuitElRemoteHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija');
    page_navigator.addLi('Zahtevnejši način izvajanja – Lastnosti elementov vezij (oddaljen eksperiment)');

    MenuLinks.ShowDivs(['circuit-el-remote-hard']);
};


MenuLinks.CircuitElRemoteMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija');
    page_navigator.addLi('Srednje zahteven način izvajanja – Lastnosti elementov vezij (oddaljen eksperiment)');

    MenuLinks.ShowDivs(['circuit-el-remote-medium']);
};


MenuLinks.CircuitElRemoteEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija');
    page_navigator.addLi('Enostaven način izvajanja – Lastnosti elementov vezij (oddaljen eksperiment)');

    MenuLinks.ShowDivs(['circuit-el-remote-easy']);
};


MenuLinks.CircuitElHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija2');
    page_navigator.addLi('Zahtevnejši način izvajanja – Lastnosti elementov vezij');

    MenuLinks.ShowDivs(['circuit-el-hard']);
};

MenuLinks.CircuitElMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija2');
    page_navigator.addLi('Srednje zahteven način izvajanja – Lastnosti elementov vezij');

    MenuLinks.ShowDivs(['circuit-el-medium']);
};

MenuLinks.CircuitElEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija2');
    page_navigator.addLi('Enostaven način izvajanja – Lastnosti elementov vezij');

    MenuLinks.ShowDivs(['circuit-el-easy']);
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

MenuLinks.Faq = function() {               /* HOME PAGE */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Pogosta vprašanja');

    MenuLinks.ShowDivs(['faq']);
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
            case 'lastnosti-elementov-vezij-aplikacija':
                MenuLinks.CircuitElRemote();
                break;
            case 'lastnosti-elementov-vezij-aplikacija2':
                MenuLinks.CircuitEl();
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
            case 'elementi-vezij-tezji':
                MenuLinks.CircuitElRemoteHard();
                break;
            case 'elementi-vezij-srednji':
                MenuLinks.CircuitElRemoteMedium();
                break;
            case 'elementi-vezij-lazji':
                MenuLinks.CircuitElRemoteEasy();
                break;
            case 'elementi-vezij-tezji-neoddaljen':
                MenuLinks.CircuitElHard();
                break;
            case 'elementi-vezij-srednji-neoddaljen':
                MenuLinks.CircuitElMedium();
                break;
            case 'elementi-vezij-lazji-neoddaljen':
                MenuLinks.CircuitElEasy();
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
            case 'pogosta-vprasanja':
                MenuLinks.Faq();
                break;
        }
    }

    $("#body").css("display", "block");
});
