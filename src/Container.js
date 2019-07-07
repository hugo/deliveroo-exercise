import styled from "styled-components"
import { Box } from "rebass"

const Container = styled(Box)({
  maxWidth: "960px",
})

Container.defaultProps = {
  mx: "auto",
}

export default Container
