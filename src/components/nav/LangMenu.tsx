import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from '../Flag';
import { List, ListItem, ListItemText } from '@mui/material';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';


type LangMenuProps = {
    passLangMenuState: React.Dispatch<React.SetStateAction<boolean>>;
    navBarOpen: boolean;
};

const LangMenu = ({ passLangMenuState, navBarOpen }: LangMenuProps) => {

    /* Translation */
    const { i18n } = useTranslation();
    const setCurrentLang = (language: string) => {
        i18n.changeLanguage(language);
    };
    const currentLang = i18n.language;

    /* Language menu state */
    const [openLangMenu, setOpenLangMenu] = useState(false);
    const updateOpenLangMenu = () => {
        passLangMenuState(!openLangMenu);
        setOpenLangMenu(!openLangMenu);
    };

    /* Close language menu when opening navbar */
    useEffect(() => {
        if (navBarOpen) {
            setOpenLangMenu(false);
            passLangMenuState(false);
        }
    }, [navBarOpen]);

    return (
        <div className='nav__lang' onClick={updateOpenLangMenu}>
            <Flag currentLang={currentLang} />

            {openLangMenu &&
                <List className="nav__lang__menu">
                    <ListItem className="" onClick={() => setCurrentLang('en')}>
                        <ListItemText primary="English" />
                    </ListItem>
                    <ListItem className="" onClick={() => setCurrentLang('pl')}>
                        <ListItemText primary="Polski" />
                    </ListItem>
                    <ListItem className="" onClick={() => setCurrentLang('de')}>
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