import { useDispatch, useSelector } from "react-redux"
import { fetchPhotos, fetchVideos } from "../api/mediaApi"
import { setQuery, setLoading, setError, setResults } from "../redux/features/searchSlice"
import { useEffect } from "react"
import ResultCard from "./ResultCard"



const ResultGrid = () => {
    const dispatchEvent = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)


    useEffect(function () {
        if(!query) return 
        const getData = async () => {
            try {
                dispatchEvent(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html
                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)

                    data = response.data.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url:item.url
                    }))
                }
                dispatchEvent(setResults(data))
            }
            catch (err) {
                dispatchEvent(setError(err.message))
            }
        }
        getData()
    }, [query, activeTab,dispatchEvent])

    if(error) return <h1>Error</h1>
    if(loading) return <h1>Loading...</h1>

    return (
        <div className="flex justify-center px-5 py-6 flex-wrap gap-5 overflow-auto bg-gray-900 min-h-screen">
            {
                results.map((item,idx)=>{
                    return <div key={idx}>
                        <ResultCard item={item}/>
                        </div>
                })
            }
        </div>
    )
}

export default ResultGrid