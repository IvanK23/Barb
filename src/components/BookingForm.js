import Parse from 'parse/dist/parse.min.js';

export default function BookingForm() {
    const divStyle ={
        color: "blue",
    }
    function clickHandler() {
        // console.log('submit');
        const location = localStorage.getItem('location');
        const master = localStorage.getItem('master');
        const booking = new Parse.Object('Booking');
        booking.set('location', location);
        booking.save();
        booking.set('master', master);
        booking.save();
        console.log(localStorage.getItem('location'));
        console.log(localStorage.getItem('master'));


        document.write(
            `
            <div style="background-color: #e6e6e6; text-align: center; width: 35%; margin: 0 auto; padding-bottom: 10%; border-radius: 10px;">
                <h1 style="text-align: center; padding-top: 50px; padding-bottom:50px;">Дякуємо, ваш запис успішний</h1>
                <div style="font-size: 25px; margin-bottom: 20px;">Ваш барбер : <span>${localStorage.getItem('master')}</span></div>
                <hr>
                <div style="margin: 20px 0px; font-size: 25px" >Адреса барбершопу : <span>${localStorage.getItem('location')}</span></div>
                <hr>
                <div style="font-size: 25px; margin: 20px 0px;">Контактний телефон : <span>+380734512730</span></div>
                <hr>
                <div style="font-size: 25px; margin: 20px 0px;">Контактна пошта : <span>barbershop@gmail.com</span></div>
                <hr>
                <div style="font-size: 25px; margin: 20px 0px;"> Веведіть свою пошту: <input id="input-value" type="text" style="background: none; border: 1px solid black; width:200px " > <hr></div>
            </div>

            `
        )

    }
    function clickMaster(){
        console.log('hello');
    }

    const butStyle ={
        border:"none",
       width: "300px",
       height: "70px",
       fontSize: "25px",
       borderRadius: "5px",
       marginBottom: "50px",
    }
    return (
        <button style={butStyle} onClick={clickHandler}>Записатися</button>
    );
}

