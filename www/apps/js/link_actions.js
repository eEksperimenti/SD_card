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

MenuLinks.Template = function(fileName){
    var config = {};
    config.url = "template/"+fileName;
    config.type = "get";
    config.dataType = 'html';
    config.contentType = "text/html";
    config.processData = false;
    config.cache = false;
    config.success = function(html){
        $("#template").html(html);
        MenuLinks.Template.Success();
    };
    config.error = function(jqXHR, textStatus, errorThrown){
        alert(textStatus);
    };
    $.ajax(config);
};

/*
 KVIZI
1 ... El. naboj iin el. viri, kviz za OŠ
2 ... El. naboj iin el. viri, kviz za SŠ
3 ... Prevodniki in izolatorji, kviz za OŠ
4 ... Prevodniki in izolatorji, kviz za SŠ
5 ... El. tok, kviz
6 ... Napetost, kviz
7 ... Red pitaya -- zahteven način
8 ... Red pitaya -- srednje zahteven način
9 ... Red pitaya -- enostaven način
10 ... Osciloskop -- zahteven način
11 ... Osciloskop -- srednje zahteven način
12 ... Osciloskop -- enostaven način
13 ... Vklop žarnice -- zahteven način
14 ... Vklop žarnice -- srednje zahteven način
15 ... Vklop žarnice -- enostaven način
16 ... Sončna celica -- zahteven način
17 ... Sončna celica-- srednje zahteven način
18 ... Sončna celica -- enostaven način
19--22 ... Lastnosti elementov (neoddaljen) -- zahteven način1,2,3,4 naloga
23--26 ... Lastnosti elementov (neoddaljen)-- srednje zahteven način, 1,2,3,4 naloga
27--30 ... Lastnosti elementov (neoddaljen) -- enostaven način, 1,2,3,4 naloga

31 ... Lastnosti elementov (oddaljen) -- zahteven način
32 ... Lastnosti elementov (oddaljen)-- srednje zahteven način
33... Lastnosti elementov (oddaljen) -- enostaven način
34 ... Hitrost zvoka -- zahteven način
35 ... Hitrost zvoka -- srednje zahteven način
36 ... Hitrost zvoka -- enostaven način

 */

