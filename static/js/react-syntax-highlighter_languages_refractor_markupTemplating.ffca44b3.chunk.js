"use strict";(self.webpackChunkreact_season_component_web=self.webpackChunkreact_season_component_web||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,s=c.length;-1!==t.code.indexOf(o=n(a,s));)++s;return c[s]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(s){for(var u=0;u<s.length&&!(o>=r.length);u++){var i=s[u];if("string"===typeof i||i.content&&"string"===typeof i.content){var p=r[o],l=t.tokenStack[p],g="string"===typeof i?i:i.content,f=n(a,p),k=g.indexOf(f);if(k>-1){++o;var m=g.substring(0,k),h=new e.Token(a,e.tokenize(l,t.grammar),"language-"+a,l),_=g.substring(k+f.length),d=[];m&&d.push.apply(d,c([m])),d.push(h),_&&d.push.apply(d,c([_])),"string"===typeof i?s.splice.apply(s,[u,1].concat(d)):i.content=d}}else i.content&&c(i.content)}return s}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.ffca44b3.chunk.js.map