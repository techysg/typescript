const obj = {
    name: "shubham",
    getName: () => {
        console.log(this)
        let values = [1, 2, 3]

        function getThis() {
            console.log(this)
        }
        getThis();

        const getThisArrow = () => {
            console.log(this);
            const getThisArrow1 = () => {
                console.log(this)
            }
            getThisArrow1()
        }
        getThisArrow()

        values.map((v) => {
            console.log(this, v)
        })
    }
};


function Counter(){
    console.log(this)
    let count = 0;
    const increment=()=> {
        console.log(this)
        return ++count
    }
    function decrement() {
        return --count
    }
    function get() {
        console.log(this)
        return count
    }
    return { increment, decrement, get };
}
let counter = Counter()