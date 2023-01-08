import vsctm from 'vscode-textmate';
import oniguruma from 'vscode-oniguruma';
// @ts-ignore
import wasmBin from 'vscode-oniguruma/release/onig.wasm';

const generateCode = ($element: Element) => {
    const $pre = document.createElement('pre')
    const $code = document.createElement('code')
    $pre.appendChild($code)
    $element.appendChild($pre)

    return $code
}

const vscodeOnigurumaLib = oniguruma.loadWASM(wasmBin).then(() => {
    return {
        createOnigScanner(patterns) { return new oniguruma.OnigScanner(patterns); },
        createOnigString(s) { return new oniguruma.OnigString(s); }
    };
});

// Create a registry that can create a grammar from a scope name.
const registry = new vsctm.Registry({
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

// Load the JavaScript grammar and any other grammars included by it async.
const execute = ($element: Element) => {
    registry.loadGrammar('source.js').then(grammar => {
        console.log(grammar);
        
        if (!grammar) return
        const text = [
            `// There is a comment`,
            `function sayHello(name) {`,
            `\treturn "Hello, " + name;`,
            `}`
        ];
        let ruleStack = vsctm.INITIAL;
        const $code = generateCode($element)
        for (let i = 0; i < text.length; i++) {
            const line = text[i];
            const lineTokens = grammar.tokenizeLine(line, ruleStack);
            console.log(`\nTokenizing line: ${line}`);
            const $line = document.createElement('div')
            $line.classList.add('line')
            for (let j = 0; j < lineTokens.tokens.length; j++) {
                const token = lineTokens.tokens[j];
                console.log(` - token from ${token.startIndex} to ${token.endIndex} ` +
                  `(${line.substring(token.startIndex, token.endIndex)}) ` +
                  `with scopes ${token.scopes.join(', ')}`
                );
                const $token = document.createElement('span')
                $token.classList.add('token')
                $token.innerHTML = line.substring(token.startIndex, token.endIndex)
                $line.appendChild($token)
            }
            ruleStack = lineTokens.ruleStack;
            $code.appendChild($line)
        }
    });
}
export default execute

/* OUTPUT:

Unknown scope name: source.js.regexp

Tokenizing line: function sayHello(name) {
 - token from 0 to 8 (function) with scopes source.js, meta.function.js, storage.type.function.js
 - token from 8 to 9 ( ) with scopes source.js, meta.function.js
 - token from 9 to 17 (sayHello) with scopes source.js, meta.function.js, entity.name.function.js
 - token from 17 to 18 (() with scopes source.js, meta.function.js, punctuation.definition.parameters.begin.js
 - token from 18 to 22 (name) with scopes source.js, meta.function.js, variable.parameter.function.js
 - token from 22 to 23 ()) with scopes source.js, meta.function.js, punctuation.definition.parameters.end.js
 - token from 23 to 24 ( ) with scopes source.js
 - token from 24 to 25 ({) with scopes source.js, punctuation.section.scope.begin.js

Tokenizing line:        return "Hello, " + name;
 - token from 0 to 1 (  ) with scopes source.js
 - token from 1 to 7 (return) with scopes source.js, keyword.control.js
 - token from 7 to 8 ( ) with scopes source.js
 - token from 8 to 9 (") with scopes source.js, string.quoted.double.js, punctuation.definition.string.begin.js
 - token from 9 to 16 (Hello, ) with scopes source.js, string.quoted.double.js
 - token from 16 to 17 (") with scopes source.js, string.quoted.double.js, punctuation.definition.string.end.js
 - token from 17 to 18 ( ) with scopes source.js
 - token from 18 to 19 (+) with scopes source.js, keyword.operator.arithmetic.js
 - token from 19 to 20 ( ) with scopes source.js
 - token from 20 to 24 (name) with scopes source.js, support.constant.dom.js
 - token from 24 to 25 (;) with scopes source.js, punctuation.terminator.statement.js

Tokenizing line: }
 - token from 0 to 1 (}) with scopes source.js, punctuation.section.scope.end.js

*/
