'use babel'

const COLOR_EXTRACTION_REGEXP = /rgb\(\d+, ?\d+, ?\d+\)|rgba\(\d+, ?\d+, ?\d+, ?\d?\.?\d+\)|#[0-9a-f]{3,6}/g

export function isColor(textEditor, bufferPosition) {
  const lineText = textEditor.getTextInRange([[bufferPosition.row, 0], [bufferPosition.row, Infinity]])
  let matches
  while ((matches = COLOR_EXTRACTION_REGEXP.exec(lineText)) !== null) {
    const offsetStart = matches.index
    const offsetEnd = offsetStart + matches[0].length
    if (bufferPosition.column >= offsetStart && offsetEnd >= bufferPosition.column) {
      return true
    }
  }
  return false
}
