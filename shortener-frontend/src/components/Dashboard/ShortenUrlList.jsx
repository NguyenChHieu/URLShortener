import URLListItem from "./URLListItem"

const ShortenUrlList = ({data}) => {
  return (
    <div className="my-6 space-y-4">
        {data.map((item) =>(
            <URLListItem key={item.id} {...item}/>
        ))}
    </div>
  )
}
export default ShortenUrlList