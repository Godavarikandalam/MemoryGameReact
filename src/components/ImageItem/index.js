import './index.css'

const ImageItem = props => {
  const {details, clickImage} = props
  const {thumbnailUrl, imageUrl} = details

  const onClickImage = () => {
    clickImage(imageUrl)
  }

  return (
    <li className="imageItem-container">
      <button type="button" className="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}
export default ImageItem
