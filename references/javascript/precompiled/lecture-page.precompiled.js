(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lecture-page'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div id=\"chapter"
    + alias4(((helper = (helper = lookupProperty(helpers,"chapter") || (depth0 != null ? lookupProperty(depth0,"chapter") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chapter","hash":{},"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":31}}}) : helper)))
    + "\" class=\"lecture\">\r\n        <div class=\"head\">\r\n            <h2>Chapter "
    + alias4(((helper = (helper = lookupProperty(helpers,"chapter") || (depth0 != null ? lookupProperty(depth0,"chapter") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chapter","hash":{},"data":data,"loc":{"start":{"line":4,"column":24},"end":{"line":4,"column":35}}}) : helper)))
    + " - "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":38},"end":{"line":4,"column":47}}}) : helper)))
    + "</h2>\r\n             <h2 class=\"timestamp\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"timeStamp") || (depth0 != null ? lookupProperty(depth0,"timeStamp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"timeStamp","hash":{},"data":data,"loc":{"start":{"line":5,"column":35},"end":{"line":5,"column":48}}}) : helper)))
    + "</h2>\r\n        </div>\r\n        \r\n        <div class=\"video\">\r\n             <iframe src="
    + alias4(((helper = (helper = lookupProperty(helpers,"videoSrc") || (depth0 != null ? lookupProperty(depth0,"videoSrc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoSrc","hash":{},"data":data,"loc":{"start":{"line":9,"column":25},"end":{"line":9,"column":37}}}) : helper)))
    + " frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n        </div>\r\n\r\n        <p class=\"description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":12,"column":31},"end":{"line":12,"column":46}}}) : helper)))
    + "</p>\r\n\r\n        <footer>\r\n            <div class=\"redirect\">\r\n                <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"prev") : depth0)) != null ? lookupProperty(stack1,"page") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":19,"column":27}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"prev") : depth0)) != null ? lookupProperty(stack1,"chapter") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":20},"end":{"line":23,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n                \r\n                <div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"next") : depth0)) != null ? lookupProperty(stack1,"chapter") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":29,"column":27}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"next") : depth0)) != null ? lookupProperty(stack1,"page") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":20},"end":{"line":33,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n            <p>&copy; 2012-2013 HOA Academy</p>\r\n        </footer>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"../page"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"prev") : depth0)) != null ? lookupProperty(stack1,"page") : stack1), depth0))
    + "\" title=\"Previous Page\"><span class=\"nav-arrow\">&#171;</span> Previous Page</a>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"#chapter"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"prev") : depth0)) != null ? lookupProperty(stack1,"chapter") : stack1), depth0))
    + "\" title=\"Previous\"><span class=\"nav-arrow\">&#8249;</span> Previous Chapter</a>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"#chapter"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"next") : depth0)) != null ? lookupProperty(stack1,"chapter") : stack1), depth0))
    + "\" title=\"Next\">Next Chapter <span class=\"nav-arrow\">&#8250;</span></a>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <a href=\"../page"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"next") : depth0)) != null ? lookupProperty(stack1,"page") : stack1), depth0))
    + "\" title=\"Next Page\">Next Page <span class=\"nav-arrow\">&#187;</span></a>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"lectures") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":39,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();