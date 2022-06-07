import React from 'react'
import styled from 'styled-components'

export const Icon = React.memo(styled.span`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  font-size: ${(props) => props.size};
`)

export const VerticalAlignedIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`

export const CenterAlignedIcon = styled(VerticalAlignedIcon)`
  left: 0;
  right: 0;
`