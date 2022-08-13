let f = () => {
    let d = new Date();
    return d.getMilliseconds() % 2 == 0;
}
const retry = (func, delay, {max}) => {
    if (max === null) {
            setInterval(() => {
                if (func()) {
                    console.log(true);
                }else {
                    console.log(false);
                }
            }, delay);
    } else {
            setTimeout(() => {
                while (max > 0) {
                    if (func()) {
                        return console.log(true);
                    }else {
                        console.log(false); 
                        max--;
                    }
                }
            }, delay)
        }
}

retry(f, 2000, {max : null})


