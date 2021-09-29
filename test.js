/**
 *
 * by littlefean
 */
let a = {
    "abs": 123,
}

a["n1"] = 123;
a["n3"] = 156;
a["n3"] = undefined;

for (let item in a) {
    console.log(item);
}
