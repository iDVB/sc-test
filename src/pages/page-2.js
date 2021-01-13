import React from "react"
import styled from 'styled-components'
import { P } from '../components/P'

const SecondPage = () => (
  <div>
  <StyledP>Page 2</StyledP>
</div>
)

const StyledP = styled(P)`
  background: green;
`

export default SecondPage