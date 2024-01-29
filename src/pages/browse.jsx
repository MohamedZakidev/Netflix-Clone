import React from "react"
import { BrowseContainer } from "../containers/browse"
import selectoionMap from "../utils/selectionMap"
import useContent from "../hooks/useContent"

export default function Browse({ user }) {
    const { series } = useContent('series')
    const { films } = useContent('films')

    const slides = selectoionMap(series, films)

    return <BrowseContainer user={user} slides={slides} />
}