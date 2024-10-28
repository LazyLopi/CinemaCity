import './filmList.css';
import FilmCell from "./filmCell.jsx";
import FilmListHeader from "./filmHeader.jsx";
import kulej from "./img/kulej.jpg";
import usmiech2 from "./img/usmiech2.webp";
import wooklyn from "./img/wooklyn.jpg";
import wybraniec from "./img/wybraniec.jpg";

const films = [{title: "UŚMIECHNIJ SIĘ 2",img: usmiech2,genre: "Horror",length: "127 min",d: "2D",times: ["13:30","15:50","18:40","21:30"], lang: "EN  ·  (  NAP  ·  PL  )"},
               {title: "WYBRANIEC",img: wybraniec,genre: "Dramat",length: "120 min",d: "2D",times: ["15:40","18:20","21:00"], lang: "EN  ·  (  NAP  ·  PL  )"},
               {title: "KULEJ. DWIE STRONY METALU",img: kulej,genre: "Dramat",length: "139 min",d: "2D",times: ["19:50"], lang: "ORYGINALNA WERSJA:  PL  ·  (  BEZ NAPISÓW  )"},
               {title: "WROOKLYN ZOO",img: wooklyn,genre: "Dramat",length: "128 min",d: "2D",times: ["11:00","13:50","16:40","19:30"], lang: "ORYGINALNA WERSJA:  PL  ·  (  BEZ NAPISÓW  )"},
];

function FilmList(){
    return(
        <div>
            <FilmListHeader/>
            <div style={{width:"100%"}}>
                {films.map( (f) => {
                    return(<FilmCell key={f.title} filmInfo={f}/>);
                })}
            </div>
        </div>
    );
}

export default FilmList;