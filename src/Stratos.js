import styled from "styled-components";
import { Text } from "rebass";

const Stratos = styled(Text)({
  fontFamily: "stratos"
});

Stratos.defaultProps = {
  fontWeight: 600
};

export default Stratos;