MenuLinks.Template.Success = function(){
    /* Osnovne razlage električnih pojmov -- kvizi */
    $(document).emc({ container : "quiz1", key: ["3","3","1"]});
    $(document).emc({ container : "quiz2", key: ["3","3","1","3","1","2","3","2"]});
    $(document).emc({ container : "quiz3", key: ["3","1","3","2"]});
    $(document).emc({ container : "quiz4", key: ["3","1","3","2","2","3","1"]});
    $(document).emc({ container : "quiz5", key: ["3","3","3","4","2","3","2"]});
    $(document).emc({ container : "quiz6", key: ["2","5","1","1","1","3"]});

    /* Red Pitaya -- kvizi */
    $(document).emc({ container : "quiz7", key: ["2","1","3","1","3","2", "3", "2", "1", "1", "2", "1", "1", "3", "2"]});
    $(document).emc({ container : "quiz8", key: ["2","1","3","1","3","2", "1", "1", "2", "1", "2", "1", "3", "2"]});
    $(document).emc({ container : "quiz9", key: ["2","1","2","3","2","1", "1", "2", "3", "3", "2", "3"]});

    /* Osciloskop */
    $(document).emc({ container : "quiz10", key: ["4","3","4","3","1","1", "3", "4", "2", "3", "3", "3", "4", "4", "2", "1"]}); <!-- Osciloskop - zahteven način -->
    $(document).emc({ container : "quiz11", key: ["4","3","1","1","2","3", "4", "4"]});  <!-- Osciloskop - srednje zahteven način -->
    $(document).emc({ container : "quiz12", key: ["4","3","4","1","1","3", "2", "3", "3", "4", "4", "2"]});  <!-- Osciloskop - enostaven način -->

    /* Vklop žarnice */
    $(document).emc({ container : "quiz13", key: ["3","2","2","2","4", "2", "2"]}); <!-- Vklop žarnice - zahteven način -->
    $(document).emc({ container : "quiz14", key: ["3","2","2","2","4", "2", "2"]}); <!-- Vklop žarnice - srednje zahteven način -->
    $(document).emc({ container : "quiz15", key: ["3","2","2","2","4", "2", "2"]}); <!-- Vklop žarnice - enostaven način -->

    /* Sončna celica */
    $(document).emc({ container : "quiz16", key: ["3", "2", "1", "2", "3", "3", "2", "4"]}); <!-- Sončna celica - zahteven način -->
    $(document).emc({ container : "quiz17", key: ["3", "2", "1", "2", "3", "3", "2", "4"]}); <!-- Sončna celica - srednje zahteven način -->
    $(document).emc({ container : "quiz18", key: ["3", "2", "1", "2", "3", "3", "2", "4"]}); <!-- Sončna celica - enostaven način -->

    /* Lastnosti elementov (neoddaljen eksperiment) */
    $(document).emc({ container : "quiz19", key: ["1","3","2","1","2"]}); <!-- Zahtevnejši način -- 1. naloga -->
    $(document).emc({ container : "quiz20", key: ["1","1","3","1","2", "1", "2", "1", "2", "1"]}); <!-- zahtevnejši način -- 2. naloga -->
    $(document).emc({ container : "quiz21", key: ["1","1","3","3","2", "3", "2", "3", "1", "2"]}); <!-- zahtevnejši način -- 3. naloga -->
    $(document).emc({ container : "quiz22", key: ["2","2","2","4","2", "2", "2", "1", "2"]}); <!-- zahtevnejši način -- 4. naloga -->

    $(document).emc({ container : "quiz23", key: ["1","3","2","1","2"]}); <!-- srednje zahteven način -- 1. naloga -->
    $(document).emc({ container : "quiz24", key: ["1","1","3","1","2", "1", "2", "1", "2", "1"]}); <!-- srednje zahteven način -- 2. naloga -->
    $(document).emc({ container : "quiz25", key: ["1","1","3","3","2", "3", "2", "3", "1", "2"]}); <!-- srednje zahteven način -- 3. naloga -->
    $(document).emc({ container : "quiz26", key: ["2","1","2","3","2", "2", "2", "1", "3"]}); <!-- srednje zahteven način -- 4. naloga -->

    $(document).emc({ container : "quiz27", key: ["1","3","2","1","2"]}); <!-- enostaven način -- 1. naloga -->
    $(document).emc({ container : "quiz28", key: ["1","1","3","1","2", "1", "2", "1", "2", "1"]}); <!-- enostaven način -- 2. naloga -->
    $(document).emc({ container : "quiz29", key: ["1","1","3","3","2", "3", "2", "3", "1", "2"]}); <!-- enostaven način -- 3. naloga -->
    $(document).emc({ container : "quiz30", key: ["2","1","2","3","2", "2", "2", "1", "3"]}); <!-- enostaven način -- 4. naloga -->




    /* Hitrost zvoka */
    $(document).emc({ container : "quiz34", key: ["3","2","1","1","2", "1", "1", "2"]}); <!-- zahteven način  -->
    $(document).emc({ container : "quiz35", key: ["3","2","1","1","2", "1", "1", "2"]}); <!-- srednje zahteven način  -->
    $(document).emc({ container : "quiz36", key: ["3","2","1","1","2", "1", "1", "2"]}); <!-- enostaven način  -->



    /* Lastnosti elementov (oddaljen eksperiment) ??? */

    function osciloscope_easy()  {
        window.location.replace( "http://" + window.location.host + "/scope+gen_difficulties/app.html#sl/#lahko");
    }

    function osciloscope_medium()  {
        window.location.replace( "http://" + window.location.host + "/scope+gen_difficulties/app.html#sl/#srednje");
    }

    function osciloscope_hard()  {
        window.location.replace( "http://" + window.location.host + "/scope+gen_difficulties/app.html#sl/#pametno");
    }
};

/* Show specific divs on a web pages */
MenuLinks.Home = function() {               /* HOME PAGE */
    page_navigator.clearAll();
    page_navigator.addLi('Domov');

    MenuLinks.Template("home.html");
};

