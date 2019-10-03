let str = "Hey there, i am a javascript developer, and i live in vienna"

str = str.split(',')
str = str[1]
str = str.charAt(1).toUpperCase() + str.slice(2).concat('', '.')
console.log(str)