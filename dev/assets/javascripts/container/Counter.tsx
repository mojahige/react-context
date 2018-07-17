import * as React from 'react'
import { Component, createContext } from 'react'
import CounterController from '../components/CounterController'
import CounterDisplay from '../components/CounterDisplay'

interface State {
  count: number
}

interface ProviderAction {
  increment: () => void
  decrement: () => void
}

interface Context {
  count: number
  action: ProviderAction
}

const CounterContext = createContext({
  count: 0,
  action: {
    increment: () => {},
    decrement: () => {}
  }
})

const { Provider, Consumer } = CounterContext

class Counter extends Component<{}, State> {
  state: State

  constructor(props, context) {
    super(props, context)

    this.state = {
      count: 0
    }
  }

  public provider(): Context {
    return {
      count: this.state.count,
      action: {
        increment: this.increment.bind(this),
        decrement: this.decrement.bind(this)
      }
    }
  }

  public increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  public decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <Provider value={this.provider()}>
        <CounterDisplay />
        <CounterController />
      </Provider>
    )
  }
}

export default Counter
export const CounterConsumer = Consumer
