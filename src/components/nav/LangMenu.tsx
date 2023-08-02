import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { US, PL, DE } from 'country-flag-icons/react/3x2'
import { useEffect, useState } from 'react'
import { List, ListItem, ListItemText } from '@mui/material';

type FlagMapType = {
    [key: string]: React.ReactElement;
};

const Flag = ({ currentLang }: { currentLang: string }) => {

    const flagMap: FlagMapType = {
        EN: <US title="United States of America" className="nav__flag" />,
        PL: <PL title="Poland" className="nav__flag" />,
        DE: <DE title="Germany" className="nav__flag" />
    };

    const flagToRender = flagMap[currentLang] || null;

    return flagToRender;
};

type LangMenuProps = {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
    passLangMenuState: React.Dispatch<React.SetStateAction<boolean>>;
    navBarOpen: boolean;
};

const LangMenu = ({ language, setLanguage, passLangMenuState, navBarOpen }: LangMenuProps) => {

    const [currentLang, setCurrentLang] = useState(language);
    const [openLangMenu, setOpenLangMenu] = useState(false);

    const updateOpenLangMenu = () => {
        passLangMenuState(!openLangMenu);
        setOpenLangMenu(!openLangMenu);
    }

    useEffect(() => {
        setLanguage(currentLang);
    }, [currentLang]);

    useEffect(() => {
        if (navBarOpen) {
            setOpenLangMenu(false);
            passLangMenuState(false);
        }
    }, [navBarOpen]);

    const emptyStyle = {};
    const listStyle = {
        backgroundColor: '#000D15',
        opacity: '1'
    }

    return (
        <div className='nav__lang' onClick={updateOpenLangMenu} style={openLangMenu ? listStyle : emptyStyle}>
            <Flag currentLang={currentLang} />

            {openLangMenu &&
                <List className="nav__lang__menu">
                    <ListItem className="" onClick={() => setCurrentLang('EN')}>
                        <ListItemText primary="English" />
                    </ListItem>
                    <ListItem className="" onClick={() => setCurrentLang('PL')}>
                        <ListItemText primary="Polski" />
                    </ListItem>
                    <ListItem className="" onClick={() => setCurrentLang('DE')}>
                        <ListItemText primary="Deutsch" />
                    </ListItem>
                </List>
            }

            {openLangMenu
                ? <AiOutlineDown size="10px" className='nav__chevron' />
                : <AiOutlineUp size="10px" className='nav__chevron' />}
        </div>
    )
}

export default LangMenu