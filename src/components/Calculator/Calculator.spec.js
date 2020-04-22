import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Calculator />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })

  it('should render the Display and Keypad Components', () => {
    expect(wrapper.containsMatchingElement(
    <Display displayValue={wrapper.instance().state.displayValue} />
    )).toEqual(true);
  })

  it('should render the Keypad components', () => {
    expect(wrapper.containsMatchingElement(
      <Keypad
        callOperator={wrapper.instance().callOperator}
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        setOperator={wrapper.instance().setOperator}
        updateDisplay={wrapper.instance().updateDisplay}
      />
    )).toEqual(true);
  })
})