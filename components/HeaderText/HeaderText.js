import { Heading } from "@chakra-ui/layout"

const HeaderText = (props) => {
  return (
    <Heading textAlign="center" my={7}>
      {props.children}
    </Heading>
  )
}

export default HeaderText
