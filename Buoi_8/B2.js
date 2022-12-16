const obj = {
    name: "Lương",
    age: 20,
    email: "tunhatluong2k3@gmail.com",
};

function run(o){
    ans = [];
    for (var key in o){
        ans.push(`${key}: ${o[key]}`);
    }
    return ans;
}

console.log(run(obj));

