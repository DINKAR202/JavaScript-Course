// <!-- arrow function -->
        let greet = () =>{
            console.log("hello function");
        }

        greet();
        // setTimeout(() => {
        //     console.log('under timeout');
        // }, 1000)

        let sum2 = (a, b) => a+b;

        let half = (a) => a*2;

        let obj123 = {
            greeting: "Good morning",
            names:["Harry", "din", "kundan", "skill", "Djkhiladi"],
            speak(){
                this.names.forEach((student) =>{
                    console.log("this.greeting" + " cock "+ student);
                })
            }
        }
        obj123.speak();

        // <!-- JSON tutorial -->

        let jsonObj = {
            name: 'DK',
            channel:'dinkar',
            age: '21',
            email:'dinkar@gmail.com',
            mobileNo: '707964648'
        }
        console.log(jsonObj);

        let myJsonStr = JSON.stringify(jsonObj);
        console.log(myJsonStr);

        
        setTimeout(() => {
            myJsonStr = myJsonStr.replace('DK', 'NK');
            myJsonStr = myJsonStr.replace('dinkar', 'Nikkita');
            myJsonStr = myJsonStr.replace('21', '25');
            console.log(myJsonStr);

        }, 1000)

        // clickable

        function change(){
            document.getElementById('chnage2').innerHTML = "Hi";
        }

        // Math

        let m = Math;
        console.log(m)

        let a = 20.1234152;
        let b = 30;

        console.log("this is without round " , a, b);
        console.log("this is round " , Math.round(a), Math.round(b));

// sqare value
        console.log(Math.sqrt(36))
        console.log(Math.sqrt(64))
        console.log(Math.sqrt(50))

        //ceil value
        console.log("5.8 rounded up to nearest value", Math.ceil(5.8)) 
        console.log("6.8 rounded up to nearest value", Math.ceil(6.8)) 

        // ES6
        const greet2 = name => {
            return "Hello there " + name;
        };

        console.log(greet2("WsDinkar"))

        const sqr = num => num*num;

        console.log(sqr(6))

        console.log(sdr(5))