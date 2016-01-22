'use babel'

const COLOR_EXTRACTION_REGEXP = /rgb\(\d+, ?\d+, ?\d+\)|rgba\(\d+, ?\d+, ?\d+, ?\d?\.?\d+\)|#[0-9a-f]{3,6}/

export function isColor(textEditor, bufferPosition) {
  const lineText = textEditor.getTextInRange([[bufferPosition.row, 0], [bufferPosition.row, Infinity]])
  const matches = COLOR_EXTRACTION_REGEXP.exec(lineText)
  if (matches === null) {
    return false
  }
  const offsetStart = matches.index
  const offsetEnd = offsetStart + matches[0].length
  return bufferPosition.column >= offsetStart && offsetEnd >= bufferPosition.column
}
