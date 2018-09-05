let $ = require("jquery");

export default class JqueryVersion {
  constructor(jquery) {
    this.jquery = jquery;
  }

  get () {
    return this.jquery.fn.jquery
  }
}

let version = new JqueryVersion($);
console.log(version.get());