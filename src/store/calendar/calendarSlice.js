import { createSlice } from "@reduxjs/toolkit";

const tempEvent = {};


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [tempEvent],
        activeEvent: null 
    },
    reducers: { 
        //Ver un Evento
        onSetActiveEvent: ( state, { payload}) => {
          state.activeEvent = payload;
        },
        //Agregar nuevo evento
        onAddNewEvent: (state, {payload}) => {
          state.events.push(payload)
          state.activeEvent = null
        },
        //Cambiar el evento
        onUpdateEvent: (state, { payload}) => {
          state.events = state.events.map( event => {
            if( event._id === payload._id)
              return payload;

          });
        },
        //Borrar un evento
        onDeleteEvent: ( state ) => {
            if ( state.activeEvent ) {
                state.events = state.events.filter( event => event._id !== state.activeEvent._id );
                state.activeEvent = null;
            }
        }
        
    }
})


export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent} = calendarSlice.actions;