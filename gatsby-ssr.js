import { consoleKlickSignature } from '@klickmarketing/react-components'

const React = require('react')

export const onRenderBody = ({
  setBodyAttributes,
  setPostBodyComponents,
  setHeadComponents,
}) => {
  setPostBodyComponents([<div>hello</div>])
}
