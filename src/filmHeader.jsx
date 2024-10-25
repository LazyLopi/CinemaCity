import "./filmHeader.css";

function FilmListHeader(){
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
            
    }
    return(
        <div className="filmHeader">
            <div id="filmHeaderInside">
                <h1>REPERTUAR CINEMA CITY LUBLIN - PLAZA</h1>
                <div className="filmHeaderMenu">
                    {daysOfTheWeek.map((d) => {return(
                        <button className="dayButton">{ d==daysOfTheWeek[0] ? "Dziś" : d }</button>
                    );})}
                    <input type="date" />
                    <select>
                        <option>Wszystkie Kina</option>
                        <hr />
                        <option>Horror</option>
                        <option>Dramat</option>
                    </select>
                    <select>
                        <option>Wszystkie Filmy</option>
                        <hr />
                        <option>Uśmiechnij Się 2</option>
                        <option>Wybraniec</option>
                        <option>Kulej. Dwie Strony Metalu</option>
                        <option>Wrooklyn ZOO</option>
                    </select>
                </div>
                <p>{dayOfWeek} {today.getDate()}/{today.getMonth()}/{today.getFullYear()}</p>
            </div>
            <hr />
        </div>
    );
}

export default FilmListHeader;