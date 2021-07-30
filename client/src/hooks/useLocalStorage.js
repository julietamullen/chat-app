import {useEffect, useState} from 'react'

// HOOK DE LOCALSTORAGE:
// 1. Creo un nombre para la key, esto va a decir en el LS de dónde viene el cambio,
const PREFIX = 'chat-app-'

export default function useLocalStorage(key, initialValue) {

    // 2. Creo una prefixedKey que va a ser el nombre que declaré
    // anteriormente + la key que le pase como argumento
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {
        // 3. LocalStorage se va a fijar si ya hay una prefixedKey ya existente.
        // Prox en App.js
        const jsonValue = localStorage.getItem(prefixedKey)
        // 7. En este caso, da undefined, porque no le pasamos nada como parámetro
        if(jsonValue !== 'undefined' && jsonValue !== null ) return JSON.parse(jsonValue)
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
        // 8. Ahora, cada vez que cambie la key (es decir, que haya un cambio desde otro lado),
        // o cambie el value (es decir, genere otra ID, va a settear un item con
        // key: != 'id' y value: != la id generada inicialmente)
    }, [prefixedKey, value])

    return [value, setValue]
}
