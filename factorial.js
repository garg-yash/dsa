function factorial(i) {
  if (i == 0 || i == 1) {
    return 1;
  }
  return i * factorial(i - 1);
}

function runProgram(input) {
  var i = Number(input);

  console.log(factorial(i));
}

if (process.env.USERNAME === "My") {
  runProgram(`4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
