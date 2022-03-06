import React, { useState } from 'react';

const styles = {
    wrapper: `pt-2`,
    searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
    inputBoxes: `flex flex-col mb-4 relative`,
    inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`,
    focusedInputBox: `border-black`,
    svgContainer: `mx-1`,
    input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full`,
    verticalLine: `w-0 h-[2rem] border border-black absolute z-10 left-[2.3rem] top-[2rem]`
}

const LocationSelector = () => {
    const [ inFocus, setInFocus ] = useState('from');
    const [ pickup, setPickup ] = useState('');
    const [ dropOff, setDropOff ] = useState('');
    return(
        <div className={styles.wrapper}>
            <div className={styles.searchHeader}>
                {inFocus === 'from' ? 'Where can we pick you up?' : 'Where to?'}
            </div>
            <div className={styles.inputBoxes}>
                <div className={`${styles.inputBox} ${inFocus === 'from' && styles.focusedInputBox}`}>
                    <div className={styles.svgContainer}>
                        <svg viewBox='0 0 24 24' width='1em' height='1em'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z'
                           />
                        </svg>
                    </div>
                    <input
                        className={styles.input}
                        placeholder="Enter pickup location"
                        value={pickup}
                        onChange={(e)=>setPickup(e.target.value)}
                        onFocus={()=>setInFocus('from')}
                    />
                </div>
                <div className={styles.verticalLine}></div>
                <div className={`${styles.inputBox} ${inFocus === 'to' && styles.focusedInputBox}`}>
                    <div className={styles.svgContainer}>
                        <svg viewBox='0 0 24 24' width='1em' height='1em'>
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z'
                           />
                        </svg>
                    </div>
                    <input
                        className={styles.input}
                        placeholder="Enter pickup location"
                        value={pickup}
                        onChange={(e)=>setPickup(e.target.value)}
                        onFocus={()=>setInFocus('to')}
                    />
                </div>
            </div>
        </div>
    )
}

export default LocationSelector;