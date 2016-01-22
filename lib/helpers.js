'use babel'

export function isColor(textEditor, bufferPosition) {
  const colorRegexp = /rgb\(\d+, ?\d+, ?\d+\)|rgba\(\d+, ?\d+, ?\d+, ?\d?\.?\d+\)|rgba\(#[0-9a-f]{3,6}, ?\d?\.?\d+\)|#[0-9a-f]{3,6}/g
  const lineText = textEditor.getTextInRange([[bufferPosition.row, 0], [bufferPosition.row, Infinity]])

  let matches
  while ((matches = colorRegexp.exec(lineText)) !== null) {
    const offsetStart = matches.index
    const offsetEnd = offsetStart + matches[0].length
    if (bufferPosition.column >= offsetStart && offsetEnd >= bufferPosition.column) {
      return true
    }
  }

  return false
}
