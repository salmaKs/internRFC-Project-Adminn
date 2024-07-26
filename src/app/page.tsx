"use client";
import { useState, useEffect } from 'react';
import { Stack, Button, Box, Image, Flex, SimpleGrid, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, AddIcon, CloseIcon } from "@chakra-ui/icons";
import BeatLoader from 'react-spinners/BeatLoader';
import Link from 'next/link';



function ProjectCard({ project }) {
  const property = {
    imageUrl: '/images/ProjectLOGO2.png',
    imageAlt: 'LOGO project'
  };
  const encodedId = encodeURIComponent(project.Ref);
 

  return (
    <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' mb={4}>
       <IconButton
        icon={<CloseIcon />}
        aria-label="Close"
        size="sm"
        colorScheme="red"
        top={2}
        left={2}
        variant="outline"
      />
      <Image 
        src={property.imageUrl} 
        alt={property.imageAlt} 
        boxSize="200px" 
        objectFit="contain" 
        display="block" 
        margin="0 auto"
        mb={2}
      />
      
      <Box p='4'>
        <Box
          mt='0'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={3}
          fontSize="small"
        >
          {project.Sujet}
        </Box>
        <Box>
  <Flex direction="row" justify="space-between" mt={2}>
    <Link href={''} passHref>
      <Button colorScheme='green' size='sm'>Voir les applications</Button>
    </Link>
    <Link href={`/projetDetails/${encodedId}`} passHref>
      <Button colorScheme='red' size='sm'>Voir les détails</Button>
    </Link>
  </Flex>
</Box>

      </Box>
      
    </Box>
  );
}

function Home() {
  const [projects, setProjects] = useState([]);
  const [selectedDomaine, setSelectedDomaine] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [domainPrefix, setDomainPrefix] = useState('');
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    if (selectedDomaine) {
      setLoading(true); 
      fetch(`/api/PFE?Domaine=${encodeURIComponent(selectedDomaine)}`)
        .then(response => response.json())
        .then(data => {
          setProjects(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching projects:', error);
          setLoading(false);
        });
    }
  }, [selectedDomaine]);

  const handleButtonClick = (domaine) => {
    setSelectedDomaine(domaine);
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh" width="100vw" p={4}>
      <Stack spacing={4} align='center' mb={4}>
        <Button rightIcon={<ChevronDownIcon />} colorScheme='teal' variant='outline' onClick={() => handleButtonClick('Data center & Cloud formation')}>
          Data center & Cloud formation
        </Button>
        {selectedDomaine === 'Data center & Cloud formation' && (
          <Box mt={4} width="full" p={4} borderWidth='1px' borderRadius='md'>
            {loading ? (
              <Flex justify="center" align="center" height="100px">
                <BeatLoader size={15} color='teal' />
              </Flex>
            ) : (
              projects.length > 0 ? (
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} justify="center">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </SimpleGrid>
              ) : (
                <p>Aucun projet disponible pour ce domaine.</p>
              )
            )}
             <Link href={`/NewProjet/page?Domaine=${encodeURIComponent(selectedDomaine)}`} passHref>
              <Button
                borderColor='teal'
                borderWidth='2px'
                borderStyle='dashed'
                color='teal'
                variant='outline'
                fontWeight='bold'
                size='md'
                leftIcon={<AddIcon />}
                _hover={{ bg: 'blue.50' }}
                _active={{ bg: 'blue.100' }}
              >
                Ajouter
              </Button>
            </Link>
          </Box>
        )}

        <Button rightIcon={<ChevronDownIcon />} colorScheme='teal' variant='outline' onClick={() => handleButtonClick('Network & Security')}>
          Network & Security
        </Button>
        {selectedDomaine === 'Network & Security' && (
          <Box mt={4} width="full" p={4} borderWidth='1px' borderRadius='md'>
            {loading ? (
              <Flex justify="center" align="center" height="100px">
                <BeatLoader size={15} color='teal' />
              </Flex>
            ) : (
              projects.length > 0 ? (
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} justify="center">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </SimpleGrid>
              ) : (
                <p>Aucun projet disponible pour ce domaine.</p>
              )
            )}
             <Link href={`/NewProjet/page?Domaine=${encodeURIComponent(selectedDomaine)}`} passHref>
              <Button
                borderColor='teal'
                borderWidth='2px'
                borderStyle='dashed'
                color='teal'
                variant='outline'
                fontWeight='bold'
                size='md'
                leftIcon={<AddIcon />}
                _hover={{ bg: 'blue.50' }}
                _active={{ bg: 'blue.100' }}
              >
                Ajouter
              </Button>
            </Link>
          </Box>
        )}

        <Button rightIcon={<ChevronDownIcon />} colorScheme='teal' variant='outline' onClick={() => handleButtonClick('Business Application')}>
          Business application
        </Button>
        {selectedDomaine === 'Business Application' && (
          <Box mt={4} width="full" p={4} borderWidth='1px' borderRadius='md'>
            {loading ? (
              <Flex justify="center" align="center" height="100px">
                <BeatLoader size={15} color='teal' />
              </Flex>
            ) : (
              projects.length > 0 ? (
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} justify="center">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </SimpleGrid>
              ) : (
                <p>Aucun projet disponible pour ce domaine.</p>
              )
            )}
            <Link href={`/NewProjet/page?Domaine=${encodeURIComponent(selectedDomaine)}`} passHref>
              <Button
                borderColor='teal'
                borderWidth='2px'
                borderStyle='dashed'
                color='teal'
                variant='outline'
                fontWeight='bold'
                size='md'
                leftIcon={<AddIcon />}
                _hover={{ bg: 'blue.50' }}
                _active={{ bg: 'blue.100' }}
              >
                Ajouter
              </Button>
            </Link>
          </Box>
        )}

        <Button rightIcon={<ChevronDownIcon />} colorScheme='teal' variant='outline' onClick={() => handleButtonClick('Identity & Modern Workplace')}>
          Identity & Modern workplace
        </Button>
        {selectedDomaine === 'Identity & Modern Workplace' && (
          <Box mt={4} width="full" p={4} borderWidth='1px' borderRadius='md'>
            {loading ? (
              <Flex justify="center" align="center" height="100px">
                <BeatLoader size={15} color='teal' />
              </Flex>
            ) : (
              projects.length > 0 ? (
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} justify="center">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </SimpleGrid>
              ) : (
                <p>Aucun projet disponible pour ce domaine.</p>
              )
            )}
             <Link href={`/NewProjet/page?Domaine=${encodeURIComponent(selectedDomaine)}`} passHref>
              <Button
                borderColor='teal'
                borderWidth='2px'
                borderStyle='dashed'
                color='teal'
                variant='outline'
                fontWeight='bold'
                size='md'
                leftIcon={<AddIcon />}
                _hover={{ bg: 'blue.50' }}
                _active={{ bg: 'blue.100' }}
              >
                Ajouter
              </Button>
            </Link>
          </Box>
          
        )}
      </Stack>
    </Flex>
  );
}

export default Home;
