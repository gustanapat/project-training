(()=> {

    const SECOND = 1000;
    const MINUTE = SECOND*60;
    const HOUR = MINUTE*60;
    const DAY = HOUR*24;

    function countDown(){
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2022 23:59:59').getTime();
        const unixTimeLeft = newYear - now;

        console.log(unixTimeLeft);
    }

    function run(){
        countDown();
    }
    run();

})