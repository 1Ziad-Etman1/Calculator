const screen = document.getElementById('screen')
const operators = document.querySelectorAll('.op')
const nums = document.querySelectorAll('.num')
const dot = document.querySelector('.dot')

let text = screen.value

let numbers = Array.from(nums)

let ops = Array.from(operators)

function notNum() {
  return screen.value === 'Infinity' || screen.value === 'undefined'
}
function lastElementOp() {
  return (
    text[text.length - 1] === '/' ||
    text[text.length - 1] === '*' ||
    text[text.length - 1] === '-' ||
    text[text.length - 1] === '+'
  )
}

function AC() {
  screen.value = ''
  text = screen.value
}

function del() {
  if (notNum()) {
    AC()
  } else {
    screen.value = screen.value.toString().slice(0, -1)
    text = screen.value
  }
}

function show(num) {
  if (notNum()) {
    AC()
    screen.value += num
    text = screen.value
  } else {
    screen.value += num
    text = screen.value
  }
}

numbers.forEach((number) => {
  let val = number.getAttribute('value')
  number.addEventListener('click', function () {
    show(val)
  })
})

ops.forEach((op) => {
  let val = op.getAttribute('value')
  op.addEventListener('click', function () {
    if (lastElementOp()) {
      del()
      show(val)
    } else if (text == '') {
      return
    } else {
      show(val)
    }
  })
})

dot.addEventListener('click', function () {
  if (text.includes('.')) {
    return
  } else {
    show('.')
  }
})

function calc() {
  if (notNum()) {
    AC()
  } else if (lastElementOp()) {
    del()
    screen.value = eval(screen.value)
    text = screen.value
  } else {
    screen.value = eval(screen.value)
    text = screen.value
  }
}
