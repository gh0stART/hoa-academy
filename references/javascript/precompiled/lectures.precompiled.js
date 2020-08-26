(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lectures'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"lecture\">\r\n        <a href=\"./lecture/page"
    + alias4(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":39}}}) : helper)))
    + "/#chapter"
    + alias4(((helper = (helper = lookupProperty(helpers,"chapter") || (depth0 != null ? lookupProperty(depth0,"chapter") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chapter","hash":{},"data":data,"loc":{"start":{"line":4,"column":48},"end":{"line":4,"column":59}}}) : helper)))
    + "\">\r\n            <h4>Chapter "
    + alias4(((helper = (helper = lookupProperty(helpers,"chapter") || (depth0 != null ? lookupProperty(depth0,"chapter") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chapter","hash":{},"data":data,"loc":{"start":{"line":5,"column":24},"end":{"line":5,"column":35}}}) : helper)))
    + "</h4>\r\n            <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":15},"end":{"line":6,"column":24}}}) : helper)))
    + "</p>\r\n        </a>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"lectures") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":9,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();