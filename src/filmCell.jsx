import './filmCell.css';
import info from './img/inf.webp';

function FilmCell(props){
    return(
        <div className='filmCell'>
            <div className='filmCellImg'>
                <img src={props.filmInfo.img} />
            </div>
            <div className='filmCellInfo'>
                <h2>{props.filmInfo.title}</h2>
                <img src={info}/><p id='filmCellGenre'>{props.filmInfo.genre} | {props.filmInfo.length}</p>
                <h3>{props.filmInfo.d}</h3>
                <div className='filmCellTimes'>
                    {props.filmInfo.times.map((t) => {
                        return(
                            <div className='filmCTimeCell'>
                                {t}
                            </div>
                        );
                    })}
                </div>
                <p className='pLang'>{props.filmInfo.lang}</p>
            </div>
            <hr />
        </div>
    );
}

export default FilmCell;