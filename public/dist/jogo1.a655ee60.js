// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/jogo1.js":[function(require,module,exports) {

var questao = document.getElementById("questao");
var button = document.getElementById('b1');
var button1 = document.getElementById('B1');
var parag = document.getElementsByClassName('parag');
var image = document.getElementById('image');
var alterna = document.getElementById('res');
var respos = document.querySelector("div.resposta");

var pergunta = ["Qual desses filósofos propôs a classificação das ciências em três grupos: Ciência da Imaginação (poesia), Ciência da Memória (História) e Ciência da Razão (Filosofia)?", "Quais dessas frases foram ditas por Francis Bacon?", "Bacon é considerado o pai do empirismo moderno por ter formulado os fundamentos dos métodos de análise e pesquisa da ciência moderna. Pois para ele:", "Como Emanuel Kant (1724-1804), entendia e defendia o conceito da beleza?", "Como Kant encara o ‘’Sentimento’’ e o ‘’ Prazer’’?", "O discurso sobre o Método é obra de qual filosofo?", "Para Descartes como era a sua base para a formação da Estética?", "Quais dessas frases são do filósofo René Descartes?Quais dessas frases são do filósofo René Descartes?", "quais?", "Quais dessas Obras são de David Hume?Quais dessas Obras são de David Hume?"];

var resposta = [["(A)Francis Bacon (1561-1626)", "(B)Immanuel Kant (1724-1804)", "(C)René Descartes (1596-1650)", "(D)David Hume (1711-1776)"], ["(A)Todas as alternativas.", "(B)A verdade aparece mais facilmente do erro do que da confusão.", "(C)As esposas são amantes dos homens mais novos, companheiras para os de meia-idade e amas para os idosos.", "A verdade aparece mais facilmente do erro do que da confusão."], ["(A)O empirismo é a escola do pensamento filosófico relacionada à teoria do conhecimento.", "(B)A obtenção dos fatos verdadeiros se dava através da observação e experimentação.", "(C)A questão de como é possível o conhecimento afirmando o papel constitutivo de mundo pelo sujeito transcendental.", "(D)Todo o conhecimento tem origem na experiência, sendo os dados ou impressões sensíveis as suas unidades básicas."], ["(A)Uma dimensão objetiva.", "(B)objetiva", "(C)Todas estão corretas.", "(D)É subjetiva."], ["(A)É conhecimento.", "(B)Algo especifico e particular.", "(C)Acompanha a intuição.", "(D)Nenhuma das alternativas."], ["(A)John Locke (1632-1704)", "(B)Aristóteles (384 a.C.-322 a.C.)", "(C)René Descartes (1596-1650)", "(D)Francis Bacon (1561-1626)"], ["(A)Todas as alternativas.", "(B)É para estabelecer uma relação entre o método, a formação do gosto e os fundamentos da estética, que serão encontrados posteriormente como disciplina do conhecimento.", "(C)É a ideia de beleza, e sua consequente fruição estética, vário conforme as transformações das sociedades humanas no tempo.", "(D)É para determinarmos que algo é belo precisamos de uma coincidência entre o juízo e os sentimento, todo olhar racional pode sentir."], ["(A)O primeiro passo para o bem é não fazer o mal.", "(B)Sábio é aquele que conhece os limites da própria ignorância.", "(C)Tente mover o mundo o primeiro passo será mover a si mesmo.", "(D)Não há nada no mundo que esteja melhor repartido do que a razão: todos estão convencidos de que a tem de sobra."], ["(A)David Hume (1711-1776)", "(B)Immanuel Kant (1724-1804)", "(C)Francis Bacon (1561-1626)", "(D)René Descartes (1596-1650)"], ["(A)Afirmações extraordinárias necessitam de provas extraordinárias.", "(B)Muitas vezes as coisas que me pareceram verdadeiras quando comecei a concebê-las tornaram-se falsas quando quis coloca-las sobre o papel.", "(C)’’Não somos ricos pelo que temos e sim pelo que não precisamos ter.", "(D)’’A verdade aparece mais facilmente do erro do que da confusão’’."]];
var gabarito = ["(A)Francis Bacon (1561-1626)", "(A)Todas as alternativas.", "(B)A obtenção dos fatos verdadeiros se dava através da observação e experimentação.", "(D)É subjetiva.", "(B)Algo especifico e particular.", "(C)René Descartes (1596-1650)", "(B)A obtenção dos fatos verdadeiros se dava através da observação e experimentação.", "(D)Não há nada no mundo que esteja melhor repartido do que a razão: todos estão convencidos de que a tem de sobra.", "(A)David Hume (1711-1776)", "(A)Afirmações extraordinárias necessitam de provas extraordinárias."];
var fotos = ["'http://www.afilosofia.com.br/media/images/filosofia-da-educa%C3%A7%C3%A3o.png'", "'https://metaeticasite.files.wordpress.com/2017/07/filosofia.jpg?w=1108'", "'https://metaeticasite.files.wordpress.com/2017/07/filosofia.jpg?w=1108'", "'https://metaeticasite.files.wordpress.com/2017/07/filosofia.jpg?w=1108'", "'https://metaeticasite.files.wordpress.com/2017/07/filosofia.jpg?w=1108'", "'https://metaeticasite.files.wordpress.com/2017/07/filosofia.jpg?w=1108'", "'https://metaeticasite.files.wordpress.com/2017/07/filosofia.jpg?w=1108'", "'https://metaeticasite.files.wordpress.com/2017/07/filosofia.jpg?w=1108'", "'https://metaeticasite.files.wordpress.com/2017/07/filosofia.jpg?w=1108'", "'https://metaeticasite.files.wordpress.com/2017/07/filosofia.jpg?w=1108'"];
var aux = 0;
var ctd = 0;
this.pontos = 0;
button1.addEventListener("click", function (e) {
    e.preventDefault();
    image.style.backgroundImage = "none";
    alterna.style.display = "block";
    document.getElementById('parag').innerHTML = "Acertos:" + this.pontos;
    for (var i = 1; i <= 4; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b' + i);
        button.textContent = resposta[aux][i - 1];
    }
});
respos.addEventListener('click', clicou);
function clicou(event) {
    if (event.target.tagName === 'BUTTON') {
        var x = document.querySelector('div#image');
        x.style.backgroundImage = 'url(' + fotos[aux] + ')';
    }
    if (event.target.textContent == gabarito[ctd]) {
        document.getElementById('parag').innerHTML = "pontos: " + this.pontos;
        this.pontos++;
        for (var i = 1; i <= 4; i++) {
            var _button = document.getElementById('b' + i);
            _button.textContent = resposta[aux][i - 1];
            document.getElementById('questao').innerHTML = pergunta[aux];
        }
        console.log("acertei");
        ctd++;
        aux++;
        console.log("ctd" + ctd);
        console.log("aux" + aux);
        muda();
    } else {
        aux++;
        muda();
    }
    if (aux === pergunta.length) {
        fim();
    }
}

function fim() {
    ctd = 0;
    tem = 0;
    muda();
    alert("Fim\n Seu numero de acertos foi " + this.pontos + " pontos");
    this.pontos = 0;
}
function muda() {
    document.getElementById('parag').innerHTML = "Acertos" + this.pontos;
    for (var i = 1; i <= 4; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b' + i);
        button.textContent = resposta[aux][i - 1];
    }
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '41411' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/jogo1.js"], null)
//# sourceMappingURL=/jogo1.a655ee60.map