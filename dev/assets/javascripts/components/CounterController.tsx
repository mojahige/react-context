import * as React from 'react'
import { CounterConsumer } from '../container/Counter'
import styled from 'styled-components'

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  display: flex;
`
const ActionButton = styled.button.attrs({
  type: 'button',
  className: 'button is-primary'
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  margin: 0 0.5em;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 0;
`

const CounterController = () => (
  <CounterConsumer>
    {({ action }) => (
      <Root>
        <ButtonContainer>
          <ActionButton onClick={action.increment}>+</ActionButton>
          <ActionButton onClick={action.decrement}>-</ActionButton>
        </ButtonContainer>
      </Root>
    )}
  </CounterConsumer>
)

export default CounterController
