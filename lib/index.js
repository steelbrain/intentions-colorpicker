'use babel'

import {isColor} from './helpers'

module.exports = {
  activate() {
    require('atom-package-deps').install()
    this.colorPicker = null
  },
  provideIntentions() {
    return {
      grammarScopes: ['source.js', 'source.js.jsx'],
      getIntentions: ({textEditor, bufferPosition}) => {
        const intentions = []

        if (this.colorPicker !== null && isColor(textEditor, bufferPosition)) {
          intentions.push({
            priority: 100,
            icon: 'color-mode',
            title: 'Choose color from colorpicker',
            selected: _ => {
              this.colorPicker.open(textEditor)
            }
          })
        }

        return intentions
      }
    }
  },
  consumeColorPicker(colorPicker) {
    this.colorPicker = colorPicker
  }
}
