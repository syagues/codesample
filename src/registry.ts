import vsctm from 'vscode-textmate';
import oniguruma from 'vscode-oniguruma';
// @ts-ignore
import wasmBin from 'vscode-oniguruma/release/onig.wasm';

const vscodeOnigurumaLib = oniguruma.loadWASM(wasmBin).then(() => {
  return {
      createOnigScanner(patterns) { return new oniguruma.OnigScanner(patterns); },
      createOnigString(s) { return new oniguruma.OnigString(s); }
  };
});

// Create a registry that can create a grammar from a scope name.
export default new vsctm.Registry({
  onigLib: vscodeOnigurumaLib,
  loadGrammar: (scopeName) => {
      console.log(scopeName);
      
      if (scopeName === 'source.js') {
          return fetch('https://raw.githubusercontent.com/textmate/javascript.tmbundle/master/Syntaxes/JavaScript.plist')
            .then(response => response.text())
            .then(content => vsctm.parseRawGrammar(content));
      }
      console.log(`Unknown scope name: ${scopeName}`);
      return Promise.resolve(null);
  }
});