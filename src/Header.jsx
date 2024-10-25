import './Header.css';

const head = () => {
    return (
        <header className="header">
            <nav className="nav">
                <a href="#" className="nav-link inactive">Link 1</a>
                <a href="#" className="nav-link inactive">Link 2</a>
                <a href="#" className="nav-link inactive">Link 3</a>
            </nav>
        </header>
    );
};

export default head;
