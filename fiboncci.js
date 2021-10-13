//Enter code here
function fib(i) {
  if (i == 0) {
    return 0;
  }
  if (i == 1 || i == 2) {
    return 1;
  } else {
    return fib(i - 1) + fib(i - 2); //3 2 //2 1 //
  }
}

function runProgram(input) {
  var i = Number(input);
  //console.log(i);

  console.log(fib(i));
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
