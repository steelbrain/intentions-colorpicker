'use babel'

module.exports = {
  activate() {
    require('atom-package-deps').install()
  },
  provideIntentions() {
    return {
      grammarScopes: ['source.js'],
      getIntentions({textEditor, bufferPosition}) {
        const intentions = []

        intentions.push({
          priority: 100,
          icon: 'color-mode',
          title: 'Choose color from colorpicker',
          selected: function() {
            console.log('You clicked the color picker option')
          }
        })

        return intentions
      }
    }
  }
}
