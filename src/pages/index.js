import React from "react"
import styled from 'styled-components'
import { P } from '../components/P'
import { Link } from "gatsby"


const IndexPage = () => (
  <div>
  <Link to="/page-2">link</Link>
  <OtherP>Page 1</OtherP>
</div>
)

const OtherP = styled(P)`
  background: green;
`


export default IndexPage
