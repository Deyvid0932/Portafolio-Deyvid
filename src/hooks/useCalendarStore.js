import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store'

// Una caja mágica que guarda cosas importantes 
export const useCalendarStore = () => {

    const dispatch = useDispatch()

    // events = todos los eventos
    // activeEvents = El evento que estas mirado ahora
    const { events, activeEvent} = useSelector( state => state.calendar)
   
      // Quiero ver el cumple de ronny
    const setActiveEvent = ( calendarEvent) => {
      dispatch( onSetActiveEvent(calendarEvent))
    } 
    
      // Guarda evento:
    const startSavingEvent = async( calendarEvent) => {
      ///va llegar el backend 

      if(calendarEvent._id) {
        // actualizando
        dispatch(onUpdateEvent(calendarEvent))
      } else {
        // creando
        dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime() }))
      }

    }

    // Borra el evento que estoy viendo
    const startDeletingEvent = () => {
        dispatch( onDeleteEvent() );
    }



  return {
    //propiedades
    activeEvent, // el evento que estás viendo
    events, // todos tus eventos
    hasEventSelected: !!activeEvent?._id, //hasEventSelected: valor booleano = true o false y solo selecciona si llamas un evento

    //Metodos
    startDeletingEvent, //función para borrar
    setActiveEvent, //función para ver
    startSavingEvent, // Borra el evento que estoy viendo
  }
}
