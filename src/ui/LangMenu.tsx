import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from './Flag';
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
        <div onClick={updateOpenLangMenu}
            className='z-100 fixed right-14 md:right-2 top-5 border-none outline-none text-white flex flex-col items-end pr-2 rounded-t-lg cursor-pointer'>

            <div className='flex flex-row gap-1.5'>
                <Flag currentLang={currentLang} />
                {openLangMenu
                    ? <AiOutlineDown size="10px" className='h-5 w-3' />
                    : <AiOutlineUp size="10px" className='h-5 w-3' />}
            </div>

            {openLangMenu &&
                <List className="bg-background-light top-5 border rounded-bl rounded-br" >
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

        </div>
    )
}

export default LangMenu