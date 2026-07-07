import './index.css'

const TabsItem = props => {
  const {details, isActive, clickTabItem} = props

  const {tabId, displayText} = details

  const activetab = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tabsItem-container">
      <button
        type="button"
        className={`tab-btn ${activetab}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsItem
