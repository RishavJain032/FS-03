// import React, { createContext, useState } from 'react';
// import {createContext,useState} from "react";
import React, { useState, createContext } from 'react';
// import React from "react";

export const myContext = createContext();

const Context = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [input, setInput] = useState("")

    return (
        <myContext.Provider value={{ setLogin, setInput, input, login }}>
            {children}
        </myContext.Provider>
    )
}
export default Context;