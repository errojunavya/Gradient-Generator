// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, onClickGradientDirectionItem} = props
  const {displayText, value} = directionDetails

  const clickGradientDirectionItem = () => {
    onClickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={clickGradientDirectionItem}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
export default GradientDirectionItem
