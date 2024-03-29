/*! screenlog - v0.3.0 - 2019-01-25
* https://github.com/chinchang/screenlog.js
* Copyright (c) 2019 Kushagra Gour; Licensed  */

(function() {
  var logEl,
  	updates = {},
    isInitialized = false,
    _console = {}; // backup console obj to contain references of overridden fns.
  _options = {
    bgColor: "black",
    logColor: "lightgreen",
    infoColor: "lightblue",
    warnColor: "orange",
    errorColor: "red",
    fontSize: "1em",
    freeConsole: false,
    css: "",
    autoScroll: true
  };

  function createElement(tag, css) {
    var element = document.createElement(tag);
    element.style.cssText = css;
    return element;
  }

  function createPanel() {
    var div = createElement(
      "div",
      "font-family:Helvetica,Arial,sans-serif;font-size:" +
        _options.fontSize +
        ";padding:5px;text-align:left;opacity:0.8;right:0;top:0;min-width:20vw;overflow:auto;background:" +
        _options.bgColor +
        ";" + 
        _options.css
    );
    return div;
  }

  function genericLogger(color) {
    return function() {
      var el = createElement(
        "div",
        "line-height:1.7em;min-height:1.7em;background:" +
          (logEl.children.length % 2 ? "rgba(255,255,255,0.1)" : "") +
          ";color:" +
          color
      ); // zebra lines
      var val = [].slice.call(arguments).reduce(function(prev, arg) {
        return (
          prev + " " + (typeof arg === "object" ? JSON.stringify(arg) : arg)
        );
      }, "");
      el.textContent = val;

      logEl.appendChild(el);

      // Scroll to last element, if autoScroll option is set.
      if (_options.autoScroll) {
        logEl.scrollTop = logEl.scrollHeight - logEl.clientHeight;
      }
    };
  }

  function clear() {
    logEl.innerHTML = "";
  }

  function update(label, output) {
    if(updates[label]){
    	var el = document.getElementById("console_update_id_" + label);
    	el.textContent = label + " " + output;
    } else {
      
    	var el = createElement(
        "div",
        "line-height:1.7em;min-height:1.7em;background:" +
          (logEl.children.length % 2 ? "rgba(255,255,255,0.1)" : "") +
          ";color:" +
          "lightgreen"
      ); // zebra lines
      el.textContent = label + " " + output;
      el.id = "console_update_id_" + label;
      logEl.appendChild(el);
      updates[label] = output;
      // Scroll to last element, if autoScroll option is set.
      if (_options.autoScroll) {
        logEl.scrollTop = logEl.scrollHeight - logEl.clientHeight;
      }
    }
  }

  function log() {
    return genericLogger(_options.logColor).apply(null, arguments);
  }

  function info() {
    return genericLogger(_options.infoColor).apply(null, arguments);
  }

  function warn() {
    return genericLogger(_options.warnColor).apply(null, arguments);
  }

  function error() {
    return genericLogger(_options.errorColor).apply(null, arguments);
  }

  function setOptions(options) {
    for (var i in options)
      if (options.hasOwnProperty(i) && _options.hasOwnProperty(i)) {
        _options[i] = options[i];
      }
  }

  function init(options) {
    if (isInitialized) {
      return;
    }

    isInitialized = true;

    // Create our stylesheet
    var style = document.createElement('style');
style.innerHTML =
  '.default-bg,.secondary-bg{background-color:#b0bec5}.primary-bg{background-color:#01579b}.info-bg{background-color:#039be5}.success-bg{background-color:#2e7d32}.warning-bg{background-color:#f57f17}.danger-bg{background-color:#dd2c00}.light-bg{background-color:#e0e0e0}.dark-bg{background-color:#263238}.jsPanel{border:0;box-sizing:border-box;vertical-align:baseline;font-family:Roboto,"Open Sans",Lato,"Helvetica Neue",Arial,sans-serif;font-weight:400;display:flex;flex-direction:column;opacity:0;overflow:visible;position:absolute;top:0;z-index:100}.jsPanel .jsPanel-hdr{border:0;box-sizing:border-box;vertical-align:baseline;font-family:Roboto,"Open Sans",Lato,"Helvetica Neue",Arial,sans-serif;font-weight:400;display:flex;flex-direction:column;flex-shrink:0}.jsPanel .jsPanel-content{border:0;box-sizing:border-box;vertical-align:baseline;font-family:Roboto,"Open Sans",Lato,"Helvetica Neue",Arial,sans-serif;font-weight:400;background:#fff;color:#000;font-size:1rem;position:relative;overflow-x:hidden;overflow-y:auto;flex-grow:1}.jsPanel .jsPanel-content pre{color:inherit}.jsPanel .jsPanel-ftr{flex-direction:row;justify-content:flex-end;flex-wrap:nowrap;align-items:center;border-top:1px solid #e0e0e0;display:none;box-sizing:border-box;font-size:1rem;height:auto;background:#f5f5f5;font-weight:400;color:#000;overflow:hidden}.jsPanel .jsPanel-ftr.active{display:flex;flex-shrink:0;margin:0;padding:0 8px}.jsPanel .jsPanel-ftr.active i,.jsPanel .jsPanel-ftr.active span,.jsPanel .jsPanel-ftr.active strong,.jsPanel .jsPanel-ftr.active>p{margin:0;padding:3px 0}.jsPanel-hdr.jsPanel-hdr-dark .jsPanel-btn:hover{background-color:rgba(255,255,255,.4)}.jsPanel-hdr.jsPanel-hdr-light .jsPanel-btn:hover{background-color:rgba(0,0,0,.15)}.jsPanel-hdr-toolbar{font-size:1rem}.jsPanel-headerbar{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center}.jsPanel-headerbar img{vertical-align:middle;max-height:38px}.jsPanel-titlebar{display:flex;align-items:center;font-size:1rem;flex:1 1 0px;cursor:move;height:100%;overflow:hidden}.jsPanel-titlebar .jsPanel-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant:small-caps;font-weight:400;margin:0 5px 0 8px;min-width:0}.jsPanel-titlebar .jsPanel-title small{font-size:70%;color:inherit}.jsPanel-titlebar.jsPanel-rtl{flex-direction:row-reverse}.jsPanel-controlbar{display:flex;align-items:center;touch-action:none;margin:3px}.jsPanel-controlbar .jsPanel-btn{cursor:pointer;touch-action:none;border-radius:3px}.jsPanel-controlbar .jsPanel-btn i,.jsPanel-controlbar .jsPanel-btn span,.jsPanel-controlbar .jsPanel-btn svg.jsPanel-icon{vertical-align:middle}.jsPanel-controlbar .jsPanel-btn span.glyphicon{padding:0 2px}.jsPanel-controlbar .jsPanel-btn svg.svg-inline--fa{margin:4px 4px 0 4px}.jsPanel-controlbar .jsPanel-btn-normalize,.jsPanel-controlbar .jsPanel-btn-smallifyrev{display:none}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xl span:not(.material-icons),.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xl svg:not(.svg-inline--fa){width:2.4rem;height:2.4rem;padding:3px}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xl .svg-inline--fa{font-size:2rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xl span.material-icons{font-size:2.2rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xl span[class^=fa]{width:auto;height:auto;font-size:2rem;margin:0 4px}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-lg span:not(.material-icons),.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-lg svg:not(.svg-inline--fa){width:2.2rem;height:2.2rem;padding:5px}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-lg .svg-inline--fa{font-size:1.75rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-lg span.material-icons{font-size:1.9rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-lg span[class^=fa]{width:auto;height:auto;font-size:1.75rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-md span:not(.material-icons),.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-md svg:not(.svg-inline--fa){width:2rem;height:2rem;padding:5px}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-md .svg-inline--fa{font-size:1.5rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-md span.material-icons{font-size:1.6rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-md span[class^=fa]{width:auto;height:auto;font-size:1.5rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-sm span:not(.material-icons),.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-sm svg:not(.svg-inline--fa){width:1.7rem;height:1.7rem;padding:5px}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-sm .svg-inline--fa{font-size:1.25rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-sm span.material-icons{font-size:1.3rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-sm span[class^=fa]{width:auto;height:auto;font-size:1.25rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xs span:not(.material-icons),.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xs svg:not(.svg-inline--fa){width:1.4rem;height:1.4rem;padding:3px 5px 5px}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xs .svg-inline--fa{font-size:1rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xs span.material-icons{font-size:1rem}.jsPanel-controlbar .jsPanel-btn.jsPanel-btn-xs span[class^=fa]{width:auto;height:auto;font-size:1rem}.jsPanel-hdr-toolbar{display:none;width:auto;height:auto}.jsPanel-hdr-toolbar.active{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;padding:0 8px}.jsPanel-hdr-toolbar.active i,.jsPanel-hdr-toolbar.active span,.jsPanel-hdr-toolbar.active strong,.jsPanel-hdr-toolbar.active>p{margin:0;padding:3px 0}.jsPanel-titlebar .jsPanel-title[dir=rtl]{margin:0 8px 0 5px}.jsPanel-hdr-toolbar[dir=rtl].active{padding:0 8px 0 8px}.jsPanel-content[dir=rtl]{text-align:right}.jsPanel-ftr[dir=rtl]{flex-direction:row}#jsPanel-replacement-container,.jsPanel-minimized-box,.jsPanel-minimized-container{display:flex;flex-flow:row wrap-reverse;background:transparent none repeat scroll 0 0;bottom:0;height:auto;left:0;position:fixed;width:auto;z-index:9998}#jsPanel-replacement-container .jsPanel-replacement,.jsPanel-minimized-box .jsPanel-replacement,.jsPanel-minimized-container .jsPanel-replacement{font-family:Roboto,"Open Sans",Lato,"Helvetica Neue",Arial,sans-serif;display:flex;align-items:center;width:200px;height:36px;margin:1px 1px 0 0;z-index:9999}#jsPanel-replacement-container .jsPanel-replacement .jsPanel-hdr,.jsPanel-minimized-box .jsPanel-replacement .jsPanel-hdr,.jsPanel-minimized-container .jsPanel-replacement .jsPanel-hdr{flex-grow:1;min-width:0;padding:0}#jsPanel-replacement-container .jsPanel-replacement .jsPanel-hdr .jsPanel-headerlogo,.jsPanel-minimized-box .jsPanel-replacement .jsPanel-hdr .jsPanel-headerlogo,.jsPanel-minimized-container .jsPanel-replacement .jsPanel-hdr .jsPanel-headerlogo{max-width:50%;overflow:hidden}#jsPanel-replacement-container .jsPanel-replacement .jsPanel-hdr .jsPanel-headerlogo img,.jsPanel-minimized-box .jsPanel-replacement .jsPanel-hdr .jsPanel-headerlogo img,.jsPanel-minimized-container .jsPanel-replacement .jsPanel-hdr .jsPanel-headerlogo img{max-width:100px;max-height:38px}#jsPanel-replacement-container .jsPanel-replacement .jsPanel-titlebar,.jsPanel-minimized-box .jsPanel-replacement .jsPanel-titlebar,.jsPanel-minimized-container .jsPanel-replacement .jsPanel-titlebar{cursor:default;min-width:0}#jsPanel-replacement-container .jsPanel-replacement .jsPanel-btn.jsPanel-btn-normalize,.jsPanel-minimized-box .jsPanel-replacement .jsPanel-btn.jsPanel-btn-normalize,.jsPanel-minimized-container .jsPanel-replacement .jsPanel-btn.jsPanel-btn-normalize{display:block}.jsPanel-minimized-box,.jsPanel-minimized-container{position:absolute;width:100%;overflow:hidden}.flexOne{display:flex;flex-flow:row wrap}.jsPanel-resizeit-handle{display:block;font-size:.1px;position:absolute;touch-action:none}.jsPanel-resizeit-handle.jsPanel-resizeit-n{cursor:n-resize;height:12px;left:9px;top:-5px;width:calc(100% - 18px)}.jsPanel-resizeit-handle.jsPanel-resizeit-e{cursor:e-resize;height:calc(100% - 18px);right:-9px;top:9px;width:12px}.jsPanel-resizeit-handle.jsPanel-resizeit-s{bottom:-9px;cursor:s-resize;height:12px;left:9px;width:calc(100% - 18px)}.jsPanel-resizeit-handle.jsPanel-resizeit-w{cursor:w-resize;height:calc(100% - 18px);left:-9px;top:9px;width:12px}.jsPanel-resizeit-handle.jsPanel-resizeit-ne{cursor:ne-resize;height:18px;right:-9px;top:-9px;width:18px}.jsPanel-resizeit-handle.jsPanel-resizeit-se{bottom:-9px;cursor:se-resize;height:18px;right:-9px;width:18px}.jsPanel-resizeit-handle.jsPanel-resizeit-sw{bottom:-9px;cursor:sw-resize;height:18px;left:-9px;width:18px}.jsPanel-resizeit-handle.jsPanel-resizeit-nw{cursor:nw-resize;height:18px;left:-9px;top:-9px;width:18px}.jsPanel-drag-overlay{width:100%;height:100%;position:absolute;left:0;top:0}.jsPanel-error-content{display:flex}.jsPanel-error-content .jsPanel-error-content-left{display:flex;justify-content:center;align-items:center;padding:10px;margin:5px}.jsPanel-error-content .jsPanel-error-content-right{flex-grow:1;font-size:1.25rem;padding:10px 10px 10px 0;margin:5px 5px 5px 0}.jsPanel-error-content .jsPanel-error-content-right p{padding:0;margin:0;text-align:center}.jsPanel-error-content .jsPanel-error-content-right p code{background:red;color:#fff;padding:2px 5px;border-radius:.25rem}.jsPanel-error-close{position:absolute;right:3px;top:0;cursor:pointer}.jsPanel-error-close svg{height:18px}.jsPanel-depth-1{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.jsPanel-depth-2{box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}.jsPanel-depth-3{box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}.jsPanel-depth-4{box-shadow:0 19px 38px rgba(0,0,0,.3),0 15px 12px rgba(0,0,0,.22)}.jsPanel-depth-5{box-shadow:0 24px 48px rgba(0,0,0,.3),0 20px 14px rgba(0,0,0,.22)}.jsPanel-snap-area{position:fixed;background:#000;opacity:.2;border:1px solid silver;box-shadow:0 14px 28px rgba(0,0,0,.5),0 10px 10px rgba(0,0,0,.5);z-index:9999}.jsPanel-snap-area-lb,.jsPanel-snap-area-lc,.jsPanel-snap-area-left-bottom,.jsPanel-snap-area-left-center,.jsPanel-snap-area-left-top,.jsPanel-snap-area-lt{left:0}.jsPanel-snap-area-cb,.jsPanel-snap-area-ct{left:37.5%}.jsPanel-snap-area-rb,.jsPanel-snap-area-rc,.jsPanel-snap-area-right-bottom,.jsPanel-snap-area-right-center,.jsPanel-snap-area-right-top,.jsPanel-snap-area-rt{right:0}.jsPanel-snap-area-center-top,.jsPanel-snap-area-ct,.jsPanel-snap-area-left-top,.jsPanel-snap-area-lt,.jsPanel-snap-area-right-top,.jsPanel-snap-area-rt{top:0}.jsPanel-snap-area-lc,.jsPanel-snap-area-rc{top:37.5%}.jsPanel-snap-area-cb,.jsPanel-snap-area-center-bottom,.jsPanel-snap-area-lb,.jsPanel-snap-area-left-bottom,.jsPanel-snap-area-rb,.jsPanel-snap-area-right-bottom{bottom:0}.jsPanel-snap-area-cb,.jsPanel-snap-area-ct{width:25%}.jsPanel-snap-area-lc,.jsPanel-snap-area-rc{height:25%}.jsPanel-snap-area-left-top,.jsPanel-snap-area-lt{border-bottom-right-radius:100%}.jsPanel-snap-area-right-top,.jsPanel-snap-area-rt{border-bottom-left-radius:100%}.jsPanel-snap-area-rb,.jsPanel-snap-area-right-bottom{border-top-left-radius:100%}.jsPanel-snap-area-lb,.jsPanel-snap-area-left-bottom{border-top-right-radius:100%}.jsPanel-connector-left-bottom-corner,.jsPanel-connector-left-top-corner,.jsPanel-connector-right-bottom-corner,.jsPanel-connector-right-top-corner{width:12px;height:12px;position:absolute;border-radius:50%}.jsPanel-connector-left-top-corner{left:calc(100% - 6px);top:calc(100% - 6px)}.jsPanel-connector-right-top-corner{left:-6px;top:calc(100% - 6px)}.jsPanel-connector-right-bottom-corner{left:-6px;top:-6px}.jsPanel-connector-left-bottom-corner{left:calc(100% - 6px);top:-6px}.jsPanel-connector-bottom,.jsPanel-connector-bottomleft,.jsPanel-connector-bottomright,.jsPanel-connector-left,.jsPanel-connector-leftbottom,.jsPanel-connector-lefttop,.jsPanel-connector-right,.jsPanel-connector-rightbottom,.jsPanel-connector-righttop,.jsPanel-connector-top,.jsPanel-connector-topleft,.jsPanel-connector-topright{width:0;height:0;position:absolute;border:12px solid transparent}.jsPanel-connector-top,.jsPanel-connector-topleft,.jsPanel-connector-topright{top:100%;border-bottom-width:0}.jsPanel-connector-top{left:calc(50% - 12px)}.jsPanel-connector-topleft{left:0}.jsPanel-connector-topright{left:calc(100% - 24px)}.jsPanel-connector-bottom,.jsPanel-connector-bottomleft,.jsPanel-connector-bottomright{top:-12px;border-top-width:0}.jsPanel-connector-bottom{left:calc(50% - 12px)}.jsPanel-connector-bottomleft{left:0}.jsPanel-connector-bottomright{left:calc(100% - 24px)}.jsPanel-connector-left,.jsPanel-connector-leftbottom,.jsPanel-connector-lefttop{left:100%;border-right-width:0}.jsPanel-connector-left{top:calc(50% - 12px)}.jsPanel-connector-lefttop{top:0}.jsPanel-connector-leftbottom{top:calc(100% - 24px)}.jsPanel-connector-right,.jsPanel-connector-rightbottom,.jsPanel-connector-righttop{left:-12px;border-left-width:0}.jsPanel-connector-right{top:calc(50% - 12px)}.jsPanel-connector-righttop{top:0}.jsPanel-connector-rightbottom{top:calc(100% - 24px)}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){#jsPanel-replacement-container .jsPanel-replacement .jsPanel-titlebar{max-width:105px}}@keyframes jsPanelFadeIn{from{opacity:0}to{opacity:1}}.jsPanelFadeIn{opacity:0;animation:jsPanelFadeIn ease-in 1;animation-fill-mode:forwards;animation-duration:.6s}@keyframes jsPanelFadeOut{from{opacity:1}to{opacity:0}}.jsPanelFadeOut{animation:jsPanelFadeOut ease-in 1;animation-fill-mode:forwards;animation-duration:.6s}@keyframes modalBackdropFadeIn{from{opacity:0}to{opacity:.65}}.jsPanel-modal-backdrop{animation:modalBackdropFadeIn ease-in 1;animation-fill-mode:forwards;animation-duration:750ms;background:#000;position:fixed;top:0;left:0;width:100%;height:100%}@keyframes modalBackdropFadeOut{from{opacity:.65}to{opacity:0}}.jsPanel-modal-backdrop-out{animation:modalBackdropFadeOut ease-in 1;animation-fill-mode:forwards;animation-duration:.4s}.jsPanel-modal-backdrop-multi{background:rgba(0,0,0,.15)}.jsPanel-content .jsPanel-iframe-overlay{position:absolute;top:0;width:100%;height:100%;background:0 0}.jsPanel-content.jsPanel-content-noheader{border:none!important}body{-ms-overflow-style:scrollbar}';

// Get the first script tag
var ref = document.querySelector('script');

// Insert our new styles before the first script tag
ref.parentNode.insertBefore(style, ref);

    if (options) {
      setOptions(options);
    }

    logEl = createPanel();
    document.body.appendChild(logEl);

    jsPanel.create({
      position: 'right-top -20 20',
      animateIn: 'jsPanelFadeIn',
      //setStatus: 'smallified',
      headerTitle: 'Console output',
      content: logEl,
      contentSize: '500 300',
      contentOverflow: 'hidden scroll',
      onwindowresize: true,
    });

    if (!_options.freeConsole) {
      // Backup actual fns to keep it working together
      _console.log = console.log;
      _console.clear = console.clear;
      _console.info = console.info;
      _console.warn = console.warn;
      _console.error = console.error;
      console.log = originalFnCallDecorator(log, "log");
      console.clear = originalFnCallDecorator(clear, "clear");
      console.info = originalFnCallDecorator(info, "info");
      console.warn = originalFnCallDecorator(warn, "warn");
      console.error = originalFnCallDecorator(error, "error");
    }
  }

  function destroy() {
    isInitialized = false;
    console.log = _console.log;
    console.clear = _console.clear;
    console.info = _console.info;
    console.warn = _console.warn;
    console.error = _console.error;
    logEl.remove();
  }

  /**
   * Checking if isInitialized is set
   */
  function checkInitialized() {
    if (!isInitialized) {
      throw "You need to call `screenLog.init()` first.";
    }
  }

  /**
   * Decorator for checking if isInitialized is set
   * @param  {Function} fn Fn to decorate
   * @return {Function}      Decorated fn.
   */
  function checkInitDecorator(fn) {
    return function() {
      checkInitialized();
      return fn.apply(this, arguments);
    };
  }

  /**
   * Decorator for calling the original console's fn at the end of
   * our overridden fn definitions.
   * @param  {Function} fn Fn to decorate
   * @param  {string} fn Name of original function
   * @return {Function}      Decorated fn.
   */
  function originalFnCallDecorator(fn, fnName) {
    return function() {
      fn.apply(this, arguments);
      if (typeof _console[fnName] === "function") {
        _console[fnName].apply(console, arguments);
      }
    };
  }

  // Public API
  window.screenLog = {
    init: init,
    update: update,
    log: originalFnCallDecorator(checkInitDecorator(log), "log"),
    clear: originalFnCallDecorator(checkInitDecorator(clear), "clear"),
    info: originalFnCallDecorator(checkInitDecorator(clear), "info"),
    warn: originalFnCallDecorator(checkInitDecorator(warn), "warn"),
    error: originalFnCallDecorator(checkInitDecorator(error), "error"),
    destroy: checkInitDecorator(destroy)
  };
})();
