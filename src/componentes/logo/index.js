import logo from '../../imagens/logo.svg'

import styled from 'styled-components';

const Logocontainer = styled.div`
  display: flex;
  font-size: 30px;
`

const Logoimg = styled.img `
  margin-right: 10px;
`

function Logo(){
    return(
        <Logocontainer>
          <Logoimg
          src = {logo}
          alt="logo" 
          className='logo-img'>
        </Logoimg>
        <p><strong>Alura</strong> Books</p>
      </Logocontainer>
    )
}

export default Logo;