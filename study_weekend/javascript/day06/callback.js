function parent(number, action) {
  for (let i = 0; i < number; i++) {
    action(i);
  }
}

parent(5, (index) => {
  console.log(index * 2);
});
// function parent_2(number) {
//   for (let i = 0; i < number; i++) {
//     action(i);
//   }
//   function action(index) {
//     console.log(index * 2);
//   }
// }

// parent_2(5);
