import { Container, VStack, Heading, Text, Box, Image, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin, FaTrash } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");
  const [posts, setPosts] = useState([]);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10} bg={bgColor} color={color}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Image borderRadius="full" boxSize="150px" src="/images/profile.jpg" alt="Profile Image" />
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate blogger who loves to write about technology, travel, and life experiences. Follow my journey and stay updated with my latest posts.
        </Text>
        <Box>
          <Link href="https://twitter.com" isExternal mx={2}>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://github.com" isExternal mx={2}>
            <FaGithub size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal mx={2}>
            <FaLinkedin size="24px" />
          </Link>
        </Box>
        <Button as={RouterLink} to="/add-post" colorScheme="blue">Add New Post</Button>
        <VStack spacing={4} w="100%">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" w="100%">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              <Button colorScheme="red" onClick={() => handleDelete(index)} leftIcon={<FaTrash />}>Delete</Button>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;