function sum(data, n) {
  if (n <= 0) {
    return 0;
  }

  return sum(data, n - 1) + data[n - 1];
}

function runProgram(input) {
  var newinput = input.split("\n");

  for (var i = 2; i < newinput.length; i = i + 2) {
    var data = newinput[i].split(" ").map(Number);
    var n = data.length;

    console.log(sum(data, n));
  }
}

if (process.env.USERNAME === "My") {
  runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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
