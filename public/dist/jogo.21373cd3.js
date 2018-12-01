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
})({"js/jogo.js":[function(require,module,exports) {
var questao = document.getElementById('questao');
var db = firebase.database();
var form = document.getElementById('nickform');
var divChat = document.querySelector('div.chat');

var button = document.getElementById('b1');
var parag = document.getElementsByClassName('parag');

var pergunta = [" Considere as afirmações abaixo: I. O cubo de 0,2 é 0,8. II.   Um quadrado de área 0,36 cm² tem o perímetro igual a 2,4cm.   III. O valor da expressão  ³√0125 + 3 *0,5 é igual a 2.   Então: ", " Isadora tem um bambolê, brinquedo no formato de uma circunferência de 1,6 m de raio. Para Isadora, esse tamanho é inadequado: ela quer cortar o bambolê, para que ele fique com 75% do tamanho original. Nessas condições, quanto do comprimento inicial do bambolê deverá ser retirado?", "Os alunos do 9° ano da escola “Perseverança” deveriam contribuir com quantias iguais a fim de arrecadar R$ 15.000,00 para as solenidades de formatura. Entretanto, dez deles deixaram de fazê-lo, ocasionando para cada um dos demais um acréscimo de R$ 50,00 nas respectivas contribuições. Contribuíram efetivamente: ", ". De acordo com o paralelogramo ABCD,sendo E o ponto de intersecção das diagonais AC e BD, temos as seguintes medidas: AE = 4x, DE = 5x,BE  = 12 + 2y e CE =  15 + 7y . Os valores de x e de y são,respectivamente:", "Uma escada é feita pregando tábuas pequenas para os degraus e duas tábuas compridas para as laterais, como mostra a figura 2. Para pregar as tábuas, foram usados os pregos A, B, C, D, E, F, G e H. Sabendo que a distância entre os pregos B e D é de 25 cm, entre D e F é de 35 cm, entre F e H é de 20 cm, entre E e G é de 24 cm e que os dois degraus de cima são paralelos, determine a que distância, em cm, deve estar o prego G do prego A, para que os degraus fiquem paralelos entre si:", ". Uma artesã dispõe de uma folha retangular de cartolina com dimensões 20 cm por 25 cm e precisa recortar retângulos com as dimensões 3 cm por 4 cm. O número máximo possível de retângulos com essas dimensões é", ". Na primeira hora da tarde, uma pessoa conta um segredo para sua amiga. Na segunda hora da tarde, a amiga conta para mais três amigas.Cada uma dessas três amigas conta o segredo para outras três amigas diferentes, durante a terceira hora da tarde. E assim se sucede até o final da sétima hora da tarde. Quantas pessoas ficaram sabendo do segredo da pessoa inicial até o final da sétima hora da tarde?", "Um parque tem 6 brinquedos individuais, mas somente 2/3 da sua capacidade total estão funcionando perfeitamente este mês (considerar o mês de 28 dias). Cada brinquedo individual funciona 5 horas por dia, durante 7 dias na semana, com 2 voltas por hora, e o ingresso é de R$ 3,25 por volta. As despesas com esses brinquedos são de R$ 1.745,00 por mês, contemplando salários dos funcionários, eletricidade, etc. Qual é o lucro exato do proprietário do parque com esses brinquedos neste mês?", "Um retângulo que teve 40% de sua largura aumentada e 35% de seu comprimento reduzido apresenta, em relação à área do retângulo inicial,", "Uma empresa A cobra R$ 80,00 por um determinado produto, mais uma taxa mensal de R$ 20,00 para manutenção. Uma empresa B cobra R$ 120,00 pelo mesmo produto, mais a taxa mensal de R$ 12,00 para manutenção. A empresa B será mais vantajosa que a A:"];

var resposta = [["a) Somente a afirmação II está correta.", "b) Somente as afirmações I e II estão corretas.", "c) Somente as afirmações I e III estão corretas.", "d) Somente as afirmações II e III estão corretas.", "e) Todas as afirmações estão corretas."], ["a) 2,4π m", "b) 1,2π m", "c) 0,8 m", "d) 1,2 m", "e) 0,8π m "], ["a) 60 pessoas", "b) 55 pessoas", "c) 50 pessoas", "d) 10 pessoas", "e) 65 pessoas "], ["a) 8,5 e 10", "b) 10 e 8,5", "c)  1 e 2", "d) 2 e1", "e) 10,5 e 8"], ["a) 80", "b) 60", "c) 96", "d) 72", "e) 84"], ["(A) 36", "(B) 40", "(C) 41", "(D) 42", "(E) 45"], ["(A) 234", "(B) 729", "(C) 730", "(D) 1.093", "(E) 2.187"], ["(A) R$ 1.895,00", "(B) R$ 2.085,00", "(C) R$ 2.350,00", "(D) R$ 3.640,00", "(E) R$ 6.295,00"], ["(A) aumento de 9%.", "(B) redução de 5%.", "(C) redução de 9%.", "(D) aumento de 19%.", "(E) igualdade de áreas."], ["(A) a partir do 4° mês.", "(B) a partir do 5° mês.", "(C) a partir do 7° mês.", "(D) a partir do 10° mês.", "(E) sempre."]];

var gabarito = ["d) Somente as afirmações II e III estão corretas.", "e) 0,8π m ", "c) 50 pessoas", "d) 2 e1", "c) 96", "(C) 41", "(D) 1.093", "(A) R$ 1.895,00", "(C) redução de 9%.", "(B) a partir do 5° mês."];
var aux = 0;
var ctd = 0;
var pontos = 0;

document.getElementById('parag').innerHTML = "Pontos:" + pontos;
for (var i = 1; i <= 5; i++) {
    document.getElementById('questao').innerHTML = pergunta[aux];
    button = document.getElementById('b' + i);
    button.textContent = resposta[aux][i - 1];
}
function clicou() {
    console.log(event.target.textContent);
    console.log(gabarito[ctd]);
    if (event.target.textContent == gabarito[ctd]) {
        document.getElementById('parag').innerHTML = "pontos: " + pontos;
        if (aux == pergunta.length) {
            return fim();
        } else {
            pontos++;
            for (var _i = 1; _i <= 5; _i++) {
                var _button = document.getElementById('b' + _i);
                _button.textContent = resposta[aux][_i - 1];
                document.getElementById('questao').innerHTML = pergunta[aux];
            }
            console.log("acertei");
            ctd++;
            aux++;
            console.log("ctd" + ctd);
            console.log("aux" + aux);
            muda();
        }
    } else {
        fim();
    }
}

function fim() {
    aux = 0;
    ctd = 0;
    tem = 0;
    pontos = 0;
    muda();
    alert("Fim de Jogo\n Sua pontuação foi " + pontos + " pontos");
    pontos = 0;
}
function muda() {
    document.getElementById('parag').innerHTML = "Pontos:" + pontos;
    for (var _i2 = 1; _i2 <= 5; _i2++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b' + _i2);
        button.textContent = resposta[aux][_i2 - 1];
    }
}
function clicouConcluido() {
    var nickname = document.getElementById("nickname").value;
    this.name = nickname;
    document.getElementById("ocultanick").style.display = "none";
    document.getElementById("ocultachat").style.display = "block";
}
function limpa() {
    divChat.innerHTML = "";
}
form.addEventListener('submit', function (e) {
    this.chatComent = document.getElementById("chatComent").value;
    db.ref('/chat').push({
        nickname: this.nickname.value,
        chatcoment: this.chatComent.value
    });
    e.preventDefault();
});

db.ref('/chat').on('child_added', function (chat) {
    var pNick = document.createElement('p');
    var pChat = document.createElement('p');
    pNick.textContent = chat.val().nickname + ": " + chat.val().chatcoment;
    divChat.appendChild(pNick);
});
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/jogo.js"], null)
//# sourceMappingURL=/jogo.21373cd3.map