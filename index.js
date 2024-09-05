let displayValue = ''

document.body.addEventListener('keydown', (event) => {

    if(event.key === '1' ){ appendValue('1') } 
    else if ( event.key === '2' ) { appendValue('2')}
    else if ( event.key === '3') {  appendValue('3')}
    else if ( event.key === '4') { appendValue('4') }
    else if ( event.key === '5') { appendValue('5') }
    else if ( event.key === '6') { appendValue('6') }
    else if ( event.key === '7') { appendValue('7') }
    else if ( event.key === '8') { appendValue('8') }
    else if ( event.key === '9') {appendValue('9') }
    else if ( event.key === '0') { appendValue('0') }
    else if ( event.key === '.' && !displayValue.includes('.')) { appendValue('.') }
    else if ( event.key === '+' && !displayValue.includes('+')) { appendValue('+') }
    else if ( event.key === '-' && !displayValue.includes('-')) { appendValue('-') }
    else if ( event.key === '*' && !displayValue.includes('*')) {  appendValue('*') }
    else if ( event.key === '/' && !displayValue.includes('/')) { appendValue('/') }
    else if (event.key === '%' && !displayValue.includes('%') ) { appendValue('%') }
    else if ( event.key === '=' || event.key === 'Enter') { calculateResult() }
    

})

 const one = document.getElementById('1')
 const two = document.getElementById('2')
 const three = document.getElementById('3')
 const four = document.getElementById('4')
 const five = document.getElementById('5')
 const six = document.getElementById('6')
 const seven = document.getElementById('7')
 const eight = document.getElementById('8')
 const nine = document.getElementById('9')
 const zero = document.getElementById('0')

const add = document.getElementById('+')
const sub = document.getElementById('-')
const mul = document.getElementById('*')
const div = document.getElementById('/')
const mod = document.getElementById('%')
const square = document.getElementById('square')

const calc = document.getElementById('=')

const clear = document.getElementById('clear')
 
 one.addEventListener('click', () => appendValue('1'))
 two.addEventListener('click', () => appendValue('2'))
 three.addEventListener('click',  () =>  appendValue('3'))

 four.addEventListener('click', () => appendValue('4'))
 five.addEventListener('click', () => appendValue('5'))
 six.addEventListener('click', () => appendValue('6'))

 seven.addEventListener('click', () => appendValue('7'))
 eight.addEventListener('click', () => appendValue('8'))
 nine.addEventListener('click', () => appendValue('9'))
 
 zero.addEventListener('click', () => appendValue('0'))
 
 add.addEventListener('click', () => {
     if( displayValue == '') {  alert('Enter a valid number first!')} 
    else {  appendValue('+')    }
    })

sub.addEventListener('click', () => {    
    if(displayValue === '')  {  alert('Enter a valid number first!')} 
   else {  appendValue('-')    }
   })    

mul.addEventListener('click', () => {
    if(displayValue === '')  {  alert('Enter a valid number first!')} 
   else {  appendValue('*')    }
   })

div.addEventListener('click', () => {
    if(displayValue === '')  {  alert('Enter a valid number first!')} 
   else {  appendValue('/')    }
   })
mod.addEventListener('click', () => {
    if(displayValue === '' || displayValue.includes('%')){ }
    else { appendValue('%')}
})
square.addEventListener('click', ()=>{ 
    if( displayValue === ''){ alert('Enter a valid number first!')
    } else {        
        appendValue('^2')
        displayValue = displayValue.replace('^', '**')
    }
})

calc.addEventListener('click', () => calculateResult() )

 clear.addEventListener('click', () => clearDisplay())
 
 function clearDisplay () {
    displayValue = ''
    document.getElementById('result').value = '0'
    document.getElementById('question').value = ''
 }

 function appendValue(value) {
    displayValue += value
    document.getElementById('question').value = displayValue
 }

 function calculateResult(){

    try {
        const result = eval(displayValue) 
        displayValue = result.toString()
        document.getElementById('result').value = displayValue
        displayValue = ''
    }   catch (error) {
        document.getElementById('result').value = 'Error'

    }
    
 }