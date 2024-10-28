import "./filmHeader.css";
import calIcon from "./img/calender.png";

function FilmListHeader(){
    function onDayClicked(d){
        const buttons = document.querySelectorAll("button");
        buttons.forEach( (b) => {
        if(b.className.includes("dayButton"))
            if(b.className.includes("firstInLine"))
                if(b.id===d)
                    b.className = "dayButton selected firstInLine";
                else
                    b.className = "dayButton firstInLine";
            else
                b.id===d ? b.className = "dayButton selected" : b.className = "dayButton";
        });

        var day;
        switch(d){
            case "Pn":
                day = "PONIEDZIAŁEK";
                break;
            case "Wt":
                day = "WTOREK";
                break;
            case "Śr":
                day = "ŚRODA";
                break;
            case "Cz":
                day = "CZWARTEK";
                break;
            case "Pt":
                day = "PIĄTEK";
                break;
            case "So":
                day = "SOBOTA";
                break;
            case "Nd":
                day = "NIEDZIELA";
                break;
            default:
                day = "Undefined";
        }
        var thirtyDayMonth = [4, 6, 9, 11];
        var thirty1DayMonth = [1, 3, 5, 7, 8, 10, 12];

        var dayNr = today.getDate();
        var monthNr = today.getMonth()+1;
        var yearNr = today.getFullYear();
        

        for(var i = 0;i<daysOfTheWeek.length;i++){
            if(daysOfTheWeek[i] === d){
                if(thirtyDayMonth.includes(monthNr) && dayNr+i > 30){
                    day = day.concat(" ",dayNr+i-30,"/",monthNr+1,"/",yearNr);
                }else if(thirty1DayMonth.includes(monthNr) && dayNr+i > 31){
                    day = day.concat(" ",dayNr+i-31,"/",monthNr+1,"/",yearNr);
                }else if(monthNr === 2 && dayNr+i > 29 && yearNr%4===0){
                    day = day.concat(" ",dayNr+i-29,"/",monthNr+1,"/",yearNr);
                }else if(monthNr === 2 && dayNr+i > 28 && yearNr%4!==0){
                    day = day.concat(" ",dayNr+i-28,"/",monthNr+1,"/",yearNr);
                }else{
                    day = day.concat(" ",dayNr+i,"/",monthNr,"/",yearNr);
                }

            }
        }
        document.getElementById("dateText").innerHTML = day;
        
        return 0;
    }
    var today = new Date();
    var dayOfWeek;
    var daysOfTheWeek = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"];
    for(var i = 0; i < today.getDay()-1;i++){
        daysOfTheWeek.push(daysOfTheWeek.shift());
    }

    switch(today.getDay()){
        case 1:
            dayOfWeek = "PONIEDZIAŁEK";
            break;
        case 2:
            dayOfWeek = "WTOREK";
            break;
        case 3:
            dayOfWeek = "ŚRODA";
            break;
        case 4:
            dayOfWeek = "CZWARTEK";
            break;
        case 5:
            dayOfWeek = "PIĄTEK";
            break;
        case 6:
            dayOfWeek = "SOBOTA";
            break;
        case 7:
            dayOfWeek = "NIEDZIELA";
            break;
        default:
            dayOfWeek = "Undefined";
    }
    return(
        <div className="filmHeader">
            <div id="filmHeaderInside">
                <h1>REPERTUAR CINEMA CITY LUBLIN - PLAZA</h1>
                <div className="filmHeaderMenu">
                    {daysOfTheWeek.map((d) => {return(
                        <button className={d===daysOfTheWeek[0]?"dayButton selected firstInLine":"dayButton"} onClick={() => onDayClicked(d)} id={d}>{ d===daysOfTheWeek[0] ? "Dziś" : d }</button>
                    );})}
                    <button className="calenderBtn"><img src={calIcon} alt="Calender Icon"/></button>
                    <select id="genreSelect">
                        <option value="all">Wszystkie Kina</option>
                        <hr />
                        <option value="horror">Horror</option>
                        <option value="drama">Dramat</option>
                    </select>
                    <select id="filmSelect">
                        <option value="all">Wszystkie Filmy</option>
                        <hr />
                        <option value="UŚMIECHNIJ SIĘ 2">Uśmiechnij Się 2</option>
                        <option value="WYBRANIEC">Wybraniec</option>
                        <option value="KULEJ. DWIE STRONY METALU">Kulej. Dwie Strony Metalu</option>
                        <option value="WROOKLYN ZOO">Wrooklyn ZOO</option>
                    </select>
                </div>
                <p id="dateText">{dayOfWeek} {today.getDate()}/{today.getMonth()+1}/{today.getFullYear()}</p>
            </div>
            <hr />
        </div>
    );
}

export default FilmListHeader;