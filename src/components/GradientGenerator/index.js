import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  Description,
  GradientDirectionListContainer,
  PickColorDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  CustomColorValue,
  CustomColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323,#014f7b`,
  }

  generateColor = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Description>Choose Direction</Description>
          <GradientDirectionListContainer>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                onClickGradientDirectionItem={this.onClickGradientDirectionItem}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </GradientDirectionListContainer>
          <PickColorDescription>Pick the Colors</PickColorDescription>
          <ColorPickerContainer>
            <CustomInputAndColorContainer>
              <CustomColorValue>{fromColorInput}</CustomColorValue>
              <CustomColorInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColor}
              />
            </CustomInputAndColorContainer>
            <CustomInputAndColorContainer>
              <CustomColorValue>{toColorInput}</CustomColorValue>
              <CustomColorInput
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColor}
              />
            </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.generateColor}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default GradientGenerator
