const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name){
  var newKittens = [name,...kittens]
  return newKittens
}

function removeFirstKitten(){
  var newKittens = kittens.splice(1)
  console.log(newKittens);
  return newKittens
}

function removeLastKitten(){
  var newKittens = kittens.splice(0,2)
  console.log(newKittens);
  return newKittens
}

removeLastKitten()
