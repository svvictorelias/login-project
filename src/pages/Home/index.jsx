import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'
import AulaCard from './aulaCard'
import * as C from './styles'
import AulasJson from '../../../data/aulas.json'

const Home = () => {
  const { signout } = useAuth()
  const navigate = useNavigate()

  return (
    <C.Container>
      <C.ContainerAulas>
        {AulasJson.aulas.map(aula => (
            <AulaCard
              key={aula.id}
              titulo={aula.titulo}
              capa={aula.capa}
              techs={aula.techs}
              urlVideo={aula.url}
            />
          ))}
      </C.ContainerAulas>
 
      <Button Text="Sair" onClick={() => [signout(), navigate('/')]}>
        Sair
      </Button>
    </C.Container>
  )
}

export default Home
