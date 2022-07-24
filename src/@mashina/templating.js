// Ultimate goal is to create logic-less templating library
// but for now this will do :D 
export function render(template, vars) {
  if (!template) {
    throw new Error(`Valid template string needs to be provided to render function but you provided ${template}.`)
  }

  return template.split("\n").map(str => {
    const hasPartial = str.includes("{{")

    if (!hasPartial) {
      return str
    }

    const partialKey = Object.keys(vars).pop()

    return vars[partialKey]
  }).join("\n")
}