function levelMonsterFlowNum(level) {
    let res = Math.floor(Math.pow(level / 2, 1.3)) + 2;
    res += Math.log(level + 1) * 10;
    res = Math.floor(res);
    return res <= 0 ? 1 : res;
}

for (let i = 1; i < 500; i++) {
    console.log(i, levelMonsterFlowNum(i));
}
