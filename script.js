function calcTip(bill){
    let tip;
    if(bill>=50 && bill<=300){
        tip=bill*0.15
        console.log(`the bill was ${bill},the tip was${tip},and the total value${bill+tip}`);
    }else if (bill>300){
        tip=bill*0.2
        console.log(`the bill was ${bill},the tip was ${tip},and the total value ${bill+tip}`);
    }

}
console.log(calcTip(280))