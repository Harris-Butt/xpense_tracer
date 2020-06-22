import React, { useState} from 'react'
import {IntlProvider} from 'react-intl';
import Urdu from '../Languages/ur-Pk.json'
import English from '../Languages/en-Us.json'

export const Context = React.createContext();
const local ="en-Us";
let lang;
    if(local === "en-Us"){
        lang = English;
    }
    else{
        lang= Urdu;
    }
 

const Wrapper = (props) => {
    const[locale,setlocale] = useState(local);
    const [messages,setMessages] =useState(lang);
    function selectLang(e){
        const newLocale = e.target.value;
        setlocale(newLocale);
        if(newLocale === "en-Us"){
            setMessages(English)
        }
        else{
            setMessages(Urdu)
        }
    }
    return (
        <Context.Provider value={{locale,selectLang}}>
        <IntlProvider messages={messages} locale={local}>
            {props.children}
        </IntlProvider>
        </Context.Provider>
    )
    }
export default Wrapper;
