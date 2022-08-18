import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
  return(
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Heya, I'm a full stack developer and I'm trying my best.
      </Box>
      <Box display={{md:"flex"}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nathan Mausert
          </Heading>
          <p>Coffee Gremlin ( Nicolas Cage Enthusaiast / Developer / Ex-Welder )</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page