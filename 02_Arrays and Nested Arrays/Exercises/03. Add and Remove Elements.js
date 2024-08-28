function solve (array) {
  let result = [1]

  for (let i = 1; i < array.length; i++) {
    if (array[i] === 'add') {
      result.push(1 + i)
    } else {
      result.pop()
    }
  }

  if (result.length == 0) {
    console.log('Empty')
  }
  console.log(result.join('\n'))
}

solve(['add', 'add', 'remove', 'add', 'add'])
