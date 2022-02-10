// const birthday = new Date('2004-04-04T10:10:10')
// const currentDate = new Date()
// console.log(currentDate - birthday)


const now = new Date();
// now.setMilliseconds(now.getMilliseconds()+1000000000)
const newDate = now.getTime() + 1000000000
console.log(newDate)