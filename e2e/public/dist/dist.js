(() => {
  // src/index.ts
  var CodeSample = class {
    constructor(options) {
      this.theme = options.theme || "nord";
      this.samples = options.samples || {};
    }
    attachToElement(selector) {
    }
    getHtml() {
    }
    addSample(sampleKey, options) {
      if (this.samples[sampleKey])
        throw new Error(`Key [${sampleKey}] already existing`);
      if (!options.language)
        throw new Error("Language not defined");
      if (!options.content)
        throw new Error("Content not defined");
      this.samples[sampleKey] = options;
    }
    removeSample(sampleKey) {
      if (!this.samples[sampleKey])
        throw new Error(`Key [${sampleKey}] not existing`);
      delete this.samples[sampleKey];
    }
    highlightBlock(sampleKey, location) {
    }
    goToBlock(sampleKey, location) {
    }
    navigateToSample(sampleKey) {
    }
  };

  // e2e/public/src/app.ts
  var codeSample = new CodeSample({});
  console.log(codeSample);
})();
