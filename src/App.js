import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "./theme"

import TopNav from "./TopNav"
import Header from "./Header"
import RestaurantsLoader from "./RestaurantsLoader"
import RestaurantsList from "./RestaurantsList"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <TopNav />

        <RestaurantsLoader>
          {({ neighborhood, restaurants }) => (
            <>
              <Header neighborhood={neighborhood}></Header>
              <RestaurantsList restaurants={restaurants}></RestaurantsList>
            </>
          )}
        </RestaurantsLoader>
      </>
    </ThemeProvider>
  )
}
