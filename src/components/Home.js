import Location from "./Location";
import BookingForm from "./BookingForm";
import Service from "./Service"
import Maps from "./Maps"
import Calendar from "./Calendar"
import ServiceChoose from "./ServiceChoose";


export default function Home() {
    const hstyle ={
        marginBottom: "50px",
    }

    const h2Style ={
        marginTop: "50px",
    }

    const locStyle = {
        display: "flex",
        flexdiraction: "column",
    }
    return (
        <div>
            <h1 style={hstyle}>ЗАПИСАТИСЯ НА СТРИЖКУ</h1>
            <h2>Виберіть місце барбершопу</h2>
            <Maps/>
            <Location/>
            <h2 style={h2Style}>Виберіть барбера</h2>
            <Service/>
            <ServiceChoose/>
            <h2 style={h2Style}>Виберіть дату</h2>
            <Calendar/>
            <BookingForm/>
        </div>
    );
}