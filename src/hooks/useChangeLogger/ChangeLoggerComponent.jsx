import { useState } from 'react'
import useChangeLogger from './useChangeLogger'


function ChangeLoggerComponent() {
    const [name, setName] = useState('gautam')
    useChangeLogger(name)

    return (
        <input onChange={e => {setName(e.target.value)}} />
    )

}
export default ChangeLoggerComponent