import { US, PL, DE } from 'country-flag-icons/react/3x2'

type FlagMapType = {
    [key: string]: React.ReactElement;
};

const Flag = ({ currentLang }: { currentLang: string }) => {
    const flagMap: FlagMapType = {
        en: <US title="United States of America" className="nav__flag" />,
        pl: <PL title="Poland" className="nav__flag" />,
        de: <DE title="Germany" className="nav__flag" />
    };

    const flagToRender = flagMap[currentLang] || null;
    return flagToRender;
};

export default Flag