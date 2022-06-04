import _ from 'lodash'

export default function (form) {
  let current, entries, item, key, output, value
  output = {}
  entries = new FormData(form).entries()
  while (item = entries.next().value) {
    key = item[0];
    value = item[1];

    if (key.match(/\[]$/)) {
      key = key.replace(/\[]$/, '')
      if (!_.has(output, key)) {
        _.set(output, key, [value])
      } else {
        current = _.get(output, key)
        current.push(value)
        _.set(output, key, current)
      }
    } else {
      _.set(output, key, value)
    }
  }
  return output
}
