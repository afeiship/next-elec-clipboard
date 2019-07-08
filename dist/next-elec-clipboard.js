/*!
 * name: next-elec-clipboard
 * url: https://github.com/afeiship/next-elec-clipboard
 * version: 1.0.0
 * date: 2019-07-08T14:31:49.001Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var clipboard = require('electron-clipboard-extended');

  var NxElecClipboard = nx.declare('nx.ElecClipboard', {
    properties: {
      text: {
        get: function() {
          return clipboard.readText();
        },
        set: function(inValue) {
          clipboard.writeText(inValue);
        }
      },
      image: {
        get: function() {
          return clipboard.readImage();
        },
        set: function(inValue) {
          clipboard.writeImage(inValue);
        }
      },
      filepath: function() {
        return clipboard.read('public.file-url').replace('file://', '');
      }
    },
    methods: {
      on: function(inName, inCallback) {
        clipboard.on(inName, inCallback).startWatching();
        return {
          destroy: function() {
            clipboard.stopWatching();
          }
        };
      },
      clear: function() {
        clipboard.clear();
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxElecClipboard;
  }
})();

//# sourceMappingURL=next-elec-clipboard.js.map
