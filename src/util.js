import { v4 as uuidv4} from "uuid";


function chillHop() {
    return [
        {
            name: "Kinsfolk",
            artist: "Ariagod",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ['#A3BE71','#ABD140'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12996"
        },

        {
            name: "Lax Incense",
            artist: "Mama Aiuto",
            cover:"https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#41635E','#324039'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12123"
        },
        {
            name: "Small Town Palm Trees",
            artist: "Mama Aiuto",
            cover:"https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#41635E','#324039'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12122"
        },
        {
            name: "Golden",
            artist: "Ariagod",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#A3BE71','#ABD140'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13004"
        }
        // {
        //     name: "",
        //     artist: "",
        //     cover:"",
        //     id: uuidv4(),
        //     active: false,
        //     color: ['',''],
        //     audio: ""
        // }
    ]
}


export default chillHop;