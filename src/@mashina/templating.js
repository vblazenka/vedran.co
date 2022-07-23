export function render(template, vars) {
  return template.split("\n").map(str => {
    const hasPartial = str.includes("{{")

    return hasPartial ? vars.content : str
  }).join("")
}