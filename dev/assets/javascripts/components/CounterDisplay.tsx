import * as React from 'react'
import { SFC } from 'react'
import { CounterConsumer } from '../container/Counter'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

const CounterDisplay: SFC<{}> = () => (
  <CounterConsumer>{({ count }) => <Title>{count}</Title>}</CounterConsumer>
)

export default CounterDisplay
