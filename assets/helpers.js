
export async function animate(currentValues, newValues, duration) {
  const differences = {}
  const keysToChange = Object.keys(newValues)
  const initialValues = Object.assign({}, currentValues)

  for (const key of keysToChange) {
    differences[key] = newValues[key] - currentValues[key]
  }

  await new Promise((resolve) => {
    const startTime = Date.now()
    let currentTime = startTime
    let currentDuration = 0
    let currentProgress = 0

    function updateValues() {
      currentTime = Date.now()
      currentDuration = currentTime - startTime
      currentProgress = currentDuration / duration

      for (const key of keysToChange) {
        currentValues[key] = initialValues[key] + differences[key] * currentProgress
      }

      if (currentTime - startTime < duration) {
        requestAnimationFrame(updateValues)
      } else {
        for (const key of keysToChange) {
          currentValues[key] = newValues[key]
        }
        resolve()
      }
    }

    requestAnimationFrame(updateValues)
  })
}
