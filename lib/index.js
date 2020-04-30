const { parsers } = require("prettier/parser-babel");
const parser = parsers.babel;

const {
  doc: {
    builders: { concat },
  },
} = require("prettier");

const languages = [
  {
    extensions: [".gml"],
    name: "GML",
    parsers: ["gml-parse"],
    vscodeLanguageIds: ["gml-gms2"],
  },
];

const gmlParsers = {
  "gml-parse": {
    ...parser,
    parse(...args) {
      const ast = parser.parse(...args);
      // The AST can be modified here for Game Maker-specific formatting
      // Alternatively, a pre-processing step can be added
      return ast;
    },
    preprocess(text, options) {
      // Because we're using the JavaScript parser to parse our GML code, we need
      // to make a few minor adjustmenets so that the parser can handle GML specifics
      if (parser.preprocess) {
        text = parser.preprocess(text, options);
      }
      // Temporarily comment out region blocks until post-processing
      text = text.replace(/(#region .*)/g, "//##$1");
      text = text.replace(/(#endregion)/g, "//##$1");
      // Fix 'if' statements without parenthesis
      text = text.replace(/if(.*){/g, "if($1){");
      return text;
    },
    // For custom printing, change 'estree' to 'gml-tree' and add a printer
    astFormat: "estree",
  },
};

module.exports = {
  languages,
  parsers: gmlParsers,
};
