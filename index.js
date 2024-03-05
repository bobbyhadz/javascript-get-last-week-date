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
