import {useEffect, useState} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
            <label htmlFor="">Filtrar los Gastos</label>
            <select
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
            >
                <option value="">-- Todas las Categorias --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="hogar">Hogar</option>
                <option value="gastos">Gastos Varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="subscripciones">Subscripciones</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