MenuLinks.BasicExpressions = function() {               /* BASIC EXPRESSIONS */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Osnovni pojmi');

    MenuLinks.Template("basic-expressions.html");
};

MenuLinks.RedPitaya = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Red Pitaya');

    MenuLinks.Template("redpitaya.html");
};

MenuLinks.Experiments = function() {               /* EXPERIMENTS */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti');

    MenuLinks.Template("experiments.html");
};

MenuLinks.Sensors = function() {               /* SENSORS */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Uporaba senzorjev');

    MenuLinks.Template("sensors.html");
};

MenuLinks.OsciloscopeApp = function() {                      /* OSCILOSCOPE APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Osciloskop – aplikacija');

    MenuLinks.Template("osciloscope-desc.html");
};

MenuLinks.LightBulbApp = function() {                      /* LIGHT BULB APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Žarnica – aplikacija');

    MenuLinks.Template("light-bulb-desc.html");
};

MenuLinks.SolarCellApp = function() {                      /* SOLAR CELL APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Sončna celica – aplikacija');

    MenuLinks.Template("solar-cell-desc.html");
};

MenuLinks.CircuitElRemoteApp = function() {                      /* SPEED SOUND APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-oddaljen');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – aplikacija');

    MenuLinks.Template("circuit-el-remote-desc.html");
};

MenuLinks.CircuitElApp = function() {                      /* SOUND OF INSTRUMENTS APP */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-neoddaljen');
    page_navigator.addLi('Lastnosti elementov vezij – aplikacija');

    MenuLinks.Template("circuit-el-desc.html");
};


/* DESCRIPTION */

MenuLinks.Osciloscope = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis');

    MenuLinks.Template("osciloscope-desc.html");
};

MenuLinks.LightBulb = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis');

    MenuLinks.Template("light-bulb-desc.html");
};

MenuLinks.SolarCell = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis');

    MenuLinks.Template("solar-cell-desc.html");
};

MenuLinks.CircuitElRemote = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis');

    MenuLinks.Template("circuit-el-remote-desc.html");
};

MenuLinks.CircuitEl = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Lastnosti elementov vezij – opis');

    MenuLinks.Template("circuit-el-desc.html");
};

MenuLinks.SoundSpeed = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Hitrost zvoka');

    MenuLinks.Template("sound-speed-desc.html");
};

MenuLinks.AboutUs = function() {               /* ABOUT US */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('O nas');

    MenuLinks.Template("about-us.html");
};


/* HARD, MEDIUM, EASY */
MenuLinks.OsciloscopeHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Zahtevnejši način izvajanja – osciloskop');

    MenuLinks.Template("osciloscope-hard.html");
};

MenuLinks.OsciloscopeMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Srednje zahteven način izvajanja – osciloskop');

    MenuLinks.Template("osciloscope-medium.html");
};

MenuLinks.OsciloscopeEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Osciloskop – opis', 'index.html?page=osciloskop-aplikacija');
    page_navigator.addLi('Enostaven način izvajanja – osciloskop');

    MenuLinks.Template("osciloscope-easy.html");
};

MenuLinks.SolarCellHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Zahtevnejši način izvajanja – sončna celica');

    MenuLinks.Template("solar-cell-hard.html");
};

MenuLinks.SolarCellMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Srednje zahteven način izvajanja - sončna celica');

    MenuLinks.Template("solar-cell-medium.html");
};

MenuLinks.SolarCellEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Sončna celica – opis', 'index.html?page=soncna-celica-aplikacija');
    page_navigator.addLi('Enostaven način izvajanja – sončna celica');

    MenuLinks.Template("solar-cell-easy.html");
};

MenuLinks.LightBulbHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Zahtevnejši način izvajanja – žarnica');

    MenuLinks.Template("light-bulb-hard.html");
};

MenuLinks.LightBulbMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Srednje težek način izvajanja – žarnica');

    MenuLinks.Template("light-bulb-medium.html");
};

MenuLinks.LightBulbEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Enostaven način izvajanja – žarnica');

    MenuLinks.Template("light-bulb-easy.html");
};


