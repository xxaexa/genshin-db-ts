import { Card, NotFound, Loading, Search, Star, Reset } from './../components'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { getArtifact } from '../redux/features/artifact/artifactSlice'
import { useEffect } from 'react'

const Artifact = () => {
  const { isLoading, artifacts } = useAppSelector((state) => state.artifact)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getArtifact())
  }, [dispatch])

  return (
    <div className="text-center mx-auto w-10/12">
      <section className="pt-24">
        <div className="font-bold text-font-color grid md:grid-cols-2 lg:grid-cols-3 content-center gap-4 lg:gap-0">
          <Search />
          <Star />
          <Reset />
        </div>
      </section>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="pt-12 grid md:grid-cols-2 lg:grid-cols-3 content-center">
          {artifacts.length >= 1 ? (
            artifacts.map((artifact, index) => {
              return (
                <Card
                  key={index}
                  name={artifact.name}
                  star={artifact.star}
                  url={artifact.url}
                  vision={artifact.vision}
                />
              )
            })
          ) : (
            <NotFound />
          )}
        </div>
      )}
    </div>
  )
}
export default Artifact
