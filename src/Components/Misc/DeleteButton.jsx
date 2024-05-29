import React, { useState, useCallback } from 'react';

/**
 * DeleteButton Component
 *
 * A button that implements a double-confirmation mechanism before triggering the
 * provided `onClick` action. Failsafe against accidental deletion
 *
 * @component
 *
 * @param {ReactNode} children - The text or content to display within the button
 * @param {function} onClick - The function to be called when the delete action is confirmed
 *
 * @returns {JSX.Element} A button element that implements double confirmation.
 *
 * @behavior
 * 1. Initial State:  Displays a single yellow/warning button with the `children` text, for example delete
 * 2. First Click:  Replaces the button with two buttons: yellow/warning button to cancel and a 
 *                  red/danger button to confirm onClick event to occur
 * 3.1 Second Click (Cancel):  Returns to the initial state with single button
 * 3.2 Second Click (Confirm): Executes the `onClick` function
 */

export const DeleteButton = ({children, onClick}) => 
    {
        // vnitrni stavova promenna definujici. zda je cervene tlacitko zobrazene nebo neni
        const [state, setState] = useState(0);

        // nastavi, ze se cervene tlacitko nezobrazuje
        const setState0 = useCallback(() => setState(0), [])

        // nastavi, ze se cervene tlacitko zobrazuje
        const setState1 = useCallback(() => setState(1), []) // nebo bez []

        if (state === 0)
            { // cervene tlacitko nema byt zobrazeno
                return (<button className = 'btn btn-sm btn-warning' onClick = {setState1}>{children}</button>)
            }
        else
        { // cervene tlacitko ma byt zobrazeno
            return (
                <>
                    <button className = 'btn btn-sm btn-warning' onClick = {setState0}>{children}</button>
                    <button className = 'btn btn-sm btn-danger' onClick = {onClick}>{children}</button>
                </>
            )
        }
    }