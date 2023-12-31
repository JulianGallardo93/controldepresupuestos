import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBTN from '../img/cerrar.svg'


const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {
  
  const [mensaje, setMensaje] = useState('')

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [fecha, setFecha] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    if(Object.keys(gastoEditar).length  > 0 ) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setFecha(gastoEditar.fecha)
      setId(gastoEditar.id)
    }
  }, [gastoEditar])

    const ocultarModal = () => {
        
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
          setModal(false)
        }, 400);
    }

    const handleSubmit = e => {
      e.preventDefault();

      if([ nombre, cantidad, categoria].includes('')){
        setMensaje('Todos los Campos son Obligatorios')
        setTimeout(() => {
          setMensaje('')
        }, 2000);
        return;
      }

      guardarGasto({nombre, cantidad, categoria, fecha, id})
      
    }
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBTN} alt="icono cerrar" onClick={ocultarModal}/>

      </div>

      <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
        <legend>{gastoEditar.nombre ? "Editar Gasto" : 'Nuevo Gasto'}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className='campo'>
          <label htmlFor="nombre">Nombre gasto</label>
            <input type="text"
            id='nombre'
            placeholder='Nombre del gasto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}/>
        </div>

        <div className='campo'>
          <label htmlFor="cantidad">Cantidad</label>
            <input type="number"
            id='cantidad'
            placeholder='Añade la Cantidad del gasto ej: 300'
            value={cantidad}
            onChange={e => setCantidad (Number(e.target.value))}/>
        </div>

        <div className='campo'>
          <label htmlFor="categoria">Categoria</label>
            <select id="categoria" value={categoria} onChange={ e => setCategoria(e.target.value)}>
              <option value="">-- Selecionar --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="hogar">Hogar</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="subscripciones">Subscripciones</option>
            </select>
        </div>

        <input type="submit" value={gastoEditar.nombre ? "Editar Gasto" : 'Nuevo Gasto'}/>

      </form>
    </div>
  )
}

export default Modal
