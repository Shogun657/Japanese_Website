
let flag = true;
while(flag)
{
    let input = prompt("パスワードは？");
    if(input.length >6 )
    {
        if (input.indexOf(' ') === -1 )
        {
            if(input === "Youtube")
            {
                alert("いいよ！");
                flag = false;
            }
            else{
                alert("ちがうよ！");
            }
            
        }
        else
        {
            alert("パスワードにスペースを含んではならない");

        }
    }
    else
    {
        alert("パスワードはちょっと短い！");
    }
}

