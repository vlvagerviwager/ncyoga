// TODO: add a listener to listen to which nav link is clicked on

var source   = $("#main-template").html();
var template = Handlebars.compile(source);

var data = {
    intro : [
    '<section id="intro" class="intro-section">'
    '    <div class="container">'
    '        <div class="row">'
    '            <div class="col-lg-12">'
    '                <img src="./img/padmasana.PNG" class="img-responsive" id="main-img" height="600" width="600" align="middle" alt="ncyoga - Padmasana">'
    '                <h1>I\'m a yoga teacher trainee based in Dublin!</h1>'
    '                <p><i>This site is currently under construction. Please excuse my appearance!</i><p>'
    '          </div>'
    '       </div>'
    '    </div>'
    '</section>'
    ],
    classes : [
    '<section id="classes" class="classes-section">'
    '    <div class="container">'
    '        <div class="row">'
    '            <div class="col-lg-12">'
    '                <h1>Classes</h1>'
    '                <p>None yet :(</p>'
    '            </div>'
    '        </div>'
    '    </div>'
    '</section>'
    ]
};

$("#content-target").html(template(data));