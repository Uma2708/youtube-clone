// let randomValue = { name: "Lydia" };
// randomValue = 23;

// if (!typeof randomValue === "string") {
//   console.log("It's not a string!");
// } else {
//   console.log("Yay it's a string!");
// }

// const user = {
// 	email: "my@email.com",
// 	updateEmail: function (email){
// 		this.email = email
// 	}
// }

// user.updateEmail("new@email.com")
// console.log(user.email)


// const fruit = ['🍌', '🍊', '🍎']

// fruit.slice(0, 1)
// fruit.splice(0, 1)
// fruit.unshift('🍇')

// console.log(fruit)


// let count = 0;
// const nums = [0, 1, 2, 3];

// for(var i in nums){
// 	if (i) count += 1
// }

// console.log(count)


const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;