MenuLinks.LightBulbExplanation = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Žarnica – opis', 'index.html?page=zarnica-aplikacija');
    page_navigator.addLi('Raylaga eksperimenta žarnica');

    MenuLinks.Template("light-bulb-explanation.html");
};




MenuLinks.CircuitElRemoteHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija-oddaljen');
    page_navigator.addLi('Zahtevnejši način izvajanja');

    MenuLinks.Template("circuit-el-remote-hard.html");
};


MenuLinks.CircuitElRemoteMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija-oddaljen');
    page_navigator.addLi('Srednje zahteven način izvajanja');

    MenuLinks.Template("circuit-el-remote-medium.html");
};


MenuLinks.CircuitElRemoteEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Oddaljen eksperiment: lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija-oddaljen');
    page_navigator.addLi('Enostaven način izvajanja');

    MenuLinks.Template("circuit-el-remote-easy.html");
};


MenuLinks.CircuitElHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija-neoddaljen');
    page_navigator.addLi('Zahtevnejši način izvajanja');

    MenuLinks.Template("circuit-el-hard.html");
};

MenuLinks.CircuitElMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija-neoddaljen');
    page_navigator.addLi('Srednje zahteven način izvajanja');

    MenuLinks.Template("circuit-el-medium.html");
};

MenuLinks.CircuitElEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Lastnosti elementov vezij – opis', 'index.html?page=lastnosti-elementov-vezij-aplikacija-neoddaljen');
    page_navigator.addLi('Enostaven način izvajanja');

    MenuLinks.Template("circuit-el-easy.html");
};

MenuLinks.SoundSpeedHard = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Hitrost zvoka – opis', 'index.html?page=hitrost-zvoka');
    page_navigator.addLi('Zahteven način izvajanja');

    MenuLinks.Template("sound-speed-hard.html");
};

MenuLinks.SoundSpeedMedium = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Hitrost zvoka – opis', 'index.html?page=hitrost-zvoka');
    page_navigator.addLi('Srednje zahteven način izvajanja');

    MenuLinks.Template("sound-speed-medium.html");
};

MenuLinks.SoundSpeedEasy = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Eksperimenti', 'index.html?page=eksperimenti');
    page_navigator.addLi('Hitrost zvoka – opis', 'index.html?page=hitrost-zvoka');
    page_navigator.addLi('Enostaven način izvajanja');

    MenuLinks.Template("sound-speed-easy.html");
};

MenuLinks.Team = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Ekipa');

    MenuLinks.Template("team.html");
};

MenuLinks.Press = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Za medije');

    MenuLinks.Template("press.html");
};

MenuLinks.Cooperation = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Želite sodelovati?');

    MenuLinks.Template("cooperation.html");
};

MenuLinks.Questionnaire = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Kratka anketa');

    MenuLinks.Template("questionnaire.html");
};

MenuLinks.LoginForm = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Prijava');

    MenuLinks.Template("login-form.html");
};


MenuLinks.Quiz = function() {
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Kviz');

    MenuLinks.Template("quiz.html");
};

MenuLinks.Faq = function() {               /* HOME PAGE */
    page_navigator.clearAll();
    page_navigator.addLi('Domov', 'index.html');
    page_navigator.addLi('Pogosta vprašanja');

    MenuLinks.Template("faq.html");
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
            case 'lastnosti-elementov-vezij-aplikacija-oddaljen':
                MenuLinks.CircuitElRemote();
                break;
            case 'lastnosti-elementov-vezij-aplikacija-neoddaljen':
                MenuLinks.CircuitEl();
                break;
            case 'hitrost-zvoka-aplikacija':
                MenuLinks.SoundSpeed();
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
            case 'zarnica-razlaga':
                MenuLinks.LightBulbExplanation();
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
            case 'hitrost-zvoka-tezji':
                MenuLinks.SoundSpeedHard();
                break;
            case 'hitrost-zvoka-srednji':
                MenuLinks.SoundSpeedMedium();
                break;
            case 'hitrost-zvoka-lazji':
                MenuLinks.SoundSpeedEasy();
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
