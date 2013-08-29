angular-directive-example
===

1. npm install
2. npm start
3. http://127.0.0.1:4001/
4. change input values and be amazed!

Ok, how it works -

In public/index.html, three inlined templates are declared

    viewTemplate.html - the main angular template used by ng-view. A contrived example that dynamically generates the view from a $scope variable named templateStr.
    directive_one.html - templates used by a directive separating the models and the view
    directive_two.html
    
The controller 'Ctrl' creates three scoped objects

    obj - sample object for two way databinding
    parentTest - simple string used for two way databinding
    templateSrc - string containing angular html/markup dynamiclly 'compiled' and injected into the main view template
    
app.sampleInputDirective(src) defines the directive configuration used by the two sample directives

    if the src string passed in ends in .html, this function assumes that src is a template id, if it does not then its assumed to be markup to be uesd as the template.
    
two app.directves are defined

    calls sampleInputDirective linking the directive to the template.
    
And thats it, simple stuff.

===

THINGS TO NOTE!!!!!

1. directive names must be lowercase, no camel case names, took me forever to figure this out.
2. directive scope objects MUST be true ;) heh '=' for databinding, '@' for passing the string value of the attribute, '&' for evaluating the attribute as a function.
3. the compile directive example is here just to make this example confusing, and to show how to use compile ;)

