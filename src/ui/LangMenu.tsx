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

    const menuItems = [
        { currentLang: 'en', name: 'English' },
        { currentLang: 'pl', name: 'Polski' },
        { currentLang: 'de', name: 'Deutsch' },
    ];

    return (
        <div onClick={updateOpenLangMenu}
            className='z-100 fixed right-16 lg:right-2 top-5 border-none outline-none text-white flex flex-col items-end pr-2 rounded-t-lg cursor-pointer'>

            <div className='flex flex-row gap-1.5'>
                <Flag currentLang={currentLang} />
                {openLangMenu
                    ? <AiOutlineDown size="10px" className='h-5 w-3' />
                    : <AiOutlineUp size="10px" className='h-5 w-3' />}
            </div>

            {openLangMenu &&
                <List className="bg-background top-5 left-[15px] right-0 border rounded-bl rounded-br border-t-0" >
                    {menuItems.map((item, index) => {
                        return (
                            <ListItem key={index} className="font-semibold rounded transition duration-300 ease-in-out hover:shadow-md" onClick={() => setCurrentLang(item.currentLang)}>
                                <ListItemText primary={item.name} className='transition ease-in-out duration-300 hover:underline' />
                            </ListItem>
                        )
                    })}
                </List>
            }

        </div>
    )
}

export default LangMenu