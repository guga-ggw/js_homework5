const div = document.createElement('div')
div.setAttribute('id', 'card')
const h2 = document.createElement('h2')
const txt = 'Gandalf'
const txt2 = 'Go to Profile'
const a = document.createElement('a')
a.setAttribute('href', '#')
a.append(txt2)

h2.append(txt)
div.append(h2, a)
document.body.append(div)