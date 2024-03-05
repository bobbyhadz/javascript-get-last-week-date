console.log('bobbyhadz.com');

function getLastWeeksDate() {
  const now = new Date();

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 7,
  );
}

// 👇️ Wed Jul 19 2023 00:00:00
console.log(getLastWeeksDate());

// 👇️ Wed Jul 26 2023 10:46:35
console.log(new Date());

// -------------------------------------------------------------

// // Get last week's Date preserving the time

// function getLastWeeksDate() {
//   const now = new Date();

//   return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
// }

// // 👇️ Wed Jul 19 2023 10:47:53
// console.log(getLastWeeksDate());

// // 👇️ Wed Jul 26 2023 10:47:53
// console.log(new Date());
