import { useDispatch, useSelector } from 'react-redux'
import { onCloseDateModal, onOpenDateModal } from '../store';

// cajita de botones mágicos para abrir y cerrar una ventanita 
export const useUiStore = () => {

    //llamas el redux del useDispatch
    const dispatch = useDispatch();
    const { isDateModalOpen } = useSelector(state => state.ui);

    //Abre el modal
    const openDateModal = ( ) => {
        dispatch( onOpenDateModal())
    }

    //Cierra el modal
    const closeDateModal = ( ) => {
        dispatch( onCloseDateModal())
    }

    //Cambia el estado
    const toggleDateModal = () => {
        (isDateModalOpen)
        ? openDateModal()
        : closeDateModal()
    }
     

    return {
        // propiedades
        isDateModalOpen,

        //metodos
        openDateModal, 
        closeDateModal,
        toggleDateModal
    }
}
