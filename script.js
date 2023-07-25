// <!-- arrow function -->
        let greet = () =>{
            console.log("hello function");
        }

        greet();
        setTimeout(() => {
            console.log('under timeout');
        }, 1000)

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

        
        setTimeout(() =>{
            myJsonStr = myJsonStr.replace('DK', 'NK');
            myJsonStr = myJsonStr.replace('dinkar', 'Nikkita');
            myJsonStr = myJsonStr.replace('21', '25');
            console.log(myJsonStr);

        }, 3000)

        // clickable

        function change(){
            document.getElementById('chnage2').innerHTML = "Hi";
        }