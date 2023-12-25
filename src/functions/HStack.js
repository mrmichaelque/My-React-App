const Feature = function({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
};
  
  function StackEx() {
    return (
      <HStack spacing={8}>
        <Feature
          title='Learn'
          desc='The future can be even brighter but a goal without a plan is just a wish'
        />
        <Feature
          title='Explore'
          desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
        />
      <Feature
          title="Engage"
          desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
        />
        <Feature
      title="Curriculum Vitale"
      desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
    />
  </HStack>
    )
  }
  
  render(<StackEx />)