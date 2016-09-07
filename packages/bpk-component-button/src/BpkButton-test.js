import React from 'react'
import renderer from 'react/lib/ReactTestRenderer'
import BpkButton from './BpkButton'

describe('BpkButton', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<BpkButton>My button</BpkButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with a "href" attribute', () => {
    const tree = renderer.create(<BpkButton href='#'>My button</BpkButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with a "secondary" attribute', () => {
    const tree = renderer.create(<BpkButton secondary>My button</BpkButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with a "selected" attribute', () => {
    const tree = renderer.create(<BpkButton selected>My button</BpkButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with a "disabled" attribute', () => {
    const tree = renderer.create(<BpkButton disabled>My button</BpkButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with a "large" attribute', () => {
    const tree = renderer.create(<BpkButton large>My button</BpkButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with a "link" attribute', () => {
    const tree = renderer.create(<BpkButton link>My button</BpkButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with "large" and "secondary" attributes', () => {
    const tree = renderer.create(<BpkButton large secondary>My button</BpkButton>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})